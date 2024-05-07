import FavoriteVerses from '../models/favoriteVersesModel.js'

// Get route- works
// http://localhost:3050/favoriteVerses
// Returns 10 users by userId
const indexFavoriteVerses = async(req,res)=>{
    try {
        const result = await FavoriteVerses.find({}).sort({userId: 1}).limit(10); 
        console.log('Retrieved favorite verses:', result);
        if (!result || result.length === 0) {
            return res.status(404).send('Not found');
        }
        res.send(result).status(200);
    } catch (error){
        console.error('Error retrieving favorite verses: ', error);
        res.status(500).send('Internal Server Error')
    }
    
}

// POST Route- works
// http://localhost:3050/favoriteVerses/addFavoriteVerse
// Adds a new favorite verse

const addFavoriteVerses = async (req, res) => {
    try {
        const { user_id, favorite_verses} = req.body;
        const newFavoriteVersesData = new FavoriteVerses({
            user_id,
            favorite_verses: favorite_verses
        });
        const savedFavoriteVerseData = await newFavoriteVersesData.save();
        res.status(201).json(savedFavoriteVerseData);
    } catch (error) {
        console.error('Error adding favorite verse:', error);
        res.status(500).json({ error: 'Failed to add favorite verse' });
    }
}

// PATCH Route- works
// http://localhost:3050/favoriteVerses/updateFavoriteVerses/:id
// Function to handle updating user data

const updateFavoriteVerses = async ({ params: { id }, body }, res) =>{
    try {
        const UpdatedFavoriteVerse = await FavoriteVerses.findByIdAndUpdate(id, { $set: body }, { new: true });
        if (!UpdatedFavoriteVerse) {
            return res.status(404).json({ error: 'Favorite verse data not found' });
        }
        res.status(200).json(UpdatedFavoriteVerse);
    } catch (error) {
        console.error('Error updating favorite verses:', error);
        res.status(500).json({ error: 'Failed to update favorite verses' });
    }
}

// DELETE Route- works
// http://localhost:3050/favoriteVerses/deleteVerses/:id
// Function to handle DELETE request for deleting a user by ID
const deleteFavoriteVerses = async ({ params: { id } }, res) => {
    try {
        const deletedUser = await FavoriteVerses.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Favorite verse not found' });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error('Error deleting favorite verse:', error);
        res.status(500).json({ error: 'Failed to delete favorite verses' });
    }
}; 

export {indexFavoriteVerses, addFavoriteVerses, updateFavoriteVerses, deleteFavoriteVerses} // Can add more functions