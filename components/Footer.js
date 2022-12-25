import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.flex}>
        <p className={styles.content}><a href="https://github.com/crisavendano/mean">GitHub</a></p>
        <p>
          <a href="mailto:coavendano@uc.cl?Subject=Statistics%20Calculator%20recommendation%20or%20calculation%20error">
            Recommendations or calculation errors (always welcome!)
          </a>
        </p>
      </div>
    </div>
  );
}
