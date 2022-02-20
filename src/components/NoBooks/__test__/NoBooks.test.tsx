import {  screen, render } from '@testing-library/react';
import NoBooks from '../NoBooks';

describe("NoBooks", () => {

     test('should render Nessun risultato', () => {
         render(<NoBooks />);
         expect(screen.getByText(/Nessun risultato/i)).toBeInTheDocument();
      });

});
