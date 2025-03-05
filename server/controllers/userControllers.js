import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const register = async (req, res) => {
  try {
    const { name, email, password, phone_number, address } = req.body;

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
    // console.error(error);
    res.status(error.statusCode).json({ error: error.message });
  }

  // res.json({ message: 'Hello user' });
};

export default { register };
