import CounterGroupGenerator from "./CounterGroupGenerator"
import React, { useMemo, useState } from "react"
import CounterGroup from "./CounterGroup"
import styles from "./MultipleCounter.module.css"

const MultipleCounter = () => {
  const [size, setSize] = useState(0)

  const handleResetCounter = () => {}

  return (
    <div className={styles.multipleCounter}>
      <CounterGroupGenerator size={size} setSize={setSize} handleResetCounter={handleResetCounter} />
      {size > 0 ? "sum" : ""}
      <CounterGroup size={size} />
    </div>
  )
}

export default MultipleCounter
