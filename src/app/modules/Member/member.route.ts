import { Router } from "express";
import MemberController from "./member.controller";


const router = Router()


router.post('/',MemberController.createBook)



router.get('/',MemberController.getAllMembersFromDB)


router.get('/:id',MemberController.getMemberByIdFromDB)


router.put('/:id',MemberController.updateBookById)


router.delete('/:id',MemberController.deleteBookById)



const MemberRouter = router

export default MemberRouter