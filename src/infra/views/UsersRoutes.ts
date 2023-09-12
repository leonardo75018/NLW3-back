import { Router } from 'express'

import { UserController } from '../controllers/UsersController'

const usersRoute = Router()
const userController = new UserController()

usersRoute.post('/', userController.create)
usersRoute.get('/', userController.find)
usersRoute.get('/:userId', userController.findById)
usersRoute.delete('/:userId', userController.delete)
usersRoute.patch('/:userId', userController.update)

export default usersRoute
