import { Link, NavLink } from 'react-router-dom';
import defaultUserImg from '../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then().catch(err => console.log(err));
    }

    return (
        <div className="navbar bg-base-100 mt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/career"}>Career</NavLink>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-3">
                    <NavLink to={"/"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-500" : ""}>Home</NavLink>
                    <NavLink to={"/about"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-500" : ""}>About</NavLink>
                    <NavLink to={"/career"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-500" : ""}>Career</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user ? user.photoURL : defaultUserImg} />
                        </div>
                    </label>
                    {user && <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72">
                        <li><a>{user.displayName}</a></li>
                        <li><a>{user.email}</a></li>
                    </ul>}
                </div>
                {user ? <button className="text-[#fff] py-1 px-5 bg-[#113946]" onClick={handleLogOut}>Sign out</button> : <Link to={"/login"}><button className="text-[#fff] py-1 px-5 bg-[#113946]">Login</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;