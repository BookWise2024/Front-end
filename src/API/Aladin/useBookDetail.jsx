import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookDetail = (bookId) => {
  const token = localStorage.getItem('accessToken');

  const [bookDetail, setBookDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://43.203.74.198:8000/api/book/${bookId}`,
            {
              headers: { 'Authorization': `${token}` },
            });
        console.log(response.data);

        setBookDetail(response.data);

      } catch (err) {
        console.error(`Error fetching book details with key:`, err);
        setError(err);
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
