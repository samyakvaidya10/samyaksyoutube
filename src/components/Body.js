import React from 'react'
import Sidebar from './Sidebar'
import VideoMenu from './VideoMenu'
import { useSelector } from 'react-redux'

function Body() {
  const toggleStatus=useSelector(store => store.appSlice.toggleStatus)
  console.log(toggleStatus)
  return (
    <div className='flex'>
      {toggleStatus &&
      
        <Sidebar />

      }
      <div className=''>
        <VideoMenu />
      </div>
    </div>
    
  )
}

export default Body