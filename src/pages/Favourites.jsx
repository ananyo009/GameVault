import React, { useContext, useEffect } from 'react'
import { GameDataContext } from '../context/Gamecontext'
import Cardfav from '../components/Cardfav'

const Favourites = () => {
  const { favourite, setFavourite } = useContext(GameDataContext)

  useEffect(() => {
    console.log('favourites:', favourite)
  }, [favourite])

  if (favourite.length === 0) {
    return <p>No favourites yet</p>
  }

  function remove(item) {
    const temparr = favourite.filter((game) => game.id !== item)
    setFavourite(temparr)
  }

  return (
    <div className='h-full w-full px-3'>
      <h1 className='text-5xl font-semibold mb-6'>Your Favourites</h1>
      <p className='text-xl mb-2'>Manage and launch your curated collection of saved titles</p>
      <div className='flex gap-5 text-xl mb-5'>
        <h2 className='text underline decoration-blue-600 text-blue-600'>All games</h2>
        <h2>Recently added</h2>
        <h2>installed</h2>
      </div>
      <div className='flex flex-wrap gap-4'>
        {favourite.map((item,idx) => {
          return (<Cardfav key={idx} data={item} remove={remove} />)
        })
        }
        
      </div>
   </div>
  )
}

export default Favourites