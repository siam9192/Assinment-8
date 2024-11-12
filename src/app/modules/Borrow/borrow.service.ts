import { BorrowRecord } from "@prisma/client"
import prisma from "../../shared/prisma"

const createBorrowIntoDB = async (data:BorrowRecord)=>{
  data.borrowDate = new Date()
  await prisma.member.findUniqueOrThrow({where:{
    memberId:data.memberId
  }})
  return await prisma.borrowRecord.create({data})
}

const returnBorrowBook  = async ({borrowId}:{borrowId:string})=>{
 const borrow = await prisma.borrowRecord.findUniqueOrThrow({where:{
    borrowId
  }})
  
  const borrowDate = new Date(borrow.borrowDate).getTime()
  const returnDate = new Date().getTime()
  
  if((returnDate - borrowDate)>(14*24*60*60*1000)){
    
  }
 
  return await prisma.borrowRecord.update({
    where:{
        borrowId
    },
    data:{
        returnDate:new Date()
    }
  })
}

export const BorrowService = {
    createBorrowIntoDB,
    returnBorrowBook
}