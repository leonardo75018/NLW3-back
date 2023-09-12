import { IUser } from '../../../domain/entities/IUser'
import { PrismaUserRepoSitory } from '../../repositories'

export class PrismaFindUserByIdService {
  async execute(userId: string): Promise<IUser> {
    const prismaUserRepository = new PrismaUserRepoSitory()

    const user = await prismaUserRepository.findUserById(userId)
    if (!user) {
      throw new Error(`User id:${userId} not found`)
    }
    return user
  }
}
