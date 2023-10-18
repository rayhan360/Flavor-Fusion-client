/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


const BrandProducts = () => {
    const brandProduct = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const findData = brandProduct.find(product => product.id === intId)
    const { slider1, slider2, slider3, brand_name } = findData;

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    const filterData = product.filter(pro => pro.brand === brand_name)
    // console.log(filterData);


    const setting = {
        modules: [Navigation, Autoplay],
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }


    }

    return (
        <div>
            <Swiper {...setting} navigation={true}  >
                <SwiperSlide>
                    <div classNameName=''>
                        <img src={slider1} className='h-[500px] w-screen' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div classNameName=''>
                        <img src={slider2} className='h-[500px] w-screen' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div classNameName=''>
                        <img src={slider3} className='h-[500px] w-screen' alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {
                    filterData.map(product => <div key={product._id}>
                        <div className="flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                            <div className=" mx-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                <img
                                className="h-80 w-96"
                                    src={product.img}
                                    alt="img-blur-shadow"
                                    layout="fill"
                                />
                            </div>
                            <div className="p-6">
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Product Brand: {product.brand}
                                </p>
                                <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Name: {product.name}
                                </h5>

                                <p className="block font-sans text-base antialiased font-light leading-relaxed  text-inherit">
                                    Type of Product : {product.type}
                                </p>
                                <div className="flex justify-between">
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        Price: ${product.price}
                                    </p>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        Product Rating- {product.rating} out of 5
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 pt-0 flex gap-5">
                                <button
                                    className="select-none rounded-lg bg-[#ff9d2d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    Details button
                                </button>
                                <button
                                    className="select-none rounded-lg bg-[#ff9d2d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    Update Product
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default BrandProducts;