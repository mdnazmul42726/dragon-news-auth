import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {

    return (
        <div>
            <div className="">
                <img className='mx-auto w-[60%] md:w-[30%]' src={logo} alt="Dragon news Logo" />
            </div>
            <div className="text-center mt-5">
                <p className='opacity-80'>Journalism Without Fear or Favour</p>
                <p className='text-xl mt-1'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;