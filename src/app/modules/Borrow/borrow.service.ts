import { BorrowRecord } from '@prisma/client';
import prisma from '../../shared/prisma';
import AppError from '../../Errors/AppError';
import httpStatus from '../../shared/http-status';
import { differenceInDays } from 'date-fns';

const createBorrowIntoDB = async (data: BorrowRecord) => {
  const book = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: data.bookId,
    },
  });
  if (book.availableCopies === 0) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Currently no copies available of this book');
  }
  data.borrowDate = new Date();
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: data.memberId,
    },
  });

  const result = await prisma.$transaction(async (trClient) => {
    await prisma.book.update({
      where: {
        bookId: data.bookId,
      },

      data: {
        availableCopies: {
          decrement: 1,
        },
      },
    });
    const createdBook = await prisma.borrowRecord.create({ data });
    return createdBook;
  });

  return result;
};

const returnBorrowBook = async ({ borrowId }: { borrowId: string }) => {
  const borrow = await prisma.borrowRecord.findFirstOrThrow({
    where: {
      borrowId,
      returnDate: null,
    },
  });

  const borrowDate = new Date(borrow.borrowDate).getTime();
  const currentDate = Date.now();
  const duePeriod = 14 * 24 * 60 * 60 * 1000;

  if (currentDate - borrowDate > duePeriod) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Return date expired');
  }

  return await prisma.borrowRecord.update({
    where: {
      borrowId: borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
};

const getOverdueBorrowList = async () => {
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

  const overdueRecords = await prisma.borrowRecord.findMany({
    where: {
      borrowDate: {
        lte: fourteenDaysAgo, // Borrowed at least 14 days ago
      },
      returnDate: null, // Not yet returned
    },
    include: {
      book: {
        select: { title: true },
      },
      member: {
        select: { name: true },
      },
    },
  });
  const overdueData = overdueRecords.map((record) => ({
    borrowId: record.borrowId,
    bookTitle: record.book.title,
    borrowerName: record.member.name,
    overdueDays: differenceInDays(new Date().valueOf(), record.borrowDate) - 14,
  }));
  return overdueData;
};

export const BorrowService = {
  createBorrowIntoDB,
  returnBorrowBook,
  getOverdueBorrowList,
};
