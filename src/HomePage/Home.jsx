import Banner from "./Banner";
import Brands from "./Brand/Brands";
import Latest from "./Latest/Latest";
import Review from "./Review/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Latest></Latest>
            <Review></Review>
        </div>
    );
};

export default Home;