import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.accName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;

        if (password.length < 6) {
            toast.error("Please enter a password of at least six digits");
            return;

        } else if (!/[A-Z]/.test(password)) {
            toast.error("You must enter one input in uppercase");
            return;

        } else if (password != conPassword) {
            toast.error("Password did not match!");
            return;
        }

        // create user with email and password
        createUser(email, password).then(result => {
            sendEmailVerification(result.user).then(toast.success('Verification email send'));
            updateProfile(result.user, { displayName: name }).then();

        }).catch(err => {
            if (err.code == 'auth/email-already-in-use') {
                toast.error('Email already in use');
            }
        });
    }

    useEffect(() => {
        document.title = 'Register';
    }, [])

    return (
        <div>
            <div className="">
                <Navbar />
                <form className="md:w-96 items-center mx-auto shadow-md p-7 rounded-md mt-10" onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Your Name</label>
                        <input type="text" id="name" name="accName" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Full Name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Your Email</label>
                        <input type="email" id="name" name="email" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email Address" required />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium">Password</label>
                        <input type={showPassword ? "text" : "password"} id="name" name="password" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Strong Password" required />
                        <div className="flex justify-end -mt-7 mr-3 cursor-pointer"> <p onClick={() => setPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</p> </div>
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium">Confirm Password</label>
                        <input type={showConPassword ? "text" : "password"} id="name" name="conPassword" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Confirm Password" required />
                        <div className="flex justify-end -mt-7 mr-3 cursor-pointer"> <p onClick={() => setShowConPassword(!showConPassword)}>{showConPassword ? <FaEyeSlash /> : <FaEye />}</p> </div>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" name="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    </div>
                    <input type="submit" value="Register" className="bg-[#113946] text-[#fff] w-full p-2.5 rounded-sm" />
                    <p className="text-center mt-4 text-sm">Have An Account ? <Link to={"/login"} className="text-[#FF6969] hover:underline">Login</Link></p>
                </form>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default Register;