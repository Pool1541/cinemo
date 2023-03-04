import { RiPlayListAddFill } from 'react-icons/ri';
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import styles from 'styles/components/actions.module.css';

export default function Actions() {
  return (
    <ul className={styles.actionsContainer}>
      <li>
        <button className={styles.actionsItem} action={'Añadir a lista'}>
          <RiPlayListAddFill />
        </button>
      </li>
      <li>
        <button className={styles.actionsItem} action={'Favorito'}>
          <AiOutlineHeart />
        </button>
      </li>
      <li>
        <button className={styles.actionsItem} action={'Valorar'}>
          <AiOutlineStar />
        </button>
      </li>
    </ul>
  );
}
