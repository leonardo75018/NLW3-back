import { IUser } from '../../../domain/entities/IUser'
import { UserService } from '../../../domain/services/index'
import { CreateUserParams } from '../../../domain/types'
import { PrismaUserRepoSitory } from '../../repositories/index'

interface IRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}

export class PrismaCreateUserService {
  public async execute(params: IRequest): Promise<IUser> {
    const prismaUserRepoSitory = new PrismaUserRepoSitory()
    const userExists = await prismaUserRepoSitory.findUserByEmail(params.email)
    if (userExists) {
      throw new Error('There is already one user with this email')
    }

    const user = await prismaUserRepoSitory.createUser(params)
    return user
  }
}
