import Comments from "../pages/watch/comments";
import { Link } from "react-router-dom";

export default function Video({ vids }) {
  console.log(vids.vidId)
  return (
    <div className="video">
      <Link to={`/watch?v=${vids.vidId}`}>
        <img src={vids.thumbnail} alt="video" width="370" height="200" />
      </Link>
      <div>
        <span>{vids.title}</span>
      </div>
    </div>
  );
}
