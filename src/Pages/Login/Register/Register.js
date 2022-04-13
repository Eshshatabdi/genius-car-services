import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('./Login')
    }
    const handleRegister = event => {
        event.pervenDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'> Please Register</h2>
            <form onSubmit={handleRegister}>

                <input type="text" name="name" id="" placeholder='your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='PassWord' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

        </div>

    );
};

export default Register;