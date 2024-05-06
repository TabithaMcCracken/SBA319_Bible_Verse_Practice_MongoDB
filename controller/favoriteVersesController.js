import practiceVerses from '../models/favoriteVersesModel.js'

// Get route
// http://localhost:3050/favoriteVerses
// Returns 10 users
const indexFavoriteVerses = async(req,res)=>{
    try {
        // Query with limit and sorting by last name
        let result = await practiceVerses.find({}).sort({last_name: 1}).limit(10); 
        console.log(result);
        if (!result) res.send('Not found').status(404);
        res.send(result).status(200);
    } catch (error){
        console.error('Error retrieving users: ', error);
        res.status(500).send('Internal Server Error')
    }
    
}

// POST Route
// http://localhost:3050/favoriteVerses/addFavoriteVerse
// Adds a new verse

// {
//     "user_id": 1,
//     "practice_verses": [
//       {
//         "book": "eu",
//         "chapter": 19,
//         "verse": 118,
//         "text": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
//       },
//       {
//         "book": "sed",
//         "chapter": 87,
//         "verse": 85,
//         "text": "Aenean lectus."
//       }
//     ]
//   }

const addFavoriteVerses = async (req, res) => {
    try {
        const { user_id, practice_verses} = req.body;

        // Create a new user instance
        const newPracticeVersesData = new practiceVerses({
            user_id,
            practice_bible_verses: practice_verses
        });

        // Save the new user to the database
        const savedPracticeVerseData = await newPracticeVersesData.save();

        // Return the newly created user as the response
        res.status(201).json(savedPracticeVerseData);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Failed to add user' });
    }
}


// PATCH Route
// http://localhost:3050/favoriteVerses/updateFavoriteVerse/:id
// Function to handle updating user data


const updateFavoriteVerses = async (req, res) =>{
    try {
        // Extract the ID from the request parameters
        const { id } = req.params;

        // Extract the new verse data from the request body
        const { book, chapter, verse, text } = req.body;

        // Find the existing document by ID
        const existingPracticeVersesData = await practiceVerses.findById(id);

        if (!existingPracticeVersesData) {
            return res.status(404).json({ error: 'Practice verses data not found' });
        }

        // Append the new verse to the existing array of practice verses
        existingPracticeVersesData.practice_bible_verses.push({
            book,
            chapter,
            verse,
            text
        });

        // Save the updated document back to the database
        const updatedPracticeVersesData = await existingPracticeVersesData.save();

        // Return the updated practice verses data as the response
        res.status(200).json(updatedPracticeVersesData);
    } catch (error) {
        console.error('Error adding practice verse to existing data:', error);
        res.status(500).json({ error: 'Failed to add practice verse to existing data' });
    }
}


// DELETE Route
// http://localhost:3050/users/delete/:id
// Function to handle DELETE request for deleting a user by ID
const deleteFavoriteVerses = async (req, res) => {
    try {
        const userId = req.params.id;

        // Find the user by ID and delete it
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return the deleted user as the response
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
}; 

export {indexFavoriteVerses, addFavoriteVerses, updateFavoriteVerses, deleteFavoriteVerses } // Can add more functions