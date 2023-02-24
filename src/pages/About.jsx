import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillHome } from 'react-icons/ai';
import styles from '../styles/components/aboutPage.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.appTitle}>Movie App &mdash; TMDB</h3>
      <p>
        Projecto creado con The Movie Database (TMDB), ReactJS, React Query,
        Axios y Style Components.
      </p>
      <p>Version: 1.0.0</p>
      <p>
        Creado por: Pool Llerena
        <Link
          className={styles.link}
          to='https://github.com/Pool1541'
          target='_blank'
        >
          <AiFillGithub className={styles.icon} />
        </Link>
        Alvaro Cayo
        <Link to='https://github.com/albored' target='_blank'>
          <AiFillGithub className={styles.icon} />
        </Link>
      </p>

      <Link to={'/'}>
        <button className={styles.btn}>
          <AiFillHome /> back to home
        </button>
      </Link>
    </div>
  );
};

export default About;
