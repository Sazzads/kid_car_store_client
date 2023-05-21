import React, { useContext, useState } from 'react';
import pic from '../../assets/registation.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import PageTitle from '../PageTitle/PageTitle';

const Register = () => {
    const { creteUser, createUserGoogle, updateUserProfile, show } = useContext(AuthContext)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);


        if (password.length < 6) {
            setError('Please add at least 6 characters');
            return;
        }
        //user register
        creteUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                setError('')
                event.target.reset();
                setSuccess("REGISTER IS COMPLETED SUCCESSFULLY");
                updateUserProfile(name, photo)

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setSuccess('')
            })

    };

    //google register
    const handleGoogleLogin = (auth, provider) => {
        createUserGoogle(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess("REGISTER IS COMPLETED SUCCESSFULLY");
                navigate('/', { replace: true });

            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <PageTitle title="Kid Car Store | Register"></PageTitle>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="ml-12 w-1/2">
                    <img src={pic} alt="image" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        {/* <h1 className=' text-green-700 text-center  text-3xl font-bold my-4'> {show}</h1> */}
                        <h1 className=' text-green-700 text-center  text-3xl font-bold my-4'> {success}</h1>
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-5 text-center'>Already Have an Account? Please <Link to='/login' className='text-orange-600 font-bold' >Login</Link></p>
                        <button onClick={handleGoogleLogin} className='btn'>Google</button>
                    </div>
                    <p className=' text-red-600 mb-3'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;