# Rule Engine API

This project implements a simple Rule Engine API using Node.js and Express. It allows users to define rules dynamically and evaluate those rules based on user attributes like age, department, income, etc. The project utilizes MongoDB for data storage and Mongoose for database interaction.

## Features

- Dynamically create rules and conditions based on user attributes.
- Evaluate rules to check user eligibility.
- RESTful API architecture.
- MongoDB Atlas integration for data storage.
- Express-based server setup.
- Error handling and validation.

## Project Structure

rule-engine-ast/ ├── config/ # Database configuration ├── controllers/ # Logic for handling requests and responses ├── models/ # Database models ├── routes/ # API route definitions ├── services/ # Business logic and service layer ├── utils/ # Utility functions and helpers ├── public/ # Static files (HTML,CSS) ├── .env # Environment variables for configuration ├── app.js # Main server file ├── package.json # Node.js project dependencies and scripts └── README.md # Project


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.18.2 or higher)
- MongoDB Atlas account for cloud database

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/rule-engine-api.git
   cd rule-engine-ast
   npm install
   npm run server
### Create a .env file with your MongoDB connection string:

     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
**PORT=5003**
### The server will run on ```http://localhost:5003/```

## API Endpoints
1. Create a Rule
Endpoint: POST /api/rules/create
Description: Allows you to define a new rule based on user attributes
Request Body:
```bash
{
  "rule": {
    "attribute": "age",
    "operator": ">",
    "value": 30
  }
}
```
2. Evaluate Rule
Endpoint: POST /api/rules/evaluate/:ruleId
Description: Evaluates the defined rule based on a user's attributes.
Request Body:
```bash
{
  "user": {
    "age": 35,
    "income": 50000
  }
}
```
## Troubleshooting
### MongoDB Atlas Connection Error
If you see the following error:

MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster.
### Make sure you have:
- Whitelisted your IP in the MongoDB Atlas dashboard.
- Added the correct connection string in the .env file.
## Technologies Used
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB Atlas**: Cloud database service.
- **Mongoose**: MongoDB object modeling tool.
- **nodemon**: Utility that automatically restarts the Node.js application when file changes are detected.
  
## Author
### **Saravanasudhan**
