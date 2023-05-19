import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import UpdateMyToy from './UpdateMyToy';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user])
    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/mytoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted succesfull');
                        const remaining = toys.filter(toy => toy._id !== id)
                        setToys(remaining)
                    }
                })
            // console.log(id);
        }
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center text-6xl font-bold my-10'>My Toys</h2>
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {
                        toys.map(toy => <tbody key={toy?._id}>
                            <tr>
                                <td>{toy?.sellerName}</td>
                                <td>{toy?.name}</td>
                                <td>{toy?.category}</td>
                                <td>{toy?.price}</td>
                                <td>{toy?.quantity}</td>
                                <td><Link className='btn' to='/updatemytoy'>Update</Link> </td>
                                <td onClick={() => handleDelete(toy._id)}><button className='btn'>X</button></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyToys;