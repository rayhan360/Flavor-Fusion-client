import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProducts = () => {
    const product = useLoaderData()
    const { name, brand, img, type, rating, price, description, _id } = product;


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const img = form.img.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const updatedProduct = { name, brand, img, type, rating, price, description }
        console.log(updatedProduct);

        // updated operation
        fetch(`https://flavor-fusion-server-chi.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <section className="contact bg-contact-bg bg-cover bg-center bg-fixed my-10">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mx-auto max-w-3xl">
                    <h3 className="text-3xl font-bold text-center mb-6">Update Your Product</h3>
                    <div className="mb-4 flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-4">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Product Name"
                                defaultValue={name}
                                name="name"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Brand Name"
                                defaultValue={brand}
                                name="brand"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-4">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                name="img"
                                placeholder="Image URL"
                                defaultValue={img}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Product Type"
                                defaultValue={type}
                                name="type"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-4">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                name="price"
                                placeholder="Price"
                                defaultValue={price}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Rating"
                                defaultValue={rating}
                                name="rating"
                                required
                            />
                        </div>
                    </div>

                    <textarea
                        className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="description"
                        placeholder="Description"
                        defaultValue={description}
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <input

                        type="submit"
                        value="UPDATe"
                        className="btn bg-[#ff9d2d] w-full text-white px-5 py-2 rounded-md mt-4 hover:bg-[#f9c589]"
                        required
                    />
                </form>
            </section>
        </div>
    );
};

export default UpdateProducts;