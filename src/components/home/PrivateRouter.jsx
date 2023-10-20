import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const PrivateRouter = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
          <>
            <div className="hero min-h-screen bg-base-200">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </>
        );
    }
    
    if (user) {
        return children;
    }
    
    return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;