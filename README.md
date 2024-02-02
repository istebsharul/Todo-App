# Todo Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

## Introduction

This Todo Application is a simple task management system built using React for the front end, Spring Boot for the back end, and MySQL for the database. It allows users to create, update, delete, and mark tasks as complete.

## Features

- Create new tasks
- Update existing tasks
- Delete tasks
- Mark tasks as complete
- Responsive design

## Technologies Used

- **Front End:**
  - React
  - React Spring for animations
  - Axios for HTTP requests
  - Tailwind CSS for styling

- **Back End:**
  - Spring Boot
  - Spring Data JPA for database interactions
  - MySQL

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- Java Development Kit (JDK) -v17
- MySQL database (Workbench)

## Getting Started

1. **Clone the repository:**

   - Frontend: [https://github.com/istebsharul/Todo-App](https://github.com/istebsharul/Todo-App)
   - Backend: [https://github.com/istebsharul/Todo-App-Backend-](https://github.com/istebsharul/Todo-App-Backend-)

## Run the Frontend

2. **Navigate to the `frontend` directory:**

   ```bash
   cd frontend
   npm start
  -Open your browser and go to http://localhost:3000 to view the application.

## Run the Backend

3. **Navigate to the `TodoApp` directory:*

   ```bash
   ./mvnw spring-boot:run
   
  -If you are using VsCode just go to main file, from the dropdown runner press RUN JAVA
  
  -Open your browser and go to http://localhost:8080 to view the server.
  -Open your browser and go to http://localhost:8080/dbHealth to check the database connection.
