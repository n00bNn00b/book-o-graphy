import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
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
    <div>
      <div className="book-card-container">
        {books.map((book) => (
          <BookCard key={book.id} bookInfo={book} />
        ))}
      </div>
    </div>
  );
};

export default BookStore;
