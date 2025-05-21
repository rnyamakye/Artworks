import React from "react";

const TermsOfService = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
    <p className="text-gray-700 mb-4">
      By using our website and services, you agree to the following terms and conditions. Please read them carefully.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Use our content and services respectfully and lawfully.</li>
      <li>Do not copy, distribute, or sell our content without permission.</li>
      <li>We reserve the right to update these terms at any time.</li>
    </ul>
    <p className="text-gray-700 mt-4">
      For questions, please <a href="/contact" className="text-blue-600 underline">contact us</a>.
    </p>
  </div>
);

export default TermsOfService;
