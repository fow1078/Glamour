import React from 'react';
import Video from '../assets/images/uselessBg3.mp4';

function BackgroundVideo() {
  return (
    <video autoPlay muted loop id="bgVideo">
      <source src={Video} type="video/mp4" />
    </video>
  )
}

export default BackgroundVideo;
