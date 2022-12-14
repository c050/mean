import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import button_styles from '../styles/Buttons.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Mean Calculator
        </h1>
        <input className={styles.numbers_input} type="text" placeholder="Enter numbers separated by commas" />
        <button className={button_styles.glow_on_hover}>Calculate</button>
        <div className={styles.results}>
          <p>Mean</p>
          <p>Standard Deviation</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
