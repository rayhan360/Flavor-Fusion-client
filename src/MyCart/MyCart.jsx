import { Link, useLoaderData } from "react-router-dom";
import deleteIcons from '../assets/delete.png'
import eye from '../assets/eye.png'
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Helmet } from "react-helmet";


const MyCart = () => {
    const cart = useLoaderData()
    const { user } = useContext(AuthContext)

    const emailFind = cart.filter(cart => cart.email === user.email)
   

    const [cartDetails, setCartDetails] = useState(emailFind)
    const handleDelete = _id => {
        console.log(_id);
        // confirmation alert system

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
                fetch(`https://flavor-fusion-server-chi.vercel.app/cart/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = cartDetails.filter(det => det._id !== _id)
                            setCartDetails(remaining)
                        }
                    })
            }
        })

    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Helmet>
                <title>My Cart</title>
            </Helmet>
            {
                cartDetails.map(det => <div className="bg-gray-100 p-8" key={det._id}>
                    <div>
                        <div className="bg-white p-4 rounded-lg shadow-md flex gap-5 justify-between">
                            <div>
                                <img className="w-32 h-32" src={det.img} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold mb-2">{det.name}</h2>
                                <p className="text-gray-500 mb-2">{det.brand}</p>
                                <p className="text-xl font-semibold mb-2">${det.price}</p>
                            </div>
                            <div className="space-y-8 mt-5 cursor-pointer">
                                <button onClick={() => handleDelete(det._id)}>
                                    <img className="w-6" src={deleteIcons} alt="" />
                                </button>
                                <Link>
                                    <img className="w-6" src={eye} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCart;