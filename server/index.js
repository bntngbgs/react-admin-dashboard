import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './utils/dbConnection.js';
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
// import corsOptions from './config/corsOptions.js';
import { PORT } from './config/env.js';
import authorize from './middlewares/authHandler.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/category', authorize, categoryRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to React Admin Dashboard API Service</h1>');
});

app.use(errorHandler);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port ${PORT}`);
});
