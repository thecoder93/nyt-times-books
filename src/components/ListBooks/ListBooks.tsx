import { createContext, useEffect, useState } from "react"
import { getOverviewBooks } from "../../services/OverviewBooksServices";
import Book from "../Book/Book";
import LoadingSpinner from "../Spinner/Spinner";
import {v4 as uuid} from "uuid";


export const BooksContext = createContext<Partial<any>>({});

const ListBooks = (props: any) => {
    
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        setIsLoading(true);
        getOverviewBooks().then(( response: any ) => {
          setCategory(response.data.results?.lists.flat())
          setIsLoading(false);
        })
        .catch((error) => console.log(error))  
      }, [])
      
      const { Provider } = BooksContext

  return (
    <>
        {isLoading ? <LoadingSpinner /> : (
          <>
            <Provider value={{category, setCategory}}>
              {props.children}
            </Provider>

            {category.map((arrayBook: any) => <Book listBook={arrayBook.books} category={arrayBook.list_name} key={uuid()}  /> )} 

          </>
        )
      }
    </>
  )
}

export default ListBooks