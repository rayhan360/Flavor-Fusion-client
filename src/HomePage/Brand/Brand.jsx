/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const {id, brand_name, brand_img } = brand;

    return (
        <div>
            <Link to={`/brandProducts/${id}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={brand_img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{brand_name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Brand;