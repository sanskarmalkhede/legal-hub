import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-4">
      <div className="cursor-pointer" onClick={toggleAnswer}>
        <div className="bg-gray-500 text-white p-2 rounded">{question}</div>
      </div>
      {isOpen && <div className="p-2">{answer}</div>}
    </div>
  );
};

const Faqs = () => {
  const faqsData = [
    {
      question:
        "Whether an Indian citizen partner is required for a foreigner or Foreign Company to start a business in India?",
      answer:
        "No, if a Foreign Company wants to start a business in India in the Form of a branch office or a liaison office or as a 100% subsidiary then it does not require an Indian partner in India. Such legal entities if started with the required permissions then they can legally repatriate the funds back to their country at any point of time. Only in the cases of Joint ventures Indian partner is required. In addition to that there are restrictions with regards to the permissibility of FDI in certain sectors. If it is a 100% automatic route, then approval of the Government to start the business is not necessary. In such automatic route cases paper work to be done through the dealer and to be approved by the Reserve Bank of India.",
    },
    {
      question: "What is the Fee for First consultation?",
      answer:
        "We do not charge any fee for first consultation if the consultation is given over email or telephone. If the personal consultation is done then the fee will be on the basis of the time spent on the matter.",
    },
    {
      question: "What are the languages the Firm is comfortable with?",
      answer:
        "The Firm normally uses English as the base language for communication. But the Firm has tied up with an internationally reputed translation Company to handle communications in other languages including French, Chinese, Spanish, Japanese, Korean and Arabic.",
    },
    {
      question:
        "What is the experience of your Firm in serving International clients?",
      answer:
        "Our Firm and its partners have strong international exposure and hence the Firm ensures international standard of services always. The Firm and its partners have served various corporate and individual clients from about 32 countries. The Firm is fully equipped with modern communication facilities and well trained staff members to effectively serve the clients.",
    },
    {
      question:
        "Whether the funds invested in India can be freely repatriated back from India at any point of time by the parent foreign Company?",
      answer:
        "If the business set up in India is made with the required approvals from Reserve Bank of India and respective Government departments, then the funds of the Indian venture of a Foreign Company can be repatriated at any point of time. But if the investment approvals require any lock in period, then those conditions will apply.",
    },
    {
      question:
        "Are there any International Institutional Arbitration centres in India?",
      answer:
        "Yes, there are many Arbitration centres handling international arbitrations also. ICA (Indian Council of Arbitration) is one of the very reputed international arbitration centres in India.",
    },
    {
      question:
        "What are the provisions governing International Arbitrations in India?",
      answer:
        "Indian Arbitration and Conciliation Act 1996 is the law which governs international Arbitration in India.",
    },
    {
      question: "How effective is the Arbitration mechanism in India?",
      answer:
        "Indian Arbitration Act 1996 which was enacted in the lines of UNICIRAL Model law on Arbitration and hence Arbitration procedure in India is not in any way different from any of the developed countries. If an award is passed by an Arbitration tribunal, it is almost final because the Appeal provision as per S.34 of the above said Act allows only a few grounds on which the arbitration award can be challenged. Moreover many arbitration institutions in India have their own rules and regulations to make the arbitration transparent and speedy. Hence the Arbitration mechanism in India is fast and safe. In many cases the arbitration proceedings including the appeals concluded within 12 months time.",
    },
    {
      question:
        "What are the special features of Branch office, Liaison/ Representative office and project office?",
      answer:
        "Branch office cannot do manufacturing activities here in India. But the profit earned through the permitted activities of the branch office, can be fully repatriated after payment of the taxes.Liaison/ Representative Office cannot do any commercial activities except promoting the parent company and its activities.Project office can earn profits which can be fully repatriated but only from the project for which approval was granted.",
    },
    {
      question: "Can a Foreign Arbitration Award be executed in India?",
      answer:
        "If a Foreigner dies intestate, who domiciled to a foreign country, the law of the country to which he domiciled to will become the applicable law even though there are many properties in India.But Indian authorities cannot act upon the court orders of a foreign country and hence it is necessary to get a Succession certificate on the basis of the probate of the will or partition or a court order making partition. Normally as per Hindu law a will is a title document, if it is not objected to by any other party. Hence a person can claim all his rights on the basis of a will. But in the cases where Indian succession Act applies, succession certificate becomes necessary.",
    },
    {
      question:
        "Can multiple petitioners have a single advocate in Supreme Court India?",
      answer:
        "Yes, a single lawyer can appear for multiple parties in the Supreme Court of India or in any other court, provided those parties do not have conflict of interest in the subject matter of the case.",
    },
    {
      question:
        "If there is a Bank deposit lying in the Banks of India of a Foreigner who died intestate and domiciled to a foreign country, what is the procedure for the legal heirs to claim that amount?",
      answer:
        "The law applicable in these cases is the law of the country to which the deceased domiciled to. Hence sharing will be on the basis of that foreign law but succession certificate will be issued by the Indian Courts. The banks will honour the succession certificate issued by the Courts in India.",
    },
    {
      question:
        "Can a Foreigner file an application for registration of a trade mark without any local address in India?",
      answer:
        "Yes, to get a Trade mark registered, there is no need of having a local address. Hence a Foreigner or a Foreign Company is fully entitled to get their trade mark registered in India without having a local office in India. If there are any objections or communications with regard to the trade mark application including the delivery of the registration certificate the address of the trade mark attorney will be the effective address.",
    },
    {
      question: "How to directly approach Supreme Court?",
      answer:
        "An individual can directly approach the Supreme Court of India without seeking for a remedy in a lower Court or in a High Court, only when he is able to establish that one or more the fundamental rights guaranteed to that person under the Constitution of India is violated by the Government/State.",
    },
    {
      question:
        "Can a petition be filed in Supreme Court against election commission of India?",
      answer:
        "Yes, an individual can directly approach the Supreme Court of India without seeking for a remedy in a lower Court or in a High Court, only when he is able to establish that one or more the fundamental rights guaranteed to that person under the Constitution of India is violated by the Government/State.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-6">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        {faqsData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </>
  );
};

export default Faqs;
