import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { ACCESS_TOKEN_SECRET } from '../config/env.js';

const authorize = async (req, res, next) => {
  try {
    let authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      const error = new Error('Access token is missing');
      error.statusCode = 401;
      throw error;
    }

    const decodedToken = jwt.verify(token, ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken.userId);

    if (!user) {
      const error = new Error('Not allowed to access the resources');
      error.statusCode = 403;
      throw error;
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default authorize;
