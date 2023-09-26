import { IUser } from '../../../domain/entities/IUser'
import { PrismaUsersRepoSitory } from '../../repositories/index'
import { hash } from 'bcrypt'

interface IRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}

export class PrismaCreateUserService {
  constructor(private prismaUserRepoSitory: PrismaUsersRepoSitory) {}

  public async execute({
    firstName,
    lastName,
    password,
    email
  }: IRequest): Promise<IUser> {
    const userExists = await this.prismaUserRepoSitory.findUserByEmail(email)
    if (userExists) {
      throw new Error('There is already one user with this email')
    }

    const passwordHash = await hash(password, 8)

    const user = await this.prismaUserRepoSitory.createUser({
      firstName,
      lastName,
      email,
      password: passwordHash
    })
    return user
  }
}
