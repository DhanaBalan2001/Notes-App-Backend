# Notes App - Backend 

## Technologies Used :

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin resource sharing
- dotenv for environment variable management
- API Endpoints

## Method	Endpoint	Description :

- GET	/notes	Retrieve all notes (sorted by creation date, newest first)
- POST	/notes	Create a new note
- DELETE	/notes/:id	Delete a specific note
- GET	/	Redirects to API documentation
- GET	/api/docs	View API documentation
- GET	/health	Health check endpoint

## Setup and Installation :

1. Clone the repository
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-connection-string>
   ```

4. Start the server
   ```bash
   npm start
   ```

For development with auto-restart:
   ```bash
   npm run dev
   ```

## API Documentation
The API documentation is available at the root URL of the backend server. It provides detailed information about all available endpoints, request/response formats, and example usage.
