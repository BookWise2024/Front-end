// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookStatusTag = ({ status }) => {
  let backgroundColor;
  let text;

  switch (status) {
    case 'available':
      backgroundColor = 'green';
      text = '보유중';
      break;
    case 'unavailable':
      backgroundColor = 'red';
      text = '미보유';
      break;
    case 'borrowable':
      backgroundColor = 'blue';
      text = '대출가능';
      break;
    default:
      backgroundColor = 'gray';
      text = '알 수 없음';
  }

  return (
    <div style={{ padding: '10px', backgroundColor, color: 'white', borderRadius: '5px', display: 'inline-block' }}>
      {text}
    </div>
  );
};

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
