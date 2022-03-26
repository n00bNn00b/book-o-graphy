import React from "react";
import "./BookCard.css";

const BookCard = ({ book, onWishList, setOnWishList }) => {
  const addToWishListHandler = () => {
    if (onWishList.length < 4) {
      for (const bookItem of onWishList) {
        if (bookItem.id === book.id) {
          alert("You Have Already selected the book");
          return;
        }
      }
      setOnWishList([...onWishList, book]);
      console.log(onWishList);
    } else {
      alert("Only 4 items");
    }
  };

  return (
    <div className="card-container">
      <img src={book.image} alt="" />
      <div className="card-info">
        <p className="title">
          {" "}
          <span>Book Name:</span> {book.book_name}{" "}
        </p>
        <p>
          {" "}
          <span className="info-title">Genre:</span> {book.genre}{" "}
        </p>
        <p>
          {" "}
          <span className="info-title">Author:</span> {book.author_name}
        </p>
        <p>
          <span className="info-title">Price:</span>{" "}
          <span className="price">${book.price}</span>{" "}
        </p>
      </div>
      <button className="btn" onClick={addToWishListHandler}>
        Add to WishList
      </button>
    </div>
  );
};

export default BookCard;
