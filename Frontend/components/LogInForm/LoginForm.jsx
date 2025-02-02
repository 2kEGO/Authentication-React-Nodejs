import React, {useState, useEffect, useContext} from 'react';
import './LoginForm.css'
import { LoginUser } from '../../services/authServices';
import {AuthContext} from '../../context/AuthContext.js';

export default function LoginForm () {

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [logIn, setLogIn] = useState(false)
    const [notLoggedIn, setNotLoggedIn] = useState(false)

    const [auth, setAuth] = useContext(AuthContext)
    
    const handleLogin = async (e) =>{
        e.preventDefault()

        const userData = {user, pwd}

        try {

            await LoginUser(userData, setLogIn)

            if(logIn){
                alert('Login Successful')
                setUser('')
                setPwd('')
                setAuth(true)
            }
            else{
                setNotLoggedIn(true)
            }
            

        } catch (error) {
                console.error(error)
                setNotLoggedIn(true)
        }
    }

    return (
        <>
            <div className="logIn-container">
                <form onSubmit={handleLogin}>
                    <div id="title">
                        <h1>Login</h1>
                    </div>

                    <div className='login-box'>
                        <label htmlFor="user">UserName</label>
                        <input 
                            type="text" 
                            id="user" 
                            required={true} 
                            value={user}
                            onChange={(e) => setUser(e.target.value)}   
                        />
                    </div>

                    <div className='login-box'>
                        <label htmlFor="pwd">Password</label>
                        <input 
                        type="password"
                        id="pwd" 
                        required={true}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)} 
                        />
                    </div>

                    <p className={notLoggedIn? 'show': 'hidden'}>Username or Password doesn't match</p>

                    <button type="submit">Login</button>                   
                    
                </form>

                <div className="img-container">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}