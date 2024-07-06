import React, { useState } from 'react';
// ------------------------------------------
import review from './Review.module.css';
// ------------------------------------------
import GoodReview from './GoodReview.jsx';
import BadReview from './BadReview.jsx';
import Layout from './../Common/Layout/Layout.jsx'

export default function Review() {

    return (
        <Layout>
            <div className={ review.reviewLayout }>
                <GoodReview/>
                <BadReview/>
            </div>
        </Layout>
    );
}