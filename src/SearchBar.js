export default function SearchBar({ handleSearch }) {
  return (
    <div>
      <input onChange={(event) => handleSearch(event.target.value)} />
    </div>
  )
}