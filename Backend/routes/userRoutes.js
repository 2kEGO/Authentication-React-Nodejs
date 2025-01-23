import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/users.js';

const router = express.Router();

router.post('/register', async (req, res) => {

    try {
        
        const {user, pwd} = req.body;

        const extistUser = await User.findOne({user});
        
        if(extistUser){
            return res.status(400).json({message: 'User already exists'});
        }

        const hashedPassword = await bcrypt.hash(pwd, 10);

        const newUser = new User({user, pwd: hashedPassword});
        await newUser.save();

        res.json({message: 'User signed in successfully'});

    } catch (error) {
        console.error(error);
        res.json({message: 'Error registering'});
    }
});

export default router;