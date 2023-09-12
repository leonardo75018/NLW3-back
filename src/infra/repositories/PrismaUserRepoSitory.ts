import { IUser } from '../../domain/entities/IUser'
import UserRepository from '../../domain/Repositories/UsersRepository'
import { CreateUserParams, UpdateUserParams } from '../../domain/types'

import prisma from '../../outils/prisma'

export class PrismaUserRepoSitory implements UserRepository {
  async createUser(params: CreateUserParams): Promise<IUser> {
    const { firstName, lastName, email, password } = params
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password
      }
    })
    return user
  }

  updateUser(params: UpdateUserParams): Promise<IUser> {
    const { body, userId } = params
    const userUpdated = prisma.user.update({
      where: {
        id: Number(userId)
      },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password
      }
    })

    return userUpdated
  }

  async findUserById(userId: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    })

    return user
  }

  async findUserByEmail(userEmail: string): Promise<IUser | null> {
    const user = await prisma.user.findFirst({
      where: {
        email: userEmail
      }
    })

    return user
  }
  findUsers(): Promise<IUser[] | null> {
    const users = prisma.user.findMany()
    return users
  }

  async deleteUser(userId: string): Promise<void> {
    await prisma.user.delete({
      where: { id: 1 }
    })
  }
}
