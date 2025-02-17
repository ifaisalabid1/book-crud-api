import { prisma } from '../config/prisma'

class ProfileService {
  getAllProfiles = async () => {
    return prisma.profile.findMany({ include: { user: true } })
  }

  getProfileById = async (id: number) => {
    return prisma.profile.findUnique({
      where: { id },
      include: { user: true },
    })
  }

  createProfile = async (data: { userId: number }) => {
    return prisma.profile.create({ data })
  }

  updateProfile = async (id: number, data: { userId: number }) => {
    return prisma.profile.update({ where: { id }, data })
  }

  deleteProfile = async (id: number) => {
    return prisma.profile.delete({ where: { id } })
  }
}

export const profileService = new ProfileService()
