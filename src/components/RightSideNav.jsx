import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from "../assets/qZone1.png"
import qZone2 from "../assets/qZone2.png"
import qZone3 from "../assets/qZone3.png"
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const RightSideNav = () => {
    const { googleSignIn, githubSignIn, user } = useContext(AuthContext);

    // handle social sign in
    const handleSocialSignIn = (social) => social().then(rjlt => console.log(rjlt)).catch(err => console.log(err));

    return (
        <div className='mx-5 md:mx-0'>

            {/* social login */}
            {!user && <div className="space-y-2">
                <h3 className="text-lg font-semibold">Login With</h3>
                <button className="btn btn-outline w-full" onClick={() => handleSocialSignIn(googleSignIn)}><FaGoogle />Login With Google</button>
                <button className="btn btn-outline w-full" onClick={() => handleSocialSignIn(githubSignIn)}><FaGithub />Login With GitHub</button>
            </div>}

            {/* Find Us on */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Find Us On</h3>
                <div className="flex items-center gap-2 border rounded-t-lg p-3">
                    <FaFacebook className='text-xl text-[#3B599C]' />
                    <a href="https://facebook.com" target='_blank'><p>Facebook</p></a>
                </div>
                <div className="flex items-center gap-2 border-x p-3">
                    <FaTwitter className='text-xl text-[#58A7DE]' />
                    <a href="https://twitter.com" target='_blank'><p>Twitter</p></a>
                </div>
                <div className="flex items-center gap-2 border rounded-b-lg p-3">
                    <FaInstagram className='text-xl text-[#D82D7E]' />
                    <a href="https://instagram.com" target='_blank'><p>Instagram</p></a>
                </div>
            </div>

            {/* Q-zone */}
            <div className="mt-8 bg-[#eee] p-4">
                <h3 className="text-lg font-semibold">Q-Zone</h3>
                <div className="space-y-5 mt-3 ml-12 md:ml-0">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;