import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const SecureRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();

    if (loding) {
        return (
            <div className="text-center min-h-screen items-center flex justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login" />
};

export default SecureRoute;