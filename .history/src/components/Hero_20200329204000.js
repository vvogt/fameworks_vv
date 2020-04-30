import React from 'react';



class Hero extends React.Component {
  insertBreak = text => {
    let lines = text.split('\n');
    return (
      lines[0] + <br/> + lines[1];
    )
  };

  render() {
    const title = this.props.title;
    const text = this.props.text;
    const video = this.props.bgVideo;

    let newText = text.split('\n').map(i => {
      return <p>{i}</p>;
    });

    return (
      <div className="hero">
        <div className="hero__content">
          <h1>{title.replace('<br/>', '\n')}</h1>
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