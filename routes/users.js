import express from 'express'

//import db from '../db.conn.js'

import { GridFSBucketReadStream } from 'mongodb'

const router = express.Router()
//import User from '../models/usersModel.js'
//import { resolveSoa } from 'dns'
import { indexUsers, addUser, deleteUser, updateUser } from '../controller/usersController.js'


// Get route to get all user data- done
router.route('/').get(indexUsers)

// Post route to add a user
router.route('/addUser').post(addUser)

// DELETE route to delete a user by ID
router.route('/delete/:id').delete(deleteUser)

// Patch route to update user info by ID
router.route('/update/:id').patch(updateUser)



export default router