import express from 'express';
import cors from 'cors';
import routes from './routes';
import { ErrorHandler } from './Errors/ErrorHandler';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api', routes);
app.use(ErrorHandler);

app.use((req, res) => {
  if (req.url === '/') {
   res.status(200).json({
      message: 'Hey welcome to  server',
    });
  }
 else{
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: 'Route Not Found',
  });
 }
});


export default app;
