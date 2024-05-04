import express from 'express'
import 'dotenv/config'
import connectToDb from './db/conn.js'
//import mongoose from 'mongoose'

//import gradeRoutes from './routes/grades.js'
// import { connect } from 'http2'

const app = express()
const PORT = process.env.PORT || 5050;

import appUsers from './routes/users.js'

connectToDb();

app.use(express.json())

app.use('/users', appUsers)

app.get('/', (req, res) => {
    res.send('Hello! (from the Server)')
})

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})