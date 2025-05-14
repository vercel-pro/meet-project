import { Route, Routes } from 'react-router-dom'
import './assets/css/tailwind.css'
import HomePage from './pages/HomePage'
import CallRoomPage from './pages/room/CallRoomPage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/call-room/:roomCode' element={<CallRoomPage/>}/>
    </Routes>
  )
}

export default App
