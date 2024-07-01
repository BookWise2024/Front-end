import SearchHeader from '../Common/Header/SearchHeader'; 
import styles from './BookLikeList.module.css';
// import Layout from '../Common/Layout/Layout.jsx';

const books = [
  { title: '해리포터와 마법사의 돌', img: 'src/assets/img/book/book2.png' },
  { title: '해리포터와 비밀의 방', img: 'src/assets/img/book/book2.png' },
  { title: '해리포터와 아즈카반의 죄수', img: 'src/assets/img/book/book3.png' },
  { title: '해리포터와 불의 잔', img: 'src/assets/img/book/book4.png' }
];
const BookLikeList = () => {
  return (
    <div className={styles.bookListContainer}>
      <SearchHeader /> 
        <div className={styles.bookListHeader}>
          <div className={styles.title}>선호책 리스트</div>
          <div className={styles.totalCount}>총 4 건</div> </div>
         <div className={styles.bookList}>
                {books.map((book, index) => (
                    <div className={styles.bookItem} key={index}>
                        <img src={book.img} alt={book.title} className={styles.bookImage} />
                        
                    </div>
                ))}
          </div>
        
    </div>
  );
 
    
  
 
}

export default BookLikeList;