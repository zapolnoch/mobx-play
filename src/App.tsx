import { observer } from "mobx-react"
import { counterStore } from "./counter.store"

const App = observer(() => {
  return (
    <div className="App">
      <h1>{counterStore.count}</h1>
      <h2>{counterStore.double}</h2>

      <button
        onClick={() => {
          counterStore.count = 10
        }}
      >
        +
      </button>
      <button onClick={counterStore.dec}>-</button>
    </div>
  )
})

export default App
