import { makeAutoObservable } from "mobx"
import api from "../../api"
import type { Book } from "../../api/types"
import { BooleanFlag } from "../../core/BooleanFlag"

export class BookStore {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false
  searchingByAuthor = new BooleanFlag()
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
        this.searchingByAuthor.value,
      )
      if (result === null) return alert("Server error")

      this.books = result.filter((item) => item.cover)
    } finally {
      this.isLoading = false
    }
  }
}
