import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRout = ({children}) => {
    const location = useLocation();
    console.log(location)
    const {user,lodding} = useContext(AuthContext);
    if(lodding) {
        return <div className="container text-center mt-4 pb-4">
            <span className="loading loading-dots loading-xs"></span>
<span className="loading loading-dots loading-sm"></span>
<span className="loading loading-dots loading-md"></span>
<span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PriveteRout;