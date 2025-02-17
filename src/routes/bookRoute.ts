import { Router } from 'express'
import { bookController } from '../controllers/bookController'

export const bookRoute: Router = Router()

bookRoute.get('/', bookController.getAllBooks)
bookRoute.get('/:id', bookController.getBookById)
bookRoute.post('/', bookController.createBook)
bookRoute.put('/:id', bookController.updateBook)
bookRoute.delete('/:id', bookController.deleteBook)
