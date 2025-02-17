import { prisma } from '../config/prisma'

class BookService {
  getAllBooks = async () => {
    return prisma.book.findMany({
      include: {
        author: true,
      },
    })
  }

  getBookById = async (id: number) => {
    return prisma.book.findUnique({
      where: { id },
      include: {
        author: true,
      },
    })
  }

  createBook = async (data: { title: string; authorId: number }) => {
    return prisma.book.create({ data })
  }

  updateBook = async (id: number, data: { title?: string }) => {
    return prisma.book.update({
      where: { id },
      data,
    })
  }

  deleteBook = async (id: number) => {
    return prisma.book.delete({ where: { id } })
  }
}

export const bookService = new BookService()
