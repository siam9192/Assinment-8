# 📚 Library Management System

A backend API for managing a library’s book inventory, member records, and borrowing/return transactions. This system provides CRUD functionality for books and members, allows for book borrowing and returns, and tracks overdue books.

## 🚀 Live URL
**[Library Management System - API](https://assinment-8-seven.vercel.app)**

## 🛠 Technology Stack & Packages

- **Node.js** 
- **Express.js** 
- **Prisma ORM**
- **PostgreSQL** 
- **TypeScript**ity.

## 📦Setup Instructions


## Setup and Instructions

- npm install  (command)
- Create a .env file in the project root with your database URL (DATABASE_URL):
- Migrate the Database Schema  command (npx prisma migrate dev) 
- command (npm run dev)



# Library Management System API Documentation

## 🌟 Key Features & Functionality


- Create, read, update, and delete book records.
- Track total and available copies of each book.

- Add, retrieve, update, and delete member records.
- Email validation to prevent duplicate member entries.

- Allows borrowing and returning books while tracking available copies.
- Prevents borrowing if no copies are available.

- Tracks books that are overdue past a 14-day borrowing period.
- Returns a list of overdue items with borrower details and overdue days.

- Consistent error responses across the API with HTTP status codes and error messages.



## ⚠ Known Issues/Bugs

- **Overdue Calculation Precision:** The system currently calculates overdue days based only on calendar days, without accounting for weekends or holidays.
- **Duplicate Borrow Sessions:** The system does not limit a member from borrowing the same book multiple times simultaneously. Future improvements may include a check to limit active borrow sessions for each book per member.
