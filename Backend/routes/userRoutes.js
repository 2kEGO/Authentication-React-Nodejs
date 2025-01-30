import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/users.js';

const router = express.Router();

//REGISTER USER
router.post('/register', async (req, res) => {

    try {
        
        const {user, pwd} = req.body;

        //check if user already exists
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


//LOGIN USER 

router.post('/login', async (req, res) => {

    try {
        
        const {user, pwd} = req.body;

        //check if user exists
        const userExists = await User.findOne({user});

        if(!userExists){
            return res.status(400).json({message: 'User does not exist'});
        }

        //check if password is correct
        const isMatch = await bcrypt.compare(pwd, userExists.pwd);

        if(!isMatch){
            return res.status(400).json({message: 'Invalid password'});
        }

        res.json({user});

    } catch (error) {
        console.error(error);
        res.json({message: 'Error logging in'});
    }
});

export default router;

