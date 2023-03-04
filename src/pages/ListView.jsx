import { useParams } from 'react-router-dom';
import styles from 'styles/pages/listView.module.css';

export default function ListView() {
  const { listID } = useParams();

  return <div>Lista {listID}</div>;
}
