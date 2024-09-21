# News App Prototype

This project is a prototype application designed to provide users with news information. It consists of a frontend built using React and a backend built on the MEAN stack (MongoDB, Express, Node.js).

## Table of Contents

- [Technologies](#technologies)
- [Frontend Application](#frontend-application)
- [Backend Application](#backend-application)
- [Database Structure](#database-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies

### Frontend
- React
- Bootstrap

### Backend
- Node.js
- Express
- MongoDB

### Database
- JSON (document structure)
- MongoDB

## Frontend Application

The frontend application consists of two main views:

### New
- Displays all new news articles vertically, ordered by their storage date.
- Each news article includes an "Archive" button, which moves the article to the "Archived" view upon clicking. 
- When a new news item is added to the database, the frontend updates the list automatically.

### Archived
- Displays all archived news articles vertically, ordered by their archive date.
- Each archived news item has a "Remove" button, which permanently deletes the article from both views.

## Backend Application

The backend application is responsible for two main functionalities:

1. **Get Data**: Retrieves news data from MongoDB.
2. **Save Data**: Saves new news articles into MongoDB.

## Database Structure

The database stores documents with the following fields:

- `title`: String - The title of the news article.
- `description`: String - A brief description of the news article.
- `date`: Date - The date when the news article was stored.
- `content`: String - The full content of the news article.
- `author`: String - The author of the news article.
- `archiveDate`: Date - The date when the news article was archived.

## Installation

To set up the project, follow these steps:

1. Clone the repository:
```bash
   git clone https://github.com/valenti94br/AF_PruebaT.git
   cd <repository-directory>
```

2. Install dependencies for the backend:
```bash
cd API
npm install
```

3. Install dependencies for the frontend:
```bash
cd Site
npm install
```

4. Set up your MongoDB database:
   - Create a `.env` file in the backend directory based on the provided `.env.example` file. This file should contain your MongoDB connection string and any other necessary environment variables.

## Usage

1. Start the backend server:

```bash
cd API
npm run dev
```

2. Start the frontend application:

```bash
cd Site
npm start
```

3. Open your browser and navigate to http://localhost:3000 to access the application.




