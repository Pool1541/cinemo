import scrollToTop from 'utilities/scrollToTop';
import { Link, useParams } from 'react-router-dom';
import { getPerson } from 'services/tmdbAPI';
import { useState, useEffect } from 'react';
import styles from '../styles/pages/personInfo.module.css';
import { FaTwitter, FaInstagram, FaImdb } from 'react-icons/fa';

function PersonInfo() {
  const [personData, setPersonData] = useState({});
  scrollToTop();

  const { personId } = useParams();

  async function fetchPerson(id) {
    const person = await getPerson(id);
    setPersonData(person);
  }

  useEffect(() => {
    fetchPerson(personId);
  }, [personId]);

  return (
    <div className={styles.container}>
      <div className={styles.personContainer}>
        <img
          className={styles.personImg}
          src={
            personData.profile_path
              ? `https://image.tmdb.org/t/p/w300${personData.profile_path}`
              : 'https://via.placeholder.com/300x450?text=Image+Not+Found'
          }
          alt={`Picture of ${personData.name}`}
        />

        <div className={styles.info}>
          <h2>{personData.name}</h2>
          <div>{personData.biography ? personData.biography : 'No Data'}</div>
          <ul>
            <li className={styles.personInfoItem}>
              <div>Known For</div>
              <div>
                {personData.known_for_department
                  ? personData.known_for_department
                  : 'No Data'}
              </div>
            </li>
            <li className={styles.personInfoItem}>
              <div>Born</div>
              <div>{personData.birthday ? personData.birthday : 'No Data'}</div>
            </li>
            <li className={styles.personInfoItem}>
              <div>Place of Birth</div>
              <div>
                {personData.place_of_birth
                  ? personData.place_of_birth
                  : 'No Data'}
              </div>
            </li>
          </ul>

          <div className={styles.socialLinks}>
            {/* twitter */}
            <Link
              className={styles.socialLink}
              to={`https://twitter.com/${personData?.external_ids?.twitter_id}`}
              target='_blank'
            >
              <FaTwitter className={styles.iconLink} />
            </Link>
            {/* instagram */}
            <Link
              className={styles.socialLink}
              to={`https://instagram.com/${personData?.external_ids?.instagram_id}`}
              target='_blank'
            >
              <FaInstagram className={styles.iconLink} />
            </Link>
            {/* imdb */}
            <Link
              className={styles.socialLink}
              to={`https://imdb.com/name/${personData?.external_ids?.imdb_id}`}
              target='_blank'
            >
              <FaImdb className={styles.iconLink} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonInfo;
