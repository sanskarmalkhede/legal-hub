import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="cursor-pointer" onClick={toggleAnswer}>
        <div className="bg-blue-500 text-white p-2 rounded">{question}</div>
      </div>
      {isOpen && <div className="p-2">{answer}</div>}
    </div>
  );
};

const Faqs = () => {
  const faqsData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm by running 'npm install react'.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      {faqsData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faqs;
