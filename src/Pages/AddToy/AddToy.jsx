import React from 'react';
import { useForm } from "react-hook-form";
import toypic from '../../assets/toy.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import PageTitle from '../PageTitle/PageTitle';

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/postToy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
        console.log(data);
    }
    return (
        <div>
            <PageTitle title="Add Toy"></PageTitle>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="">
                                <h1 className="text-5xl font-bold text-center">Add toy</h1>
                                <img src={toypic} alt="" />
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" {...register("name")} placeholder="name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL</span>
                                    </label>
                                    <input type="text" {...register("pictureUrl")} placeholder="picture url" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller name</span>
                                    </label>
                                    <input type="text" {...register("sellerName")} placeholder="Seller name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    {user && <input className="input input-bordered" value={user?.email}  {...register("email")} />}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub Category</span>
                                    </label>
                                    <select className="input input-bordered" {...register("category")}>
                                        <option value="bus">bus</option>
                                        <option value="car">car</option>
                                        <option value="truck">truck</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" {...register("price")} placeholder="Price" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" {...register("quantity")} placeholder="Quantity" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" {...register("rating")} placeholder="Rating" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" {...register("description")} placeholder="Description" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Add Toy" />
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

            {/* <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue="test" {...register("example")} />

                <input {...register("firstName")} />

                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <input type="submit" />

            </form> */}
        </div>
    );
};

export default AddToy;