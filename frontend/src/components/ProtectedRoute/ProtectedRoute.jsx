import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
