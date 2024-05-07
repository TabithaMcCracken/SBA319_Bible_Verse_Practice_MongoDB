# MongoDB Database Application

This project implements a small Node, Express, and MongoDB server application that manages data for a Bible memorization app. It provides routes for managing users, users favorite Bible verses, and users practice Bible verses.

## Objectives

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

## Technologies Used
- Node.js
- Express.js
- MongoDB

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Create a .env file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=<your_mongodb_connection_string>
PORT=<optional_port_number>
```

Note: This application requires a MongoDB database. Make sure you have MongoDB installed and running on your system before proceeding.

3. Start the server: `nodemon index.js`.
4. Access the API endpoints via the specified routes.

## Routes
### Users- API routes for managing user data

- GET /users
Description: Get all user data.
CRUD Operation: Read

- POST /users/addUser
Description: Add a new user.
CRUD Operation: Create

- PATCH /users/updateUser/:id
Description: Update user info by ID.
CRUD Operation: Update

- DELETE /users/deleteUser/:id
Description: Delete a user by ID.
CRUD Operation: Delete

### Practice Verses- API routes for user's practice verses data

- GET /practiceVerses
Description: Get all practice verses data.
CRUD Operation: Read

- POST /practiceVerses/addPracticeVerse
Description: Add a new practice verse.
CRUD Operation: Create

- PATCH /practiceVerses/updatePracticeVerse/:id
Description: Update practice verse info by ID.
CRUD Operation: Update

- DELETE /practiceVerses/deletePracticeVerse/:id
Description: Delete practice verse info by ID.
CRUD Operation: Delete

### Favorite Verses- API routes for user's favorite verses data

- GET /favoriteVerses
Description: Get all favorite verses data.
CRUD Operation: Read

- POST /favoriteVerses/addFavoriteVerse
Description: Add a new favorite verse.
CRUD Operation: Create

- PATCH /favoriteVerses/updateFavoriteVerse/:id
Description: Update favorite verses info by ID.
CRUD Operation: Update

- DELETE /favoriteVerses/deleteFavoriteVerse/:id
Description: Delete favorite verse info by ID.
CRUD Operation: Delete


## Project Requirements

1. **Use at least three different data collections within the database(5%)**: users, favoriteVerses, and practiceVerses were created. 

2. **Utilize reasonable data modeling practices(10%)**: Utilized controller file for routes.

3. **Create GET routes for the client(10%)**: GET routes are implemented for each data category.

4. **Create POST routes for the client(10%)**: POST routes that allow for client creation are implemented for each data category.

5. **Create PATCH/PUT routes for the client(10%)**: PATCH routes are implemented for each data category and can be tested with Postman or similar extensions.

6. **Create DELETE routes for the client(10%)**: DELETE routes are implemented for each data category and can be tested with Postman or similar extensions.

7. **Include sensible indexes for any and all fields that are queried frequently(5%)**: Indexes are used on several fields as appropriate.

8. **Include sensible MongoDB data validation rules for at least one data collection(5%)**: Validation rules are used as appropriate;

9. **Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.(5%)**: Each colletion has more than 5 sample documents.

10. **Utilize reasonable code organization practices.(5%)**: This is applied through modularization, middleware seperation, data seperation, consistent naming conventions, dependency management, and directory structure.

11. **Ensure the program runs without errors.(10%)**: The program runs without errors.

12. **Commit frequrently to the git repository.(5%)**: Commits were made regularly throughout the project.

13. **Includes a README.(5%)**: This is the readme file.

14. **Level of effort displayed in creativity, presentation, and user experience.(5%)**: Much effort went into making sure the overall presentation is appealing to the user.


## License

This project is licensed under the [MIT License](LICENSE).