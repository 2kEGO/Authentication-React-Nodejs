import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () =>{
    const user = null;

    return user ?<Outlet/> : <Navigate to="/Login"/>;
};

export default ProtectedRoutes;
