import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './home.jsx'
import Comments from './comments.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comments' element={<Comments />} />
    </Routes>
  )
}

export default App
