import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

const SingleToyDetails = () => {
    const toy = useLoaderData();
    const { _id, name, price, pictureUrl, quantity, description, sellerName, email, category, rating, } = toy[0]
    // console.log(object);
    return (
        <div>
            <PageTitle title="Kid Car Store | Details Toy"></PageTitle>
            <h2 className='bg-base-200 text-5xl font-bold text-center pt-10 p-0'>{name}</h2>
            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="text-center lg:text-left">
                        <div className='font-semibold '>
                            <h3>Name: <span className='font-thin'>{name}</span></h3>
                            <p>Price: <span className='font-thin'>{price}</span></p>
                            <p>Quantity: <span className='font-thin'>{quantity}</span></p>
                            <p>SellerName:<span className='font-thin'>{sellerName}</span></p>
                            <p>Seller Email: <span className='font-thin'>{email}</span></p>
                            <p>Sub Category: <span className='font-thin'>{category}</span></p>
                            <p>Rating: <span className='font-thin'>{rating}</span></p>
                            <p>description: <span className='font-thin'>{description}</span></p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <img src={pictureUrl} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;