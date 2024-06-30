// 예시이므로 버튼 상태에 따라 정할듯하다. 그리고 태그의 상태를 저런식으로 정할지 우선 만들어보고 판단해야할듯하다.
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookStatusTag from './BookStatusTag';

const BookStatus = ({ bookId }) => {
  const [status, setStatus] = useState(null); // 초기 상태를 null로 설정하여 로딩 상태 표시

  useEffect(() => {
    // 도서 상태를 가져오는 비동기 함수
    const fetchBookStatus = async () => {
      try {
        const response = await axios.get(`https://api.example.com/books/${bookId}/status`);
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching book status:', error);
        setStatus('unavailable'); // 에러가 발생하면 미보유 상태로 설정
      }
    };

    fetchBookStatus();
  }, [bookId]);

  if (status === null) {
    return <div>Loading...</div>; // 로딩 상태 표시
  }

  return <BookStatusTag status={status} />;
};

export default BookStatus;
