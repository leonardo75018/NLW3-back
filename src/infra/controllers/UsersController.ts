import { Request, Response, request, response } from 'express'
import { IUser } from '../../domain/entities/IUser'
import {
  PrismaCreateUserService,
  PrismaFindUsersService,
  PrismaDeleteUserService,
  PrismaFindUserByIdService,
  PrismaUpdateUserService
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
    response.status(200).send(user)
  }

  async update(request: Request, response: Response) {
    const { firstName, lastName, password } = request.body
    const { userId } = request.params

    const prismaUpdateUserService = new PrismaUpdateUserService()

    const userUpdated = await prismaUpdateUserService.execute({
      firstName,
      userId,
      lastName,
      password
    })
    response.status(200).send(userUpdated)
  }

  async find(request: Request, response: Response) {
    const prismaFindUsersService = new PrismaFindUsersService()
    const users = await prismaFindUsersService.execute()
    response.status(200).send(users)
  }

  async findById(request: Request, response: Response) {
    const { userId } = request.params
    const prismaFindUserByIdService = new PrismaFindUserByIdService()
    const user = await prismaFindUserByIdService.execute(userId)
    response.status(200).send(user)
  }

  async delete(request: Request, response: Response) {
    const { userId } = request.params
    const prismaDeleteUserService = new PrismaDeleteUserService()
    await prismaDeleteUserService.execute(userId)
    response.status(200).send(`user id:${userId} is deleted`)
  }
}
