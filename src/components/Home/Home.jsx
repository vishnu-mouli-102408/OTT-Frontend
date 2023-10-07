import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { videodata } from "./videos";
import VideoCard from "../VideoCard/VideoCard";
import "./Home.css";
import { SidebarData } from "../Sidebar/Sidebardata";
export default function Home() {
  return (
    <div className="flex-row">
      <div>
        <Sidebar SidebarData={SidebarData} />
      </div>
      <div className="flex-row flex-wrap videoContent">
        {videodata.map((video) => (
          <VideoCard item={video} />
        ))}
      </div>
    </div>
  );
}
