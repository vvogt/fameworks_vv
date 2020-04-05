import React from 'react';



class Hero extends React.Component {
   render() {
      const title = this.props.title;
      const text = this.props.text;
      const video = this.props.bgVideo;

      return (
        <div className="hero">
          <div className="hero__content">
            <h1>{title.replace('<br/>',  <br/>)}</h1>
            <p>{text}</p>
          </div>
          <video
            className="hero__bgVideo"
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      );
   }
}

export default Hero;