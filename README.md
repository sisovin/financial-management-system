# Freelance Platform

## Project Description

This project is a complete Freelance Platform built using Vite React, Node.js, and MongoDB. The system handles user authentication (Argon2, soft-delete Design, Redis caching client), user profiles, social network posts, pages, groups, media, friends, real-time chat (end-to-end encrypted), job portal, admin panel, user dashboard, blogs, page builder, and freelance platform functionalities.

## Features

- User Authentication (JWT-based login & signup, Argon2, soft-delete Design, Redis caching client)
- User Registration and Profile
- Social Network Posts
- Pages
- Groups
- Media
- Friends
- Realtime Chat (end-to-end encrypted)
- Job Portal
- Admin Panel
- User Dashboard
- Blogs
- Page Builder
- Freelance Platform (multi-purpose platform project)

## Tech Stack

- Vite React
- Node.js
- MongoDB
- JWT
- REST API

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/sisovin/financial-management-system.git
   cd financial-management-system
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   DATABASE_URL=your_mongodb_database_url
   JWT_SECRET=your_jwt_secret
   REDIS_URL=your_redis_url
   ```

4. Initialize the database:
   ```sh
   npm run init-db
   ```

## Running the Project

1. Start the backend server:
   ```sh
   npm run dev:server
   ```

2. Start the frontend server:
   ```sh
   npm run dev:client
   ```

3. The backend server will be running at `http://localhost:3000` and the frontend server will be running at `http://localhost:5173`
