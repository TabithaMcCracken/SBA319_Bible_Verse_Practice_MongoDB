// Import required modules and file
import express from 'express'
import 'dotenv/config'
import connectToDb from './db/conn.js'

import appUsers from './routes/users.js'
import practiceVerses from './routes/practiceVerses.js'
import favoriteVerses from './routes/favoriteVerses.js'

// Create Express App
const app = express()
const PORT = process.env.PORT || 5050;

// Connect to the database
connectToDb();

// Middleware for Parsing
app.use(express.json())

// Middleware for Logging Time Stamp and Request info
app.use((req, res, next) => {
    const time = new Date();
  
    console.log(
      `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:");
      console.log(`${JSON.stringify(req.body)}`);
    }
    next();
  });

// 3 Routes
app.use('/users', appUsers)
app.use('/practiceVerses', practiceVerses)
app.use ('/favoriteVerses', favoriteVerses)

// Set route handler for the root URL ("/")
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