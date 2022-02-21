import { createContext, useEffect, useMemo, useState } from "react"
import { getOverviewBooks } from "../../services/OverviewBooksServices";
import Book from "../Book/Book";
import LoadingSpinner from "../Spinner/Spinner";
import {v4 as uuid} from "uuid";
import NoBooks from "../NoBooks/NoBooks";
 
export const BooksContext = createContext<Partial<any>>({});
 
const getMatchedList = (searchText: string, listOfBooks: any[]) => {
    if (searchText === "") return listOfBooks;
    return listOfBooks.map((element) => {
        return {...element, 
          books: 
            element.books.filter((books: any) => //search by title or author
              books.title.toLowerCase().includes(searchText.toLowerCase()) || books.author.toLowerCase().includes(searchText.toLowerCase()))}
      })
  };
 
const ListBooks = (props: any) => {
    
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
 
    const filteredCategories = useMemo(() => getMatchedList(search, category), [search, category])
 
    useEffect( () => {
        setIsLoading(true);
        getOverviewBooks().then(( response: any ) => {
          setCategory(response.data.results?.lists.flat())
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error)
        }) 
      }, [])
      
      const { Provider } = BooksContext
 
  return (
    <>
        {isLoading ? <LoadingSpinner /> : (
          <>
            <Provider value={{search, setSearch }}>
              {props.children}
            </Provider>
            
            {/*check if isempty or fill*/}
            {filteredCategories.map((arrayBook: any) => arrayBook.books.length).reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
            ) === 0 ? 
            <NoBooks/> : 
            filteredCategories.map((arrayBook: any) => <Book listBook={arrayBook.books} category={arrayBook.list_name} key={uuid()}  /> )} 

          </>
        )
      }
    </>
  )
}
 
export default ListBooks