/* eslint-disable react/prop-types */
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Auth = ({ Allowedrole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  return token && Allowedrole == role ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  // const [currentUser, setCurrentUser] = useState(undefined);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (localStorage.getItem("token")) {
  //       setCurrentUser({ ...localStorage });
  //     } else {
  //       setCurrentUser(null);
  //     }
  //   }, 2000);
  // }, []);
  // console.log(currentUser?.role);

  // if (currentUser === undefined) {
  //   return null;
  // }

  // if (!currentUser) {
  //   return <Navigate to="/user/login" />;
  // }

  // if (currentUser?.role == "distributor") {
  //   return <Navigate to="/distributor" />;
  // }
  // return <Outlet />;
};

export default Auth;
