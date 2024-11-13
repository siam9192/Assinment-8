import catchAsync from "../../shared/catchAsync";
import {Request,Response} from 'express'
import SendResponse from "../../shared/sendResponse";
import httpStatus from "http-status-codes"
import { BorrowService } from "./borrow.service";


const createBorrow = catchAsync(async(req:Request,res:Response)=>{
    const result = await BorrowService.createBorrowIntoDB(req.body)
    SendResponse(res,{success:true,statusCode:httpStatus.CREATED,message:"Book borrowed successfully",data:result})
})


const returnBook = catchAsync(async(req:Request,res:Response)=>{
    const result = await BorrowService.createBorrowIntoDB(req.body)
    SendResponse(res,{success:true,statusCode:httpStatus.CREATED,message:"Book returned successfully",data:result})
})



const BorrowController = {
    createBorrow,
    returnBook
}

export default BorrowController