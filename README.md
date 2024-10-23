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
###Create a .env file with your MongoDB connection string:
```bash
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5003
###The server will run on ```http://localhost:5003/```

