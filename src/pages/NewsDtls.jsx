import { Link, useParams } from "react-router-dom";
import RightSideNav from "../components/RightSideNav";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleLeft } from 'react-icons/fa';

const NewsDtls = () => {
    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("../../public/news.json").then(res => res.json()).then(data => setData(data));
        document.title = 'Single News'
    }, []);

    const newData = data.find(data => data._id == id);
    console.log(newData);
    const { title, image_url, details } = newData || {}

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-5 mt-10">
                <div className="col-span-4">
                    <div className="card bg-base-100 mr-5">
                        <figure><img src={image_url} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                        </div>
                    </div>
                </div>
                <div className=""><RightSideNav /></div>
                <Link to={"/"}><button className="flex items-center rounded-sm bg-[#D72050] py-1 px-2 text-[#fff]"><FaAngleLeft />All news in this category</button></Link>
            </div>
        </div>
    );
};

export default NewsDtls;