import express, { Express } from 'express'
import cors from 'cors'
import { bookRoute } from './routes/bookRoute'
import { userRoute } from './routes/userRoute'
import { profileRoute } from './routes/profileRoute'

export const app: Express = express()

// middleware
app.use(express.json())
app.use(cors())

app.use('/api/books', bookRoute)
app.use('/api/users', userRoute)
app.use('/api/profiles', profileRoute)
