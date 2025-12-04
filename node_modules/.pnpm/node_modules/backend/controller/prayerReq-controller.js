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

export async function removePrayer(req, res){
  try {
    const removeIt = await Prayer.findByIdAndDelete(req.params.id);
    console.log('Req.params.id', req.params.id);
    
    if (!removeIt) {
      return res.status(400).json({ message: 'Unable to delete'});
    }

    return res.status(200).json({ message: 'Successfully Deleted'});

  } catch (error){
     console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}