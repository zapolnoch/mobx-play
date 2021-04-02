import "./spin.css"

type Props = { isLoading: boolean }

export const Spin = ({ isLoading }: Props) => {
  if (isLoading) return <div className="spinner" />
  return null
}
