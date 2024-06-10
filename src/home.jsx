import { useEffect, useState } from 'react'
import Video from './video.jsx'

export default function Home() {

  const [suggVids, setSuggVids] = useState([])
  const [searchVids, setSearchVids] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  async function getvids() {
    const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '217d05ac2emshe25a3a34c4cd222p10f685jsne44aedced40d',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.items);
    setSuggVids(result.items)
  }

  async function searchVidsFunc(searchTerm) {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '217d05ac2emshe25a3a34c4cd222p10f685jsne44aedced40d',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.items);
    setSearchVids(result.items)
  }


  // useEffect(() => {
  //   getvids()
  // }, [])
  return (
    <>

      <div className='container'>
        <button onClick={getvids}>Recomendations</button>
        {suggVids.map((vids) => (
          <Video vids={vids} key={vids.id.videoId} />
        ))}
      </div>
      <div className='container'>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={() => searchVidsFunc(searchTerm)}>Search</button>
        <div>
          {searchVids.map((vids) => (
            <Video vids={vids} key={vids.id.videoId} />
          ))}
        </div>
      </div>
    </>
  )
}
