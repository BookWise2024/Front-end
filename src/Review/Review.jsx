import React, { useState } from "react";
// ------------------------------------------
import review from "./Review.module.css";
// ------------------------------------------
import GoodReview from "./GoodReview.jsx";
import BadReview from "./BadReview.jsx";


export default function Review(props) {

    const isbn = props.isbn;
  return (
    <div className={review.reviewLayout}>
      <GoodReview isbn = { isbn } />
      <BadReview isbn = { isbn } />
    </div>
  );
}
