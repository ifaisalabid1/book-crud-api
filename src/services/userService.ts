import { prisma } from '../config/prisma'

class UserService {
  getAllUsers = async () => {
    return prisma.user.findMany({
      include: {
        profile: true,
        books: true,
      },
    })
  }

  getUserById = async (id: number) => {
    return prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
        books: true,
      },
    })
  }

  createUser = async (data: { name: string; email: string }) => {
    return prisma.user.create({ data })
  }

  updateUser = async (id: number, data: { name?: string; email?: string }) => {
    return prisma.user.update({
      where: { id },
      data,
    })
  }

  deleteUser = async (id: number) => {
    return prisma.user.delete({ where: { id } })
  }
}

export const userService = new UserService()
