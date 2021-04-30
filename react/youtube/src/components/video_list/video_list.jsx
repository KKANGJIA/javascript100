import React from 'react';
import VideoItem from '../video_item/video_item';


const VideoList = props => ( 
       <ul>
           {props.videos.map(video => 
               <VideoItem
               key={video.id}
               video={video}
               />
           )}
       </ul>
    );

// props를 받아와서 props의 videos를 map으로 빙글빙글 돌아서 
// VideoItem의 컴포넌트에 video를 전달해준다

export default VideoList;