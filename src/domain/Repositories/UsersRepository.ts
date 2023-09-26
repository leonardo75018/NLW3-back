import { User } from '../entities/User'
import { CreateUserParams, UpdateUserParams } from '../types'

export interface UsersRepository {
  createUser(params: CreateUserParams): Promise<User>
  updateUser(params: UpdateUserParams): Promise<User>
  deleteUser(userId: string): Promise<void>
  findUserById(userId: string): Promise<User | null>
  findUserByEmail(userEmail: string): Promise<User | null>
  findUsers(): Promise<User[] | null>
}
