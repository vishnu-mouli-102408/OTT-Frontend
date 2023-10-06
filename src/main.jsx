import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/Styles/flex.css";
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
import Home from "./components/Home/Home.jsx";
import Profile from "./pages/User/Profile.jsx";
import Dashboard from "./pages/User/Dashboard.jsx";
import Auth from "./components/Auth.jsx";
import SpecifiVideo from "./components/SpecifiVideo/SpecifiVideo.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
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
            path: "/user/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/video/:id",
            element: <SpecifiVideo />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  </Provider>
);
