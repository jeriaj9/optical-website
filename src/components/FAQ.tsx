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
      question: "¿Con qué frecuencia debo hacerme un examen de la vista?",
      answer: "Para adultos sin problemas de visión, recomendamos exámenes anuales. Los niños deben tener su primer examen a los 3 años y luego cada año. Los adultos mayores de 60 años o aquellos con condiciones como diabetes deben realizarse exámenes cada 6 a 12 meses, según lo recomiende su optometrista."
    },
    {
      question: "¿Aceptan seguros?",
      answer: "Sí, aceptamos la mayoría de los planes principales de seguro de visión, incluidos VSP, EyeMed y Davis Vision. También aceptamos muchos planes de seguro de salud para el cuidado médico de los ojos. Por favor, llámenos para verificar su cobertura específica antes de su cita."
    },
    {
      question: "¿Cuánto dura un examen ocular integral?",
      answer: "Un examen ocular integral normalmente dura entre 45 y 60 minutos. Esto incluye evaluar su visión, revisar la salud ocular, dilatar las pupilas (si es necesario) y conversar sobre cualquier inquietud con el optometrista. Los pacientes nuevos pueden necesitar tiempo adicional para llenar formularios."
    },
    {
      question: "¿Puedo llevar a mi hijo a un examen ocular?",
      answer: "¡Por supuesto! Ofrecemos atención oftalmológica pediátrica especializada para niños de todas las edades. Nuestro equipo tiene experiencia trabajando con niños y hace que la experiencia sea cómoda y divertida. Recomendamos el primer examen a los 3 años o antes si nota algún problema de visión."
    },
    {
      question: "¿Qué debo llevar a mi cita?",
      answer: "Por favor, lleve una identificación válida, tarjetas de seguro, sus gafas o lentes de contacto actuales, una lista de medicamentos que esté tomando y cualquier historial médico relevante. Si usa lentes de contacto, traiga su prescripción o las cajas de los lentes."
    },
    {
      question: "¿Ofrecen citas el mismo día para emergencias?",
      answer: "Sí, reservamos horarios para necesidades urgentes de cuidado ocular. Si presenta dolor ocular, cambios repentinos en la visión, destellos de luz o lesiones oculares, llámenos de inmediato. Haremos lo posible por atenderle el mismo día."
    },
    {
      question: "¿Puedo comprar gafas en línea en lugar de en la tienda?",
      answer: "Aunque ofrecemos un catálogo en línea para su comodidad, recomendamos encarecidamente una adaptación en persona para lograr la mayor comodidad y mejor visión. Las mediciones correctas, los ajustes de montura y la posición de los lentes son cruciales para una experiencia visual óptima."
    },
    {
      question: "¿Qué incluye una adaptación de lentes de contacto?",
      answer: "Una adaptación de lentes de contacto incluye medir la curvatura de su ojo, determinar el tamaño y material adecuado del lente, enseñarle la inserción y extracción correctas, y brindarle instrucciones de cuidado. También incluimos visitas de seguimiento para asegurar comodidad y un ajuste adecuado."
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Encuentre respuestas a preguntas frecuentes sobre nuestros servicios de cuidado ocular,
            citas y qué esperar durante su visita.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Aún tienes preguntas?</h3>
          <p className="text-gray-600 mb-6">
            Nuestro amable equipo está aquí para ayudarte.
            No dudes en contactarnos si tienes alguna pregunta sobre nuestros servicios o para programar una cita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              Llámanos: (555) 123-4567
            </a>
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-200 font-medium"
            >
              Programar cita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;