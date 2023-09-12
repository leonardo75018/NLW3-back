import { PrismaUserRepoSitory } from '../../repositories'

export class PrismaDeleteUserService {
  async execute(userId: string) {
    const prismaUserRepository = new PrismaUserRepoSitory()
    const userExists = await prismaUserRepository.findUserById(userId)
    if (!userExists) {
      throw new Error(`User id:${userId} not found`)
    }
    prismaUserRepository.deleteUser(userId)
  }
}
