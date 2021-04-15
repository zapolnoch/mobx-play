import axios from "axios"
import type { Book } from "./types"
const url = "https://openlibrary.org/search.json"

type Books = Promise<Book[] | null>

async function searchBook(q: string, searchingbyAuthor: boolean): Books {
  const params = searchingbyAuthor ? { author: q } : { q }

  try {
    const { data } = await axios({ url, params })

    return data.docs.map(({ key, title, author_name, cover_i }: any) => ({
      key,
      title,
      author: author_name?.join(", "),
      cover: cover_i,
    }))
  } catch (error) {
    console.error("searchBook", error)
    return null
  }
}

export default { searchBook }

//** @see https://openlibrary.org/dev/docs/api/search */
