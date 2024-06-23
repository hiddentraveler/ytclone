import { useEffect, useState } from "react";
import Video from "../../components/video";
import "./home.css"

export default function Home() {
  const [homevids, setHomeVids] = useState([]);

  async function getvids() {
    const url = "http://localhost:8000/";

    const options = {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Host": "http://localhost:8000/",
        "Origin": "http://localhost:5173/"
      },
    };

    try {

      const response = await fetch(url, options);
      const result = await response.json()
      setHomeVids(result);
    } catch (e) {
      console.log(e);
    }
  }

  function logOut() {
    localStorage.removeItem('user');
    location.replace('/login')
  }
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    location.replace('/login')
  }


  useEffect(() => {
    getvids()
  }, [])

  return (
    <>

      {!user ? "" : (
        <div className="card">
          <img src={user.avatar} alt={user.username} />
          <h3>{user.username}</h3>
          <p >{user.email}</p>
          <button onClick={logOut}>Log Out</button>
        </div>
      )}
      <div className="container">
        {homevids.map((vids) => (
          <Video vids={vids} key={vids.vidId} />
        ))}
      </div>
    </>
  );
}
