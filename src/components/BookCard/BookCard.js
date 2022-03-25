import React from "react";
import "./BookCard.css";

const BookCard = (props) => {
  const { price, author_name, book_name, image, genre } = props.bookInfo;
  return (
    <div className="card-container">
      <img src={image} alt="" />
      <div className="card-info">
        <p className="title">
          {" "}
          <span>Book Name:</span> {book_name}{" "}
        </p>
        <p>
          {" "}
          <span className="info-title">Genre:</span> {genre}{" "}
        </p>
        <p>
          {" "}
          <span className="info-title">Author:</span> {author_name}
        </p>
        <p>
          <span className="info-title">Price:</span>{" "}
          <span className="price">${price}</span>{" "}
        </p>
      </div>
      <button className="btn">Add to WishList</button>
    </div>
  );
};

export default BookCard;
