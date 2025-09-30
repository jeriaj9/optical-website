import React from 'react';
import { Eye, Glasses, Search, Users, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Eye,
      title: "Comprehensive Eye Exams",
      description: "Thorough eye examinations using advanced diagnostic technology to assess vision, eye health, and detect potential issues early.",
      features: ["Digital retinal imaging", "Pressure testing", "Visual field testing", "Color vision assessment"]
    },
    {
      icon: Glasses,
      title: "Eyewear Consultations",
      description: "Expert guidance in selecting the perfect eyewear solution tailored to your lifestyle, preferences, and vision needs.",
      features: ["Frame fitting", "Lens recommendations", "Style consultations", "Progressive lens fitting"]
    },
    {
      icon: Search,
      title: "Specialized Diagnostics",
      description: "Advanced diagnostic services for complex eye conditions and comprehensive health screening.",
      features: ["OCT imaging", "Corneal topography", "Diabetic eye screening", "Glaucoma testing"]
    },
    {
      icon: Users,
      title: "Family Eye Care",
      description: "Complete eye care services for patients of all ages, from children to seniors, with age-appropriate care.",
      features: ["Pediatric exams", "School vision screenings", "Senior eye care", "Contact lens fittings"]
    },
    {
      icon: Shield,
      title: "Eye Health Management",
      description: "Ongoing care and management for various eye conditions to maintain optimal eye health over time.",
      features: ["Dry eye treatment", "Disease monitoring", "Post-surgical care", "Preventive care plans"]
    },
    {
      icon: Zap,
      title: "Emergency Eye Care",
      description: "Prompt attention for urgent eye issues and injuries to protect your vision and provide immediate relief.",
      features: ["Foreign object removal", "Eye injury assessment", "Infection treatment", "Same-day appointments"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive eye care services designed to protect, enhance, and maintain your vision 
            throughout every stage of life. We use the latest technology to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-sky-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-sky-500" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 w-full bg-sky-500 text-white py-3 px-6 rounded-full hover:bg-sky-600 transition-colors duration-200 font-medium"
              >
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;