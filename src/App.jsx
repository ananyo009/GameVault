import React from 'react'
import { RouterProvider} from 'react-router'
import { approuter } from './router/Approute'
import Gamecontext from './context/Gamecontext'

const App = () => {
  return (
    <Gamecontext>
      <RouterProvider router={approuter}/>
    </Gamecontext>
   
  )
}

export default App