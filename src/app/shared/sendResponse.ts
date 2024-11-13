import { Response } from 'express';
const SendResponse = <T>(
  res: Response,
  jsonData: {
    statusCode: number;
    success: boolean;
    message: string;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data: T | null;
  },
) => {
  res.status(jsonData.statusCode).json({
    success: jsonData.success,
    status: jsonData.statusCode,
    message: jsonData.message,
    data: jsonData.data || null || undefined,
  });
};

export default SendResponse;
