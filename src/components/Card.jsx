import React from 'react'
import { Star } from "lucide-react";
import { useNavigate } from 'react-router';

const Card = ( {data} ) => {
    
  // console.log(data)
  
  const navigate = useNavigate()

  return (
    <div className="h-85 w-75 bg-black rounded-md flex flex-col gap-4 overflow-hidden relative">
      <img
        className="w-full h-[50%] transition delay-150 duration-300 ease-in-out hover:scale-110 overflow-hidden"
        src={data.background_image}
        alt=""
      />
      <div className='px-2 flex justify-between'>
              <h2>{data.name}</h2>
              <div className='flex gap-2'><Star color='yellow' />{data.rating}</div>
      </div>
      <div className='px-2 flex flex-wrap gap-2'>
          {data.ratings.map((item) => {
            return (<p>{item.title}</p>)
          })}
      </div>
      <div className="absolute bottom-2 left-23">
        <button onClick={()=>{navigate(`/gamesdetails/${data.id}`)}} className="px-5 py-2 bg-white text-black rounded-md cursor-pointer">View Details </button>
      </div>
    </div>
  );
}

export default Card