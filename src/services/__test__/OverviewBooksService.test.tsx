import { API_ENDPOINT, getOverviewBooks } from '../OverviewBooksServices';
import axios from '../__mocks__/axios';

describe("fetchBooks", () => {
    describe("when API call is successful", () => {
      it("should return books list", async () => {
        // given
        const books = { num_results: 210 }
        axios.get.mockResolvedValueOnce(books);
  
        // when
        const result = await getOverviewBooks();
  
        // then
        expect(axios.get).toHaveBeenCalledWith(API_ENDPOINT);
        expect(result).toEqual(books);
      });
    })


    describe("when API call fails", () => {
        it("should return empty books list", async () => {
          // given
          const message = "Network Error";
          axios.get.mockRejectedValueOnce(new Error(message));
    
          // when
          const result = await getOverviewBooks();
    
          // then
          expect(axios.get).toHaveBeenCalledWith(API_ENDPOINT);
          expect(result).toEqual([]);
        });
      });
});