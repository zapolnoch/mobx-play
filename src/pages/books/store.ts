import { makeAutoObservable } from "mobx"
import api from "../../api"
import type { Book } from "../../api/types"
import { WithBooleanFlag } from "../../core/WithBooleanFlag"

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false
  searchingbyAuthor = new WithBooleanFlag()
  query = ""
  books: Book[] = []

  setQuery = (value: string) => {
    this.query = value
  }

  onSearch = async () => {
    try {
      this.isLoading = true
      const result = await api.searchBook(
        this.query,
        this.searchingbyAuthor.value,
      )
      if (result === null) return alert("Server error")

      this.books = result.filter((item) => item.cover)
    } finally {
      this.isLoading = false
    }
  }
}

const booksStore = new Store()
export { booksStore }
