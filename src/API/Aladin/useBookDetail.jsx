import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookDetail = (bookId) => {
  const [bookDetail, setBookDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fixedBookDetail = {
    "bookId": "9788960778818",
    "coverUrl": "https://image.aladin.co.kr/product/205/12/coversum/0132350882_1.jpg",
    "title": "Clean Code: A Handbook of Agile Software Craftsmanship (Paperback) - A Handbook of Agile Software Craftsmanship",
    "author": "로버트 C. 마틴 (지은이)",
    "styleDesc": "",
    "publishDate": "2008-08-01",
    "publisher": "Prentice Hall",
    "category": "컴퓨터",
    "subcategory": "자바",
    "description": "",
    "itemId": "2726985",
    "like": true
  };

  useEffect(() => {
    const fetchBookDetail = async () => {
      setIsLoading(true);
      setError(null);

      let fetched = false;

      try {
        const response = await axios.get(`http://43.203.74.198:8000/api/book/${bookId}/1`);
        console.log(response.data);

        if (response.data) {
          setBookDetail(response.data);
          fetched = true; // 성공적으로 데이터를 가져왔으므로 루프 종료
        }
      } catch (err) {
        console.error(`Error fetching book details with key:`, err);
        setError(err);
      }

      if (!fetched) {
        setBookDetail(fixedBookDetail); // 임시 데이터를 사용
      }

      setIsLoading(false);
    };

    if (bookId) {
      fetchBookDetail();
    }
  }, [bookId]);

  return { bookDetail, isLoading, error };
};

export default useBookDetail;
