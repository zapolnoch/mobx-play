import { observer } from "mobx-react"
import { booksStore } from "./store"

const Search = () => {
  const {
    isLoading,
    query,
    setQuery,
    searchingbyAuthor,
    setSearchingbyAuthor,
    onSearch,
  } = booksStore

  return (
    <>
      <input
        placeholder="Search"
        value={query}
        disabled={isLoading}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? onSearch() : undefined)}
      />

      <input
        id="searchingbyAuthor"
        type="checkbox"
        checked={searchingbyAuthor}
        onChange={(e) => setSearchingbyAuthor(e.target.checked)}
      />
      <label htmlFor="searchingbyAuthor">Searching by author</label>
    </>
  )
}

export default observer(Search)
