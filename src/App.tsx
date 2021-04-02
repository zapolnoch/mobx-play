import { observer } from "mobx-react"
import { Input, Spin } from "./components"
import { booksStore } from "./books.store"

const App = () => {
  const { isLoading, search, books } = booksStore

  return (
    <div>
      <Input isLoading={isLoading} onSearch={search} />

      <Spin isLoading={isLoading} />

      {books.map(({ cover, title }) => (
        <div key={cover}>
          <img
            src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`}
            alt=""
            style={{
              height: "100px",
              maxHeight: "100px",
            }}
          />

          <div>{title}</div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default observer(App)
