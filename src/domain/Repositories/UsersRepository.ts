import { IUser } from '../entities/IUser'
import { CreateUserParams, UpdateUserParams } from '../types'

export default interface UserRepository {
  createUser(params: CreateUserParams): Promise<IUser>
  updateUser(params: UpdateUserParams): Promise<IUser>
  deleteUser(userId: string): Promise<void>
  findUserById(userId: string): Promise<IUser | null>
  findUserByEmail(userEmail: string): Promise<IUser | null>
  findUsers(): Promise<IUser[] | null>
}