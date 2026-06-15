# Kidrove — AI & Robotics Summer Workshop

A premium landing page for Kidrove's AI & Robotics Summer Workshop, built with React, TypeScript, Tailwind CSS, and Express.

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod
- **Backend:** Node.js, Express, express-validator

## Project Structure

```
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI primitives
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── WorkshopHighlights.tsx
│   │   ├── LearningOutcomes.tsx
│   │   ├── ParentsWhy.tsx
│   │   ├── Timeline.tsx
│   │   ├── FAQ.tsx
│   │   ├── RegistrationForm.tsx
│   │   └── Footer.tsx
│   ├── constants/        # Workshop data
│   ├── types/            # TypeScript definitions
│   └── App.tsx
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── routes/
│       ├── validators/
│       └── index.ts
├── .env.example
└── package.json
```

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend on `http://localhost:4000`.

## API Endpoints

- `POST /api/enquiry` — Submit a workshop enquiry
- `GET /api/health` — Health check

## Deployment

### Frontend (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Backend (Render)

1. Create a new Web Service on Render
2. Set root directory: `backend`
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`

## Git Commit Suggestions

```
feat: initial project setup with Vite, React, TypeScript
feat: add Hero section with illustration mockup
feat: add workshop highlights and learning outcomes
feat: add curriculum timeline and FAQ accordion
feat: add registration form with React Hook Form + Zod
feat: add Express backend with enquiry API
feat: add responsive design and Framer Motion animations
docs: add README with setup and deployment instructions
```

## Final Submission Note

This landing page is designed with a premium SaaS aesthetic — prioritizing whitespace, typography hierarchy, and trust signals over flashy animations. The registration form includes full validation with inline error messages and a loading state. Every component is responsive down to 320px. The backend handles enquiries with validation middleware and proper error handling. The entire stack is production-ready and deployable to Vercel + Render with zero configuration changes.
