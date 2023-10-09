/* eslint-disable react/jsx-key */
import Sidebar from "../Sidebar/Sidebar";
import { videodata } from "./videos";
import VideoCard from "../VideoCard/VideoCard";
import "./Home.css";
import { SidebarData } from "../Sidebar/Sidebardata";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <div className="flex-row">
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Sidebar SidebarData={SidebarData} />
      </Box>
      <div className="flex-row flex-wrap videoContent justify-content-center">
        {videodata.map((video) => (
          <VideoCard item={video} />
        ))}
      </div>
    </div>
  );
}
