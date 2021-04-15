import { render } from "react-dom"
import { configure } from "mobx"
import App from "./pages/books"

setTimeout(() =>
  configure({
    enforceActions: "never",
    reactionScheduler: (f) => setTimeout(f),
  }),
)

const rootElement = document.getElementById("root")
render(<App />, rootElement)
