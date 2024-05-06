import mongoose from 'mongoose';

const practiceVerseSchema = new mongoose.Schema({
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

const practiceDataSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    practice_bible_verses: {
        type: [practiceVerseSchema], // Array of practice verses
        required: true
    }
});

export default mongoose.model('practiceVersesData', practiceDataSchema);
