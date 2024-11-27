import styles from "./CounterGroupGenerator.module.css"

const CounterGroupGenerator = ({ size, setSize, handleResetCounter }) => {
  const handleChange = (event) => {
    setSize(event.target.value !== "" ? event.target.value : 0)
  }

  return (
    <div className={styles.generator}>
      <span>size: </span>
      <input type="text" onChange={handleChange} value={size} />
      <button onClick={handleResetCounter}>reset</button>
    </div>
  )
}

export default CounterGroupGenerator
