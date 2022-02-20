import { useContext, useState } from 'react';
import { BooksContext } from '../ListBooks/ListBooks';
import './SearchInput.css'


const SearchInput = () => {
    
    const  { category, setCategory} = useContext(BooksContext)

    const [word, setWord] = useState("");

    const handleChange = (e: { target: { value: any } }) => {
        const { value } = e.target;
        setWord(value);
        setCategory(getMatchedList(word, category))
      };
    
  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Cerca libro..."
        onChange={handleChange}
        value={word}
      />
    </>
  );
}


const getMatchedList = (searchText: string, listOfBooks: any[]) => {
    console.log("LIBRI", listOfBooks)
    if (searchText === "") return listOfBooks;
    return listOfBooks.map((element) => {
        return {...element, books: element.books.filter((books: any) => books.title.toLowerCase().includes(searchText.toLowerCase()))}
      })

  };


// const getMatchedList = (searchText: string, listOfBooks: any[]) => {
//     listOfBooks = listOfBooks.filter((item) => {
//         return Object.keys(item).some(key => item[key].toString().search(searchText) !== -1);
//     });
// }

export default SearchInput