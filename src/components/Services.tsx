import React from 'react';
import { Eye, Glasses, Search, Users, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Eye,
      title: "Exámenes oftalmológicos completos",
      description: "Exámenes oftalmológicos completos con tecnología de diagnóstico avanzada para evaluar la visión, la salud ocular y detectar posibles problemas de forma temprana.",
      features: ["Imagen digital de retina", "Prueba de presión", "Prueba del campo visual", "Evaluación de la visión del color"]
    },
    {
      icon: Glasses,
      title: "Consultas sobre gafas",
      description: "Asesoría experta para seleccionar la solución de gafas perfecta, adaptada a su estilo de vida, preferencias y necesidades visuales.",
      features: ["Adaptación de monturas", "Recomendaciones de lentes", "Consultas de estilo", "Adaptación de lentes progresivos"]
    },
    {
      icon: Search,
      title: "Diagnóstico especializado",
      description: "Servicios de diagnóstico avanzados para afecciones oculares complejas y evaluación integral de la salud.",
      features: ["Imágenes OCT", "Topografía corneal", "Examen de diabetes ocular", "Prueba de glaucoma"]
    },
    {
      icon: Users,
      title: "Atención oftalmológica familiar",
      description: "Servicios completos de atención oftalmológica para pacientes de todas las edades, desde niños hasta adultos mayores, con atención adaptada a su edad.",
      features: ["Exámenes pediátricos", "Exámenes de la vista escolares", "Atención oftalmológica para adultos mayores", "Adaptación de lentes de contacto"]
    },
    {
      icon: Shield,
      title: "Gestión de la salud ocular",
      description: "Atención y gestión continua de diversas afecciones oculares para mantener una salud ocular óptima a lo largo del tiempo.",
      features: ["Tratamiento del ojo seco", "Monitoreo de enfermedades", "Atención posquirúrgica", "Planes de atención preventiva"]
    },
    {
      icon: Zap,
      title: "Emergencias Cuidado de la vista",
      description: "Atención inmediata para problemas y lesiones oculares urgentes para proteger su visión y brindar alivio inmediato.",
      features: ["Extracción de objetos extraños", "Evaluación de lesiones oculares", "Tratamiento de infecciones", "Citas el mismo día"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Servicios integrales de cuidado ocular diseñados para proteger, mejorar y mantener su visión en cada etapa de su vida.
            Utilizamos la última tecnología para ofrecer resultados excepcionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-orange-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 .bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 w-full .bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium"
              >
                Agenda tu consulta!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;