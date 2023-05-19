import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(result => {
                setAllToys(result);
            })
    }, [])



    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                console.log(data);
            })
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <PageTitle title="All Toys"></PageTitle>
            <h2 className='text-center text-6xl font-bold mt-10'>AllToys</h2>
            <div className="text-right my-5">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1 border-black bg-gray-200"
                />{" "}

                <button className='p-1 ml-1 bg-gray-700 text-white' onClick={handleSearch}>Search</button>
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
                                <td><Link className='btn' to={`/toy/${toy._id}`}>View Details</Link></td>
                                
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllToys;