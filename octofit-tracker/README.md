# 🐙 OctoFit Tracker

A modern multi-tier fitness tracking application built with React 19, Node.js/Express, and MongoDB.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/           # Node.js + Express + TypeScript
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Architecture Overview

- **Frontend**: React 19 with Vite, running on port **5173**
- **Backend**: Express.js with TypeScript, running on port **8000**
- **Database**: MongoDB, running on port **27017**

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas connection)

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

The backend will be available at `http://localhost:8000`

### Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
PORT=8000
```

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check

## Development

### Frontend
- Hot Module Replacement (HMR) enabled
- Proxy configuration for API calls to `/api`

### Backend
- TypeScript support with strict mode
- CORS enabled
- MongoDB connection management

## Build

### Frontend
```bash
npm run build
npm run preview
```

### Backend
```bash
npm run build
npm run start
```

## Features Coming Soon

- User authentication
- Fitness tracking dashboard
- Workout logging
- Progress analytics
- Social features

---

🚀 **Get Started Building!**
