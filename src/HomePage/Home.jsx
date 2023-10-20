import { useEffect, useState } from "react";
import Banner from "./Banner";
import Brands from "./Brand/Brands";
import Latest from "./Latest/Latest";
import Review from "./Review/Review";
import dark from '../assets/dark.png'
import light from '../assets/light.png'


const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );

    // Function to toggle between dark and light modes
    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Update localStorage with the user's mode preference
    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    const bodyStyle = {
        backgroundColor: isDarkMode ? '#262626' : '#fff',
        color: isDarkMode ? '#fff' : '#262626',
    };
    return (
        <div
            style={bodyStyle}>
            <button onClick={toggleMode} className="w-8 absolute right-16 top-8">
                {isDarkMode ? 
                <div className="">
                    <img src={dark} alt="" />
                    <h1 className="text-white text-sm">Dark Mode</h1>
                </div> 
                : 
                <div>
                    <img src={light} alt="" />
                    <h1 className="text-sm text-white">Light Mode</h1>
                </div>}
            </button>
            <Banner></Banner>
            <Brands></Brands>
            <Latest></Latest>
            <Review></Review>
        </div>
    );
};

export default Home;