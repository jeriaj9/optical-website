import React from 'react';
import { Award, Heart, Microscope, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Atención centrada en el paciente",
      description: "Cada paciente recibe atención y cuidado personalizado adaptado a sus necesidades visuales únicas."
    },
    {
      icon: Microscope,
      title: "Tecnología avanzada",
      description: "Los equipos de diagnóstico de última generación garantizan evaluaciones precisas y resultados de tratamiento óptimos."
    },
    {
      icon: Award,
      title: "Experiencia en la que usted confía",
      description: "Nuestros optometristas certificados aportan décadas de experiencia y educación continua a su atención."
    },
    {
      icon: Users,
      title: "Apto para familias",
      description: "Atención oftalmológica integral para todas las edades, desde exámenes pediátricos hasta tratamiento de la visión para personas mayores."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre VisionCare</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Durante más de 15 años, VisionCare ha sido la opción de confianza para el cuidado integral de la vista en nuestra comunidad.
            Combinamos tecnología de vanguardia con atención compasiva para proteger y mejorar su visión en cada etapa de su vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Mision</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creemos que una visión nítida es esencial para vivir la vida al máximo.
              Nuestra misión es brindar servicios excepcionales de cuidado ocular que no solo mejoren la visión,
              sino que también mejoren la calidad de vida de nuestros pacientes y sus familias.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Desde exámenes oculares de rutina hasta tratamientos especializados,
              nos comprometemos a utilizar la última tecnología y prácticas basadas en evidencia para brindar el más alto nivel de atención en un entorno cómodo y acogedor.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500">5000+</div>
                <div className="text-sm text-gray-600">Pacientes servidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500">15+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">98%</div>
                <div className="text-sm text-gray-600">Satisfaccion </div>
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
                <value.icon className="h-10 w-10 text-orange-500" />
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