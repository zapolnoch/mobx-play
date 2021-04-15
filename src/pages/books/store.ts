import { makeAutoObservable } from "mobx"
import api from "../../api"
import type { Book } from "../../api/types"

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false
  searchingbyAuthor = false
  query = ''
  books: Book[] = []

  setSearchingbyAuthor = (value: boolean) => {
    this.searchingbyAuthor = value
  }

  setQuery = (value: string) => {
    this.query = value
  }

  onSearch = async (query: string) => {
    try {
      this.isLoading = true
      const result = await api.searchBook(query, this.searchingbyAuthor)
      if (result === null) return alert("Server error")

      this.books = result
    } finally {
      this.isLoading = false
    }
  }
}

const booksStore = new Store()
export { booksStore }