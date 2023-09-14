import { Request, Response, NextFunction } from 'express'
import { PrismaFindUserByIdService } from '../services'

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { userId } = request

  const prismaFindUserByIdService = new PrismaFindUserByIdService()
  const user = await prismaFindUserByIdService.execute(userId)

  // {admin} =  await prismaFindUserByIdService.execute(userId)

  // if (admin) {
  //   return next()
  // }
  return response.status(401).json({
    error: 'Unauthorized'
  })
}
