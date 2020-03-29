import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Block from './Block';
import BgVideo from '../assets/videos/seald_fullhd.mp4';

class Main extends React.Component {
   render() {
      const arr = ["This week", "Don\'t miss", "New releases"];

      return (
        <div className="wrapper">
          <Header />
          <Hero
            title="Welcome to the Bardican"
            text="A world-class arts and learning centre, the Barbican pushes the
              boundaries of all major art forms including dance, film, music,
              theatre and visual arts."
            bgVideo={BgVideo}
          />
          <Section block-title={'Highlight'} tabs={arr} />
        </div>
      );
   }
}

export default Main;