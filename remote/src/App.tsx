import { useState } from 'react'
import './App.css'
import r2wc from '@r2wc/react-to-web-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is coming from the remote!
        </p>
      </div>
    </>
  )
}

const WebApp = r2wc(App)

export default WebApp
