import { createBrowserRouter } from 'react-router'
import Mainlayout from '../Layout/Mainlayout'
import Games from '../pages/Games'
import Home from '../pages/Home'
import Favourites from '../pages/Favourites'
import { getgamedata, getgamedetail } from '../service/gameLoader'
import Carddetail from '../components/Carddetail'

export const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    hydrateFallbackElement: (
      <div className="h-screen bg-black flex items-center justify-center space-x-2">
        <div className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-blue-600"></div>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
        loader: getgamedata,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/gamesdetails/:id",
        element: <Carddetail />,
        loader: getgamedetail,
      },
    ],
  },
]);