import {useLocation} from "react-router-dom";

import Header from './Header/Header.jsx';
import Info from './Info/Info.jsx';
import Layout from '../../../Common/Layout/Layout.jsx';
import BookInfo from './BookInfo/BookInfo.jsx';
import RelatedBooks from '../../Search/SearchDetail/RelatedBook/RelatedBooks.jsx';
import style from './LibraryDetail.module.css'
export default function LibraryDetailLocation() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // /api/library/book/{bookId}/{libraryId} 에 필요
    const libraryId = searchParams.get('libraryId');
    const isbn = searchParams.get('isbn13');
    const hasbook = searchParams.get('hasbook');
    const loanAvailable = searchParams.get('loanAvailable');

    console.log(libraryId);
    console.log(isbn);
    console.log(hasbook);
    console.log(loanAvailable);

    return (
        <Layout>
          <div className={style.Library_detail_container}>
            <Header />
            <Info libraryId = { libraryId }/>
            <BookInfo bookId = { isbn } hasbook = { hasbook } loanAvailable = { loanAvailable } libraryId = { libraryId }/>
            <div className={style.related_books_wrapper}>
              <RelatedBooks isbn={isbn} />
            </div>
          </div>
        </Layout> 
    );
}