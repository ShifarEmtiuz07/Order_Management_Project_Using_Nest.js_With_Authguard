
# CRUD Project with Nest.js

This project demonstrates a **CRUD (Create, Read, Update, Delete)** application built with **Nest.js**, featuring authentication, authorization, and resource management for users, profiles, and orders.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Endpoints Overview](#endpoints-overview)
4. [Installation and Setup](#installation-and-setup)
5. [How to Use](#how-to-use)
6. [Error Handling](#error-handling)
7. [How to Delete a Repository on GitHub](#how-to-delete-a-repository-on-github)

---

## Features
- **Authentication**: Supports login and token-based access control using JWT.
- **Authorization**: Access to resources is role-restricted using guards.
- **CRUD Operations**:
  - Users: Create, retrieve, update, delete.
  - Profiles: Associate profiles with users.
  - Orders: Manage user-specific orders.
- **Error Handling**: Comprehensive error management for invalid requests, unauthorized access, and server issues.

---

## Technologies Used
- **Nest.js**: Backend framework.
- **JWT**: For secure authentication.
- **PostgreSQL**: Database for persistence.
- **TypeORM**: For database interactions.

---

## Endpoints Overview
### **Authentication**
- `POST /auth/login`: Log in and receive access and refresh tokens.
- `PATCH /user/changePass/:id`: Change a user's password.

### **Users**
- `POST /user/signUp`: Create a new user.
- `GET /user/:id`: Get a user by ID.
- `GET /user/`: Get all users.
- `PATCH /user/:id`: Update user details.

### **Profiles**
- `POST /profile/:id`: Create a profile for a user.
- `GET /profile/:id`: Get a user profile.
- `GET /profile/`: Get all profiles.

### **Orders**
- `POST /order/:userId`: Create an order for a user.
- `GET /order/:userId`: Get all orders for a user.
- `PATCH /order/:id`: Edit an order.

---

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the `.env` file with your configuration:
   ```
   JWT_SECRET=your_secret
   DATABASE_URL=your_database_url
   ```
4. Run the application:
   ```bash
   npm run start
   ```
5. Access the API at `http://localhost:3000`.

---

## How to Use
1. Use tools like **Postman** or **cURL** to interact with the endpoints.
2. Pass the access token in the `Authorization` header for secured routes:
   ```
   Authorization: Bearer <your_access_token>
   ```

---

## Error Handling
- **400 Bad Request**: Invalid input data.
- **401 Unauthorized**: Missing or invalid token.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: Server-side issues.

---

