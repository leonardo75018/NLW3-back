import { IUser } from '../../../domain/entities/IUser'
import { PrismaUsersRepoSitory } from '../../repositories'

export class PrismaFindUsersService {
  async execute(): Promise<IUser[] | null> {
    const prismaUserRepository = new PrismaUsersRepoSitory()
    const users = await prismaUserRepository.findUsers()

    if (!users) {
      throw new Error("Vous n'avez pas d'utilisateurs ")
    }

    return users
  }
}
