import User from '../models/usersModel.js'

// Get route
// http://localhost:3050/users
// Returns 10 users
const indexUsers = async(req,res)=>{
    try {
        // Query with limit and sorting by last name
        let result = await User.find({}).sort({last_name: 1}).limit(10); 
        console.log(result);
        if (!result) res.send('Not found').status(404);
        res.send(result).status(200);
    } catch (error){
        console.error('Error retrieving users: ', error);
        res.status(500).send('Internal Server Error')
    }
    
}

// POST Route
// http://localhost:3050/users/addUser
// Adds a new user

// To get an error with a duplicate id use:
// http://localhost:3050/users/addUser
// {
//     "id": "101",
//     "first_name": "Johny",
//     "last_name": "Doe",
//     "email": "johny.doe45899@example.com",
//     "birthday": "06-15-1999"
// }

// To get an error with a duplicate email use:
// http://localhost:3050/users/addUser
// {
//     "id": "112",
//     "first_name": "Johny",
//     "last_name": "Doe",
//     "email": "johny.doe45899@example.com",
//     "birthday": "06-15-1999"
// }
const addUser = async (req, res) => {
    try {
        const { id, first_name, last_name, email, birthday } = req.body;

        // Create a new user instance
        const newUser = new User({
            id,
            first_name,
            last_name,
            email,
            birthday
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Return the newly created user as the response
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Failed to add user' });
    }
}



// PATCH Route
// http://localhost:3050/users/update/:id
// Function to handle updating user data
const updateUser = async (req, res) =>{
    try{
        const userId = req.params.id;
        const updateFields = req.body; // Fields to be updated

        const updatedUser = await User.findByIdAndUpdate(userId, { $set: updateFields }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return the updated user as the response
        res.status(200).json(updatedUser);

    } catch (error){
        console.error('Error updating user: ', error)
        res.status(500).json({ error: 'Failed to update user '})
    }
}

// DELETE Route
// http://localhost:3050/users/delete/:id
// Function to handle DELETE request for deleting a user by ID
const deleteUser = async (req, res) => {
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

export {indexUsers, addUser, deleteUser, updateUser} // Can add more functions