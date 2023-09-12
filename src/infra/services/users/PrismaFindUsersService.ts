import { IUser } from '../../../domain/entities/IUser'
import { PrismaUserRepoSitory } from '../../repositories'

export class PrismaFindUsersService {
  async execute(): Promise<IUser[] | null> {
    const prismaUserRepository = new PrismaUserRepoSitory()
    const users = await prismaUserRepository.findUsers()

    if (!users) {
      throw new Error("Vous n'avez pas d'utilisateurs ")
    }

    return users
  }
}
