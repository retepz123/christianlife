import mongoose, {Schema } from 'mongoose';

const prayerSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {timestamps: true});

const Prayer = mongoose.model('Prayer', prayerSchema );

export default Prayer;