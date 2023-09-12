import express from 'express'
import cors from 'cors'
import router from './views/index'
import path from 'path'

const app = express()
app.use(express.urlencoded({ extended: true }), cors(), express.json(), router)

//Config express url to show image in browser
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
const PORT = 3000

app.listen(PORT, () => console.log(`serveur run on port ${PORT}`))
