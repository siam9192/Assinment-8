import { BorrowRecord } from "@prisma/client"

const createBorrowIntoDB = async (data:BorrowRecord)=>{
    data.borrowDate = new Date()
}