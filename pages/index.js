import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import button_styles from '../styles/Buttons.module.css'
import { useState } from 'react'
import { Calculator } from '../components/Calculator'

export default function Home() {
  let calculator = new Calculator();
  const [mean, setMean] = useState(0);
  const [variance, setVariance] = useState(0);
  const [sampleVariance, setSampleVariance] = useState(0);
  const [standardDeviation, setStandardDeviation] = useState(0);
  const [sampleStandardDeviation, setSampleStandardDeviation] = useState(0);
  const [geometricMean, setGeometricMean] = useState(0);
  const [median, setMedian] = useState(0);
  const [mode, setMode] = useState(0);
  const [largestValue, setLargestValue] = useState(0);
  const [smallestValue, setSmallestValue] = useState(0);
  const [sum, setSum] = useState(0);
  const [range, setRange] = useState(0);
  const [numbers, setNumbers] = useState([]);
  async function getNumbers() {
    const numberArray = [];
    const numbers = document.getElementById('numbers_input').value;
    numbers.split(',').map((number) => {
      numberArray.push(parseInt(number));
    });
    console.log(numberArray)
    calculator.array = numberArray;
  };
  const calculate = (e) => {
    e.preventDefault();
    getNumbers();
    calculator.mean = 0;
    calculator.variance = 0;
    calculator.standardDeviation = 0;
    calculator.geometricMean = 0;
    calculator.median = 0;
    calculator.mode = 0;
    calculator.range = 0;
    calculator.largestValue = 0;
    calculator.smallestValue = 0;
    calculator.sum = 0;
    calculator.calculateValues();
    setMean(calculator.mean);
    setVariance(calculator.variance);
    setSampleVariance(calculator.sampleVariance);
    setStandardDeviation(calculator.standardDeviation);
    setSampleStandardDeviation(calculator.sampleStandardDeviation);
    setMedian(calculator.median);
    setMode(calculator.mode);
    setGeometricMean(calculator.geometricMean);
    setLargestValue(calculator.largestValue);
    setSmallestValue(calculator.smallestValue);
    setSum(calculator.sum)
    setRange(calculator.range);
    setNumbers(calculator.array);
  };
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
        <div className={styles.results}>
          <div className={styles.card}>
            <p>Mean</p>
            <p>{mean}</p>
          </div>
          <div className={styles.card}>
            <p>Variance</p>
            <p>{variance}</p>
          </div>
          <div className={styles.card}>
            <p>Standard Deviation</p>
            <p>{standardDeviation}</p>
          </div>
          <div className={styles.card}>
            <p>Sample Variance</p>
            <p>{sampleVariance}</p>
          </div>
          <div className={styles.card}>
            <p>Sample Standard Deviation</p>
            <p>{sampleStandardDeviation}</p>
          </div>
          <div className={styles.card}>
            <p>Geometric Mean</p>
            <p>{geometricMean}</p>
          </div>
          <div className={styles.card}>
            <p>Sum</p>
            <p>{sum}</p>
          </div>
          <div className={styles.card}>
            <p>Range</p>
            <p>{range}</p>
          </div>
          <div className={styles.card}>
            <p>Largest Value</p>
            <p>{largestValue}</p>
          </div>
          <div className={styles.card}>
            <p>Smallest Value</p>
            <p>{smallestValue}</p>
          </div>
          <div className={styles.card}>
            <p>Median</p>
            <p>{median}</p>
          </div>
          <div className={styles.card}>
            <p>Mode</p>
            <p>{mode}</p>
          </div>
        </div>
        <button className={button_styles.glow_on_hover} onClick={calculate}>Calculate</button>
      </main>
      <Footer />
    </div>
  )};
