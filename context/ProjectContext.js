import { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [projects] = useState([
    {
      id: '001',
      name: 'My portfolio',
      description:
        'I decided to give my old portfolio site a lick of paint and a new framework making it colourful and dynamic',
      img: '/images/port.png',
      lang: ['NextJs', 'CSS 3'],
      link: 'https://loremipsum.com',
    },
    {
      id: '002',
      name: 'Popular Cloned App',
      description: 'A colourful portfolio',
      img: '/images/port.png',
      lang: ['NextJs', 'Tailwind'],
      link: 'https://loremipsum.com',
    },
    {
      id: '003',
      name: 'Afia Tv',
      description:
        'Simple, minimalistic website for a tv station. The client wanted something easy to navigate.',
      img: '/images/afiaTv.png',
      lang: ['Javascript', 'CSS 3', 'Html 5'],
      link: 'http://afiatv.net',
    },
    {
      id: '004',
      name: 'Tastebud Cafe',
      description: 'An e-commerce website for a coffee shop.',
      img: '/images/coffee.png',
      lang: ['ReactJs', 'CSS 3'],
      link: 'https://loremipsum.com',
    },
    {
      id: '005',
      name: 'Pokemon Search',
      description: 'A colourful portfolio',
      img: '/images/poke.png',
      lang: ['ReactJs', 'CSS 3'],
      link: 'https://loremipsum.com',
    },
    {
      id: '006',
      name: 'Contact Manager',
      description: 'A colourful portfolio',
      img: '/images/contact.png',
      lang: ['ReactJs', 'CSS 3'],
      link: 'https://loremipsum.com',
    },
    {
      id: '007',
      name: 'Calculator',
      description: 'A colourful portfolio',
      img: '/images/calculator.png',
      lang: ['Javascript', 'CSS 3', 'HTML 5'],
      link: 'https://loremipsum.com',
    },
    {
      id: '008',
      name: 'Google Homepage cloned',
      description: 'A colourful portfolio',
      img: '/images/calculator.png',
      lang: ['CSS 3', 'HTML 5'],
      link: 'https://loremipsum.com',
    },
    {
      id: '009',
      name: 'Music player',
      description: 'A colourful portfolio',
      img: '/images/music-player.png',
      lang: ['ReactJs', 'CSS 3'],
      link: 'https://loremipsum.com',
    },
  ]);

  return (
    <ProjectContext.Provider value={{ projects }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
