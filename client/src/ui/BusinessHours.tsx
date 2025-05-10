import React from "react";

const BusinessHours: React.FC = () => (
  <div className="bg-white rounded-lg shadow md:p-4 flex flex-col md:w-1/2 w-full p-8">
    <h4 className="font-semibold text-sm mb-3 flex items-center">
      <svg
        className="w-4 h-4 mr-1"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Business Hours
    </h4>
    <div className="flex flex-col gap-1 text-xs">
      <div className="flex justify-between border-b pb-2 mb-2">
        <span>Monday - Friday</span>
        <span className="font-medium">9:00 AM - 5:00 PM</span>
      </div>
      <div className="flex justify-between border-b pb-2 mb-2">
        <span>Saturday</span>
        <span className="font-medium">10:00 AM - 2:00 PM</span>
      </div>
      <div className="flex justify-between border-b pb-2 mb-2">
        <span>Sunday</span>
        <span className="font-medium">Closed</span>
      </div>
    </div>
  </div>
);

export default BusinessHours;
