import React from "react";
import { useParams } from "react-router-dom";
import "./Specific.css";
import { Divider } from "@mui/material";
export default function SpecifiVideo() {
  const { id } = useParams();
  return (
    <div>
      <div>
        <img
          src="https://www.shoutmeloud.com/wp-content/uploads/2012/08/How-to-make-a-video-go-viral.jpg"
          className="video"
        />
        <div style={{ padding: "10px" }}>
          <div className="videotitle">
            Yellow Strikers are Ready to Strike Big | Watch it on Viu | iB
            Cricket Super Over League
          </div>
          <Divider style={{ margin: "10px" }} />
          <div>
            <div>2K views • Mar 14, 2019</div>
          </div>
          <div className="flex-row align-items-center">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
              height={20}
              width={60}
            />

            <div style={{ marginLeft: "20px" }}>
              Uploaded By <br />
              Cricket
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
