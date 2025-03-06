import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './utils/dbConnection.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import { PORT } from './config/env.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to React Admin Dashboard API Service</h1>');
});

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await connectDB();
});
