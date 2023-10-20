import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'

const AddProduct = () => {
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
        const newProduct = { name, brand, img, type, rating, price, description }
        console.log(newProduct);

        // send data to the server
        fetch('https://flavor-fusion-server-chi.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
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
                    form.reset()
                }
            })
    }
    return (
        <div>
            <section className="contact bg-contact-bg bg-cover bg-center bg-fixed my-10">

                <Helmet>
                    <title>Add Product</title>
                </Helmet>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mx-auto max-w-3xl">
                    <h3 className="text-3xl font-bold text-center mb-6">Add Your Product</h3>
                    <div className="mb-4 flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-4">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Product Name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Brand Name"
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
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Product Type"
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
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder="Rating"
                                name="rating"
                                required
                            />
                        </div>
                    </div>

                    <textarea
                        className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="description"
                        placeholder="Description"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <input

                        type="submit"
                        value="ADD"
                        className="btn bg-[#ff9d2d] w-full text-white px-5 py-2 rounded-md mt-4 hover:bg-[#f9c589]"
                        required
                    />
                </form>
            </section>
        </div>
    );
};

export default AddProduct;