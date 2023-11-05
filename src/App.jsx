
import { Outlet } from 'react-router-dom'
import Bloglayout from './Layout/Bloglayout'

function App() {
  

  return (
      <Bloglayout>
        <Outlet></Outlet>
      </Bloglayout>  
  )
}

export default App
