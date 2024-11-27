import React, { useState, useEffect } from "react"
import styles from "./Counter.module.css"

const Counter = (props) => {
  const [counter, setCounter] = useState(0)

  const { size, setSum } = props

  useEffect(() => {
    setCounter(0)
  }, [size])

  const increase = () => {
    setCounter((count) => count + 1)
    setSum((sum) => sum + 1)
  }
  const decrease = () => {
    setCounter((count) => count - 1)
    setSum((sum) => sum - 1)
  }

  return (
    <div className={styles.counter}>
      <button onClick={decrease}>-</button>
      <span className="counter">{counter}</span>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default Counter
