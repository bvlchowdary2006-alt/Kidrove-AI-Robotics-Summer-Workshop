# Kidrove — AI & Robotics Summer Workshop

A premium landing page for Kidrove's AI & Robotics Summer Workshop with a MongoDB-connected backend for enquiry submissions.

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod
- **Backend:** Node.js, Express, MongoDB (Mongoose), express-validator

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── ui/          # Reusable UI primitives
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── WorkshopHighlights.tsx
│   │   │   ├── LearningOutcomes.tsx
│   │   │   ├── ParentsWhy.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── RegistrationForm.tsx
│   │   │   └── Footer.tsx
│   │   ├── constants/        # Workshop data
│   │   ├── types/            # TypeScript definitions
│   │   └── App.tsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── validators/
│       └── index.ts
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB connection string

### Environment Variables

Copy `.env.example` to `backend/.env` and fill in your MongoDB URI:

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/kidrove
PORT=4000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Run Locally

```bash
# Terminal 1 — Backend
cd backend && npm install && npm run dev

# Terminal 2 — Frontend
cd frontend && npm install && npm run dev
```

The frontend runs on `http://localhost:5173` and the backend on `http://localhost:4000`.

## Features

- Responsive design (320px and up)
- Framer Motion scroll animations
- Form validation with Zod + React Hook Form
- MongoDB persistence for enquiries
- Express-validator middleware for API validation
- CORS-enabled API proxy via Vite

## Deployment

- **Frontend:** Deploy `frontend/` to Vercel, Netlify, or any static host
- **Backend:** Deploy `backend/` to Render, Railway, or Fly.io
