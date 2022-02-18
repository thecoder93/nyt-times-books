import React from 'react'

const BookLink = (props: any) => {

  return (
    <>
      {props.bookLink.length !== 0 ? (
        <a href={props.bookLink[0].url} target="_blank" rel="noreferrer" className="book-link">
          {props.children}
        </a>
      ) : (
         props.children 
      )}
    </>
  );
}

export default BookLink