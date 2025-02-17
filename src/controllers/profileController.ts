import { Request, Response } from 'express'
import { profileService } from '../services/profileService'

class ProfileController {
  async getAllProfiles(req: Request, res: Response) {
    try {
      const profile = await profileService.getAllProfiles()

      res.status(200).json({ success: true, data: profile })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async getProfileById(req: Request, res: Response) {
    try {
      const profile = await profileService.getProfileById(Number(req.params.id))
      !profile &&
        res.status(404).json({ success: false, message: 'No profile found.' })

      res.status(200).json({ success: true, data: profile })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async createProfile(req: Request, res: Response) {
    try {
      const profile = await profileService.createProfile(req.body)

      res.status(201).json({ success: true, data: profile })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const profile = await profileService.updateProfile(
        Number(req.params.id),
        req.body
      )

      res.status(201).json({ success: true, data: profile })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async deleteProfile(req: Request, res: Response) {
    try {
      const profile = await profileService.deleteProfile(Number(req.params.id))

      res.status(200).json({ success: true, data: profile })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }
}

export const profileController = new ProfileController()
