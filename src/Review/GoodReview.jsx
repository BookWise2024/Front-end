import React, { useState, useEffect } from 'react';
import axios from 'axios'
// --------------------------------------------------
import review from './Review.module.css'
// --------------------------------------------------
import fstimg from '../assets/img/review/good_icon.png';
import secimg from '../assets/img/review/good_text.png';
import thdimg from '../assets/img/review/blue_heart.png';
import fothimg from '../assets/img/review/laugh_icon.png';

export default function GoodReview(props) {

    const isbn = props.isbn;
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        const review = async() => {
            const res = await axios.get("서버에 긍정 리뷰를 요청");
            console.log(res.data);
            setReviewList(res.data);
        }

        // review();
    },[]);

    return (
        <>
            <div className={review.statement}>
                <div className={review.hand}>
                    <img src = { fstimg } />
                </div>
                <div className={review.text}>
                    좋아요
                </div>
            </div>
            <div className={review.goodLayout}>

                <div className={review.good}>
                    <div className={review.imgfst}>
                        <img src = { secimg }/>
                    </div>
                    <div className={review.reviewfstg}>
                        {reviewList[0]}
                    </div>
                </div>

                <div className={review.good}>
                    <div className={review.reviewsecg}>
                        {reviewList[1]}
                    </div>
                    <div className={review.imgsec}>
                        <img src={ thdimg }/>
                    </div>
                </div>

                <div className={review.good}>
                    <div className={review.imgthd}>
                        <img src={ fothimg }/>
                    </div>
                    <div className={review.reviewthdg}>
                        {reviewList[2]}
                    </div>
                </div>
            </div>
        </>
    );
}