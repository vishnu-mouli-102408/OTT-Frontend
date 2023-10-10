import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/Styles/flex.css";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./pages/User/SignIn.jsx";
import SignUp from "./pages/User/SignUp";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import Profile from "./pages/User/Profile.jsx";
import Dashboard from "./pages/SuperAdmin/AdminDashboard.jsx";
import Auth from "./components/Auth.jsx";
import SpecifiVideo from "./components/SpecifiVideo/SpecifiVideo.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import DistributorDashboard from "./pages/Distributor/DistributorDashboard.jsx";
import DistributorDetails from "./pages/SuperAdmin/DistributorDetails.jsx";
import UserDetails from "./pages/SuperAdmin/UserDetails.jsx";
import AddMovie from "./pages/Distributor/AddMovie.jsx";
import MovieCount from "./pages/Distributor/MovieCount.jsx";
import VideoLayout from "./components/VideoLayout.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {
  adminSidebardata,
  distributorData,
} from "./components/Sidebar/Sidebardata.jsx";
import OTPScreen from "./components/OtpPage/OTP.jsx";
import TabsItem from "./pages/Distributor/TabsItem.jsx";
import Privacy from "./pages/Privacy/Privacy.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
import "./services/userAuth.js";

const appRouter = createBrowserRouter([
  {
    element: <Auth />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/privacy",
            element: <Privacy />,
          },
          {
            path: "/detail",
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "/user/profile",
    element: (
      <Auth>
        <Profile />
      </Auth>
    ),
  },
  {
    path: "/user",
    element: (
      <Auth>
        <Dashboard />
      </Auth>
    ),
  },
  {
    path: "/video/:id",
    element: (
      <Auth>
        <SpecifiVideo />
      </Auth>
    ),
  },
  {
    path: "/distributor",
    element: <DistributorDashboard />,
  },
  {
    path: "/distributor/addmovie",
    element: <AddMovie />,
  },
  {
    path: "/distributor/movies",
    element: (
      <div style={{ height: "90vh" }} className="flex-row">
        <Sidebar SidebarData={distributorData} />
        <div style={{ overflow: "auto", width: "100%" }}>
          <TabsItem />
        </div>
      </div>
    ),
  },
  {
    path: "/admin",
    element: <Navigate to="/admin/distributors" />,
  },
  {
    path: "/admin/distributors",
    element: (
      <div style={{ height: "90vh" }} className="flex-row">
        <Sidebar SidebarData={adminSidebardata} />
        <div style={{ overflow: "auto", width: "100%" }}>
          <DistributorDetails />
        </div>
      </div>
    ),
  },
  {
    path: "/admin/movies",
    element: (
      <div style={{ height: "90vh" }} className="flex-row">
        <Sidebar SidebarData={adminSidebardata} />
        <div style={{ overflow: "auto", width: "100%" }}>
          <MovieCount />
        </div>
      </div>
    ),
  },
  {
    path: "/admin/users",
    element: (
      <div style={{ height: "90vh" }} className="flex-row">
        <Sidebar SidebarData={adminSidebardata} />
        <div style={{ overflow: "auto", width: "100%" }}>
          <UserDetails />
        </div>
      </div>
    ),
  },
  {
    path: "/user/login",
    element: <SignIn />,
  },
  {
    path: "/login/otp",
    element: <OTPScreen />,
  },
  {
    path: "/user/signup",
    element: <SignUp />,
  },
  {
    path: "/video/123",
    element: <VideoLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  </Provider>
);
