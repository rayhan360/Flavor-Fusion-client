import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "../../BrandProducts/Ratings";


const Latest = () => {
    const [latest, setLatest] = useState([])

    useEffect(() => {
        fetch('https://flavor-fusion-server-chi.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                setLatest(data)
                console.log(data);
            })
    }, [])

    if (latest.length === 0) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div>
            <div className="my-10" data-aos="fade-top" data-aos-duration="1000">
                <h1 className="text-[#ff9d2d] text-center text-5xl font-bold">Our Popular Products</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3">
                <div className="flex flex-col shadow-md h-[600px] rounded-xl bg-clip-border">
                    <div className=" mx-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img
                            className="h-80 w-96"
                            src={latest[2].img}
                            alt="img-blur-shadow"
                        />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Brand: {latest[2].brand}
                        </p>
                        <h5 className="block flex-grow mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Name: {latest[2].name}
                        </h5>

                        <p className="block font-sans text-base antialiased font-light leading-relaxed  text-inherit">
                            Category : {latest[2].type}
                        </p>
                        <div className="flex justify-between">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Price: ${latest[2].price}
                            </p>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                <Ratings rating={latest[2].rating}></Ratings>
                            </p>
                        </div>
                    </div>
                <Link to={`/productDetails/${latest[2]._id}`}>
                        <button
                            className="select-none mb-3 w-full rounded-lg bg-[#ff9d2d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Details button
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col   shadow-md h-[600px] rounded-xl bg-clip-border">
                    <div className=" mx-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img
                            className="h-80 w-96"
                            src={latest[8].img}
                            alt="img-blur-shadow"
                        />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Brand: {latest[8].brand}
                        </p>
                        <h5 className="block mb-2 flex-grow font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Name: {latest[8].name}
                        </h5>

                        <p className="block font-sans text-base antialiased font-light leading-relaxed  text-inherit">
                            Category : {latest[8].type}
                        </p>
                        <div className="flex justify-between">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Price: ${latest[8].price}
                            </p>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            <Ratings rating={latest[8].rating}></Ratings>
                            </p>
                        </div>
                    </div>
                    <Link to={`/productDetails/${latest[8]._id}`}>
                        <button
                            className="select-none mb-3 w-full rounded-lg bg-[#ff9d2d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Details button
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col   shadow-md h-[600px] rounded-xl bg-clip-border">
                    <div className=" mx-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img
                            className="h-80 w-96"
                            src={latest[10].img}
                            alt="img-blur-shadow"
                        />
                    </div>
                    <div className="p-6 flex-grow">
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Brand: {latest[10].brand}
                        </p>
                        <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Name: {latest[10].name}
                        </h5>

                        <p className="block font-sans text-base antialiased font-light leading-relaxed  text-inherit">
                            Category : {latest[10].type}
                        </p>
                        <div className="flex justify-between">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Price: ${latest[10].price}
                            </p>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            <Ratings rating={latest[10].rating}></Ratings>
                            </p>
                        </div>
                    </div>
                    <Link to={`/productDetails/${latest[10]._id}`}>
                        <button
                            className="select-none mb-3 w-full rounded-lg bg-[#ff9d2d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Details button
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col   shadow-md h-[600px] rounded-xl bg-clip-border">
                    <div className=" mx-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img
                            className="h-80 w-96"
                            src={latest[3].img}
                            alt="img-blur-shadow"
                        />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Brand: {latest[3].brand}
                        </p>
                        <h5 className="block flex-grow mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Name: {latest[3].name}
                        </h5>

                        <p className="block font-sans text-base antialiased font-light leading-relaxed  text-inherit">
                            Category : {latest[3].type}
                        </p>
                        <div className="flex justify-between">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Price: ${latest[3].price}
                            </p>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            <Ratings rating={latest[3].rating}></Ratings>
                            </p>
                        </div>

                    </div>
                    <Link to={`/productDetails/${latest[3]._id}`}>
                        <button
                            className="select-none mb-3 w-full rounded-lg bg-[#ff9d2d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Details button
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Latest;