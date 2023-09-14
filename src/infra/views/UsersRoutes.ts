import { Router } from 'express'
import { ensureAdmin } from '../middlewares/ensureAdmin'

import { UserController } from '../controllers/UsersController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const usersRoute = Router()
const userController = new UserController()

usersRoute.post('/', ensureAuthenticated, ensureAdmin, userController.create)
usersRoute.get('/', ensureAuthenticated, userController.find)
usersRoute.get('/:userId', userController.findById)
usersRoute.delete('/:userId', userController.delete)
usersRoute.patch('/:userId', userController.update)
usersRoute.post('/login', userController.authenticate)

export default usersRoute
