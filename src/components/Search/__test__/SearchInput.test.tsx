import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { IBook } from '../../../interface/IBook';
import SearchInput from '../SearchInput'


describe("Search input", () => {

    let fakeBooks: IBook[];

    afterEach(() => {
        cleanup();
       });
       
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

      
    it('should render input element', () => {
        render(<SearchInput />);
        // const inputElement = screen.getByPlaceholderText(/Cerca libro.../i);
        // expect(inputElement).toBeInTheDocument();
        
      });

    //   it('should be able to type into input', () => {
    //     render(
    //         <SearchInput />
    //     );
    //     const inputElement = screen.getByPlaceholderText(/Cerca libro.../i) as HTMLInputElement;
    //     fireEvent.click(inputElement)
    //     fireEvent.change(inputElement, { target: { value: "Harry Potter" } })
    //     expect(inputElement.value).toBe("Harry Potter");
    // });

    // it('should search a book for title', () => {
    //     render(<SearchInput />);

    //     const inputElement = screen.getByPlaceholderText(/Cerca libro.../i) as HTMLInputElement;

    //     const valueInput = (inputElement as HTMLInputElement).value;
    //     const fakeTitleBook =  fakeBooks.map(t => t.title);

    //     expect(valueInput).toBe(fakeTitleBook);
    // });

    // it('should be able to press key down Enter', () => {
        
    //     render(<SearchInput  {...fakeBooks}/>);
    //     const inputElement = screen.getByPlaceholderText(/Cerca libro.../i);
    //     const valueInput = (inputElement as HTMLInputElement).value;
    //     fireEvent.keyDown(inputElement, { key: 'Enter', charCode: 13 });
    //     const fakeTitleBook =  fakeBooks.map(t => t.title);

    //     expect(valueInput).toEqual(fakeTitleBook);
    // })
});
