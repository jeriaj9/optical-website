import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Examen oftalmológico completo',
    'Adaptación de lentes de contacto',
    'Consulta sobre gafas',
    'Examen oftalmológico pediátrico',
    'Atención oftalmológica de urgencia',
    'Cita de seguimiento'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would integrate with Google Calendar API
    // For now, we'll just show a success message
    console.log('Appointment booking:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      notes: ''
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-green-50 p-12 rounded-2xl border border-green-200">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Cita confirmada!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Gracias por reservar con VisionCare. Le hemos enviado un correo electrónico de confirmación con todos los detalles.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Detalles de la cita:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><strong>Fecha:</strong> {formData.date}</div>
                <div><strong>Hora:</strong> {formData.time}</div>
                <div><strong>Servicio:</strong> {formData.service}</div>
                <div><strong>Paciente:</strong> {formData.firstName} {formData.lastName}</div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Por favor, llegue 15 minutos antes de su cita. Si necesita reprogramarla, llámenos al (555) 123-4567.
              </p>
              <button
                onClick={resetForm}
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium"
              >
                Reservar otra cita
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Reserve su cita</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Programe su examen de la vista o consulta en línea.
            Elija la fecha y hora que prefiera y confirmaremos su cita en 24 horas.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Nombre *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Apellido *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  Número de teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
            </div>

            {/* Appointment Details */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="date" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Fecha preferida *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="time" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Hora preferida *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Seleccionar hora</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="service" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  Tipo de servicio *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Seleccionar servicio</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="h-4 w-4 mr-2" />
                Notas adicionales (Opcional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Por favor, háganos saber si tiene alguna inquietud específica o si se trata de una cita de seguimiento..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? 'Reservando cita...' : 'Reservar cita'}
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Confirmaremos su cita dentro de las 24 horas por correo electrónico o teléfono.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;