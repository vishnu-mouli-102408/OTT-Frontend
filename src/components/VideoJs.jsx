/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

import videojs from "video.js";
import "video.js/dist//video-js.css";
// import video from "./video.mp4";
import "../index.css";
import "./videojs.css";

const VideoJs = ({ options }) => {
  // Your JSX for the video player controls here.
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);
    }

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);

  return (
    <>
      <div data-vjs-player style={{ maxHeight: "400px!important" }}>
        <video
          ref={videoRef}
          className="video-js vjs-bug-play-centered"
        ></video>
      </div>
    </>
  );
};

export default VideoJs;
