const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  bookingDate: {
    type: Date,
    required: true
  },
  bookingTime: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema); 