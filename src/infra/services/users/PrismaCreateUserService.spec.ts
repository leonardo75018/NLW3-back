import { describe, it, expect, jest, beforeEach } from '@jest/globals'
import { PrismaCreateUserService } from './PrismaCreateUserService'
import { FakePrismaUserRepoSitory } from '../../repositories/Fake/FakePrismaUserRepoSitory'

let fakePrismaUserRepoSitory: FakePrismaUserRepoSitory
let prismaCreateUserService: PrismaCreateUserService

describe('CreateUser', () => {
  beforeEach(() => {
    fakePrismaUserRepoSitory = new FakePrismaUserRepoSitory()
    prismaCreateUserService = new PrismaCreateUserService(
      fakePrismaUserRepoSitory
    )
  })

  it('should be able to create a new user ', async () => {
    const params = {
      firstName: 'leo',
      lastName: ' Antonio',
      email: 'leo@gmail.com',
      password: '1Z33'
    }

    const user = await prismaCreateUserService.execute(params)
    expect(user).toHaveProperty('id')
    expect(user.firstName).toBe(params.firstName)
    expect(user.lastName).toBe(params.lastName)
    expect(user.email).toBe(params.email)
  })

  // it('should not be able to create two users with the same email', async () => {
  //   const params = {
  //     firstName: 'leo',
  //     lastName: ' Antonio',
  //     email: 'leo@gmail.com',
  //     password: '1Z33'
  //   }

  //   await prismaCreateUserService.execute(params)
  //   expect(prismaCreateUserService.execute(params)).rejects.toBeInstanceOf(AppError)

  // })
})
