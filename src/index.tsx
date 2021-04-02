import { render } from "react-dom"
import { configure, spy } from "mobx"
import App from "./App"

setTimeout(() => {
  configure({
    enforceActions: "never",
    reactionScheduler: (f) => setTimeout(f),
  })
})

spy((ev) => {
  if (ev.type.includes("action")) {
    console.log(ev)
  }
})

const rootElement = document.getElementById("root")
render(<App />, rootElement)
