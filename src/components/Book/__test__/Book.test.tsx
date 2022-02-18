import {  render } from '@testing-library/react';
import { IBook } from '../../../interface/IBook';
import Book from '../Book';

describe("Book list", () => {
    
    let fakeBooks: IBook[];

    beforeEach(() => {
        fakeBooks  = [
            {
              author: "Clive Cussler and Justin Scott",
              contributor: "by Clive Cussler and Justin Scott",
              description: "In the ninth book in this series, set in 1906, the New York detective Isaac Bell contends with a crime boss passing as a respectable businessman and a tycoon’s plot against President Theodore Roosevelt.",
              primary_isbn13: "9780698406421",
              primary_isbn10: "0698406427",
              publisher: "Putnam",
              rank: 1,
              buy_links: [{name: "Amazon", url: "www.example.com"}],
              book_image: "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
              title: "THE GANGSTER",
              weeks_on_list: "34"
            }
          ];
      });

    test('renders "no book" when the are no book', () => {
        const {getByText} = render(<Book listBook={[]} category={"Fiction"}/>)
        expect(getByText(/No book/i)).toBeInTheDocument();
    })

     test('should render list of books', () => {

        const {getAllByTestId} = render(<Book listBook={fakeBooks} category={"Fiction"}/>);
        const titleBook = getAllByTestId('title-book').map(title => title.textContent);
        const fakeTitleBook =  fakeBooks.map(t => t.title);

        expect(titleBook).toEqual(fakeTitleBook);
      });

    test('should redirect to amazon link', () => {
       render(<Book listBook={fakeBooks} category={"Fiction"} />)
       expect(document.querySelector("a")?.getAttribute("href")).toBe("www.example.com")
    })
});
