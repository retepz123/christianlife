import mongoose, {Schema} from 'mongoose';

const leaderSchema = new Schema ({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'admin',
  },

}, {timestamps: true});

const Leader = mongoose.model('Leader', leaderSchema);

export default Leader;