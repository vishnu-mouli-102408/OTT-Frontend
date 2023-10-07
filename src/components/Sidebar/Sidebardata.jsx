import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon fontSize="large" />,
  },
  {
    title: "Trending",
    path: "/trending",
    icon: <WhatshotIcon fontSize="large" />,
  },
  {
    title: "Saved Videos",
    path: "/savedvideos",
    icon: <PlaylistAddIcon fontSize="large" />,
  },
];
