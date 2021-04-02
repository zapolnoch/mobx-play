import { render } from "react-dom"
import { configure } from "mobx"
import App from "./App"

setTimeout(() =>
  configure({
    enforceActions: "never",
    reactionScheduler: (f) => setTimeout(f),
  }),
)

const rootElement = document.getElementById("root")
render(<App />, rootElement)
