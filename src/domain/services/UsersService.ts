import { IUser } from '../entities/IUser'
import { CreateUserParams, UpdateUserParams } from '../types/index'

export interface UserService {
  createUser(params: CreateUserParams): Promise<IUser>
  updateUser(params: UpdateUserParams): Promise<IUser>
  deleteUser(userId: string): Promise<void>
  fidUsers(): Promise<IUser[] | null>
  findUserById(userId: string | null): Promise<IUser>
}
