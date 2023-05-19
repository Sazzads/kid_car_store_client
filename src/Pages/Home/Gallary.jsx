import React, { useState } from 'react';

const Gallary = () => {
    const [gallaries, setGallaries] = useState([])
    fetch('gallarypic.json')
        .then(res => res.json())
        .then(data => setGallaries(data))


    return (
        <div className='my-1'>

            <div className="grid grid-cols-6 md:grid-cols-9 gap-1 ">
                {
                    gallaries.map(data => <div data-aos="flip-right"
                    data-aos-duration="1000" key={data.id} className="card w-full bg-base-100 rounded-lg shadow-xl">
                        <div className=" rounded-lg">
                            <img className='rounded-lg' src={data.image} alt="" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallary;