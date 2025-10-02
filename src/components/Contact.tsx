import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Nuestra ubicación",
      details: ["123 Vision Street", "Downtown Medical Center", "City, State 12345"],
      action: "Obtener direcciones"
    },
    {
      icon: Phone,
      title: "Números de teléfono",
      details: ["Main: (555) 123-4567", "Emergency: (555) 123-4568", "Fax: (555) 123-4569"],
      action: "Llama ahora"
    },
    {
      icon: Mail,
      title: "Envíenos un correo electrónico",
      details: ["appointments@visioncare.com", "info@visioncare.com", "emergency@visioncare.com"],
      action: "Enviar correo electrónico"
    }
  ];

  const hours = [
    { day: "Lunes - Viernes", time: "8:00 AM - 6:00 PM" },
    { day: "Sábado", time: "9:00 AM - 4:00 PM" },
    { day: "Domingo", time: "Closed" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contacta con nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Listo para programar su cita o tiene preguntas sobre nuestros servicios?
            Estamos aquí para ayudarle y esperamos su llamada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <info.icon className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
              <div className="space-y-2 mb-6">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600">{detail}</p>
                ))}
              </div>
              <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200">
                {info.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Horario de oficina</h3>
            </div>
            <div className="space-y-4">
              {hours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-900">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-700">
                <strong>Horario de emergencia:</strong> Atención de emergencia disponible fuera del horario laboral.
                Llame a nuestra línea de emergencias para necesidades urgentes de atención oftalmológica.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <Navigation className="h-8 w-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Encuéntranos</h3>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-6">
              {/* Placeholder for Google Maps - you would embed the actual Google Maps here */}
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Mapa interactivo</p>
                <p className="text-sm text-gray-500">123 Vision Street, Downtown Medical Center</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Listo para agendar?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Reservar en línea ahora
              </button>
              <a
                href="tel:+15551234567"
                className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Call (555) 123-4567
              </a>
            </div>
            <p className="text-gray-600 mt-4">
              Nuevos pacientes bienvenidos • Citas de emergencia disponibles el mismo día
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;