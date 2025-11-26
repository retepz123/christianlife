import mongoose, {Schema} from 'mongoose';

const registerSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  whoInvitedYou: {
    type: String,
    required: true,
  },

}, {timestamps: true});

const Registration = mongoose.model('Registration', registerSchema);

export default Registration;