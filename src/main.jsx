import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/User/SignIn.jsx";
import SignUp from "./pages/User/SignUp.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Profile from "./pages/User/Profile.jsx";
import Dashboard from "./pages/SuperAdmin/AdminDashboard.jsx";
import Auth from "./components/Auth.jsx";
import DistributorDashboard from "./pages/Distributor/DistributorDashboard.jsx";
import DistributorDetails from "./pages/SuperAdmin/DistributorDetails.jsx";
import MovieDetails from "./pages/SuperAdmin/MovieDetails.jsx";
import UserDetails from "./pages/SuperAdmin/UserDetails.jsx";
import AddMovie from "./pages/Distributor/AddMovie.jsx";
import MovieCount from "./pages/Distributor/MovieCount.jsx";
import VideoLayout from "./components/VideoLayout.jsx";

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
            path: "/user/profile",
            element: <Profile />,
          },
          {
            path: "/user",
            element: <Dashboard />,
          },
          {
            path: "/distributor",
            element: <DistributorDashboard />,
          },
          {
            path: "/admin",
            element: <Dashboard />,
          },
          {
            path: "/admin/distributorcount",
            element: <DistributorDetails />,
          },
          {
            path: "/admin/moviecount",
            element: <MovieDetails />,
          },
          {
            path: "/admin/usercount",
            element: <UserDetails />,
          },
          {
            path: "/distributor/addmovie",
            element: <AddMovie />,
          },
          {
            path: "/distributor/movies",
            element: <MovieCount />,
          },
        ],
      },
    ],
  },
  {
    path: "/user/login",
    element: <SignIn />,
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
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
