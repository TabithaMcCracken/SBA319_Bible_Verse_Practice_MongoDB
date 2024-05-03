import mongoose from 'mongoose';
import router from "../routes/users.js"
const usersSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birthday: {
        type: Date,
        required: true
    }
 
 })

 export default mongoose.model('users', usersSchema)