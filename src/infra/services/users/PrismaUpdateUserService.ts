import { User } from '../../../domain/entities/User'
import { UpdateUserParams } from '../../../domain/types'
import { PrismaUsersRepoSitory } from '../../repositories'

export class PrismaUpdateUserService {
  async execute(params: UpdateUserParams): Promise<User> {
    const prismaUserRepository = new PrismaUsersRepoSitory()
    const userExists = prismaUserRepository.findUserById(params.userId)
    if (!userExists) {
      throw new Error(`user with ${params.userId} is not found`)
    }

    const userUpdated = await prismaUserRepository.updateUser(params)
    return userUpdated
  }
}
