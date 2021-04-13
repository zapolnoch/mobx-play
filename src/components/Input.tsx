import { useState } from "react"

type Props = {
  isLoading: boolean,
  onSearch: Function
}

export const Input = ({ isLoading, onSearch }: Props) => {
  const [query, setQuery] = useState("")

  return (
    <input
      placeholder="Search"
      value={query}
      disabled={isLoading}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => (e.key === "Enter" ? onSearch(query) : null)}
    />
  )
}
