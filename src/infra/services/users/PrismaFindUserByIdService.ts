import { IUser } from '../../../domain/entities/IUser'
import { PrismaUsersRepoSitory } from '../../repositories'

export class PrismaFindUserByIdService {
  async execute(userId: string): Promise<IUser> {
    const prismaUserRepository = new PrismaUsersRepoSitory()

    const user = await prismaUserRepository.findUserById(userId)
    if (!user) {
      throw new Error(`User id:${userId} not found`)
    }
    return user
  }
}
