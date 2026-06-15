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
  res.json({ success: true, message: 'Kidrove API is running' });
});

app.use('/api/enquiry', enquiryRouter);

app.use(notFoundHandler);
app.use(errorHandler);

mongoose
  .connect(config.mongodbUri)
  .then(() => {
    console.log('[Kidrove API] Connected to MongoDB');
    app.listen(config.port, () => {
      console.log(`[Kidrove API] Server running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error('[Kidrove API] MongoDB connection error:', err);
    process.exit(1);
  });

export default app;
