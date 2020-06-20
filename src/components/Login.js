import React, { Component } from 'react';
import Redux from 'redux';

// needs to be connected to store so that we can see if the username and 
// password that were inputted match up with a user in the database
class Login extends Component {



    render() {
        return (
            <div>
                <form className='login'>
                    <input
                        type='text'
                        className='user'
                        placeholder='Username'
                        value=''
                        onChange='' 
                    />
                </form>
            </div>
        );
    }
}

function mapStateToProps(){

}

export default Login;