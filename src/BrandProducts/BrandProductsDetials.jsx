import { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../Providers/AuthProviders";
import { Helmet } from "react-helmet";

const BrandProductsDetials = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const detailsProduct = useLoaderData()
    const { id } = useParams()
    const findData = detailsProduct.find(details => details._id === id)
    const { name, brand, img, type, rating, price, description } = findData;
    const newData = { name: name, brand: brand, img: img, type: type, rating: rating, price: price, description: description, email:user.email }

    const handleAddToCart = () => {
        fetch('https://flavor-fusion-server-chi.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Helmet>
                <title>{name}</title>
            </Helmet>
            <div className="bg-gray-100">
                <div className="container mx-auto p-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <img
                                    src={img}
                                    alt="Product Image"
                                    className="w-full h-[400px] rounded-lg"
                                />
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Brand: {brand}</p>
                                <h1 className="text-2xl font-semibold">{name}</h1>
                                <p className="text-gray-600 text-sm">Category: {type}</p>
                                <p className="text-2xl text-indigo-600 font-semibold my-4">
                                    ${price}
                                </p>
                                <p className="text-gray-700">
                                    {description}
                                </p>
                                <p className="text-gray-700 text-xl font-semibold mt-5">
                                    Product Rating- {rating} out of 5
                                </p>
                                <div className="flex items-center mt-6">
                                    <button onClick={handleAddToCart} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                                        Add to Cart
                                    </button>
                                    <div className="ml-4">
                                        <button className="text-indigo-600 hover:text-indigo-800">
                                            Add to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductsDetials;