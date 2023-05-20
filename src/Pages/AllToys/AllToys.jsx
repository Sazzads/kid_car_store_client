import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import './AllToys.css'

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState("")
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);

    // useEffect(() => {
    //     fetch("https://server-site-pi.vercel.app/alltoys")
    //         .then(res => res.json())
    //         .then(result => {
    //             setAllToys(result);
    //         })
    // }, [])
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

    const options = [5, 10, 20];
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }



    const handleSearch = () => {
        fetch(`https://server-site-pi.vercel.app/toySearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                console.log(data);
            })
    }
    return (
        <>
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
            {/* pagination  */}
            <div className='pagination text-center mb-14'>
                <p>Current Page: {currentPage}</p>
                {
                    pageNumbers.map(number => <button className={currentPage === number ? 'selected mx-1 my-3 px-2' : 'mx-1 px-2 my-3'} key={number} onClick={() => setCurrentPage(number)}>{number + 1}</button>)
                }
                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }

                </select>
            </div>
        </>
    );
};

export default AllToys;