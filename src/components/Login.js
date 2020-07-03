import React, { useState } from 'react';
import {_getUsers as getUsers} from '../utils/_DATA';

// needs to be connected to store so that we can see if the username and 
// password that were inputted match up with a user in the database
const Login = () => {

    // current state of the input values
    const [ userEntry, setUserEntry ] = useState('');
    const [ passwordEntry, setPasswordEntry ] = useState('');

    // check if username exists, and if it matches password
    async function checkUser() {

       // we're not going to dispatch an action because we are not modifying the store
       // instead, we check for the username and password here
        const users = await getUsers();
        console.log(users);
        let found = false;

        // loop through the users to see if any match userEntry, then check is the associated
        // password matches
        Object.values(users).forEach(user => {
            console.log(user.id);
            if(user.id === userEntry) {
                if(user.password === passwordEntry) {
                    found = true;
                    console.log('found it!');
                }
            }
        });

        if(found === false) console.log('username or password is incorrect')
        else console.log('wahoo');

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