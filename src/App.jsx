import { Route, Routes } from "react-router-dom";
import "./App.css";
import VideoPlayer from "./pages/watch/VideoPlayer.jsx";
import Home from "./pages/home/home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch" element={<VideoPlayer />} />
    </Routes>
  );
}

export default App;
