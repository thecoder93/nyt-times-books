import { IBook } from "../../interface/IBook";
import './Book.css';

const Book = ({
  listBook,
  category,
}: {
  listBook: IBook[];
  category: string;
}) => {
  <h1>{category}</h1>;


  return (
    <>
      {listBook.length === 0 ? (
        <div>No Book</div>
      ) : (
        listBook.map((book: IBook) => (
          <div className="book-list">
            <a href="/#" target="_blank" className="book-link">
              <img
                src={book.book_image}
                width="213"
                height="271"
                alt={book.title}
                className="book-img"
              />
            </a>
            <div>
              <a href="/#" target="_blank" className="book-link">
                {book.title}
              </a>
              <p className="book-authors">by {book.author}</p>
              <div className="book__text-container">
                <p className="book__rank">
                  <span className="book__rank-text">Rank: </span>
                  {book.rank}
                </p>
              </div>
              <div className="book__num-container">
                <span className="book__num-weeks" title="Weeks on list">
                  {book.weeks_on_list}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Book;
