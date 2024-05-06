import express from 'express'

//import db from '../db.conn.js'

import { GridFSBucketReadStream } from 'mongodb'

const router = express.Router()
import User from '../models/usersModel.js'
import { resolveSoa } from 'dns'
import { indexFavoriteVerses, addFavoriteVerses, deleteFavoriteVerses, updateFavoriteVerses} from '../controller/favoriteVersesController.js'

// Get route to get all user data- done
router.route('/').get(indexFavoriteVerses)

// Post route to add a user
router.route('/addPracticeVerse').post(addFavoriteVerses)

// DELETE route to delete a user by ID
router.route('/deletePracticeVerse/:id').delete(deleteFavoriteVerses)

// Patch route to update user info by ID
router.route('/updatePracticeVerse/:id').patch(updateFavoriteVerses)


export default router