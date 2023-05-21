import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`https://server-site-pi.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user])
    const handleDelete = (id) => {



        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-site-pi.vercel.app/mytoys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                              )
                            const remaining = toys.filter(toy => toy._id !== id)
                            setToys(remaining)
                        }
                    })
            }
        })
    }
    //ascinding sort
    const handleAscinding = () => {
        fetch(`https://server-site-pi.vercel.app/mytoyascending/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }
    //Descending sort
    const handleDescending = () => {
        fetch(`https://server-site-pi.vercel.app/mytoydescending/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }

    //alert
    const notify=(id)=>{
        toast("You Are Going to update.....")
        // console.log(id);
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <PageTitle title="Kid Car Store | My Toy"></PageTitle>
           
            <h2 className='text-center text-6xl font-bold my-10'>My Toys</h2>
            <ToastContainer />
            <button onClick={handleAscinding} className='border py-2 px-4 m-2 bg-gray-500 hover:bg-black hover:text-white rounded-lg '>Ascinding</button>
            <button onClick={handleDescending} className='border py-2 px-4 m-2 bg-gray-500 hover:bg-black hover:text-white rounded-lg '>Descending</button>



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
                                <td onClick={()=>notify(toy._id)}><Link className='btn' to={`/updatemytoy/${toy._id}`}>Update</Link> </td>
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