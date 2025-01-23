import React, { useEffect, useState } from 'react';
import {RegisterUser} from '../../services/authServices.js';



export default function RegisterForm () {

    const [user,setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')
    const [accountCreated, setAccountCreated] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (pwd !== confirmPwd) {
                throw new Error ('Passwords do not match')
            }

            RegisterUser(user, pwd, setAccountCreated);

        } 
        catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        if(accountCreated){
            console.log('register completed successfully')
            setUser('')
            setPwd('')
            setConfirmPwd('')
        }
    },[accountCreated]);

    return (
        <>
            <div className="register-form-container">1
                <form onSubmit={handleSubmit} >

                    <label htmlFor="user">UserName</label>
                    <input 
                    
                        type="text"
                        id="user"
                        required={true}
                        value={user}
                        onChange={(e) => setUser(e.target.value)}

                    />
                    
                    <label htmlFor="pwd">Password</label>
                    <input 
                        type="text"
                        id="pwd"
                        required={true}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        
                    />
                    
                    <label htmlFor="confirmPwd">Confirm Password</label>
                    <input                    
                        type="text"
                        id="confirmPwd"
                        required={true}
                        value={confirmPwd}
                        onChange={(e) => setConfirmPwd(e.target.value)}
                        
                    />

                    <button type="submit">Submit</button>

                </form>
            </div>
        </>
    )
}