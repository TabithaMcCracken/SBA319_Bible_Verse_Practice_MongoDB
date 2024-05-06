import express from 'express'

//import db from '../db.conn.js'

import { GridFSBucketReadStream } from 'mongodb'

const router = express.Router()
import User from '../models/usersModel.js'
import { resolveSoa } from 'dns'
import {indexPracticeVerses, addPracticeVerses,  updatePracticeVerses, deletePracticeVerses} from '../controller/practiceVersesController.js'

// Get route to get all user data- done
router.route('/').get(indexPracticeVerses)

// Post route to add a user
router.route('/addPracticeVerse').post(addPracticeVerses)

// DELETE route to delete a user by ID
router.route('/deletePracticeVerse/:id').delete(deletePracticeVerses)

// Patch route to update user info by ID
router.route('/updatePracticeVerse/:id').patch(updatePracticeVerses)


export default router