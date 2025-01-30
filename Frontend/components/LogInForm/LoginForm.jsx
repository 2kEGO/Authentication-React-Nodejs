import React, {useState, useEffect} from 'react';
import './LoginForm.css'
import { LoginUser } from '../../services/authServices';


export default function LoginForm () {

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [logIn, setLogIn] = useState(false)

    
    const handleLogin = async (e) =>{
        e.preventDefault()

        const userData = {user, pwd}

        try {

            await LoginUser(userData, setLogIn)

            if(logIn){
                alert('Login Successful')
                setUser('')
                setPwd('')
                setLogIn(false)
            }

        } catch (error) {
                console.error(error)
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

                    <p>Username or Password doens't match</p>

                    <button type="submit">Login</button>                   
                    
                </form>

                <div className="img-container">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}