import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown",
      rating: 5,
      text: "Exceptional care from start to finish. The team at VisionCare made my eye exam comfortable and thorough. Dr. Smith explained everything clearly and helped me find the perfect glasses for my lifestyle.",
      service: "Comprehensive Eye Exam"
    },
    {
      name: "Michael Chen",
      location: "Midtown",
      rating: 5,
      text: "I've been coming here for years, and the service just keeps getting better. The new digital equipment is impressive, and the staff always remembers my preferences. Highly recommend!",
      service: "Contact Lens Fitting"
    },
    {
      name: "Emily Rodriguez",
      location: "Westside",
      rating: 5,
      text: "My daughter had her first eye exam here, and the pediatric specialist was amazing with her. They made the whole experience fun and stress-free. We'll definitely be back!",
      service: "Pediatric Eye Care"
    },
    {
      name: "James Wilson",
      location: "East End",
      rating: 5,
      text: "Quick, professional service when I had an eye emergency. They fit me in same day and took excellent care of the problem. The follow-up care was outstanding too.",
      service: "Emergency Eye Care"
    },
    {
      name: "Lisa Thompson",
      location: "Northside",
      rating: 5,
      text: "The eyewear consultation was incredibly helpful. They have a great selection, and the optician helped me find frames that look great and fit perfectly. Love my new glasses!",
      service: "Eyewear Consultation"
    },
    {
      name: "David Park",
      location: "Southside",
      rating: 5,
      text: "Professional, knowledgeable, and caring. They detected an issue early that my previous doctor missed. I'm grateful for their thoroughness and expertise.",
      service: "Comprehensive Eye Exam"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our patients have to say about 
            their experience at VisionCare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-sky-200 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500 mb-2">{testimonial.location}</div>
                <div className="text-sm text-sky-600 font-medium">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-500">4.9</div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500">500+</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">98%</div>
              <div className="text-sm text-gray-600">Recommended</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;