import React from 'react';

const JobCard = ({ title, facility, location, rate, shift }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{facility}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {location}
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          ${rate}/hr
        </span>
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
          {shift}
        </span>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard; 