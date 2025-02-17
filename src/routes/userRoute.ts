import { Router } from 'express'
import { userController } from '../controllers/userController'

export const userRoute: Router = Router()

userRoute.get('/', userController.getAllUsers)
userRoute.get('/:id', userController.getUserById)
userRoute.post('/', userController.createUser)
userRoute.put('/:id', userController.updateUser)
userRoute.delete('/:id', userController.deleteUser)
