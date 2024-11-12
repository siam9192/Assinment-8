import express from 'express';
import cors from 'cors';
import routes from './routes';
import { GlobalErrorHandler } from './Errors/globalErrorHandler';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());


app.use('/api', routes);
app.use((err,req,res)=>{
  res
});

app.use((req, res) => {
  if (req.url === '/') {
    res.status(200).json({
      message: 'Hey welcome to  server',
    });
  }
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: 'Not Found',
  });
});
export default app;
