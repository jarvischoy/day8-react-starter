import CounterGroupGenerator from "./CounterGroupGenerator"
import React, { useEffect, useState } from "react"
import CounterGroup from "./CounterGroup"
import CounterGroupSum from "./CounterGroupSum"
import styles from "./MultipleCounter.module.css"

const MultipleCounter = () => {
  const [size, setSize] = useState(0)
  const [sum, setSum] = useState(0)

  useEffect(() => {
    setSum(0)
  }, [size])

  return (
    <div className={styles.multipleCounter}>
      <CounterGroupGenerator setSize={setSize} size={size} />
      {size > 0 && <CounterGroupSum sum={sum} setSum={setSum} />}
      <CounterGroup size={size} setSum={setSum} />
    </div>
  )
}

export default MultipleCounter
