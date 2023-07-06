import React from 'react'
import sidebarData from '../utils/sidebarData'
function Sidebar() {
  //const data=['home','shorts','subscription','library']
  return (
    <div className='h-fit m-1  '>
      <ul className='w-40'>
        {sidebarData.map((item)=>{
          return <li className='flex   p-1 rounded-lg  hover:bg-gray-100'>
                    <span className="material-icons text-lg">{item.svgTag}</span>
                    <span className='text-sm ml-2 py-1 '> { item.text}</span>
                  </li>
        })}
        
      </ul>
    </div>
  )
}

export default Sidebar