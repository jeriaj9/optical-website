import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
 const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Centro",
    rating: 5,
    text: "Atención excepcional de principio a fin. El equipo de VisionCare hizo que mi examen ocular fuera cómodo y completo. El Dr. Smith explicó todo claramente y me ayudó a encontrar las gafas perfectas para mi estilo de vida.",
    service: "Examen ocular integral"
  },
  {
    name: "Michael Chen",
    location: "Zona Media",
    rating: 5,
    text: "He venido aquí durante años, y el servicio sigue mejorando. El nuevo equipo digital es impresionante y el personal siempre recuerda mis preferencias. ¡Muy recomendable!",
    service: "Adaptación de lentes de contacto"
  },
  {
    name: "Emily Rodriguez",
    location: "Zona Oeste",
    rating: 5,
    text: "Mi hija tuvo su primer examen ocular aquí y el especialista pediátrico fue increíble con ella. Hicieron que toda la experiencia fuera divertida y sin estrés. ¡Definitivamente volveremos!",
    service: "Atención ocular pediátrica"
  },
  {
    name: "James Wilson",
    location: "Extremo Este",
    rating: 5,
    text: "Servicio rápido y profesional cuando tuve una emergencia ocular. Me atendieron el mismo día y cuidaron el problema de manera excelente. El seguimiento también fue excepcional.",
    service: "Atención ocular de emergencia"
  },
  {
    name: "Lisa Thompson",
    location: "Zona Norte",
    rating: 5,
    text: "La consulta de gafas fue increíblemente útil. Tienen una gran selección y el óptico me ayudó a encontrar monturas que se ven geniales y se ajustan perfectamente. ¡Me encantan mis nuevas gafas!",
    service: "Consulta de gafas"
  },
  {
    name: "David Park",
    location: "Zona Sur",
    rating: 5,
    text: "Profesionales, conocedores y atentos. Detectaron un problema temprano que mi médico anterior pasó por alto. Estoy agradecido por su minuciosidad y experiencia.",
    service: "Examen ocular integral"
  }
];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Lo que dicen nuestros pacientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No se fíe solo de nuestras palabras.
            Esto es lo que nuestros pacientes opinan sobre su experiencia en VisionCare.
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
              <div className="text-sm text-gray-600">Calificación promedio</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-500">500+</div>
              <div className="text-sm text-gray-600">Reseñas</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">98%</div>
              <div className="text-sm text-gray-600">Recomendado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;