import React, { useState } from "react";
// ------------------------------------------
import review from "./Review.module.css";
// ------------------------------------------
import GoodReview from "./GoodReview.jsx";
import BadReview from "./BadReview.jsx";


export default function Review() {
  return (
    <div className={review.reviewLayout}>
      <GoodReview />
      <BadReview />
    </div>
  );
}
