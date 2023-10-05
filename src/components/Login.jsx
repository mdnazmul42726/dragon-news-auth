import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";

const Login = () => {
    const { emailSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        emailSignIn(email, password).then(result => {
            navigate(location?.state ? location.state : "/")
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        document.title = 'Login';
    }, [])

    return (
        <div className="">
            <Navbar />
            <form className="md:w-96 items-center mx-auto shadow-md p-7 rounded-md mt-10" onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">Email Address</label>
                    <input type="email" id="name" name="email" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email Address" required />
                </div>
                <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium">Password</label>
                    <input type={showPassword? "text": "password"} id="name" name="password" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Strong Password" required />
                    <div className="flex justify-end -mt-7 mr-3 cursor-pointer"> <p onClick={()=> setPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</p> </div>
                </div>
                <p className="text-sm mb-4 cursor-pointer hover:text-sky-500">Forgot Your Password?</p>
                <button type="submit" className="bg-[#113946] text-[#fff] w-full p-2.5 rounded-sm">Login</button>
                <p className="text-center mt-4 text-sm">Don’t Have An Account ? <Link to={"/register"} className="text-[#FF6969] hover:underline">Register</Link></p>
            </form>

        </div>
    );
};

export default Login;