# Practicing PERN CRUD Operations

A backend development project focused on learning and implementing CRUD operations using **PostgreSQL, Express.js, and Node.js**. This repository demonstrates the fundamentals of building REST APIs, connecting a Node.js server to a relational database, validating incoming data, and managing environment variables.

## 🚀 Project Overview

The goal of this project is to understand how backend applications interact with PostgreSQL databases and how REST APIs handle client requests.

CRUD stands for:

- **Create** — Insert new records into the database.
- **Read** — Retrieve existing records.
- **Update** — Modify existing records.
- **Delete** — Remove records from the database.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for backend development |
| Express.js | Building the backend server and API routes |
| PostgreSQL | Relational database management |
| node-postgres (`pg`) | Connecting Node.js with PostgreSQL |
| Joi | Request data validation |
| dotenv | Managing environment variables |
| Nodemon | Automatically restarting the server during development |

## ✨ Key Learning Objectives

- Understanding REST API development with Express.js.
- Connecting a Node.js application to PostgreSQL.
- Performing database operations using SQL queries.
- Managing database connection configuration.
- Validating request data using Joi.
- Using environment variables to protect configuration details.
- Running and testing backend applications locally.

## 📂 Project Structure

```text
Practicing-PERN-CRUD-operations/
│
├── src/
│   └── index.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) (for API testing)

### 1. Clone the Repository

```bash
git clone https://github.com/Vineet3458/Practicing-PERN-CRUD-operations.git
```

Navigate to the project directory:

```bash
cd Practicing-PERN-CRUD-operations
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory using `.env.example` as a reference.

```env
PORT=5000

DB_HOST=localhost
DB_USER=your_postgres_username
DB_DATABASE=your_database_name
DB_PORT=5432
DB_PASSWORD=your_postgres_password
```

Replace the placeholder values with your actual PostgreSQL configuration.

**Important:** Ensure that the database specified by `DB_DATABASE` exists in PostgreSQL before starting the application.

### 4. Start the Development Server

Run the following command:

```bash
npm run dev
```

To start the application without Nodemon, use:

```bash
npm start
```

The server port is configured through the `PORT` environment variable. If the application uses port `5000`, its local base URL will be:

```text
http://localhost:5000
```

## 🔄 CRUD Operations

The four fundamental database operations are:

| Operation | HTTP Method | SQL Command |
|---|---|---|
| Create | POST | `INSERT` |
| Read | GET | `SELECT` |
| Update | PUT or PATCH | `UPDATE` |
| Delete | DELETE | `DELETE` |

The exact API endpoints depend on the routes implemented in the project.

## 🧪 API Testing

You can use Postman to test the backend API.

1. Start the backend server.
2. Open Postman and create a new HTTP request.
3. Enter the API URL and select the appropriate HTTP method.
4. For requests containing data, select **Body → raw → JSON**.
5. Send the request and inspect the response status and data.

Example JSON request body:

```json
{
  "name": "Vineet",
  "email": "vineet@example.com"
}
```

Use the actual fields expected by your API validation schema when testing requests.

## 🔐 Environment Variable Security

- Never commit your actual `.env` file or database password to GitHub.
- Keep `.env` listed in `.gitignore`.
- Use `.env.example` to document the required configuration keys.
- Use separate credentials for development and production environments.

## 📚 What I Am Learning

This project is part of my backend development practice. It helps strengthen my understanding of:

- Backend architecture using Node.js and Express.js.
- PostgreSQL database connectivity and SQL queries.
- RESTful API design and HTTP methods.
- Input validation and error handling.
- Environment configuration and development workflows.

## 🔮 Future Improvements

- Complete CRUD functionality with appropriate REST API routes.
- Improve centralized error handling and request validation.
- Add automated API tests.
- Document API endpoints and response formats.
- Deploy the backend and connect it to a hosted PostgreSQL database.

## 👨‍💻 Author

**Vineet Yadav**

- GitHub: [@Vineet3458](https://github.com/Vineet3458)
- Repository: [Practicing-PERN-CRUD-operations](https://github.com/Vineet3458/Practicing-PERN-CRUD-operations)

---

⭐ If you find this project useful for learning backend development, feel free to explore the repository.
