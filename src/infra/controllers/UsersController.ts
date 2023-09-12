import { Request, Response } from 'express'
import { IUser } from '../../domain/entities/IUser'
import { PrismaUserService } from '../services'

export class UserController {
  async create(request: Request, response: Response) {
    const { firstName, lastName, email, password } = request.body
    const prismaUserService = new PrismaUserService()
    const user = await prismaUserService.execute({
      firstName,
      lastName,
      email,
      password
    })
    response.send(user)
  }
}
