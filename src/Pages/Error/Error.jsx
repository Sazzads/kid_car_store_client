import React from 'react';
import errorPic from '../../assets/errorPic.png'
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

const Error = () => {
    return (
        <div className='my-10'>
            <PageTitle title="Error"></PageTitle>
            <div className='text-center'>
                <h1 className='text-7xl font-bold text-red-500'>4O4</h1>
                <p className='text-gray-700'>LOST IN  <Link to='/' className='text-blue-400'>Kid Car Store</Link>? Hmm, <br /> looks like that page doesn't exist.</p>

            </div>

            <img className='w-1/3 mx-auto' src={errorPic} alt="" />
            <div className='text-center'>
                <Link className='mx-auto btn ' to='/'>Home</Link>
            </div>



        </div>
    );
};

export default Error;