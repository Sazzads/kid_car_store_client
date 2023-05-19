import React from 'react';
import { useForm } from "react-hook-form";
import toypic from '../../assets/toy.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToy = () => {
    const { user } = useContext(AuthContext);
    const toy=useLoaderData();
    
    const {_id,name,price,quantity,description}=toy[0]
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm(); 
    const onSubmit = data => {
        fetch(`http://localhost:5000/mytoy/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        console.log(data);
    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="">
                                <h1 className="text-5xl font-bold text-center">Update toy</h1>
                               
                                <img src={toypic} alt="" />
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" value={name}  className="input input-bordered" disabled/>
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    {user && <input className="input input-bordered" value={user?.email} disabled/>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" defaultValue={price} {...register("price")} placeholder="Price" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" defaultValue={quantity} {...register("quantity")} placeholder="Quantity" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input  type="text" {...register("description")} placeholder="Description" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Update Toy" />
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateMyToy;