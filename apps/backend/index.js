import express from 'express';
import process from 'node:process';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authenticateRoutes from './routes/authenticate-routes.js'
import registrationForm from './routes/formRegistration.js'

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

//connect to mongoDB
async function connectDB(){
  try {
    await mongoose.connect(process.env.BACKEND_LIFE_URL);
    console.log('🛜 Successfully Connected');
  } catch (error){
    console.error('❌ Unable to connect');
  }
}
connectDB();

app.use(cors({
  origin: ['http://localhost:5173', 'https://christianlifeparanaque.onrender.com'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.set('port', PORT);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

app.use('/api/leader', authenticateRoutes);
app.use('/api', registrationForm);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
