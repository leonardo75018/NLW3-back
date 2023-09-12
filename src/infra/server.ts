import express, { NextFunction, Request, Response, json } from 'express'
import 'express-async-errors'
import cors from 'cors'
import router from './views/index'
import path from 'path'

const app = express()
app.use(express.urlencoded({ extended: true }), cors(), express.json(), router)

//Config express url to show image in browser
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
const PORT = 3000

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message
      })
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error '
    })
  }
)

app.listen(PORT, () => console.log(`serveur run on port ${PORT}`))
