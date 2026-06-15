import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './config';
import enquiryRouter from './routes/enquiry';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json({ limit: '16kb' }));

app.get('/api/health', (_req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  res.json({
    success: dbState === 1,
    message: 'Kidrove API is running',
    database: dbStatus[dbState] || 'unknown',
  });
});

app.use('/api/enquiry', enquiryRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`[Kidrove API] Server running on port ${config.port}`);
  mongoose.connect(config.mongodbUri).then(() => {
    console.log('[Kidrove API] Connected to MongoDB');
  }).catch((err) => {
    console.error('[Kidrove API] MongoDB connection error:', err);
    console.error('[Kidrove API] Set MONGODB_URI in environment variables');
  });
});

export default app;
