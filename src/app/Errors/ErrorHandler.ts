import { ErrorRequestHandler } from "express";

export const ErrorHandler:ErrorRequestHandler = (err,req,res)=>{
    const statusCode = err.statusCode ||500
 res.status(statusCode).json({
    success:false,
    status:statusCode,
    message:err.message
 })
} 