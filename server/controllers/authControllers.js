import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../config/env.js';

// @api/auth/register -> register new user
const register = async (req, res, next) => {
  const { name, email, password, phone_number, address } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      const error = new Error('User already exists');
      error.statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone_number,
      address,
    });

    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
};

// @api/auth/login -> login user
const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      const error = new Error('Password invalid');
      error.statusCode = 401;
      throw error;
    }

    const accessToken = jwt.sign({ userId: user._id }, ACCESS_TOKEN_SECRET, {
      expiresIn: '30s',
    });

    const refreshToken = jwt.sign({ userId: user._id }, REFRESH_TOKEN_SECRET, {
      expiresIn: '5m',
    });

    await user.updateOne({ refresh_token: refreshToken });

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: 'Sign in success!',
      data: {
        name: user.name,
        email: user.email,
        accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @api/auth/refresh -> create new access and refresh token when expired
const refreshToken = async (req, res, next) => {
  try {
    const cookies = req.cookies;

    if (!cookies) {
      const error = new Error('Cookies not found');
      error.statusCode = 401;
      throw error;
    }

    const refreshToken = cookies.jwt;

    const user = await User.findOne({ refresh_token: refreshToken });

    if (!user) {
      const error = new Error('Forbidden');
      error.statusCode = 403;
      throw error;
    }

    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, payload) => {
      if (err || user._id != payload.userId) {
        const error = new Error('Forbidden');
        error.statusCode = 403;
        throw error;
      }

      const accessToken = jwt.sign(
        { userId: payload.userId },
        ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' }
      );

      res.json({ accessToken });
    });
  } catch (error) {
    next(error);
  }
};

// @api/auth/logout -> logout user
const logout = async (req, res, next) => {
  res.json({ message: 'logout route' });
};

export default { register, login, refreshToken, logout };
