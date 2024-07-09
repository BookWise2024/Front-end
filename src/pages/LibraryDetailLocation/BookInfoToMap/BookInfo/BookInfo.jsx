import React, { useEffect,useState } from 'react';
import axios from 'axios';
// ================================================
import AppStyle from './../../../../App.module.css';
import style from './BookInfo.module.css';


export default function BookInfo(props) {

    const libraryId = props.libraryId;
    const bookId = props.bookId;
    const hasbook = props.hasbook;
    const loanAvailable = props.loanAvailable;

    console.log(libraryId + ", " + bookId + ", " + hasbook + ", " + loanAvailable);

    const [bookInfo, setBookInfo] = useState(null);
    const [libraryInfo, setLibraryInfo] = useState(null);

    useEffect(() => {
        const bookinfo = async() => {
            const res = await axios.get('http://43.203.74.198:8000/api/library/book/' + bookId + '/' + libraryId
                + "?has-book=" + hasbook + "&loan-available=" + loanAvailable);

            const book = res.data.book;
            const library = res.data.library;

            console.log(book);
            console.log(library);
            setBookInfo(book);
            setLibraryInfo(library);
        }

        bookinfo();
    },[bookId, libraryId, hasbook, loanAvailable]);

    // info 값이 잘 set 되었는지 확인하기
    if (!bookInfo || !libraryInfo) {
        return <div>Library information not found.</div>;
    }

    // 상태에 따른 보유 유무 변경
    const status = [];
    if(hasbook === "Y") {
        status.push(
            <div className={style.exist}>
                <div className={`${AppStyle.Body4} ${style.statusText}`}>보유중</div>
            </div>
        );
    } else if(hasbook === "N") {
        status.push(
            <div className={style.nonexist}>
                <div className={`${AppStyle.Body4} ${style.statusText}`}>미보유</div>
            </div>
        );
    }

    // 상태에 따른 대출 여부 변경
    const loan = [];
    if(loanAvailable === "Y") {
        loan.push(
            <div className={style.loanPossible}>
                <div className={`${AppStyle.Body4} ${style.statusText}`}>대출가능</div>
            </div>
        );
    } else if(loanAvailable === "N") {
        loan.push(
            <div className={style.loanImPossible}>
                <div className={`${AppStyle.Body4} ${style.statusText}`}>대출불가</div>
            </div>
        );
    }

    return (
        // <>
        //     <div className={style.infoBase}>
        //         <div className={style.bookInfo}>
        //             <div className={style.bookImg}>
        //                 <img/>
        //             </div>
        //             <div className={style.info}>
        //                 <div className={style.simpleInfo}>
        //                     <div className={`${AppStyle.subtitle2} ${style.title}`}>제목</div>
        //                     <div className={style.subInfo}>
        //                         <div className={`${AppStyle.Body4} ${style.content}`}>저자</div>
        //                         <div className={`${AppStyle.Body4} ${style.content}`}>출판사</div>
        //                         <div className={`${AppStyle.Body4} ${style.content}`}>년도</div>
        //                     </div>
        //                 </div>
        //                 <div className={style.bookStatus}>
        //                     <div className={style.exist}>
        //                         <div className={`${AppStyle.Body4} ${style.statusText}`}>보유중</div>
        //                     </div>
        //                     <div className={style.loanPossible}>
        //                         <div className={`${AppStyle.Body4} ${style.statusText}`}>대출가능</div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={`${AppStyle.Caption1} ${style.description}`}>
        //             * 24시간 전 기준이므로 대출 상황이 달라질 수도 있습니다
        //         </div>
        //     </div>
        // </>
        <>
            <div className={style.infoBase}>
                <div className={style.bookInfo}>
                    
                    <img className={style.bookImg} src={bookInfo.coverUrl}/>
                   
                    <div className={style.info}>
                        <div className={style.simpleInfo}>
                            <div className={`${AppStyle.subtitle2} ${style.title}`}>{bookInfo.title}</div>
                            <div className={style.subInfo}>
                                <div className={`${AppStyle.Body4} ${style.content}`}>{bookInfo.author}</div>
                                <div className={`${AppStyle.Body4} ${style.content}`}>{bookInfo.publisher}</div>
                                <div className={`${AppStyle.Body4} ${style.content}`}>{bookInfo.category}</div>
                            </div>
                        </div>
                        <div className={style.bookStatus}>
                            { status }
                            { loan }
                        </div>
                    </div>
                </div>
                <div className={`${AppStyle.Caption1} ${style.description}`}>
                    * 24시간 전 기준이므로 대출 상황이 달라질 수도 있습니다
                </div>
            </div>
        </>
    );
}