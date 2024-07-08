import React, { useState } from "react";
// ------------------------------------------
import review from "./Review.module.css";
// ------------------------------------------
import GoodReview from "./GoodReview.jsx";
import BadReview from "./BadReview.jsx";
import {useLocation} from "react-router-dom";


export default function Review(props) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // const item = searchParams.get('itemId');
    // console.log(item);
    const item = props.itemId;
  return (
    <div className={review.reviewLayout}>
      <GoodReview item = { item } />
      <BadReview item = { item } />
    </div>
  );
}
