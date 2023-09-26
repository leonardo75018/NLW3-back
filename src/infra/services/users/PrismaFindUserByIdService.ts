import { User } from '../../../domain/entities/User'
import { PrismaUsersRepoSitory } from '../../repositories'

export class PrismaFindUserByIdService {
  async execute(userId: string): Promise<User> {
    const prismaUserRepository = new PrismaUsersRepoSitory()

    const user = await prismaUserRepository.findUserById(userId)
    if (!user) {
      throw new Error(`User id:${userId} not found`)
    }
    return user
  }
}
