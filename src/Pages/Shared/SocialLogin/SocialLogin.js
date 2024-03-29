import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
           setAuthToken(user);
            
            
            
        })
        .catch(err => console.error(err));
    }
    return (
        <div>
            
            <p className="text-black"> 
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;