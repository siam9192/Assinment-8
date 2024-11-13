import { Router } from 'express';
import BookController from './book.controller';

const router = Router();

router.post('/', BookController.createBook);

router.get('/', BookController.getAllBooksFromDB);

router.get('/:id', BookController.getBookByIdFromDB);

router.put('/:id', BookController.updateBookById);

router.delete('/:id', BookController.deleteBookById);

const BookRouter = router;

export default BookRouter;
