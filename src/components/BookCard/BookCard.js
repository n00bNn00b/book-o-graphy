import React from "react";
import "./BookCard.css";

const BookCard = (props) => {
  const { price, author_name, book_name, image } = props.bookInfo;
  return (
    <div className="card-container">
      <img src={image} alt="" />
      <p>Book Name: {book_name}</p>
      <p>Author: {author_name}</p>
      <p>Price: ${price}</p>
      <button className="btn">Add to WishList</button>
    </div>
  );
};

export default BookCard;
