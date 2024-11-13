import catchAsync from '../../shared/catchAsync';
import { Request, Response } from 'express';
import SendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status-codes';
import { BorrowService } from './borrow.service';

const createBorrow = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.createBorrowIntoDB(req.body);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Book borrowed successfully',
    data: result,
  });
});

const returnBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.returnBorrowBook(req.body);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book returned successfully',
    data: result,
  });
});

const getOverdueBorrowList = catchAsync(async (req: Request, res: Response) => {
  console.log(11)
  const result = await BorrowService.getOverdueBorrowList();
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: result.length ? 'Overdue borrow list fetched' : 'No overdue books',
    data: result,
  });
});

const BorrowController = {
  createBorrow,
  returnBook,
  getOverdueBorrowList,
};

export default BorrowController;
