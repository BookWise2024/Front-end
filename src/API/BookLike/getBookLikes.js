import axios from 'axios';

const getBookLikes = async (token) => {
  try {
    const response = await axios.get('/api/wishlist', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.bookList;
  } catch (error) {
    console.error('Error fetching book likes:', error);
    return [];
  }
};

export default getBookLikes;
