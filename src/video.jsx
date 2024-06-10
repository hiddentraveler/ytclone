import Comments from "./comments";
import { Link } from "react-router-dom";

export default function Video({ vids }) {
  console.log(vids.id.videoId)
  return (
    <div className="video">
      <Link to='/comments'>
        <img src={vids.snippet.thumbnails.medium.url} state={vids} alt="video" />
      </Link>
      <div>
        <span>{vids.snippet.title}</span>
      </div>
    </div>
  );
}
