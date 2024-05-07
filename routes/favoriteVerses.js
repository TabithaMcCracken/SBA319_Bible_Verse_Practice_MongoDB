import express from 'express'
const router = express.Router()

import { indexFavoriteVerses, addFavoriteVerses, deleteFavoriteVerses, updateFavoriteVerses} from '../controller/favoriteVersesController.js'

// Get route to get all user data- done
router.route('/').get(indexFavoriteVerses)

// Post route to add a user
router.route('/addFavoriteVerse').post(addFavoriteVerses)

// Patch route to update user info by ID
router.route('/updateFavoriteVerses/:id').patch(updateFavoriteVerses)

// DELETE route to delete a user by ID
router.route('/deleteFavoriteVerses/:id').delete(deleteFavoriteVerses)

export default router