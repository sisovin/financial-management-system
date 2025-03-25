import { Request, Response } from 'express';
import { User } from '../models/user';
import { hashPassword, verifyPassword } from '../utils/hash';
import { generateToken, verifyToken } from '../utils/jwt';
import { redisClient } from '../utils/redis';

export const signup = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken({ userId: user.id, role: user.role });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

export const validateToken = (req: Request, res: Response) => {
  const { token } = req.body;

  try {
    const decoded = verifyToken(token);
    res.status(200).json({ message: 'Token is valid', decoded });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token', error });
  }
};

export const logout = async (req: Request, res: Response) => {
  const { token } = req.body;

  try {
    await redisClient.del(token);
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out', error });
  }
};
