import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB at', MONGODB_URI);
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });

// Health Check Route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'Backend is running', port: PORT });
});

// Welcome Route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: '🐙 OctoFit Tracker API', version: '1.0.0' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📦 MongoDB running on ${MONGODB_URI}`);
});
