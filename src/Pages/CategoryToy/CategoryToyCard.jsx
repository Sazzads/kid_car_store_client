import React from 'react';
import { Link } from 'react-router-dom';

const CategoryToyCard = ({ toy }) => {
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={toy?.pictureUrl} alt="picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy.name}!</h2>
                    <p>Price: {toy.price}</p>
                    <p>rating: {toy.rating}</p>
                    <div className="card-actions justify-end">
                        <Link className='btn' to={`/toy/${toy._id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryToyCard;