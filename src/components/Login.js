import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {_getUsers as getUsers} from '../utils/_DATA';

// needs to be connected to store so that we can set the authedUser
const Login = () => {

    // current state of the input values
    const [ userEntry, setUserEntry ] = useState('');
    const [ passwordEntry, setPasswordEntry ] = useState('');
    const [ foundUser, setFoundUser ] = useState(false);

    // once the foundUser slice of the state gets updated, we will either move on to the home page
    // if the username and password match, otherwise we will display an error message
    useEffect(() => {

    })


    // check if username exists, and if it matches password
    async function checkUser() {

       // we're not going to dispatch an action because we are not modifying the store
       // instead, we check for the username and password here
        const users = await getUsers();
        let found = false;

        // loop through the users to see if any match userEntry, then check is the associated
        // password matches
        Object.values(users).forEach(user => {
            if(user.id === userEntry) {
                if(user.password === passwordEntry) {
                    found = true;
                }
            }
        });

        if(found === true) setFoundUser(true);
        else setFoundUser(false);

        console.log(`foundUser: ${foundUser}`)

    };

    function handleCheckUser(event){
        event.preventDefault();
        checkUser();
    }

    return (
        <div>
            <form className='login' onSubmit={handleCheckUser}>
                <input
                    type='text'
                    className='user-input'
                    placeholder='Username'
                    value={userEntry}
                    onChange={(e)=>{setUserEntry(e.target.value)}}
                />
                <input
                    type='text'
                    className='password-input'
                    placeholder='Password'
                    value={passwordEntry}
                    onChange={(e)=>{setPasswordEntry(e.target.value)}} 
                />
                <input type='submit' value='go'/>
            </form>
        </div>
    );

}

export default Login;