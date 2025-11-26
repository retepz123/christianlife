import Leader from '../models/Leader-schema.js';

export async function loginMIddleware(req, res, next){
  try {
    const { username, password } = req.body;

    const user = await Leader.findOne({ username });
    if(!user){
      return res.status(400).json({ message: 'User cannot be found'});
    }

    if(password !== user.password){
      return res.status(400).json({ message: 'Invalid Credentials'});
    }

    req.user = user;
    next();

  } catch (error) {
     console.error('Error in fetching data', error);
    return res.status(500).json({ message: 'Internal Server Error in login Middleware'});
  }
}