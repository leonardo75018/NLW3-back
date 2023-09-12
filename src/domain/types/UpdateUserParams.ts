type updateUserBody = {
  firstName: string
  lastName: string
  password: string
}

export type UpdateUserParams = {
  userId: string
  body: updateUserBody
}
