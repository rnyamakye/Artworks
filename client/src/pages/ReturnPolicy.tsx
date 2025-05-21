

const ReturnPolicy = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
    <p className="text-gray-700 mb-4">
      We want you to love your purchase! If you’re not satisfied, you may return
      eligible items within 30 days of delivery.
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li>Items must be unused and in original condition.</li>
      <li>Custom or commissioned artworks are non-returnable.</li>
      <li>Contact us to initiate a return or for more information.</li>
    </ul>
    <p className="text-gray-700 mt-4">
      For return questions, please{" "}
      <a href="/contact" className="text-blue-600 underline">
        contact us
      </a>
      .
    </p>
  </div>
);

export default ReturnPolicy;
