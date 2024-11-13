import catchAsync from '../../shared/catchAsync';
import { Request, Response } from 'express';
import BookService from './book.service';
import SendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status-codes';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBookIntoDB(req.body);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Book created successfully',
    data: result,
  });
});

const getBookByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getBookByIdFromDB(req.params.id);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const getAllBooksFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooksFromDB();
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books retrieved successfully',
    data: result,
  });
});

const updateBookById = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.updateBookByIdFromDB(req.params.id, req.body);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book updated successfully',
    data: result,
  });
});

const deleteBookById = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.deleteBookByIdFromDB(req.params.id);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book deleted successfully',
    data: result,
  });
});

const BookController = {
  createBook,
  getAllBooksFromDB,
  getBookByIdFromDB,
  updateBookById,
  deleteBookById,
};

export default BookController;
