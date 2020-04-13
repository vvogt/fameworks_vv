import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Section from './Section';
import BgVideo from '../assets/videos/seald_fullhd.mp4';
import PreviewImageURL from '../assets/images/preview.jpg';

class Main extends React.Component {
   render() {
     let PreviewImage = PreviewImageURL;
      const highlights = {
        'This week': [
          {
            title: 'Something something',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 1
          },
          {
            title: 'Something else',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 2
          },
          {
            title: 'Something something',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 3
          },
          {
            title: 'Something else',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 4
          },
          {
            title: 'Something something',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 5
          },
          {
            title: 'Something else',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 6
          }
        ],
        "Don't miss": [
          {
            title: 'Something something',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 1
          },
          {
            title: 'Something else',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 2
          },
          {
            title: 'Something something',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 3
          },
          {
            title: 'Something else',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 4
          },
          {
            title: 'Something something',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 5
          },
          {
            title: 'Something else',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 6
          }
        ],
        "New releases": [
          {
            title: 'Something something',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 1
          },
          {
            title: 'Something else',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 2
          },
          {
            title: 'Something something',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 3
          },
          {
            title: 'Something else',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 4
          },
          {
            title: 'Something something',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 5
          },
          {
            title: 'Something else',
            description: 'Something something something...',
            imageUrl: PreviewImage,
            ID: 6
          }
        ]
      };

      return (
        <div className="wrapper">
          <Header />
          <Hero
            title="Welcome <br> to the Bardican"
            text="A world-class arts and learning centre, the Barbican pushes the
              boundaries of all major art forms including dance, film, music,
              theatre and visual arts."
            bgVideo={BgVideo}
          />
          <Section title="Highlights" content={highlights} activeTab={Object.keys(highlights)[0]} />
        </div>
      );
   }
}

export default Main;