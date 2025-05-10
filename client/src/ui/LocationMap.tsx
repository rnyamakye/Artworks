import React from "react";

interface LocationMapProps {
  address: string;
  mapQuery: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ address, mapQuery }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <div className="w-full h-32 mb-3 rounded overflow-hidden">
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          mapQuery
        )}&output=embed`}
      />
    </div>
    <div>
      <h4 className="font-semibold text-sm mb-1">Our Location</h4>
      <p className="text-xs text-gray-600">{address}</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          mapQuery
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-1 text-blue-600 hover:text-blue-800 text-xs"
      >
        Get Directions
        <svg
          className="w-3 h-3 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  </div>
);

export default LocationMap;
