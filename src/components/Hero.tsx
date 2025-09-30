import React from 'react';
import { Calendar, Shield, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-sky-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Vision, Our{' '}
              <span className="text-sky-500">Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional eye care services with state-of-the-art technology. 
              Comprehensive eye exams, expert consultations, and personalized eyewear solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToBooking}
                className="bg-sky-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Your Appointment
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-sky-500 text-sky-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                Our Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-sky-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-8 w-8 text-sky-500" />
                </div>
                <p className="text-sm text-gray-600 font-medium">Easy Online Booking</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-teal-500" />
                </div>
                <p className="text-sm text-gray-600 font-medium">Licensed Professionals</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-sm text-gray-600 font-medium">5000+ Happy Patients</p>
              </div>
            </div>
          </div>

          <div className="lg:text-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5752243/pexels-photo-5752243.jpeg"
                alt="Modern optical examination room"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-sky-500">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;