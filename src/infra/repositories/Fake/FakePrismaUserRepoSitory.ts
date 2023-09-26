import { IUser } from '../../../domain/entities/IUser'
import { UsersRepository } from '../../../domain/repositories/UsersRepository'
import { CreateUserParams, UpdateUserParams } from '../../../domain/types'

import prisma from '../../../outils/prisma'

export class FakePrismaUserRepoSitory implements UsersRepository {
  private users: IUser[] = []
  async createUser(params: CreateUserParams): Promise<IUser> {
    const { firstName, lastName, email, password } = params

    const user = {
      id: Math.random(),
      firstName,
      lastName,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    this.users.push(user)

    return user
  }

  updateUser(params: UpdateUserParams): Promise<IUser> {
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

  async findUserById(userId: string): Promise<IUser | null> {
    const user = this.users.find(
      user => Number(user.id) === Number(userId)
    ) as IUser | null

    return user
  }

  async findUserByEmail(userEmail: string): Promise<IUser | null> {
    const user =
      (this.users.find(user => user.email === userEmail) as IUser) || null

    return user
  }

  findUsers(): Promise<IUser[] | null> {
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
