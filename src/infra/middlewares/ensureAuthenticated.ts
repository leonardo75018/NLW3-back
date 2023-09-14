import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const AuthToken = request.headers.authorization
  if (!AuthToken) {
    return response.status(401).end()
  }
  const [, token] = AuthToken.split(' ')
  try {
    const { sub } = verify(
      token,
      '1bb0ab2946dd2c0f4e767100bf72be019a269718'
    ) as IPayload

    request.userId = sub
  } catch (error) {
    return response.status(401).end()
  }
  next()
}
