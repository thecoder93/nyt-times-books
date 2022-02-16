import {  render } from '@testing-library/react';
import Book from '../Book';

describe("Book list", () => {

    test('renders "no book" when the are no book', () => {
        const {getByText} = render(<Book listBook={[]} category={"Fiction"}/>)
        expect(getByText(/No book/i)).toBeInTheDocument();
    })
});
