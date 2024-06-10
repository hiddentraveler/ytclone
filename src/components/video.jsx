import Comments from "../pages/watch/comments";
import { Link } from "react-router-dom";

export default function Video({ vids }) {
  console.log(vids.id.videoId);
  return (
    <div className="video">
      <Link to={`/watch?v=${vids.id.videoId}`}>
        <img src={vids.snippet.thumbnails.medium.url} alt="video" />
      </Link>
      <div>
        <span>{vids.snippet.title}</span>
      </div>
    </div>
  );
}
