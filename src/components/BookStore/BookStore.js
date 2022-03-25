import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import Wishlist from "../Wishlist/Wishlist";
import "./BookStore.css";

const BookStore = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div className="body-container">
      <div className="book-card-container">
        {books.map((book) => (
          <BookCard key={book.id} bookInfo={book} />
        ))}
      </div>
      <div className="wishlist-container">
        <Wishlist />
      </div>
    </div>
  );
};

export default BookStore;
