import { IUser } from '../entities/IUser'

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

export default interface OrphanageRepository {
  createOrphanage(params: createUserParams): Promise<IUser>
  updateOrphanage(params: updateUserParams): Promise<IUser>
  deleteOrphanage(userId: string): Promise<void>
  getOrphanageById(userId: string): Promise<IUser>
  getOrphanages(): Promise<IUser[]>
}
