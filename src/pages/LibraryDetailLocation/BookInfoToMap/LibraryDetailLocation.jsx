import {useLocation} from "react-router-dom";

import Header from './Header/Header.jsx';
import Info from './Info/Info.jsx';
import Layout from '../../../Common/Layout/Layout.jsx';
import BookInfo from './BookInfo/BookInfo.jsx';

export default function LibraryDetailLocation() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // /api/library/book/{bookId}/{libraryId} 에 필요
    const libraryId = searchParams.get('libraryId');
    const bookId = searchParams.get('bookId');
    const hasbook = searchParams.get('hasbook');
    const loanAvailable = searchParams.get('loanAvailable');

    console.log(libraryId);
    console.log(bookId);
    console.log(hasbook);
    console.log(loanAvailable);

    return (
        <Layout>
            <Header />
            <Info libraryId = { libraryId }/>
            <BookInfo bookId = { bookId } hasbook = { hasbook } loanAvailable = { loanAvailable } libraryId = { libraryId }/>
            {/*<BookInfo />*/}
        </Layout> 
    );
}