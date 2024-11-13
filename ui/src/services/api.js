import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Add request interceptor for debugging
axios.interceptors.request.use(request => {
  console.log('Starting Request:', request);
  return request;
});

// Add response interceptor for debugging
axios.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('API Error:', error.response || error);
    throw error;
  }
);

export const api = {
  createBooking: async (bookingData) => {
    try {
      const response = await axios.post(`${API_URL}/bookings`, bookingData);
      return response.data;
    } catch (error) {
      console.error('Booking Error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },

  createInquiry: async (inquiryData) => {
    try {
      const response = await axios.post(`${API_URL}/inquiries`, inquiryData);
      return response.data;
    } catch (error) {
      console.error('Inquiry Error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  }
}; 