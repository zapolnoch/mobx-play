import { observer } from "mobx-react"
import { counterStore } from "./counter.store"

const TestComp = () => {
  console.log("render", new Date())
  return <div>test</div>
}

const App = observer(() => {
  return (
    <div className="App">
      <h1>{counterStore.count}</h1>
      <TestComp />
      <h2>{counterStore.double}</h2>

      <button onClick={counterStore.inc}>+</button>
      <button onClick={counterStore.dec}>-</button>
    </div>
  )
})

export default App
