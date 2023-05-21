import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState("")
    const [currentPage, setCurrentPage] = useState(0);
    const { user } = useContext(AuthContext);

    const notify = () => {
        if (!user) {
            toast("You Need To Login.....");
        }
    }

    const itemsPerPage = 20;
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://server-site-pi.vercel.app/alltoyss?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            setAllToys(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage]);



    const { totalToys } = useLoaderData()
    // console.log(totalToys);

    const totalPages = Math.ceil(totalToys / itemsPerPage)
    const pageNumbers = [...Array(totalPages).keys()];

    const handleSearch = () => {
        fetch(`https://server-site-pi.vercel.app/toySearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                // console.log(data);
            })
    }
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <PageTitle title="Kid Car Store | All Toys"></PageTitle>
                <ToastContainer />
                <h2 className='text-center text-6xl font-bold mt-10'>All Toys</h2>
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
                            allToys?.map(toy => <tbody key={toy?._id}>
                                <tr>
                                    <th>{toy?.sellerName}</th>
                                    <td>{toy?.name}</td>
                                    <td>{toy?.category}</td>
                                    <td>{toy?.price}</td>
                                    <td>{toy?.quantity}</td>
                                    <td onClick={() => notify(toy._id)}><Link className='btn' to={`/toy/${toy._id}`}>View Details</Link></td>
                                    {/* <Link onClick={() => handleAlert(toy._id)} className='btn' to={`/toy/${toy._id}`}>View Details</Link> */}

                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
            {/* Show 20 results by default  */}
            <div className='pagination text-center mb-14'>
                Page :
                {
                    pageNumbers.map(number => <button className={currentPage === number ? 'bg-gray-500 mx-1 py-1 my-3 px-5 rounded-md ' : 'mx-1 py-1 px-5 my-3 rounded-md '} key={number} onClick={() => setCurrentPage(number)}>{number + 1}</button>)
                }


            </div>
        </>
    );
};

export default AllToys;