import catchAsync from '../../shared/catchAsync';
import { Request, Response } from 'express';
import SendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status-codes';
import MemberService from './member.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMemberIntoDB(req.body);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Member created successfully',
    data: result,
  });
});

const getMemberByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.getMemberByIdFromDB(req.params.id);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Member retrieved successfully',
    data: result,
  });
});

const getAllMembersFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.getAllMembersFromDB();
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Members retrieved successfully',
    data: result,
  });
});

const updateBookById = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.updateMemberByIdIntoDB(req.params.id, req.body);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Member updated successfully',
    data: result,
  });
});

const deleteBookById = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.deleteBookByIdFromDB(req.params.id);
  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Member deleted successfully',
    data: result,
  });
});

const MemberController = {
  createBook,
  getAllMembersFromDB,
  getMemberByIdFromDB,
  updateBookById,
  deleteBookById,
};

export default MemberController;
