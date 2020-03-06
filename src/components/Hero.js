import React from 'react';
import BgVideo from '../assets/videos/seald_fullhd.mp4';


class Hero extends React.Component {
   render() {
      return (
        <div className="hero-mainpage">
          <video
            className="videoTag"
            autoPlay
            muted
            loop
            style={{
              position: 'relative',
              minHeight: '100%',
              minWidth: '100%',
              width: '100vw',
              left: 0,
              top: 0,
              transition: 'opacity, 2s ease-in-out'
            }}
          >
            <source src={BgVideo} type="video/mp4" />
          </video>
        </div>
      );
   }
}

export default Hero;