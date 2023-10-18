import { useEffect, useState } from "react";
import Brand from "./Brand";



const Brands = () => {
    const [brandCard, setBrandCard] = useState([])

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => {
                setBrandCard(data)
            })
    }, [])

    return (
        <div>
            <div className="my-10" data-aos="fade-top" data-aos-duration="1000">
                <h1 className="text-[#ff9d2d] text-center text-5xl font-bold">Our Category</h1>
            </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-5">
                    {
                        brandCard.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>
        </div>
    );
};

export default Brands;