import SearchHeader from '../../Common/SearchHeader/SearchHeader.jsx';
import styles from './BookLike.module.css';
import Layout from '../../Common/Layout/Layout.jsx';
import getBookLikes from '../../API/BookLike/getBookLikes.js'; 

const books = [
  { title: '해리포터와 마법사의 돌', img: 'src/assets/img/book/book2.png' },
  { title: '해리포터와 비밀의 방', img: 'src/assets/img/book/book2.png' },
  { title: '해리포터와 아즈카반의 죄수', img: 'src/assets/img/book/book3.png' },
  { title: '해리포터와 불의 잔', img: 'src/assets/img/book/book4.png' }
];

const BookLike = () => {
  return (
    <Layout>
      <div className={styles.bookListContainer}>
        <SearchHeader />
        <div className={styles.bookListContent}>
          <div className={styles.bookListHeader}>
            <div className={styles.title}>선호책 리스트</div>
            <div className={styles.totalCount}>총 {books.length} 건</div>
          </div>
          <div className={styles.bookList}>
            {books.map((book, index) => (
              <div className={styles.bookItem} key={index}>
                <img src={book.img} alt={book.title} className={styles.bookImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BookLike;

// 수정본
// import React, { useEffect, useState } from 'react';
// import SearchHeader from '../../Common/SearchHeader/SearchHeader.jsx';
// import styles from './BookLike.module.css';
// import Layout from '../../Common/Layout/Layout.jsx';
// import getBookLikes from '../../API/BookLike/getBookLikes.js'; 

// const BookLike = () => {
//   const [books, setBooks] = useState([]);
//   const token = 'YOUR_TOKEN_HERE'; // 실제 토큰으로 교체하세요.

//   useEffect(() => {
//     const fetchBookLikes = async () => {
//       const bookList = await getBookLikes(token);
//       setBooks(bookList);
//     };

//     fetchBookLikes();
//   }, [token]);

//   return (
//     <Layout>
//       <div className={styles.bookListContainer}>
//         <SearchHeader />
//         <div className={styles.bookListContent}>
//           <div className={styles.bookListHeader}>
//             <div className={styles.title}>선호책 리스트</div>
//             <div className={styles.totalCount}>총 {books.length} 건</div>
//           </div>
//           <div className={styles.bookList}>
//             {books.map((book, index) => (
//               <div className={styles.bookItem} key={index}>
//                 <img src={book.coverUrl} alt={book.bookId} className={styles.bookImage} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default BookLike;
