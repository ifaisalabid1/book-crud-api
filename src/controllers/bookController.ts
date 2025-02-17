import { Request, Response } from 'express'
import { bookService } from '../services/bookService'

class BookController {
  async getAllBooks(req: Request, res: Response) {
    try {
      const book = await bookService.getAllBooks()

      !book &&
        res.status(404).json({ success: false, message: 'No book in listed' })

      res.status(200).json({ success: true, data: book })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async getBookById(req: Request, res: Response) {
    try {
      const book = await bookService.getBookById(Number(req.params.id))
      !book &&
        res.status(404).json({ success: false, message: 'No book found.' })

      res.status(200).json({ success: true, data: book })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async createBook(req: Request, res: Response) {
    try {
      const book = await bookService.createBook(req.body)

      res.status(201).json({ success: true, data: book })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async updateBook(req: Request, res: Response) {
    try {
      const book = await bookService.updateBook(Number(req.params.id), req.body)

      res.status(201).json({ success: true, data: book })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const book = await bookService.deleteBook(Number(req.params.id))

      res.status(200).json({ success: true, data: book })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }
}

export const bookController = new BookController()
