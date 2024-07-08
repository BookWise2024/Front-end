import React, { useState } from 'react';
import useBookDetail from './useBookDetail';

const BookDetailTestPage = () => {
  const [bookId, setBookId] = useState('0132350882');
  const { bookDetail, isLoading, error } = useBookDetail(bookId);

  const handleBookIdChange = (e) => {
    setBookId(e.target.value);
  };

  const handleFetchBookDetail = () => {
    // This will trigger the useEffect in the custom hook to fetch the new book details
    setBookId(bookId);
  };

  return (
    <div>
      <h1>Aladin Book Detail Test Page</h1>
      <input
        type="text"
        value={bookId}
        onChange={handleBookIdChange}
        placeholder="Enter Book ID"
      />
      <button onClick={handleFetchBookDetail}>Fetch Book Detail</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {bookDetail && (
        <div>
          <h2>{bookDetail.title}</h2>
          <img src={bookDetail.coverUrl} alt={bookDetail.title} />
          <p>Author: {bookDetail.author}</p>
          <p>Publish Date: {bookDetail.publishDate}</p>
          <p>Publisher: {bookDetail.publisher}</p>
          <p>Category: {bookDetail.category}</p>
          <p>Subcategory: {bookDetail.subcategory}</p>
          <p>Description: {bookDetail.description}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetailTestPage;
