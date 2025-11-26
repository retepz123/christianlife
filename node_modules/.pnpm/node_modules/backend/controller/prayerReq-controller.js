import Prayer from '../models/prayerReq-schema.js';

export async function requestPrayer(req, res){
  try {
    const { name, message } = req.body;

    if (!name || !message ) {
      return res.status(400).json({ message: 'Please Fill the fields'});
    }

    const sendPrayer = new Prayer({
      name,
      message,
    });

    await sendPrayer.save();
    return res.status(200).json({ message: 'Prayer Request Sent'})

  } catch (error){
    console.error('Error fetching the Prayer Request:', error);
    return res.status(500).json({ message: 'failed to fetch Prayer Request'});
  }
}

//list of prayers
export async function allPrayer(req, res) {
  try {
    const allPrayers = await Prayer.find()
    return res.status(200).json({ message: 'Prayer Request', total: allPrayers.length, allPrayers})

  } catch (error){
      console.error('Error fetching the products:', error);
    return res.status(500).json({ message: 'failed to fetch Members'});
  }
}