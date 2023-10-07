import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MovieIcon from "@mui/icons-material/Movie";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Trending",
    path: "/trending",
    icon: <WhatshotIcon />,
  },
  {
    title: "Saved Videos",
    path: "/savedvideos",
    icon: <PlaylistAddIcon />,
  },
];
export const distributorData = [
  {
    title: "Upload Movie",
    path: "/distributor/addmovie",
    icon: <CloudUploadIcon />,
  },
  {
    title: "Movies List",
    path: "/distributor/movies",
    icon: <MovieIcon />,
  },
  {
    title: "Commission",
    path: "/distributor/commission",
    icon: <AttachMoneyIcon />,
  },
];
export const adminSidebardata = [
  {
    title: "Distributors",
    path: "/admin/distributors",
    icon: <GroupIcon />,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: <PeopleOutlineIcon />,
  },
  {
    title: "Movies",
    path: "/admin/movies",
    icon: <MovieCreationIcon />,
  },
  {
    title: "Total Earnings",
    path: "",
    icon: <PaidIcon />,
  },
  {
    title: "Watch Hours",
    path: "",
    icon: <AccessTimeFilledIcon />,
  },
  {
    title: "Commission",
    path: "",
    icon: <PaidIcon />,
  },
];
