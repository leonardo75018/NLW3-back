import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'

import { UserController } from '../controllers/UsersController'

const usersRoute = Router()
const userController = new UserController()

usersRoute.post('/', ensureAdmin, userController.create)
usersRoute.get('/', userController.find)
usersRoute.get('/:userId', userController.findById)
usersRoute.delete('/:userId', userController.delete)
usersRoute.patch('/:userId', userController.update)

export default usersRoute
