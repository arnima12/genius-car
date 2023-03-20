import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const Login = () => {
    const {loginUser,success,setSuccess,resetPassword,handleEmailBlur} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathName || '/'
    const handleLogin = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("email",email);
        console.log("pass",password);
        loginUser(email,password)
        .then(result => {
            const user = result.user;
            
            const currentUser = {
                email: user.email
            }
            console.log("current user",currentUser);
        //    get jwt token
        fetch('https://genius-car-server-md06nzdtc-arnima12.vercel.app/jwt',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
    body: JSON.stringify(currentUser)})
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        localStorage.setItem('genius-token',data.token);
    })
            navigate(from, { replace: true });
            setSuccess(true);
            
        })
        .catch(err => console.error(err))
    }
   
    return (
        <div className="hero w-full">
            <div className="hero-content grid lg:grid-cols-2 flex-col lg:gap-64 lg:flex-row my-8">
                <div className="">
                    
                    <img src={image} alt="" className="w-96" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form  onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="text" name="email"  placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password"  placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover" onClick={resetPassword}>Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-red-500 text-white border-none hover:bg-red-500" type="submit" value="Login"/>
                        </div>
                    </form>
                    {success && <p className="text-black text-center">Successfully login</p>}
                    <p className="text-center my-4">New to genius car? <Link className="text-red-500 font-bold" to="/signup">Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;