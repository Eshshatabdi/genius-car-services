import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('./Login')
    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target)
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)
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
            <SocialLogin></SocialLogin>

        </div>

    );
};

export default Register;