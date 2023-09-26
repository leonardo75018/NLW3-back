import { User } from '../../domain/entities/User'
import { UsersRepository } from '../../domain/repositories/UsersRepository'
import { CreateUserParams, UpdateUserParams } from '../../domain/types'

import prisma from '../../outils/prisma'

export class PrismaUsersRepoSitory implements UsersRepository {
  async createUser(params: CreateUserParams): Promise<User> {
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

  updateUser(params: UpdateUserParams): Promise<User> {
    const { firstName, lastName, password, userId } = params
    const userUpdated = prisma.user.update({
      where: {
        id: Number(userId)
      },
      data: {
        firstName,
        lastName,
        password
      }
    })

    return userUpdated
  }

  async findUserById(userId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    })

    return user
  }

  async findUserByEmail(userEmail: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email: userEmail
      }
    })

    return user
  }
  findUsers(): Promise<User[] | null> {
    const users = prisma.user.findMany()
    return users
  }

  async deleteUser(userId: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id: Number(userId)
      }
    })
  }
}
