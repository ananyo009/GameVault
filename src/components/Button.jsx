import React from 'react'

const Button = () => {
    const title = ['All Titles', 'Trending Now', 'New Releases' , 'RPG' , 'Action']
    return (
        <div className='w-full flex gap-5 p-5'>
         {
                title.map((item, idx) => {
                    return (
                      <button key={idx} className="border rounded-full bg-gray-700 px-5 py-2 cursor-pointer">
                        {item}
                      </button>
                    );
            
        })    
}
  </div>
     
  )
}

export default Button