import axios from "axios"
import type { Book } from "./types"
const url = "https://openlibrary.org/search.json"

type Books = Promise<Book[] | null>

async function searchBook(q: string): Books {
  try {
    const { data } = await axios({ url, params: { q } })

    return data.docs.map(({ title, author_name, cover_i }: any) => ({
      title,
      author: author_name?.toString(),
      cover: cover_i,
    }))
  } catch (error) {
    console.error("searchBook", error)
    return null
  }
}

export { searchBook }
