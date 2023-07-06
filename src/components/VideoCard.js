import React from 'react'

const VideoCard = ({video}) => {
    console.log(video.channelTitle)
    
  return (
    <div className='w-64 border-2 rounded-lg m-3 '>
        <img className='rounded-lg' src={video.thumbnails.medium.url} alt='thumbnail' />
        <h1 className='text-left text-sm font-semibold'>{video.title}</h1>
        <h1 className='text-xs font-normal'>{video.channelTitle}</h1>
    </div>
  )
}

export default VideoCard