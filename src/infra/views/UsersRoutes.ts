import { Router } from 'express'

import { UserController } from '../controllers/UsersController'

const usersRoute = Router()
const userController = new UserController()

usersRoute.post('/', userController.create)

export default usersRoute
