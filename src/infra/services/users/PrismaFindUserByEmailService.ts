import { User } from '../../../domain/entities/User'
import { PrismaUsersRepoSitory } from '../../repositories'

export class PrismaFindUserByEmailService {
  async execute(userEmail: string): Promise<User | null> {
    const prismaUserRepository = new PrismaUsersRepoSitory()
    const user = await prismaUserRepository.findUserByEmail(userEmail)
    if (!user) {
      throw new Error(`User with email ${userEmail} is not found`)
    }
    return user
  }
}
