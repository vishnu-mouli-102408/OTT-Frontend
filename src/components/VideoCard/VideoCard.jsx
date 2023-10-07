import "./VideoCard.css";
import { Link } from "react-router-dom";
const VideoCard = ({ item }) => {
  return (
    <Link to={`/video/${item.id}`}>
      <div className="card">
        <img src={item.thumbnailUrl} height={152} width={280} />
        <div className="flex-row flex-between align-item-center video-footer">
          <img
            src={item.channel.profile_image_url}
            height={30}
            width={30}
            style={{ margin: "20px" }}
          />
          <div>{item.title}</div>
        </div>
        <div className="flex-row flex-end" style={{ margin: "10px" }}>
          <div style={{ marginRight: "10px" }}>{item.view_count}</div>
          <div>{item.published_at}</div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
