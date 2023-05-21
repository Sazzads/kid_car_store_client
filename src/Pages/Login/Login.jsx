import React, { useContext } from 'react';
import pic from '../../assets/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';

const Login = () => {
    const { signIn, createUserGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState("")
    const [errorAuth, setErrorAuth] = useState("")
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        setError("");
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        if (password.length < 6) {
            setError('Please add at least 6 characters');
            return;
        }
        //user login
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setErrorAuth(error.message);
                return;

            })
    }
    //google login
    const handleGoogleSignIn = (auth, provider) => {
        createUserGoogle(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <PageTitle title="Kid Car Store | Login"></PageTitle>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="ml-12 w-1/2">

                    <img src={pic} alt="image" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-5">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className=' text-red-600 mb-3'>{error}</p>
                        <p className=' text-red-600 mb-3'>{errorAuth}</p>
                        <p className='my-5 text-center'>New to Kid Car Store? Please <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>
                        <button onClick={handleGoogleSignIn} className='btn'>Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;