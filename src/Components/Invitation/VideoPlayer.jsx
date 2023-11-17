import React from "react";
import ReactPlayer from "react-player/lazy";

function VideoPlayer() {
	return (
		<div className=' aspect-video '>
			<iframe
       className=' h-full w-full rounded-lg'
       width="100%" 
				src="https://www.youtube.com/embed/v4K7IXEyZ-Q?si=wrdcYS2BVVBvfjwA"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
			{/* <ReactPlayer url={"https://youtu.be/v4K7IXEyZ-Q?si=DwDrk5bAsEYCjO4z"} controls={true}/> */}
		</div>
	);
}

export default VideoPlayer;
