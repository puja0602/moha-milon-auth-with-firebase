import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';

const Register = () => {
  const {registerUser,setUser} = useContext(AuthContext);
  const [error,setError] = useState("")
  // console.log(registerUser)
    const handleRegister = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value
        // console.log(name,email,password);

        if(password.length<6){
          setError("Password must be 6 characters");
          return;
        }
        if(confirmPassword != password){
          setError("Password didn't match");
          return;
        }
        if(!/.*\d{2}$/.test(password)){
          setError('Password must be ends with two numbers');
          return;
        }
        if(!/[\#%\&\*\^@\!\+\-\/\?\/]/.test(password)){
          setError("Password must contain a special character");
          return;
        }
        setError('')
        registerUser(email,password)
        .then(result => {
          // console.log(result.user);
          setUser(result.user);
        })
        .catch(error => {
          setError(error.message);
        })

    }
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
        </div>
        {
          error && <small className='text-red-500'>{error}</small>
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account? Please
            <Link to='/login'>
                <button className="btn btn-link">Login</button>
            </Link>
        </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;