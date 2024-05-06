import practiceVerses from '../models/practiceVersesModel';

// Get route
// http://localhost:3050/practiceVerses
// Returns 10 users
const indexPracticeVerses = async(req,res)=>{
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


export {indexPracticeVerses} // Can add more functions