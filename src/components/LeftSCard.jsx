import { FaEye, FaCalendarAlt } from 'react-icons/fa';

const LeftSCard = ({ news }) => {
    
    const { title, image_url, total_view, author } = news || {};

    return (
        <div>
            <div className="card">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <hr />
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <FaEye />
                            <p className='text-[10px]'>{total_view}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <p className='text-[10px]'>{author.published_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSCard;