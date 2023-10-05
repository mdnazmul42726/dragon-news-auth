import { useContext } from "react";
import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import MainNews from "../components/MainNews";
import Navbar from "../components/Navbar";
import RightSideNav from "../components/RightSideNav";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const news = useLoaderData();

    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <div>
            <div className=""><Header /></div>
            <div className="flex p-2 bg-[#eee] mt-6">
                <button className="text-[#fff] py-2 px-5 bg-[#D72050]">Latest</button>
                <Marquee pauseOnHover={true}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis molestiae atque dicta debitis, numquam doloribus similique laborum.</Marquee>
            </div>
            <div className=""><Navbar /></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className=""><LeftSideNav /></div>
                <div className="md:col-span-2"><MainNews news={news} /></div>
                <div className=""><RightSideNav /></div>
            </div>
        </div>
    );
};

export default Home;