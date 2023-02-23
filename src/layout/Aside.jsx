import { DataContext } from 'contexts/dataContext';
import { useContext } from 'react';
import styles from 'styles/layout/aside.module.css';

export default function Aside({ children }) {
  const { modal } = useContext(DataContext);

  return <aside className={modal ? styles.show : undefined}>{children}</aside>;
}
