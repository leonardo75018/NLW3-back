import { IUser } from '../../../domain/entities/IUser'
import { PrismaUserRepoSitory } from '../../repositories'

export class PrismaFindUsersService {
  async execute(): Promise<IUser[] | null> {
    const prismaUserRepository = new PrismaUserRepoSitory()
    const users = await prismaUserRepository.findUsers()
    return users
  }
}
