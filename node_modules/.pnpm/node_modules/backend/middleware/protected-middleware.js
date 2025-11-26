import Leader from '../models/Leader-schema.js';
import jwt from 'jsonwebtoken';

export async function protectMiddleware(req, res, next){
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
      token = req.headers.authorization.split(' ')[1]
    } else if (req.cookies && req.cookies.token){
      token = req.cookies.token;
    }
        console.log('Token', token);


    if(!token){
      return res.status(400).json({ message: 'No token provided'});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Leader.findById(decoded.id).select('-password');

    if (!user){
      return res.status(400).json({ message: 'User Cannot be found'});
    }

    req.user = user;
    console.log('Req user', req.user);
    next();

  } catch (error) {
      return res
      .status(500)
      .json({ message: 'Internal Server Error in protected Middlware' });
  }
}
