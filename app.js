import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './config/connect.js'
import { PORT } from './config/config.js'
import userRoutes from "./routes/user.js"
import busRoutes from "./routes/bus.js"
import ticketRoutes from "./routes/ticket.js"
import { buildAdminJS } from './config/setup.js'

dotenv.config()

const app = express()

const corsOptions = {
  origin: '*',
  method: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', "Authorization"]
}

app.use(cors(corsOptions))

app.use(express.json())

//Routes
app.use("/user", userRoutes)
app.use("/bus", busRoutes)
app.use("/ticket", ticketRoutes)

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    await buildAdminJS(app)
    app.listen({ port: PORT, host:'0.0.0.0' }, (err, addr) => {
      if (err){
        console.log(err)
      } else {
        console.log(`Server started on http://localhost:${PORT}/admin`)
      }
    })
  } catch (error) {
    console.log("error starting server -->", error)
  }
}

start()