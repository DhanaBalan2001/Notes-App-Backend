import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRouter from './routes/notes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Update CORS configuration for production
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true
  }));
  
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Serve API documentation at root URL
app.get('/', (req, res) => {
    res.redirect('/docs');
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// API Routes
app.use('/notes', notesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
