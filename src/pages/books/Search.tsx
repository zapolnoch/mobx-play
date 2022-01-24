import { observer } from "mobx-react"
import { useStore } from "./stores-context"

const Search = () => {
  const { bookStore } = useStore()
  const {
    isLoading,
    query,
    setQuery,
    searchingByAuthor,
    onSearch,
  } = bookStore

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSearch()
    }}>
      <input
        placeholder="Search"
        value={query}
        disabled={isLoading}
        onChange={(e) => setQuery(e.target.value)}
      />

      <input
        id="searchingbyAuthor"
        type="checkbox"
        checked={searchingByAuthor.value}
        onChange={searchingByAuthor.toggle}
      />
      <label htmlFor="searchingbyAuthor">Searching by author</label>
    </form>
  )
}

export default observer(Search)
