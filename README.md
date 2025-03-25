# Financial Management System

## Project Description

This project is a complete Financial Management System built using JWT authentication and RESTful APIs. The system handles user authentication (Argon2, soft-delete Design, Redis caching client), transactions, saving goals, financial reports, and admin controls—all developed from scratch.

## Features

- User Authentication (JWT-based login & signup, Argon2, soft-delete Design, Redis caching client)
- Two-factor authentication
- Transactions (Income, Expenses, Savings) Management
- Saving Goals Module 🎯
- Role-Based Access (User & Admin functionalities), permission
- Detailed Financial Reports
- API Testing with Postman

## Tech Stack

- PostgreSQL
- Prisma
- JWT
- REST API

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   DATABASE_URL=your_postgresql_database_url
   JWT_SECRET=your_jwt_secret
   REDIS_URL=your_redis_url
   ```

4. Initialize the database:
   ```sh
   npx prisma migrate dev
   ```

## Running the Project

1. Start the development server:
   ```sh
   npm run dev
   ```

2. The server will be running at `http://localhost:3000`
