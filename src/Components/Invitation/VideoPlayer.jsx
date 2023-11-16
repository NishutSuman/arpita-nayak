import React from 'react'
import ReactPlayer from 'react-player/lazy';

function VideoPlayer() {
  return (
    <div>
      <ReactPlayer url={"https://youtu.be/v4K7IXEyZ-Q?si=DwDrk5bAsEYCjO4z"} controls={true}/>
    </div>
  )
}

export default VideoPlayer
