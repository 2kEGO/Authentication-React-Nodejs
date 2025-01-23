import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './Backend/routes/userRoutes.js';
import dotenv from 'dotenv';
import connectDB from './Backend/utils/connect_mongoDB.js';

dotenv.config();

const port = 5000;
const app = express(); 

app.use(cors());

app.use(express.json());
app.use('/api', userRoutes)

connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});