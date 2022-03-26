import React from "react";
import "./Wishlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Wishlist = ({ onWishList, setOnWishList }) => {
  // choose random book
  const chooseRandom = () => {
    if (onWishList.length === 4) {
      const randomNumber = Math.floor(Math.random() * 4);
      console.log(randomNumber);
      const chooseRandomBook = onWishList[randomNumber];
      alert(
        chooseRandomBook.book_name +
          " was randomly selected from the above 4 books"
      );
    } else {
      alert("select 4 books first");
      return;
    }
  };
  // clear list
  const clearList = () => {
    setOnWishList([]);
  };
  //delete single
  const removeSingleBook = () => {
    onWishList.map((book) => {
      const restBooks = onWishList.filter((single) => single.id !== book.id);
      // console.log(restBooks);
      return setOnWishList(restBooks);
    });
  };
  return (
    <div className="wishlist">
      <h2>WishList</h2>
      <div className="selected-books">
        {onWishList.map((book) => (
          <p key={book.id}>
            {" "}
            {book.book_name}{" "}
            <button className="trash-icon" onClick={removeSingleBook}>
              <FontAwesomeIcon className="trash-icon-fa" icon={faTrashCan} />
            </button>{" "}
          </p>
        ))}
      </div>

      <div className="wishlist-btn">
        <button onClick={chooseRandom} className="wishlist-btn-style">
          Choose One
        </button>
        <button onClick={clearList} className="wishlist-btn-style">
          Clear List
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
