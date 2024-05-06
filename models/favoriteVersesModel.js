import mongoose from 'mongoose';

const favoriteVersesSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true
    },
    chapter: {
        type: Number,
        required: true
    },
    verse: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const favoriteDataSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    favorite_bible_verses: {
        type: [favoriteVersesSchema], // Array of practice verses
        required: true
    }
});

export default mongoose.model('favorite_verses', favoriteDataSchema);
