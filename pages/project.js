/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';

import { ProjectContext } from '../context/ProjectContext';

import pjt__styles from '../styles/Project.module.css';

import ProjectCard from '../components/ProjectCard';

const project = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <section className={pjt__styles.project}>
      <div className="lettered__heading">My Projects</div>

      <div className={pjt__styles.grid}>
        {projects.map((item) => (
          <ProjectCard item={item} key={item.id} />
        ))}
      </div>

      <div className={pjt__styles.bottom__nav}></div>
    </section>
  );
};

export default project;
