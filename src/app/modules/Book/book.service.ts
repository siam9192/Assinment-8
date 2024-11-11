import { Book } from "@prisma/client"
import prisma from "../../shared/prisma"

const createBookIntoDB = async (data:Book)=>{
   return await prisma.book.create({
    data
   })
}

const getAllBooksFromDB = async ()=>{
    return await prisma.book.findMany()
}

const getBookByIdFromDB = async (id:string)=>{
    return await prisma.book.findUniqueOrThrow({
        where:{
            bookId:id
        }
    })
}

const updateBookByIdFromDB = async (id:string,payload:Partial<IBook>)=>{
    await prisma.book.findUniqueOrThrow({where:{bookId:id}})
    return await prisma.book.update({
        where:{
            bookId:id
        },
        data:payload
    })
}

const deleteBookByIdFromDB = async (id:string)=>{
    await prisma.book.findUniqueOrThrow({where:{bookId:id}})
    await prisma.book.delete({
        where:{
            bookId:id
        }
    })

    return null
}




const BookService = {
    createBookIntoDB,
    getAllBooksFromDB,
    getBookByIdFromDB,
    updateBookByIdFromDB,
    deleteBookByIdFromDB
}




export default BookService