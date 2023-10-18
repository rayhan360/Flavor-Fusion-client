import { Link, useLoaderData } from "react-router-dom";
import deleteIcons from '../assets/delete.png'
import eye from '../assets/eye.png'
const MyCart = () => {
    const cartDetails = useLoaderData()
    return (
        <div className="grid grid-cols-3">
            {
                cartDetails.map(det => <div className="bg-gray-100 p-8" key={det._id}>
                    <div>
                        <div className="bg-white p-4 rounded-lg shadow-md flex gap-5 justify-between">
                            <div>
                                <img className="w-32 h-32" src={det.img} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Product 1</h2>
                                <p className="text-gray-500 mb-2">Description of Product 1.</p>
                                <p className="text-xl font-semibold mb-2">$20.00</p>
                            </div>
                            <div className="space-y-8 mt-5 cursor-pointer">
                                <button>
                                    <img className="w-6" src={deleteIcons} alt="" />
                                </button>
                                <Link to={`/productDetails/${det._id}`}>
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