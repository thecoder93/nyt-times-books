import { useEffect, useState } from "react"
import { getOverviewBooks } from "../../services/OverviewBooksServices";
import Book from "../Book/Book";
import BookOfWeek from "../BookOfWeek/BookOfWeek";
import LoadingSpinner from "../Spinner/Spinner";

const ListBooks = () => {
    
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
      
  return (
    <>
        {isLoading ? <LoadingSpinner /> : (
          <>
          <BookOfWeek>
            {category.map((arrayBook: any) => <Book listBook={arrayBook.books} category={arrayBook.list_name} /> )} 
          </BookOfWeek>
          </>
        )
      }
    </>
  )
}

export default ListBooks