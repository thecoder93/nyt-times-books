import './SearchInput.css'


const SearchInput = () => {
  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Cerca libro..."
      />

      <button className="search-button">Cerca</button>
    </>
  );
}

export default SearchInput