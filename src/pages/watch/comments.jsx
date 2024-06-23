import { useEffect, useState } from "react";
import { useURLID } from "../../hooks/useURLID";

export default function Comments() {
  const vidId = useURLID();
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");

  console.log("vid id:" + vidId);
  console.log(vidId);

  async function getComment() {
    const url = "http://localhost:8000/comments";

    const options = {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Host": "http://localhost:8000/",
        "Origin": "http://localhost:5173/"
      },
      body: JSON.stringify({
        vidId: vidId,
      })
    };

    try {

      const response = await fetch(url, options);
      const result = await response.json()
      console.log(result);
      setComments(result);
    } catch (e) {
      console.log(e);
    }
  }



  useEffect(() => {
    getComment(vidId);
  }, []);

  return (
    <>

      <span>
        {comments.map((comm) => (
          <p key={comm.commentId}>{comm.comment}</p>
        ))}
      </span>
    </>
  );
}
