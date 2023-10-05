import { useState } from "react";
import NewsCard from "./NewsCard";

const MainNews = ({ news }) => {
    const [showAll, setShowAll] = useState(3);

    return (
        <div className="mx-5 md:mx-0">
            {news.slice(0, showAll).map(aNews => <NewsCard key={aNews._id} news={aNews} />)}

            <div className="flex justify-center mt-5">
                {showAll == 3 ? <button className="text-center transition-all border bg-[#113946] hover:bg-transparent hover:text-[#113946] text-[#fff] py-2 px-4" onClick={() => setShowAll(news.length)}>Show All</button> :
                    <button className="text-center transition-all border bg-[#113946] hover:bg-transparent hover:text-[#113946] text-[#fff] py-2 px-4" onClick={() => setShowAll(3)}>Show Less</button>}
            </div>

        </div >
    );
};

export default MainNews;