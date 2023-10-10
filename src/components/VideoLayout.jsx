import VideoJs from "./VideoJs";

const VideoLayout = () => {
  const options = {
    autoplay: false,
    controls: true,
    controlBar: {
      skipButtons: {
        backward: 10,
        forward: 10,
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
