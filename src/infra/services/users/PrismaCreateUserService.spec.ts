import { describe, it, expect, jest } from '@jest/globals'
import { PrismaCreateUserService } from './PrismaCreateUserService'
import { FakePrismaUserRepoSitory } from '../../repositories/Fake/FakePrismaUserRepoSitory'
import { hash } from 'bcrypt'

describe('Create user', () => {
  const fakePrismaUserRepoSitory = new FakePrismaUserRepoSitory()
  const prismaCreateUserService = new PrismaCreateUserService(
    fakePrismaUserRepoSitory
  )

  it('Should retourn a user ', async () => {
    const body = {
      firstName: 'leo',
      lastName: ' Antonio',
      email: 'leo@gmail.com',
      password: '1Z33'
    }

    const user = await prismaCreateUserService.execute(body)
    expect(user).toHaveProperty('id')
    expect(user.firstName).toBe(body.firstName)
    expect(user.lastName).toBe(body.lastName)
    expect(user.email).toBe(body.email)
  })

  it('Should retourn error if user already exist', async () => {
    const body = {
      firstName: 'leo',
      lastName: ' Antonio',
      email: 'leo@gmail.com',
      password: '1Z33'
    }
  })
})
