import { NavLink } from 'react-router-dom';
import styles from 'styles/components/dashboardOptions.module.css';

export default function DashboardOptions() {
  const activeStyle = {
    color: 'var(--primary)',
    backgroundColor: 'var(--title)',
  };

  return (
    <div className={styles.aside}>
      <ul className={styles.options}>
        <li>
          <NavLink
            to='/dashboard/lists'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mis listas
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/discussions'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Discusiones
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/ratings'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Calificaciones
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
