import { Request, Response } from 'express'
import { IUser } from '../../domain/entities/IUser'
import {
  PrismaCreateUserService,
  PrismaFindUsersService
} from '../services/index'

export class UserController {
  async create(request: Request, response: Response) {
    const { firstName, lastName, email, password } = request.body
    const prismaCreateUserService = new PrismaCreateUserService()
    const user = await prismaCreateUserService.execute({
      firstName,
      lastName,
      email,
      password
    })
    response.send(user)
  }

  async find(request: Request, response: Response) {
    const prismaFindUsersService = new PrismaFindUsersService()
    const users = await prismaFindUsersService.execute()
    response.send(users)
  }
}
