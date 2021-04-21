import { render } from "react-dom"
import { spy } from "mobx"
import App from "./App"

spy((ev) => {
  console.log(ev)
})

const rootElement = document.getElementById("root")
render(<App />, rootElement)
