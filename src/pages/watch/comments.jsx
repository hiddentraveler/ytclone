import { useEffect, useState } from "react";
import { useURLID } from "../../hooks/useURLID";

export default function Comments() {
  const vidId = useURLID();
  const [comments, setComments] = useState([]);

  console.log("vid id:" + vidId);
  console.log(vidId);

  async function getComment() {
    const url = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${vidId}&maxResults=100`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "217d05ac2emshe25a3a34c4cd222p10f685jsne44aedced40d",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.items);
    setComments(result.items);
  }
  useEffect(() => {
    getComment(vidId);
  }, []);

  return (
    <span>
      {comments.map((comm) => (
        <p key={comm.id}>{comm.snippet.topLevelComment.snippet.textDisplay}</p>
      ))}
    </span>
  );
}
