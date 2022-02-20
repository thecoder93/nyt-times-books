import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IBook } from '../../../interface/IBook';
import { BooksContext } from '../../ListBooks/ListBooks';
import SearchInput from '../SearchInput'


describe("Search input", () => {
      
    it('should render input element', () => {
        render(<SearchInput />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
      });

        
    it('should call setSearch function on input change', () => {
      render(<SearchInput />);

      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    
    it('should render input with search value', () => {
      const setSearch = jest.fn();

      render(
        <BooksContext.Provider value={{search: 'test', setSearch }}>
          <SearchInput />
        </BooksContext.Provider>
      );

      expect(screen.getByRole('textbox')).toHaveDisplayValue('test');
    });

  it('should call setSearch function on input change', () => {
    const setSearch = jest.fn();

    render(
      <BooksContext.Provider value={{search: '', setSearch }}>
        <SearchInput />
      </BooksContext.Provider>
    );

    userEvent.type(screen.getByRole('textbox'), 't');
    expect(setSearch).toHaveBeenCalledWith('t');
  });
});
