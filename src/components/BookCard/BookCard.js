import React from "react";
import "./BookCard.css";

const BookCard = (props) => {
  const { price, author_name, book_name, image } = props.bookInfo;
  return (
    <div className="card-container">
      <img src={image} alt="" />
      <h3>Book Name: {book_name}</h3>
      <h3>Author: {author_name}</h3>
      <h4>Price: {price}</h4>
      <button className="btn">Add to WishList</button>
    </div>
  );
};

export default BookCard;
