import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional Healthcare <br />
                <span className="text-blue-400">At Your Doorstep</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Providing quality home healthcare services with experienced professionals. 
                From nursing care to therapy, we're here to support your health journey.
              </p>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700"
              >
                <Calendar className="w-5 h-5" />
                Book Now
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Healthcare Professional"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default Hero; 