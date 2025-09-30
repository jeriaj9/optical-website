import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Vision Street", "Downtown Medical Center", "City, State 12345"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Main: (555) 123-4567", "Emergency: (555) 123-4568", "Fax: (555) 123-4569"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["appointments@visioncare.com", "info@visioncare.com", "emergency@visioncare.com"],
      action: "Send Email"
    }
  ];

  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to schedule your appointment or have questions about our services? 
            We're here to help and look forward to hearing from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="bg-sky-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <info.icon className="h-8 w-8 text-sky-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
              <div className="space-y-2 mb-6">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600">{detail}</p>
                ))}
              </div>
              <button className="text-sky-500 font-medium hover:text-sky-600 transition-colors duration-200">
                {info.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-sky-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
            </div>
            <div className="space-y-4">
              {hours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-900">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-sky-50 rounded-lg">
              <p className="text-sm text-sky-700">
                <strong>Emergency Hours:</strong> After-hours emergency care available. 
                Call our emergency line for urgent eye care needs.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <Navigation className="h-8 w-8 text-sky-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Find Us</h3>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-6">
              {/* Placeholder for Google Maps - you would embed the actual Google Maps here */}
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">123 Vision Street, Downtown Medical Center</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Parking:</span>
                <span className="text-gray-600">Free validated parking available</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Public Transit:</span>
                <span className="text-gray-600">Bus lines 12, 34, 56</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Accessibility:</span>
                <span className="text-gray-600">Wheelchair accessible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Schedule?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-sky-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-600 transition-all duration-300 transform hover:scale-105"
              >
                Book Online Now
              </button>
              <a 
                href="tel:+15551234567"
                className="border-2 border-sky-500 text-sky-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                Call (555) 123-4567
              </a>
            </div>
            <p className="text-gray-600 mt-4">
              New patients welcome • Same-day emergency appointments available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;