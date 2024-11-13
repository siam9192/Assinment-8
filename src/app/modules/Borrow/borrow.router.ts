import { Router } from "express";
import BorrowController from "./borrow.controller";

const router1 = Router()

router1.post('/',BorrowController.createBorrow)

const router2 = Router()
router2.post('/',BorrowController.returnBook)


export const  BorrowRouter = router1

export const ReturnRouter = router2