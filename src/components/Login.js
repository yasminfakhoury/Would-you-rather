import React, { useState } from 'react';
import Redux from 'redux';
// import { CHECK_USER } from '../actions'

// needs to be connected to store so that we can see if the username and 
// password that were inputted match up with a user in the database
const Login = ({users, dispatch}) => {

    // current state of the input values
    const [ userEntry, setUserEntry ] = useState('');
    const [ passwordEntry, setPasswordEntry ] = useState('');

    // check if username exists, and if it matches password
    function checkUser() {
        console.log(`username: ${userEntry}, password: ${passwordEntry}`)
       // dispatch(CHECK_USER);
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

function mapStateToProps(state){
    const {users} = state;
    return {users};
}

export default Login;