# Kidrove — AI & Robotics Summer Workshop

This is a landing page I built for Kidrove's AI & Robotics Summer Workshop. It's a full-stack web application where parents can browse workshop details and submit enquiries, which get stored directly in MongoDB. The frontend is built with React, TypeScript, and Tailwind CSS with smooth animations using Framer Motion. The form has proper validation through React Hook Form and Zod. On the backend side, I used Node.js with Express and Mongoose to handle the API requests and save data to MongoDB. The project is split into two folders — frontend (React + Vite) and backend (Express + MongoDB). To run it locally, you just need to add your MongoDB URI to the backend .env file, install dependencies in both folders, and run them separately. The frontend runs on port 5173 and the backend on port 4000.

**Live URL:** https://kidrove-ai-robotics-summer-workshop-1.onrender.com/

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
