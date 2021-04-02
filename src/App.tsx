import { observer } from "mobx-react"
import { Input, Spin } from "./components"
import { booksStore } from "./books.store"
import "./style.css"

const App = () => {
  const { isLoading, search, books } = booksStore

  return (
    <div>
      <Input isLoading={isLoading} onSearch={search} />

      <Spin isLoading={isLoading} />

      {books.map(({ key, cover, title, author }) => (
        <div key={key}>
          <img
            src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`}
            className="cover"
            alt=""
          />

          <div>
            {title}
            <br />
            <i>{author}</i>
          </div>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default observer(App)
