import './RegisterForm.css'
import React, { useEffect, useState } from 'react';
import {RegisterUser} from '../../../services/authServices.js';

// import {img} from '../../public/10468707.jpg';



export default function RegisterForm () {

    const USER_REGEX = /^[A-z][A-z0-9-_]{4,24}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

    const [user,setUser] = useState('')
    const [validUser, setValidUser] = useState(false)
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false);

    const [confirmPwd, setConfirmPwd] = useState('')
    const [validConfirmPwd, setValidConfirmPwd] = useState(false)
    const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);

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

    useEffect(() => {
        setValidUser(USER_REGEX.test(user))
    },[user]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd))
        setValidConfirmPwd(pwd === confirmPwd);
    },[pwd,confirmPwd]);

    return (
        <>
            <div className="register-form-container">
                <form onSubmit={handleSubmit} id='form' >

                    <div id="title">
                        <h1>Create Account</h1>
                    </div>

                    <div className='input-box'>
                        <label htmlFor="user">UserName</label>
                        <input 
                        
                            type="text"
                            id="user"
                            required={true}
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            onFocus={()=> {setUserFocus(true)}}
                            onBlur={()=> {setUserFocus(false)}}
                        />
                        <p id='uid' className={!validUser && userFocus? 'show' : 'hidden'}>
                            4 to 24 characters <br />
                            Must begin with a letter <br />
                            Special characters are not  allowed
                        </p>

                    </div>

                    <div className='input-box'>
                        <label htmlFor="pwd">Password</label>
                        <input 
                            type="text"
                            id="pwd"
                            required={true}
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            onFocus={() => {setPwdFocus(true)}}
                            onBlur={() => {setPwdFocus(false)}}
                        />
                        <p id='pwdid' className={!validPwd && pwdFocus? 'show' : 'hidden'}>
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                        </p>
                        
                    </div>
                    
                    <div className='input-box'>
                        <label htmlFor="confirmPwd">Confirm Password</label>
                        <input                    
                            type="text"
                            id="confirmPwd"
                            required={true}
                            value={confirmPwd}
                            onChange={(e) => setConfirmPwd(e.target.value)}
                            onFocus={()=> setConfirmPwdFocus(true)}
                            onBlur={()=> setConfirmPwdFocus(false)}
                        />

                        <p id='pwdConfirmId' className={!validConfirmPwd && confirmPwdFocus? 'show': 'hidden'}>
                            Password does not match
                        </p>

                    </div>

                    <div className="button-container">
                        <button id='button' type="submit" disabled={!validUser && !validPwd && !validConfirmPwd? true: false}>Submit</button>
                    </div>
                </form>

                <div id='img-container'>
                    <img src='' alt="" id='img'/>
                </div>
            </div>
        </>
    )
}