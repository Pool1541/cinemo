import styles from 'styles/components/messageBox.module.css';

export default function MessageBox({ onClose }) {
  return (
    <div className={styles.successMessage}>
      <div>
        <p>Se actualizó la información correctamente</p>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          title='Cerrar mensaje'
        >
          x
        </button>
      </div>
    </div>
  );
}
