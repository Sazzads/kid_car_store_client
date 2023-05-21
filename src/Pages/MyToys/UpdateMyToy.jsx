import React from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import Swal from 'sweetalert2';

const UpdateMyToy = () => {
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();

    const { _id, name, price, quantity, description, pictureUrl } = toy[0]

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-site-pi.vercel.app/mytoy/${_id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        Swal.fire(
                            'Updated!',
                            'Your Toy Information has been Updated.',
                            'success'
                        )
                    })

            }
        })

    }
    return (
        <div>
            <PageTitle title="Kid Car Store | Update Toy"></PageTitle>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="">
                                <h1 className="text-5xl font-bold text-center">Update toy</h1>

                                <img className='w-1/2 mx-auto mt-5' src={pictureUrl} alt="" />
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" value={name} className="input input-bordered" disabled />
                                </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    {user && <input className="input input-bordered" value={user?.email} disabled />}
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
                                    <input type="text" defaultValue={description} {...register("description")} placeholder="Description" className="input input-bordered" />
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