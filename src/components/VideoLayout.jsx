import VideoJs from "./VideoJs";

const VideoLayout = ({ videoLink }) => {
  console.log(videoLink, "this is link");
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
        src: videoLink,
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
