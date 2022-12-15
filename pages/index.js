import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import button_styles from '../styles/Buttons.module.css'
import { useState } from 'react'
import { Calculator } from '../components/Calculator'

export default function Home() {

  let calculator = new Calculator();

  const [mean, setMean] = useState(0);
  const [standardDeviation, setStandardDeviation] = useState(0);
  const [median, setMedian] = useState(0);
  const [mode, setMode] = useState(0);
  const [numbers, setNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]);

  async function getNumbers() {
    const numberArray = [];
    const numbers = document.getElementById('numbers_input').value;
    numbers.split(',').map((number) => {
      numberArray.push(parseInt(number));
    });
    console.log(numberArray)
    calculator.array = numberArray;
  }
  
  const calculate = (e) => {
    e.preventDefault();
    getNumbers();
    calculator.mean = 0;
    calculator.standardDeviation = 0;
    calculator.median = 0;
    calculator.mode = 0;

    calculator.calculateMean();
    setMean(calculator.mean);

    calculator.calculateStandardDeviation();
    setStandardDeviation(calculator.standardDeviation);

    calculator.calculateMedian();
    setMedian(calculator.median);

    calculator.calculateMode();
    setMode(calculator.mode);

  }

  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Mean Calculator
        </h1>
        <input
          className={styles.numbers_input}
          id="numbers_input"
          type="text"
          placeholder="Enter numbers separated by commas" />
        <button className={button_styles.glow_on_hover} onClick={calculate}>Calculate</button>
        <div className={styles.results}>
          <p>Mean</p>
          <p>{mean}</p>
          <p>Standard Deviation</p>
          <p>{standardDeviation}</p>
          <p>Median</p>
          <p>{median}</p>
          <p>Mode</p>
          <p>{mode}</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
