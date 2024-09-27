import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AllPlayers from "./components/AllPlayers"
import SinglePlayer from "./components/SinglePlayer"
 
import './App.css'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/players' element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
