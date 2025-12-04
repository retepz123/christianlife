import Registration from '../models/registration-schema.js';
import Register from '../models/registration-schema.js'


export async function registerForm(req, res){
  try {
    const { fullName, age, address, contact, gender, whoInvitedYou } = req.body;

    if(!fullName || !age || !address || !contact || !gender || !whoInvitedYou){
      return res.status(400).json({ message: 'Fields are required'});
    }

    const allowedGender = ['Male', 'Female'];
    if (!allowedGender.includes(gender)){
      return res.status(400).json({ message: 'Gender must be Male or Female'});
    }

    if(isNaN(age) || age <= 0){
      return res.status(400).json({ message: 'Invalid Age'});
    }

    const registration = new Register({
      fullName,
      age,
      address,
      contact,
      gender,
      whoInvitedYou,
    });

    await registration.save();

    return res.status(200).json({ message: 'Successfully Register'})


  } catch (error){
    console.error('Error in registration:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getAllRegistered(req, res) {
  try {
    const members = await Registration.find()
    return res.status(200).json({ message: 'All Members', total: members.length, members});

  } catch (error) {
     console.error('Error fetching the products:', error);
    return res.status(500).json({ message: 'failed to fetch Members'});

  }
}

export async function removeUser(req, res) {
  try {
    const remove = await Registration.findByIdAndDelete(req.params.id)

    if(!remove){
      return res.status(400).json({ message: 'Unable to delete the Member'});
    }

    return res.status(200).json({ message: 'Successfully Delete'});

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}