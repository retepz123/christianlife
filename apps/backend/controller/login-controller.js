import Leader from '../models/Leader-schema.js'
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const JSONWEB = process.env.JWT_SECRET;

export async function login(req, res) {
  try {
    const leader = req.user;

    const token = jwt.sign(
      {
        id: leader._id,
        role: leader.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d'}
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite:'None',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ messsage: `Welcome Boss, ${leader.username}`});

  } catch (error){
     console.error('Error fetching the data', error);
    return res.status(500).json({ message: 'Internal server Error in login' });
  }
}