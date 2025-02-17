import { Request, Response } from 'express'
import { userService } from '../services/userService'

class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const user = await userService.getAllUsers()

      res.status(200).json({ success: true, data: user })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(Number(req.params.id))
      !user &&
        res.status(404).json({ success: false, message: 'No user found.' })

      res.status(200).json({ success: true, data: user })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body)

      res.status(201).json({ success: true, data: user })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const user = await userService.updateUser(Number(req.params.id), req.body)

      res.status(201).json({ success: true, data: user })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await userService.deleteUser(Number(req.params.id))

      res.status(200).json({ success: true, data: user })
    } catch (err: Error | any) {
      res.status(400).json({ success: false, message: err.message })
    }
  }
}

export const userController = new UserController()
