import { render } from "react-dom"
import { configure } from "mobx"
import App from "./pages/books"
import { StoresContextProvider } from "./pages/books/stores-context"

setTimeout(() =>
  configure({
    enforceActions: "never",
    reactionScheduler: (f) => setTimeout(f),
  }),
)

const rootElement = document.getElementById("root")
render(<StoresContextProvider><App /></StoresContextProvider>, rootElement)
