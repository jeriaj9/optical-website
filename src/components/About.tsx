import React from 'react';
import { Award, Heart, Microscope, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every patient receives personalized attention and care tailored to their unique vision needs."
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic equipment ensures accurate assessments and optimal treatment outcomes."
    },
    {
      icon: Award,
      title: "Expertise You Trust",
      description: "Our certified optometrists bring decades of experience and continuous education to your care."
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description: "Comprehensive eye care for all ages, from pediatric exams to senior vision management."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About VisionCare</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, VisionCare has been the trusted choice for comprehensive eye care 
            in our community. We combine cutting-edge technology with compassionate care to protect 
            and enhance your vision at every stage of life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that clear vision is essential to living life to the fullest. Our mission 
              is to provide exceptional eye care services that not only improve vision but enhance 
              overall quality of life for our patients and their families.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From routine eye exams to specialized treatments, we're committed to using the latest 
              technology and evidence-based practices to deliver the highest standard of care in a 
              comfortable, welcoming environment.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500">5000+</div>
                <div className="text-sm text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg"
              alt="Professional optometrist with patient"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-sky-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-10 w-10 text-sky-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;