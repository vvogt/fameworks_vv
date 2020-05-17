import React from 'react';

// COMPONENTS
import Header from './Header';
import Hero from './Hero';
import Section from './Section';
import ParallaxSection from './ParallaxSection';
import DirectionsSection from './DirectionsSection';
import SignupSection from './SignupSection';
import FooterSection from './FooterSection';

// ASSETS
import PreviewImageURL from '../assets/images/preview.jpg';
import BgVideo from '../assets/videos/seald_fullhd.mp4';

class Main extends React.Component {
  state = {
    headerMenuIsOpen: false,
  }

  handleHeaderMenu = (input) => {
    console.log('show menu:' + input)
    this.setState({
      headerMenuIsOpen: input,
    })
  }

  render() {
    const highlights = {
      'This week': [
        {
          title: 'Something something',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 1,
        },
        {
          title: 'Something else',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 2,
        },
        {
          title: 'Something something',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 3,
        },
      ],
      "Don't miss": [
        {
          title: 'Do not miss',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 7,
        },
        {
          title: 'Do not miss',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 8,
        },
        {
          title: 'Do not miss',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 9,
        },
        {
          title: 'Do not miss',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 10,
        },
        {
          title: 'Do not miss',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 11,
        },
        {
          title: 'Do not miss',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 12,
        },
      ],
      'New releases': [
        {
          title: 'A new release',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 13,
        },
        {
          title: 'A new release',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 14,
        },
        {
          title: 'A new release',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 15,
        },
        {
          title: 'A new release',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 16,
        },
        {
          title: 'A new release',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 17,
        },
        {
          title: 'A new release',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 18,
        },
      ],
      'Inside Out': [
        {
          title: 'Inside n ousside',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 19,
        },
        {
          title: 'In n out',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 20,
        },
        {
          title: 'Inside n ousside',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 21,
        },
        {
          title: 'In n out',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 22,
        },
        {
          title: 'Inside n ousside',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 23,
        },
        {
          title: 'In n out',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 24,
        },
      ],
      'Free things to do': [
        {
          title: 'For free',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 25,
        },
        {
          title: 'This is free',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 26,
        },
        {
          title: 'For free',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 27,
        },
        {
          title: 'This is free',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 28,
        },
        {
          title: 'For free',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 29,
        },
        {
          title: 'This is free',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 30,
        },
      ],
      "Members' events": [
        {
          title: 'Member stuff',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 31,
        },
        {
          title: 'A thing for members',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 32,
        },
        {
          title: 'Member stuff',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 33,
        },
        {
          title: 'A thing for members',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 34,
        },
        {
          title: 'Member stuff',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 35,
        },
        {
          title: 'A thing for members',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 35,
        },
      ],
    };

    const makeTheMost = {
      'Make the most of your visit': [
        {
          title: 'Something something',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 50,
        },
        {
          title: 'Something else',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 51,
        },
        {
          title: 'Something something',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 52,
        },
        {
          title: 'Something else',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 53,
        },
        {
          title: 'Something something',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 54,
        },
        {
          title: 'Something else',
          description: 'Something something something...',
          imageUrl: PreviewImageURL,
          ID: 55,
        },
      ],
    };

    const contactOptions = {
      "Your booking": {
        title: "Contact the Box Office",
        description:
          "For queries relating to your booking, please see our FAQs or contact us on:",
        mail: 'tickets@barbican.org.uk',
        mailInfo: "We aim to respond within 24 hrs",
      },
      "Feedback": {
        title: 'How was your experience?',
        description:
          "We are committed to ensuring you have a great experience. It's good to hear when we exceed your expectations... and when we could do better.",
        mail: 'info@barbican.org.uk',
      },
      "Membership": {
        title: "Membership",
        description: "Have a question about membership? Read our FAQs or contact us below",
        mail: "membership@barbican.org.uk",
        phone: "020 7638 8891",
        phoneInfo: "Opening hours"
      },
      "Hiring a venue": {
        title: "Contact the Business Events team",
        mail: "businessevents@barbican.org.uk",
        phone: "+44 (0)20 7382 7043"
      },

    };

    const mainNav = {
      "What's on": [
        {
          title: 'Find events',
          type: 'bulletList',
          content: [
            "Art & design",
            "Talks & workshops",
            "Cinema",
            "Theatre & dance",
            "Classical music",
            "Tours & public spaces",
            "Contemporary music",
            "Library"
          ]
        },
        {
          title: "Highlights",
          type: "gallery",
          content: [{
              title: "Level G",
              description: "Always open, always free",
              image: PreviewImageURL
            },
            {
              title: "Eat & Drink",
              description: "Our cafes, restaurants and bars",
              image: PreviewImageURL
            },
            {
              title: "Inside out",
              description: "Exporing our inner lives",
              image: PreviewImageURL
            }
          ]
        }
      ],
      "Your visit": [
        {
          title: "General info",
          content: [
            "Coronavirus Advice",
            "Box office & ticketing info",
            "Opening hours",
            "Map & directions",
            "Car parking",
            "Families",
            "Cloakrooms",
            "Contact us"
          ]
        },
        {
          title: "During your visit",
          content: [
            "Free things to do",
            "Barbican Tours",
            "Library",
            "Shops",
            "Conservatory",
            "Explore Culture Mile",
          ]
        },
        {
          title: "Eat & Drink",
          content: [
            "Barbican Kitchen",
            "Bonfire",
            "Osteria",
            "Martini bar",
            "Foyer bars and cafe",
            "Cinema Cafe & Bar"
          ]
        },
        {
          title: "Accessibility",
          content: [
            "Access membership",
            "Accessible events",
            "Access guides",
            "Access maps",
            "Accessible facilities",
          ]
        }
      ],
      "Join & support": [
        {
          title: "Membership",
          content: [
            "Member benefits",
            "Members' Lounge",
            "Members' events",
            "Special offers",
          ]
        },
        {
          title: "Young Barbican",
          content: [
            "Join Young Barbican",
            "Young Barbican events",
            "Get creative",
          ]
        },
        {
          title: "Support us",
          content: [
            "Support us",
            "Support our appeal",
            "For individuals",
            "For businesses",
            "How your support helps",
            "Trusts & grantmakers",
            "Barbican Centre Trust",
            "Current supporters",
          ]
        },
        {
          type: "gallery",
          title: "Support the Barbican",
          content: [
            {
              title: "Young barbican",
              description: "Age 14 - 25 ? Get discounted access to unmissable art",
              image: PreviewImageURL
            },
            {
              title: "Rain room dancers",
              description: "All arts.All year.One Membership",
              image: PreviewImageURL
            },
            {
              title: "Support us",
              description: "",
              image: PreviewImageURL
            }
          ]
        }
      ],
      "Take part": [
        {
          title: "Schools & colleges",
          content: [
            "Barbican Box",
            "Primary Schools",
            "Secondary Schools",
            "Further Education",
          ]
        },
        {
          title: "Young creatives",
          content: [
            "Design Yourself",
            "Young Curators",
            "Young Poets",
            "Youth Panel",
            "Young Programmers",
            "Young Visual Arts Group",
            "Creative Careers",
            "National Open Youth Orchestra(NOYO)",
          ]
        },
        {
          title: "Emerging & Practising Artists",
          content: [
            "Open Lab",
            "Weekend Labs",
            "Guildhall School",
            "STAMP",
          ]
        },
        {
          title: "Community",
          content: [
            "Beyond Barbican",
            "Programmes",
          ]
        }
      ],
      "Our story": [
        {
          title: "Our archive",
          content: [
            "About the archive",
            "Construction",
            "Programme",
            "Design",
            "Research & Talks",
          ]
        },
        {
          title: "Our building",
          content: [
            "Our architecture",
            "Our venues",
            "Sustainability",
          ]
        },
        {
          title: "Our people",
          content: [
            "Who we are",
            "Careers",
            "Centre Partners",
            "Residents",
          ]
        },
        {
          title: "Our programme",
          content: [
            "Our artistic vision",
            "Music",
            "Theatre & dance",
            "Visual arts",
            "Cinema",
            "Creative Learning",
            "International work",
          ]
        },
        {
          title: "Our projects",
          content: [
            "Centre for Music",
            "Culture Mile",
            "Inside Out",
            "Life Rewired",
          ]
        }
      ],
      "Hire": [
        {
          title: "Venue Hire",
          content: [
            "Venues",
            "What we offer",
            "Rates & packages",
            "Weddings",
          ]
        },
        {
          title: "Exhibition hire (BIE)",
          content: [
            "AI: More Than Human",
            "Into the Unknown",
            "Mangasia",
            "Game On & Game On 2.0",
            "Exhibition Tour Packs",
            "Past BIE Exhibitions",
          ]
        },
        {
          type: "gallery",
          content: [
            {
              title: "Venue hire",
              description: "Hire a Barbican venue"
            },
            {
              title: "What we offer",
              description: "Business services"
            },
            {
              title: "Exhibition hire (BIE)",
              description: "Touring exhibitions"
            }
          ],
        },
      ],
      "Read, watch & listen" : []
    };

    return (
      <div className="wrapper">
        <Header
          menuContent={mainNav}
          handleHeaderMenu={this.handleHeaderMenu}
        />
        {this.state.headerMenuIsOpen && <div className="darkOverlay" />}
        <Hero
          title="Welcome to <br> the Bardican"
          text="A world-class arts and learning centre, the Barbican pushes the
              boundaries of all major art forms including dance, film, music,
              theatre and visual arts."
          bgVideo={BgVideo}
        />
        <Section
          title="Highlights"
          content={highlights}
          showCategories={true}
          numToRender={6}
          scrollId="scroll1"
        />
        <ParallaxSection
          title="Inside Out in 2020"
          content="A year exploring the relationship between our inner lives and creativity"
          btnText="Explore the programme"
        />
        <Section
          title="Make the most of your visit"
          content={makeTheMost}
          numToRender={6}
          scrollId="scroll2"
          bgDarker={true}
        />
        <DirectionsSection
          title="Directions"
          categories={['Getting here', 'Public transport']}
        />
        <SignupSection
          title="Sign up to our newsletters"
          listPoints={[
            'Be the first to hear before events go on sale',
            'Get the latest news from Barbican',
            'Choose the types of events that interest you',
          ]}
          buttonText="Sign up"
        />
        <FooterSection
          title="Contacts"
          contactOptions={contactOptions}

        />

      </div>
    );
  }
}

export default Main;