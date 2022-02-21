import { render } from '@testing-library/react';
import Spinner from '../Spinner';


      
    it('should render spinner element', () => {
        expect(render(<Spinner />).getByRole("spinner")).toBeInTheDocument();
      });
    