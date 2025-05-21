import { useState } from "react";

const faqData = [
  {
    question: "How do I commission a pencil artwork?",
    answer:
      "You can commission a pencil artwork by contacting us through our contact page with details about your desired piece. We'll discuss your requirements, timeline, and pricing.",
  },
  {
    question: "What materials do you recommend for beginners?",
    answer:
      "For beginners, we recommend starting with a set of HB, 2B, and 4B pencils, a good eraser, and smooth sketch paper. These basics help you practice shading and line work effectively.",
  },
  {
    question: "How can I submit my artwork for a feature?",
    answer:
      "Submit your artwork by emailing us at submissions@example.com or tagging us on social media with #OurArtFeature. We review submissions monthly and showcase selected pieces on our blog.",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes! We offer live and recorded online classes covering various pencil techniques. Check our Tutorials page for current offerings and schedules.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via the Contact page or by emailing support@example.com. We aim to respond within 24 hours.",
  },
];

const FAQs = () => {
  // Track which accordion items are open (by index)
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      // Close it
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Open it
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map(({ question, answer }, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-left font-medium text-gray-900">{question}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`px-4 pb-4 text-gray-700 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 pt-4" : "max-h-0"
                }`}
              >
                {answer}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-gray-700 mt-8 text-center">
        Didn’t find your answer?{" "}
        <a href="/contact" className="text-indigo-600 underline hover:text-indigo-800">
          Contact us
        </a>
        .
      </p>
    </div>
  );
};

export default FAQs;
