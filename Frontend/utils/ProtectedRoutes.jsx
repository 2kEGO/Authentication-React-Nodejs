import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext} from '../../context/AuthContext.js';

const ProtectedRoutes = (AuthContext) =>{
    const [auth, setAuth] =  useContext(AuthContext);

    return auth ?<Outlet/> : <Navigate to="/Login"/>;
};

export default ProtectedRoutes;
