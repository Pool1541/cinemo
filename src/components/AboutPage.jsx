import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/aboutPage.module.css';

export const AboutPage = () => {
  const date = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Copyright &copy; {date} Movie App - All Rights Reserved.
        <Link to={'/about'}>
          <span className={styles.link}>About page</span>
        </Link>
      </p>
    </div>
  );
};
