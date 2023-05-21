import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const CategoryToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext);

    // const { a, setA } = useState({user})
    const handleAlert = (id) => {
        if (!user) {
            Swal.fire({
                title: 'Login Alert!',
                icon: 'warning',
                text: "You Need To Login",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
    }
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='w-1/2' src={toy?.pictureUrl} alt="picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>Price: {toy.price}</p>
                    <p>rating: {toy.rating}</p>
                    {/* <div className="card-actions justify-end">
                        <Link className='btn' to={`/toy/${toy._id}`}>View Details</Link>
                    </div> */}
                    <div className="card-actions justify-end">
                        <Link onClick={() => handleAlert(toy._id)} className='btn' to={`/toy/${toy._id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryToyCard;