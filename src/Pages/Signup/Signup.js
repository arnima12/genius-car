import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import image from "../../assets/images/login/login.svg"
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Signup = () => {
    const {createUser,verifyEmail} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = event => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setAuthToken(user);
            verifyEmail();
            navigate('/');
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="hero  w-full">
            <div className="hero-content grid lg:grid-cols-2 flex-col lg:gap-64 lg:flex-row my-8">
                <div>

                    <img src={image} alt="" className="w-96" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered"/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-red-500 text-white border-none hover:bg-red-500" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-center my-4">Already Have an Account? <Link className="text-red-500 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;