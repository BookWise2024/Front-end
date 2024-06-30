import React, { useState } from 'react';
// ------------------------------------------
import layout from '../Common/TestLayout.module.css';
import review from './Review.module.css';
// ------------------------------------------
import GoodReview from './GoodReview.jsx';
import BadReview from './BadReview.jsx';

export default function Review() {

    return (
        <div className={layout.layout}>
            <div className={ review.reviewLayout }>
                <GoodReview/>
                <BadReview/>
            </div>
        </div>
    );
}