import { compare } from 'bcrypt'
import { PrismaUsersRepoSitory } from '../../repositories/index'
import { sign } from 'jsonwebtoken'

interface IAuthenticateReques {
  email: string
  password: string
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateReques) {
    const prismaUserRepoSitory = new PrismaUsersRepoSitory()
    const user = await prismaUserRepoSitory.findUserByEmail(email)
    if (!user) {
      throw new Error('Email,Password incorrect ')
    }

    const comparePassword = await compare(password, user.password)

    if (!comparePassword) {
      throw new Error('Email,Password incorrect ')
    }

    const token = sign(
      {
        id: user.id
      },
      '1bb0ab2946dd2c0f4e767100bf72be019a269718',
      {
        expiresIn: '1d',
        subject: String(user.id)
      }
    )
    return token
  }
}
