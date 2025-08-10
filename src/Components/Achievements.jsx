import React from 'react'

function Achievements({img, count, title}) {
  return (
    <div className='flex flex-col items-center'>
      <img 
      src={img} 
      alt={title} 
      className='w-full max-w-[3.125rem]'
      />
      <p>{count}</p>
      <h3>{title}</h3>
    </div>
  )
}

export default Achievements