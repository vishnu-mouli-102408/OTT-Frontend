import VideoJs from "./VideoJs";

const VideoLayout = () => {
  const options = {
    autoplay: false,
    controls: true,
    width: "100px",
    height: "100px",
    controlBar: {
      skipButtons: {
        backward: 10,
        forward: 5,
      },
    },
    sources: [
      {
        src: "https://d2aq68l8afi62p.cloudfront.net/sample_video.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div>
      <VideoJs options={options} />
    </div>
  );
};

export default VideoLayout;
