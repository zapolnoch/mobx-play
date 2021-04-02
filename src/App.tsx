import { observer } from "mobx-react"
import { counterStore } from "./counter.store"

const App = () => {
  const { count, inc, dec } = counterStore

  return (
    <div className="App">
      <h1>{count}</h1>

      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default observer(App)
