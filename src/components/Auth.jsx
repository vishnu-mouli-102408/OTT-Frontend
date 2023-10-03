import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const isLoggedIn = true; // Mimic the user data to test routing authentication
  if (!isLoggedIn) {
    return <Navigate to="/user/login" />;
  }
  return <Outlet />;
};

export default Auth;
