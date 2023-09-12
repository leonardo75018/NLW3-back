import { Router } from 'express'
import orphanageRoute from './OrphanagesRoute'
import usersRoute from './UsersRoutes'

const router = Router()

router.use('/orphanage', orphanageRoute)
router.use('/user', usersRoute)

export default router
