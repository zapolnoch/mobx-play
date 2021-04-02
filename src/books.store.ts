import { makeAutoObservable } from "mobx"
import { searchBook } from "./api"
import type { Book } from "./api/types"

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false
  books: Book[] = []

  search = async (q: string) => {
    try {
      this.isLoading = true
      const result = await searchBook(q)
      if (!result) return alert("Server error")

      this.books = result.filter((item) => item.cover)
    } catch (error) {
    } finally {
      this.isLoading = false
    }
  }
}

const booksStore = new Store()
export { booksStore }
