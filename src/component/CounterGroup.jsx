import Counter from "./Counter"
import { useMemo, useState, useEffect } from "react"

const CounterGroup = (props) => {
  const [size, setSize] = useState(props)

  useEffect(() => {
    setSize(props)
  }, [props])

  const generatedCounter = useMemo(() => {
    return Array.from({ length: size }).map((_, index) => <Counter key={index} />)
  }, [size])

  return <>{generatedCounter}</>
}

export default CounterGroup
