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
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  // Routes,
} from "react-router-dom";
import SignIn from "./pages/User/SignIn.jsx";
import SignUp from "./pages/User/SignUp";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import Profile from "./pages/User/Profile.jsx";
// import Dashboard from "./pages/SuperAdmin/AdminDashboard.jsx";
import Auth from "./components/Auth.jsx";
// import SpecifiVideo from "./components/SpecifiVideo/SpecifiVideo.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import DistributorDashboard from "./pages/Distributor/DistributorDashboard.jsx";
import DistributorDetails from "./pages/SuperAdmin/DistributorDetails.jsx";
import UserDetails from "./pages/SuperAdmin/UserDetails.jsx";
import AddMovie from "./pages/Distributor/AddMovie.jsx";
// import MovieCount from "./pages/Distributor/MovieCount.jsx";
// import VideoLayout from "./components/VideoLayout.jsx";
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
import MovieCountAdmin from "./pages/SuperAdmin/MovieDetails.jsx";
import Unauthorized from "./components/Unauthorized.jsx";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    // <Routes>
    <Route path="/" element={<App />}>
      <Route path="/login" element={<SignIn />} />
      <Route path="/login/otp" element={<OTPScreen />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<Auth Allowedrole={"user"} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/detail" element={<MovieDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route element={<Auth Allowedrole={"distributor"} />}>
        <Route path="/distributor" element={<DistributorDashboard />} />
        <Route path="/distributor/addmovie" element={<AddMovie />} />
        <Route
          path="/distributor/movies"
          element={
            <div style={{ height: "90vh" }} className="flex-row">
              <Sidebar SidebarData={distributorData} />
              <div style={{ overflow: "auto", width: "100%" }}>
                <TabsItem />
              </div>
            </div>
          }
        />
      </Route>
      <Route element={<Auth Allowedrole={"superAdmin"} />}>
        <Route path="/admin" element={<Navigate to="/admin/distributors" />} />
        <Route
          path="/admin/distributors"
          element={
            <div style={{ height: "90vh" }} className="flex-row">
              <Sidebar SidebarData={adminSidebardata} />
              <div style={{ overflow: "auto", width: "100%" }}>
                <DistributorDetails />
              </div>
            </div>
          }
        />
        <Route
          path="/admin/movies"
          element={
            <div style={{ height: "90vh" }} className="flex-row">
              <Sidebar SidebarData={adminSidebardata} />
              <div style={{ overflow: "auto", width: "100%" }}>
                <MovieCountAdmin />
              </div>
            </div>
          }
        />
        <Route
          path="/admin/users"
          element={
            <div style={{ height: "90vh" }} className="flex-row">
              <Sidebar SidebarData={adminSidebardata} />
              <div style={{ overflow: "auto", width: "100%" }}>
                <UserDetails />
              </div>
            </div>
          }
        />
      </Route>
    </Route>
    // </Routes>
  )
);

// const appRouter = createBrowserRouter([
//   {
//     element: <Auth />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//         children: [
//           {
//             path: "/",
//             element: <Home />,
//           },
//           {
//             path: "/about",
//             element: <About />,
//           },
//           {
//             path: "/contact",
//             element: <Contact />,
//           },
//           {
//             path: "/privacy",
//             element: <Privacy />,
//           },
//           {
//             path: "/detail",
//             element: <MovieDetail />,
//           },
//           {
//             path: "/user/profile",
//             element: <Profile />,
//           },
//           {
//             path: "/user",
//             element: <Dashboard />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/video/:id",
//     element: (
//       <Auth>
//         <SpecifiVideo />
//       </Auth>
//     ),
//   },
//   {
//     element: <Auth />,
//     children: [
//       {
//         path: "/distributor",
//         element: <DistributorDashboard />,
//       },
//       {
//         path: "/distributor/addmovie",
//         element: <AddMovie />,
//       },
//       {
//         path: "/distributor/movies",
//         element: (
//           <div style={{ height: "90vh" }} className="flex-row">
//             <Sidebar SidebarData={distributorData} />
//             <div style={{ overflow: "auto", width: "100%" }}>
//               <TabsItem />
//             </div>
//           </div>
//         ),
//       },
//       {
//         path: "/admin",
//         element: <Navigate to="/admin/distributors" />,
//       },
//       {
//         path: "/admin/distributors",
//         element: (
//           <div style={{ height: "90vh" }} className="flex-row">
//             <Sidebar SidebarData={adminSidebardata} />
//             <div style={{ overflow: "auto", width: "100%" }}>
//               <DistributorDetails />
//             </div>
//           </div>
//         ),
//       },
//       {
//         path: "/admin/movies",
//         element: (
//           <div style={{ height: "90vh" }} className="flex-row">
//             <Sidebar SidebarData={adminSidebardata} />
//             <div style={{ overflow: "auto", width: "100%" }}>
//               <MovieCountAdmin />
//             </div>
//           </div>
//         ),
//       },
//       {
//         path: "/admin/users",
//         element: (
//           <div style={{ height: "90vh" }} className="flex-row">
//             <Sidebar SidebarData={adminSidebardata} />
//             <div style={{ overflow: "auto", width: "100%" }}>
//               <UserDetails />
//             </div>
//           </div>
//         ),
//       },
//     ],
//   },
//   {
//     path: "/user/login",
//     element: <SignIn />,
//   },
//   {
//     path: "/login/otp",
//     element: <OTPScreen />,
//   },
//   {
//     path: "/user/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/video/123",
//     element: <VideoLayout />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  </Provider>
);
