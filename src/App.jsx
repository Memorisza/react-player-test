import { useState } from 'react'
import VideoPlayer from './video_player'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <VideoPlayer/>
    </div>
  )
}

export default App
