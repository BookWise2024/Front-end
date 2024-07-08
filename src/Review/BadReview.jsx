import React, { useState, useEffect } from 'react';
import axios from 'axios'
// --------------------------------------------------
import review from './Review.module.css'
// --------------------------------------------------
import fstimg from '../assets/img/review/bad_icon.png';
import secimg from '../assets/img/review/bad_text.png';
import thdimg from '../assets/img/review/red_heart.png';
import fothimg from '../assets/img/review/anger_icon.png';

export default function BadReview(props) {

    const isbn = props.isbn;
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        const review = async() => {
            const res = await axios.get("http://43.203.74.198:8000/api/book/review/" + isbn);
            console.log(res.data);
            setReviewList(res.data.negative);
        }

        review();
    },[]);

    return (
        <>
            <div className={review.statement}>
                <div className={review.hand}>
                    <img src = { fstimg } />
                </div>
                <div className={review.text}>
                    싫어요
                </div>
            </div>
            <div className={review.badLayout}>

                <div className={review.good}>
                    <div className={review.imgfst}>
                        <img src = { secimg }/>
                    </div>
                    <div className={review.reviewfstb}>
                        {reviewList[0]}
                    </div>
                </div>

                <div className={review.good}>
                    <div className={review.reviewsecb}>
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
                    <div className={review.reviewthdb}>
                        {reviewList[2]}
                    </div>
                </div>
            </div>
        </>
    );
}