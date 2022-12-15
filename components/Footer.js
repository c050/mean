import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.flex}>
        <p className={styles.content}>Cristóbal Avendaño </p>
        <p className={styles.content}><a href="https://github.com/crisavendano"> GitHub</a></p>
      </div>
    </div>
  );
}
