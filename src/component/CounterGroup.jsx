import Counter from "./Counter"

const CounterGroup = (props) => {
  const { size, setSum } = props

  const counters = Array.from({ length: size }).map((_, i) => <Counter key={i} setSum={setSum} size={size} />)

  return <div>{counters}</div>
}

export default CounterGroup
