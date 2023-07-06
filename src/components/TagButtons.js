import React from 'react'

function TagButtons() {
    const data=['live','music','Gaming','Comedy','Sports','Laptop','Coding,AI','JavaScript','CSS']
  return (
    <div>
        {data.map((data)=>{
            return <span key={data.id} className='p-1 px-2 rounded-md m-3 bg-gray-100'>{data}</span>
        })}
    </div>
  )
}

export default TagButtons