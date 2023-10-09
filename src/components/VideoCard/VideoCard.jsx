/* eslint-disable react/prop-types */
import "./VideoCard.css";
import { Link } from "react-router-dom";
const VideoCard = ({ item }) => {
  return (
    <Link
      to={`/video/${item.id}`}
      className="title"
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <img
          src={item.thumbnailUrl}
          height="auto"
          width="100%"
          style={{ borderRadius: "9px" }}
        />
        <div className="flex-row flex-between align-item-center video-footer">
          <img
            src={item.channel.profile_image_url}
            height={30}
            width={30}
            style={{ margin: "20px" }}
          />
          <div className="m-auto">{item.title}</div>
        </div>
        <div className="flex-row flex-end subtitle">
          <div style={{ marginRight: "10px" }}>{item.view_count}</div>
          <div>{item.published_at}</div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
