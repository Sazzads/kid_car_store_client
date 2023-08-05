import React from 'react';
import image1 from "../../assets/baby1.png"
import image2 from "../../assets/baby2.png"

const DayDeal = () => {
    return (
        <div className='max-w-7xl mx-auto my-10 bg-red-300 py-5'>
            <div className='grid md:grid-cols-3  '>
                <div>
                    <img src={image1} alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='text-5xl uppercase font-serif my-4 py-5'>Deal Of The Day</h3>
                    <p><span className='text-white my-4'>UPTO 35% OFF</span> ON ALL OTHER BABY PRODUCTS</p>
                    <button className='bg-pink-700 rounded-lg px-4 py-2 mt-5 text-white '>Shop Now</button>
                </div>
                <div>
                <img src={image2} alt="" />

                </div>
            </div>
        </div>
    );
};

export default DayDeal;