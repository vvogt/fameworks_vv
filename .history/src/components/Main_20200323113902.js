import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Section from './Section';
import BgVideo from '../assets/videos/seald_fullhd.mp4';

class Main extends React.Component {
   render() {
      const tabs = ["This week", "Don\'t miss", "New releases"];
      
      const highlights = [
        {
          title: 'This week',
          articles: [
            {
              title: 'Something something',
              description: 'Something something something...',
              imageUrl: '../assets/images/tengku-nadia-fz8_SONkBB8-unsplash.jpg',
              ID: 1
            },

            {
              title: 'Something else',
              description: 'Something something something...',
              imageUrl: '../assets/images/tengku-nadia-fz8_SONkBB8-unsplash.jpg',
              ID: 2
            }
          ],
        },
        {
          title: 'Next week',
          articles: [
            {
              title: 'Something something',
              description: 'Something something something...',
              imageUrl: '../assets/images/tengku-nadia-fz8_SONkBB8-unsplash.jpg',
              ID: 1
            },

            {
              title: 'Something else',
              description: 'Something something something...',
              imageUrl: '../assets/images/tengku-nadia-fz8_SONkBB8-unsplash.jpg',
              ID: 2
            }
          ]
        }
      ];

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
          <Section title="Highlights" content={highlights} />
        </div>
      );
   }
}

export default Main;