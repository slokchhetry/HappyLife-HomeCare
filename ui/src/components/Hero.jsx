import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connecting Healthcare Heroes with Opportunities
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find your next healthcare position or hire qualified healthcare professionals
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
              Find Work
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md border border-blue-600 hover:bg-blue-50">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 