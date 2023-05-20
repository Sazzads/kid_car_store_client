import React from 'react';
import banner1 from '../../assets/banner1.jpeg'
import banner2 from '../../assets/banner2.jpeg'
import banner3 from '../../assets/banner3.jpeg'
import banner4 from '../../assets/banner4.jpeg'
import offerPic from '../../assets/offer.png'

import Gallary from './Gallary';
import CategoryToy from '../CategoryToy/CategoryToy';
import PageTitle from '../PageTitle/PageTitle';
// bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]
// max-w-7xl mx-auto
const Home = () => {
    return (
        <div className=''>
            <PageTitle title="Kid Car Store"></PageTitle>
            {/* banner start  */}
            <div className="carousel w-full h-[750px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <>
                        <img src={banner1} className="w-full " />
                    </>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute transform -translate-y-1/2 left-20  top-1/2 ">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-xl md:text-6xl'>Discover the Ultimate Kid Car Toy Shop!</h2>
                            <p>Unleash their Imagination with our Incredible Selection of Kid-Friendly Cars, Trucks, and Ride-On Toys!</p>
                            <button className="btn">See More</button>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute transform -translate-y-1/2 left-20  top-1/2 ">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-xl md:text-6xl'>Discover the Ultimate Kid Car Toy Shop!</h2>
                            <p>Unleash their Imagination with our Incredible Selection of Kid-Friendly Cars, Trucks, and Ride-On Toys!</p>
                            <button className="btn">See More</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute transform -translate-y-1/2 left-20  top-1/2 ">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-xl md:text-6xl'>Discover the Ultimate Kid Car Toy Shop!</h2>
                            <p>Unleash their Imagination with our Incredible Selection of Kid-Friendly Cars, Trucks, and Ride-On Toys!</p>
                            <button className="btn">See More</button>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute transform -translate-y-1/2 left-20  top-1/2 ">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-xl md:text-6xl'>Discover the Ultimate Kid Car Toy Shop!</h2>
                            <p>Unleash their Imagination with our Incredible Selection of Kid-Friendly Cars, Trucks, and Ride-On Toys!</p>
                            <button className="btn">See More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner end  */}
            {/* gallary section  */}
            <div className='max-w-7xl mx-auto'>
                <div className="divider"></div>
                <h3 className='text-3xl mt-5 text-center font-bold'>Gallery</h3>
                <p className='text-center my-3'>Explore the Joyful Moments: Get a Sneak Peek into Our Collection of Exciting Kid Car Toys and Watch their Smiles Light Up!"</p>
                <Gallary></Gallary>
                <div className="divider"></div>
            </div>
            {/* gallary section  */}

            {/* offer section  */}
            <div className='max-w-7xl mx-auto'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={offerPic} data-aos="zoom-in-down"
                data-aos-duration="1000" className="max-w-sm w-3/4 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Check Out Our Irresistible Offer on Kid Car Toys!</h1>
                            <p className="py-6">Rev Up the Savings: Discover Amazing Deals and Special Offers on Kid Car Toys that will Thrill Young Drivers!</p>
                            <button className="btn btn-primary">See Offers</button>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
            {/* offer section  */}
            {/* toys section start  */}
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-5xl text-center font-bold mt-5'>Car Toy Shop</h3>
                <p className='text-center my-5'>here you can see all sub category of Toy car for your kids</p>
                <CategoryToy></CategoryToy>
            </div>
            {/* toys section end  */}
            {/* contact us section  */}
            <div className='max-w-7xl mx-auto'>
                <div className="divider"></div>
                
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Contact US</h1>
                            <p className="py-6">We're Here to Help! Get in Touch with Us</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact us section  */}


        </div>
    );
};

export default Home;