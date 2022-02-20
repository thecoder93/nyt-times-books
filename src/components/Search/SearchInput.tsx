import { useContext } from 'react';
import { BooksContext } from '../ListBooks/ListBooks';
import './SearchInput.css'


const SearchInput = () => {
    
    const  { search , setSearch} = useContext(BooksContext)

    const handleChange = (e: { target: { value: any } }) => {
        const { value } = e.target;
        setSearch(value);
      };
    
  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Cerca libro..."
        onChange={handleChange}      
        value={search}
      />
    </>
  );
}

export default SearchInput