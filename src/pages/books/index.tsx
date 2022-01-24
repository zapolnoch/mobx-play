import { observer } from "mobx-react"
import { Spin } from "../../components/Spin"
import Search from "./Search"
import "./style.css"
import { useStore } from "./stores-context"

const App = () => {
  const { bookStore } = useStore()
  const { isLoading, books } = bookStore

  return (
    <div>
      <Search />

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
