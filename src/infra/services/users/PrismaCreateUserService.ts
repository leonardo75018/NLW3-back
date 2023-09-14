import { IUser } from '../../../domain/entities/IUser'
import { PrismaUserRepoSitory } from '../../repositories/index'
import { hash } from 'bcrypt'

interface IRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}

export class PrismaCreateUserService {
  public async execute({
    firstName,
    lastName,
    password,
    email
  }: IRequest): Promise<IUser> {
    const prismaUserRepoSitory = new PrismaUserRepoSitory()
    const userExists = await prismaUserRepoSitory.findUserByEmail(email)
    if (userExists) {
      throw new Error('There is already one user with this email')
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaUserRepoSitory.createUser({
      firstName,
      lastName,
      email,
      password: passwordHash
    })
    return user
  }
}
