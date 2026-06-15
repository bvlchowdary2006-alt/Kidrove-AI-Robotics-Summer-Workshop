import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('[Error]', err.stack || err.message);

  return res.status(500).json({
    success: false,
    message: 'An internal server error occurred',
  });
};

export const notFoundHandler = (_req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'The requested resource was not found',
  });
};
