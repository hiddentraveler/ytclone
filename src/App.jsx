import { Route, Routes } from "react-router-dom";
import "./App.css";
import Watch from "./pages/watch/VideoPlayer.jsx";
import Home from "./pages/home/home.jsx";
import LogIn from "./pages/login/login.jsx";
import SignUp from "./pages/signup/signup.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
}

export default App;
