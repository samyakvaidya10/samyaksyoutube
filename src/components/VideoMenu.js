import React, { useEffect, useState } from 'react'
import TagButtons from './TagButtons'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from '../utils/constants';

function VideoMenu() {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos = async()=>{
    const data=await fetch(YOUTUBE_API);
    const json=await data.json();
    setVideos(json.items)
  }
  return (
    <div>
      <TagButtons />
      <div className='flex flex-wrap'>
        {videos.length>0
        &&
        videos.map((video)=>{
          return <VideoCard key={video.id} video={video.snippet} />
        })
        }
      </div>
     
    </div>
  )
}

export default VideoMenu