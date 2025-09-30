import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How often should I have an eye exam?",
      answer: "For adults with no vision problems, we recommend annual eye exams. Children should have their first exam by age 3, then annually. Adults over 60 or those with conditions like diabetes should have exams every 6-12 months as recommended by their optometrist."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major vision insurance plans including VSP, EyeMed, and Davis Vision. We also accept many health insurance plans for medical eye care. Please call us to verify your specific coverage before your appointment."
    },
    {
      question: "How long does a comprehensive eye exam take?",
      answer: "A comprehensive eye exam typically takes 45-60 minutes. This includes testing your vision, checking eye health, pupil dilation (if needed), and discussing any concerns with the optometrist. First-time patients may need additional time for paperwork."
    },
    {
      question: "Can I bring my child for an eye exam?",
      answer: "Absolutely! We provide specialized pediatric eye care for children of all ages. Our team is experienced in working with children and making the experience comfortable and fun. We recommend first exams by age 3 or sooner if you notice any vision concerns."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring a valid ID, insurance cards, current eyewear (glasses/contacts), a list of current medications, and any relevant medical history. If you wear contacts, please bring your prescription or contact lens boxes."
    },
    {
      question: "Do you offer same-day appointments for emergencies?",
      answer: "Yes, we reserve time slots for urgent eye care needs. If you're experiencing eye pain, sudden vision changes, flashes of light, or eye injuries, please call us immediately. We'll do our best to see you the same day."
    },
    {
      question: "Can I purchase eyewear online instead of in-store?",
      answer: "While we do offer an online catalog for your convenience, we strongly recommend an in-person fitting for optimal comfort and vision. Proper measurements, frame adjustments, and lens positioning are crucial for the best visual experience."
    },
    {
      question: "What's included in a contact lens fitting?",
      answer: "A contact lens fitting includes measuring your eye curvature, determining the right lens size and material, teaching proper insertion and removal, and providing care instructions. We also include follow-up visits to ensure comfort and proper fit."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-sky-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our eye care services, appointments, 
            and what to expect during your visit.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-sky-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-sky-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our friendly team is here to help. Don't hesitate to reach out with any questions 
            about our services or to schedule your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+15551234567" 
              className="bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-600 transition-colors duration-200 font-medium"
            >
              Call Us: (555) 123-4567
            </a>
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-sky-500 text-sky-500 px-8 py-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-200 font-medium"
            >
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;