import {  render } from '@testing-library/react';
import { IBook } from '../../../interface/IBook';
import Book from '../Book';

describe("Book list", () => {

    test('renders "no book" when the are no book', () => {
        const {getByText} = render(<Book listBook={[]} category={"Fiction"}/>)
        expect(getByText(/No book/i)).toBeInTheDocument();
    })

     test('should render list of books', () => {
        const fakeBooks: IBook[] = [
            {
              author: "Clive Cussler and Justin Scott",
              contributor: "by Clive Cussler and Justin Scott",
              description: "In the ninth book in this series, set in 1906, the New York detective Isaac Bell contends with a crime boss passing as a respectable businessman and a tycoon’s plot against President Theodore Roosevelt.",
              primary_isbn13: "9780698406421",
              primary_isbn10: "0698406427",
              publisher: "Putnam",
              rank: 1,
              book_image: "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
              title: "THE GANGSTER",
              weeks_on_list: "34"
            }
          ];

        const {getAllByTestId} = render(<Book listBook={fakeBooks} category={"Fiction"}/>);
        const titleBook = getAllByTestId('title-book').map(title => title.textContent);
        const fakeTitleBook =  fakeBooks.map(t => t.title);

        expect(titleBook).toEqual(fakeTitleBook);
      });


});
