import React from 'react';



class Hero extends React.Component {
  insertBreak = text => {
    let lines = text.split("<br>");
    return (
      <span key={lines[0]}>
        lines[0] + <br key={lines[0]} /> + lines[1]{' '}
      </span>
    );
  };

  render() {
    const title = this.props.title;
    const text = this.props.text;
    const video = this.props.bgVideo;

    return (
      <div className="hero">
        <div className="hero__content">
          <h1>{this.insertBreak(title)}</h1>
          <p>{text}</p>
        </div>
        <video className="hero__bgVideo" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Hero;