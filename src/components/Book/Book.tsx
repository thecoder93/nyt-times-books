import { IBook } from "../../interface/IBook";
import './Book.css';
import BookLink from "./BookLink";
import {v4 as uuid} from "uuid";
import styled from "styled-components";

const DisplayBooks = styled.div`
display : grid;
grid-gap: 30px;
row-gap: 2em;
margin: 2rem;

@media only screen and (min-width: 768px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media only screen and (min-width: 1024px) {
  display: grid;
  grid-template-areas: 'category category category';
   grid-template-columns: repeat(2, 1fr);
}
`

const Book = ({
  listBook,
  category,
}: {
  listBook: IBook[];
  category: string;
}) => {


  return (
    <>
  <h1 className="category">{category}</h1>;
  <DisplayBooks>

      {listBook.length === 0 ? (
        <div>No Book</div>
      ) : (
        listBook.map((book: IBook) => (
          <div className="book-list book" key={uuid()} >
            <BookLink bookLink={book.buy_links} >
              <img
                src={book.book_image}
                width="213"
                height="271"
                alt={book.title}
                className="book-img"
              />
            </BookLink>
            <div>
              <div className="book-link" data-testid="title-book">
                {book.title}
              </div>
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
      </DisplayBooks>
    </>
  );
};

export default Book;
