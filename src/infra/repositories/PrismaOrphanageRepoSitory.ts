// import { Orphanage } from '../../domain/entities/Orphanage'
// import { User } from '../../domain/entities/User'

// import { OrphanagesRepository } from '../../domain/repositories/OrphanagesRepository'
// import { createOrphanageBody } from '../../domain/types/CreateOrphanageBody'
// import { updateOrphanageBody } from '../../domain/types/UpdateOrphanageBody'

// import prisma from '../../outils/prisma'

// export class PrismaOrphanesRepoSitory implements OrphanagesRepository {
//   updateOrphanage(params: updateOrphanageBody): Promise<Orphanage> {
//     throw new Error('Method not implemented.')
//   }
//   deleteOrphanage(orphanageId: string): Promise<void> {
//     throw new Error('Method not implemented.')
//   }
//   getOrphanageById(orphanageId: string): Promise<Orphanage | null> {
//     throw new Error('Method not implemented.')
//   }
//   getOrphanages(): Promise<[] | Orphanage[]> {
//     throw new Error('Method not implemented.')
//   }
//   async createOrphanage(params: createOrphanageBody): Promise<Orphanage> {
//     const {
//       name,
//       about,
//       images,
//       instructions,
//       latitude,
//       longitude,
//       openOnWeekend
//     } = params
//     const orphange = await prisma.orphanage.create({
//       data: {
//         name,
//         about,
//         images,
//         instructions,
//         latitude,
//         longitude,
//         openOnWeekend
//       }
//     })
//     return user
//   }

//   updateUser(params: UpdateUserParams): Promise<User> {
//     const { firstName, lastName, password, userId } = params
//     const userUpdated = prisma.user.update({
//       where: {
//         id: Number(userId)
//       },
//       data: {
//         firstName,
//         lastName,
//         password
//       }
//     })

//     return userUpdated
//   }

//   async findUserById(userId: string): Promise<User | null> {
//     const user = await prisma.user.findUnique({
//       where: {
//         id: Number(userId)
//       }
//     })

//     return user
//   }

//   async findUserByEmail(userEmail: string): Promise<User | null> {
//     const user = await prisma.user.findFirst({
//       where: {
//         email: userEmail
//       }
//     })

//     return user
//   }
//   findUsers(): Promise<User[] | null> {
//     const users = prisma.user.findMany()
//     return users
//   }

//   async deleteUser(userId: string): Promise<void> {
//     await prisma.user.delete({
//       where: {
//         id: Number(userId)
//       }
//     })
//   }
// }
