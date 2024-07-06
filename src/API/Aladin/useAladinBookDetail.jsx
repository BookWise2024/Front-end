import { useState, useEffect } from 'react';
import axios from 'axios';

const useAladinBookDetail = (bookId) => {
  const [bookDetail, setBookDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const ttbKeys = [
    'ttbksy6543331541001', // 서영
    'ttblouisp02151514001', // 동휘
    'ttbsunny1004870933001', // 혜인
    'ttbemfprhs15791659001', // 동범
    'ttblucy9910102202001'  // 지원
  ];

  useEffect(() => {
    const fetchBookDetail = async () => {
      setIsLoading(true);
      setError(null);

      const fixedBookDetail = {
        "bookId": "0132350882",
        "coverUrl": "https://image.aladin.co.kr/product/205/12/coversum/0132350882_1.jpg",
        "title": "Clean Code: A Handbook of Agile Software Craftsmanship (Paperback) - A Handbook of Agile Software Craftsmanship",
        "author": "로버트 C. 마틴 (지은이)",
        "styleDesc": "",
        "publishDate": "2008-08-01",
        "publisher": "Prentice Hall",
        "category": "외국도서>컴퓨터>소프트웨어 개발/엔지니어링>품질 보증/시험",
        "subcategory": "",
        "description": "",
        "like": "true"
      };

      let fetched = false;

      for (let i = 0; i < ttbKeys.length; i++) {
        const ttbKey = ttbKeys[i];
        try {
          const response = await axios.get('https://www.aladin.co.kr/ttb/api/ItemLookUp.aspx', {
            params: {
              TTBKey: ttbKey,
              ItemId: bookId,
              ItemIdType: 'ISBN',
              Cover: 'Big',
              output: 'js',
              Version: '20131101',
            }
          });

          if (response.data && response.data.item) {
            setBookDetail(response.data.item[0]);
            fetched = true;
            break; // 성공적으로 데이터를 가져왔으므로 루프 종료
          }
        } catch (error) {
          console.error(`Error fetching book details with key ${ttbKey}:`, error);
        }
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

export default useAladinBookDetail;
