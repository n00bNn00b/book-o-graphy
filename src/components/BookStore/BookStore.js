import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import Wishlist from "../Wishlist/Wishlist";
import "./BookStore.css";

const BookStore = () => {
  const [books, setBooks] = useState([]);
  const [onWishList, setOnWishList] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="body-container">
      <div className="book-card-container">
        {books.map((book) => (
          <BookCard
            onWishList={onWishList}
            setOnWishList={setOnWishList}
            key={book.id}
            book={book}
          />
        ))}
      </div>
      <div className="wishlist-container">
        <Wishlist onWishList={onWishList} setOnWishList={setOnWishList} />
      </div>
    </div>
  );
};

export default BookStore;
