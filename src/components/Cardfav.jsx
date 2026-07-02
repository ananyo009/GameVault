import React from 'react'
import { useNavigate } from 'react-router';

const Cardfav = ({ data, remove}) => {
  const navigate = useNavigate();
  console.log(data);
  
  return (
    <div   className="h-90 w-70 bg-black rounded-md  overflow-hidden relative">
      <div className="mb-1">
        <img className="hover:scale-110" src={data.background_image} alt="" />
      </div>
      <div className="flex justify-between mb-1 p-2">
        <h2 className="text-lg">{data.name}</h2>
        <p>{data.rating}</p>
      </div>
      <div className="flex justify-between mb-1 p-2">
        <p>{data.publishers[0].name}</p>
        <p>{data.tags[6].name}</p>
      </div>
      <div onClick={() => { navigate(`/gamesdetails/${data.id}`) }} className="flex justify-around mb-1 p-2 gap-2">
        <button className="bg-blue-500 px-2 py-2 rounded-md cursor-pointer active:scale-95">
          details
        </button>
        <button onClick={() => remove(data.id)} className="bg-red-500 px-2 py-2 rounded-md ">
          remove
        </button>
      </div>
    </div>
  );
}

export default Cardfav