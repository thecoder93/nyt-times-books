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
  grid-template-columns: repeat(3, 1fr);

}
`

const BookOfWeek = ({children}: any) => {
  return (
    <DisplayBooks>
      {children}
    </DisplayBooks>
  )
}

export default BookOfWeek