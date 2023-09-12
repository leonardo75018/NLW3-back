import { IUser } from '../../../domain/entities/IUser'
import { PrismaUserRepoSitory } from '../../repositories'

export class PrismaFindUserByEmailService {
  async execute(userEmail: string): Promise<IUser | null> {
    const prismaUserRepository = new PrismaUserRepoSitory()
    const user = await prismaUserRepository.findUserByEmail(userEmail)
    if (!user) {
      throw new Error(`User with email ${userEmail} is not found`)
    }
    return user
  }
}
