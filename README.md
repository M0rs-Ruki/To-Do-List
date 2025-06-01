📝 Project Title: To-Do List API (Backend Only)
🚀 Objective:
The main goal of this project is to develop a robust and scalable RESTful API that allows users to perform basic task management 
operations such as creating, reading, updating, and deleting tasks. This forms the backend of a productivity application where users can manage their daily to-dos.

⚙️ Tech Stack:
Node.js – JavaScript runtime environment for building the server-side logic
Express.js – Lightweight web framework to structure the API routes and middleware
MongoDB – NoSQL database for storing task data
Mongoose – ODM (Object Data Modeling) library to interact with MongoDB easily
dotenv – For managing environment variables
Postman – Used for API testing

🧠 Key Features:
Create Task – Allows clients to add a new task by providing a title
Get Tasks – Retrieve all tasks from the database
Update Task – Modify task properties (e.g., mark as completed or edit title)
Delete Task – Remove a task permanently
Timestamps – Every task stores created and updated timestamps automatically

🗂️ Project Structure:
The project is structured using MVC (Model-View-Controller) architecture to separate responsibilities:
Model: Defines the task schema
Controller: Handles the logic for CRUD operations
Routes: Maps HTTP endpoints to controller functions
Config: MongoDB connection settings

✅ API Endpoints:
Method	Endpoint	Description
POST	/api/todos	Create a new task
GET	/api/todos	Retrieve all tasks
PUT	/api/todos/:id	Update a specific task
DELETE	/api/todos/:id	Delete a specific task

🧪 Testing:
All endpoints were tested using Postman, validating request formats, response codes, and error handling for:
Invalid or missing task data
Non-existent task IDs
Database connection issues

💡 Learnings:
Built a deeper understanding of Express routing and middleware
Learned how to model data in MongoDB using Mongoose
Practiced writing clean, modular code
Gained confidence in handling asynchronous operations, error handling, and API design principles

🔒 Optional Extensions (Planned/Explored):
User authentication with JWT to make tasks user-specific
Validation using middleware to ensure data integrity
Pagination and filtering (e.g., show only completed tasks)
Frontend integration (React or any other framework)

🌐 Deployment (Optional):
If deployed, the API can be hosted on platforms like Render, Railway, or Heroku, and connected to MongoDB Atlas for remote database hosting.
