import { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const [projects] = useState([
    {
      id: '001',
      name: 'My portfolio',
      description:
        'I decided to give my old portfolio site a lick of paint and a new framework making it colourful and dynamic. Added some cool animations here and there. ',
      img: '/images/port.png',
      lang: ['NextJs', 'CSS 3'],
      link: 'https://loremipsum.com',
    },
    {
      id: '002',
      name: 'Popular Cloned App',
      description:
        'I have always loved the look of this app and wanted to train my eyes on pixel perferct implementation',
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
      description:
        'An e-commerce website for a coffee shop. I learnt about Context api and needed a project to flex my newly acquired knowledge on.',
      img: '/images/coffee.png',
      lang: ['ReactJs', 'CSS 3'],
      link: 'https://loremipsum.com',
    },
    {
      id: '005',
      name: 'Pokemon Search',
      description:
        'Working with third-party apis, I chose the fun themed pokemon search.',
      img: '/images/poke.png',
      lang: ['ReactJs', 'CSS 3'],
      link: 'https://loremipsum.com',
    },
    {
      id: '006',
      name: 'Contact Manager',
      description:
        'This was my very first react project. I was learning along with documentations and videos and created this simple CRUD app.',
      img: '/images/contact.png',
      lang: ['ReactJs', 'CSS 3'],
      link: 'https://loremipsum.com',
    },
    {
      id: '007',
      name: 'Calculator',
      description:
        'Using plain Javascript, my knowledge was expanded while building this simple calculator using neumorphic white theme',
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
  ]);

  return (
    <ProjectContext.Provider value={{ projects }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
