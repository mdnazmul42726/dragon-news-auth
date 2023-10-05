import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details } = news || {}

    console.log(news);

    return (
        <div className="mt-10">
            <div className="card card-compact bg-base-100">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${news._id}`} className="text-red-600 font-bold">Read More...</Link> </p> : <p>{details}</p>}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;