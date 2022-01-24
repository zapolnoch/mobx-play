import { BookStore } from "./store"

export const createStores = () => {
  const bookStore = new BookStore()

  return { bookStore }
}

export type Stores = ReturnType<typeof createStores>
