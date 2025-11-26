import Leader from '../models/Leader-schema.js';

export async function registerLeader(req, res){
  try {
    const { username, password, role } = req.body;

    let userRole = role;

    const leader = await Leader({ username, password });
    await leader.save();

    return res.status(200).json({ message: 'Successfully Created', 
      leader: {
        username: leader.username,
        password: leader.password,
        role: leader.role,
      }
    });

  } catch (error){
    console.error('Error in data', error);
    return res.status(500).json({ message: 'Internal Server Error'});
  };
};