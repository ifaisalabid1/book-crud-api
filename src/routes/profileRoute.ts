import { Router } from 'express'
import { profileController } from '../controllers/profileController'

export const profileRoute: Router = Router()

profileRoute.get('/', profileController.getAllProfiles)
profileRoute.get('/:id', profileController.getProfileById)
profileRoute.post('/', profileController.createProfile)
profileRoute.put('/:id', profileController.updateProfile)
profileRoute.delete('/:id', profileController.deleteProfile)
