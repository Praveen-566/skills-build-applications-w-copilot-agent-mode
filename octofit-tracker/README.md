# OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── backend/           # Node.js + Express + TypeScript API
    ├── src/
    ├── package.json
    └── tsconfig.json
```

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (running on port 27017)

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:5173

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

The backend API will be available at http://localhost:8000

### MongoDB

Ensure MongoDB is running on `mongodb://localhost:27017`

## Technologies Used

- **Frontend**: React 19, Vite, TypeScript
- **Backend**: Node.js, Express, TypeScript, Mongoose
- **Database**: MongoDB

## Ports

- Frontend: 5173
- Backend: 8000
- MongoDB: 27017
