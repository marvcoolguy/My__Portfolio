/* eslint-disable @next/next/no-img-element */
import React from 'react';

import pjt__styles from '../styles/Project.module.css';

const ProjectCard = ({ item }) => {
  return (
    <div className={pjt__styles.card}>
      <div className={pjt__styles.card__image}>
        <img
          className={pjt__styles.image}
          src={item.img}
          alt="afiatv website"
        />
      </div>

      <div className={pjt__styles.card__content}>
        <h3>{item.name}</h3>

        <div className="pjt__styles description">{item.description}</div>

        <div className={pjt__styles.lang}>
          <ul>
            <li>Next Js</li>
            <li>React</li>
            <li>Vanilla Css 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
