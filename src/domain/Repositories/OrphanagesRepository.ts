import { IUser } from '../entities/User'

interface createUserParams {
  firstName: string
  lastName: string
  email: string
  password: string
}

interface updateUserParams {
  id: string
  user: IUser
}

export interface OrphanagesRepository {
  createOrphanage(params: createUserParams): Promise<IUser>
  updateOrphanage(params: updateUserParams): Promise<IUser>
  deleteOrphanage(userId: string): Promise<void>
  getOrphanageById(userId: string): Promise<IUser>
  getOrphanages(): Promise<IUser[]>
}
