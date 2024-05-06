import practiceVerses from '../models/practiceVersesModel.js'

// Get route- works
// http://localhost:3050/practiceVerses
// Returns 10 users
const indexPracticeVerses = async(req,res)=>{
    try {
        // Query with limit and sorting by user id
        let result = await practiceVerses.find({}).sort({user_id: 1}).limit(10); 
        console.log('Retrieved practice verses: ', result);
        if (!result) res.send('Not found').status(404);
        res.send(result).status(200);
    } catch (error){
        console.error('Error retrieving practice verses: ', error);
        res.status(500).send('Internal Server Error')
    }
    
}

// POST Route- works
// http://localhost:3050/practiceVerses/addPracticeVerse
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

const addPracticeVerses = async (req, res) => {
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


// PATCH Route- works
// http://localhost:3050/practiceVerses/updatePracticeVerse/:id
// Function to handle updating user data

// id: 66382ebd95499a3c011fbad3
// {
//     "user_id": 1,
//     "practice_verses": [
//       {
//         "book": "eu",
//         "chapter": 19,
//         "verse": 118,
//         "text": "Hello, this is a great verse. Donec posuere metus vitae ipsum."
//       },
//       {
//         "book": "sed",
//         "chapter": 87,
//         "verse": 85,
//         "text": "This one is great too."
//       }
//     ]
//   }
const updatePracticeVerses = async (req, res) =>{
    try {
        // Extract the ID from the request parameters
        const userId = req.params.id;
        console.log('User id:', userId)

        // Extract the new verse data from the request body
        const updateFields = req.body
        //const { book, chapter, verse, text } = req.body;

        // Find the existing document by ID
        const UpdatedPracticeVerse = await practiceVerses.findByIdAndUpdate(userId, { $set: updateFields }, { new: true });
        //const existingPracticeVersesData = await practiceVerses.findById(id);

        if (!UpdatedPracticeVerse) {
            return res.status(404).json({ error: 'User data not found' });
        }

        res.status(200).json(UpdatedPracticeVerse);
        // Append the new verse to the existing array of practice verses
        // existingPracticeVersesData.practice_bible_verses.push({
        //     book,
        //     chapter,
        //     verse,
        //     text
        // });

        // // Save the updated document back to the database
        // const updatedPracticeVersesData = await existingPracticeVersesData.save();

        // // Return the updated practice verses data as the response
        // res.status(200).json(updatedPracticeVersesData);
    } catch (error) {
        console.error('Error adding practice verse to existing data:', error);
        res.status(500).json({ error: 'Failed to add practice verse to existing data' });
    }
}


// DELETE Route- works
// http://localhost:3050/practiceVerses//deletePracticeVerse/:id
// Function to handle DELETE request for deleting a user by ID

// id: pick id from database

const deletePracticeVerses = async (req, res) => {
    try {
        const userId = req.params.id;

        // Find the verse by ID and delete it
        const deletedUser = await practiceVerses.findByIdAndDelete(userId);

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

export {indexPracticeVerses, addPracticeVerses, updatePracticeVerses, deletePracticeVerses } // Can add more functions