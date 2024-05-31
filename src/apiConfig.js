const apiUrl = process.env.NODE_ENV === 'production'
  ? 'https://.railway.app'
  : 'http://localhost:8000';

// const apiUrl = 'http://localhost:8000'
export default apiUrl;

