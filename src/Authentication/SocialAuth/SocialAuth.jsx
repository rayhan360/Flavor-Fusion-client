import { useContext } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigationType } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const SocialAuth = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigationType()
    const location = useLocation()

    const socialMediaSingIn = media => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success("user logged in successful")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="flex justify-evenly mt-5">
                <button onClick={()=> socialMediaSingIn(googleSignIn)}><FaGoogle className="text-3xl"></FaGoogle></button>
                <button><FaGithub className="text-3xl"></FaGithub></button>
                <button><FaTwitter className="text-3xl"></FaTwitter></button>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SocialAuth;