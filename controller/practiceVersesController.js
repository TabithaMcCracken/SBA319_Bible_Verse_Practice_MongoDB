import PracticeVerses from '../models/practiceVersesModel.js'

// Get route
// http://localhost:3050/practiceVerses
// Returns 10 users sorted by user_id
const indexPracticeVerses = async(req,res)=>{
    try {
        const result = await PracticeVerses.find({}).sort({user_id: 1}).limit(10); 
        console.log('Retrieved practice verses: ', result);
        if (!result || result.length === 0) {
            return res.status(404).send('Not found');
        }
        res.send(result).status(200);
    } catch (error){
        console.error('Error retrieving practice verses: ', error);
        res.status(500).send('Internal Server Error')
    }
    
}

// POST Route
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
        const newPracticeVersesData = new PracticeVerses({
            user_id,
            practice_verses: practice_verses
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
const updatePracticeVerses = async ({ params: { id }, body }, res) =>{
    try {
        const UpdatedPracticeVerse = await PracticeVerses.findByIdAndUpdate(id, { $set: body }, { new: true });
        if (!UpdatedPracticeVerse) {
            return res.status(404).json({ error: 'User data not found' });
        }
        res.status(200).json(UpdatedPracticeVerse);
    } catch (error) {
        console.error('Error adding practice verse to existing data:', error);
        res.status(500).json({ error: 'Failed to add practice verse to existing data' });
    }
}

// DELETE Route- works
// http://localhost:3050/practiceVerses/deletePracticeVerse/:id
// Function to handle DELETE request for deleting a user by ID

// id: pick id from database

const deletePracticeVerses = async ({ params: { id } }, res) => {
    try {
        const deletedPracticeVerse = await PracticeVerses.findByIdAndDelete(id);
        if (!deletedPracticeVerse) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(deletedPracticeVerse);
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
}; 


export {indexPracticeVerses, addPracticeVerses, updatePracticeVerses, deletePracticeVerses } // Can add more functions