import React from "react";

const ShippingPolicy = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
    <p className="text-gray-700 mb-4">
      We offer worldwide shipping for all our pencil artworks and products.
      Shipping times and costs vary by location and product type.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Orders are processed within 2-3 business days.</li>
      <li>Domestic shipping: 3-7 business days.</li>
      <li>International shipping: 7-21 business days.</li>
      <li>Tracking information will be provided once your order ships.</li>
    </ul>
    <p className="text-gray-700 mt-4">
      For shipping questions, please{" "}
      <a href="/contact" className="text-blue-600 underline">
        contact us
      </a>
      .
    </p>
  </div>
);

export default ShippingPolicy;
