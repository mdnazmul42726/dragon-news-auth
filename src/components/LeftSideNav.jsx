import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSCard from "./LeftSCard";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('categories.json').then(res => res.json()).then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('news.json').then(res => res.json()).then(data => setNews(data));
    }, [])

    return (
        <div className="p-5">
            <h3 className="text-lg font-semibold">All Caterogy</h3>
            {
                categories.map(caterogy => <Link to={`/caterogy/${caterogy.id}`} key={caterogy.id}><p className="p-3 bg-[#eee] mb-2 rounded-md hover:bg-[#113946] transition hover:text-[#fff] focus:bg-[#113946]">{caterogy.name}</p></Link>)
            }
            <div className="mt-5">
                {
                    news.slice(1, 4).map(news => <LeftSCard key={news.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;