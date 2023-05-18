import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(result => {
                setAllToys(result);
            })
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center text-6xl font-bold my-10'>All Toys</h2>
            <div>

            </div>


            <div className="overflow-x-auto mb-5">
                <table className="table table-zebra w-full">
                    
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Categories</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>

                    {
                        allToys.map(toy => <tbody key={toy?._id}>
                            <tr>
                                <th>{toy?.sellerName}</th>
                                <td>{toy?.name}</td>
                                <td>{toy?.category}</td>
                                <td>{toy?.price}</td>
                                <td>{toy?.quantity}</td>
                                <td><Link className='btn'>View Details</Link></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllToys;