import React from 'react';
import { Eye, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Hacer Cita', href: '#booking' },
    { name: 'Contactos', href: '#contact' },
    { name: 'FAQ', href: '#faq' }
  ];

  const services = [
    'Exámenes oftalmológicos completos',
    'Adaptación de lentes de contacto',
    'Consultas sobre gafas',
    'Atención oftalmológica pediátrica',
    'Atención oftalmológica de urgencia',
    'Diagnóstico especializado'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Eye className="h-8 w-8 text-orange-400" />
              <span className="text-2xl font-bold">VisionCare</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Servicios profesionales de cuidado ocular con más de 15 años de experiencia. Su visión es nuestra prioridad.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-orange-400" />
                <span className="text-sm">123 Vision Street, Downtown Medical Center</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-orange-400" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-orange-400" />
                <span className="text-sm">info@visioncare.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nuestros servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Horario de oficina</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-3 text-orange-400" />
                <div className="text-sm">
                  <div>Lun-Vie: 8:00 AM - 6:00 PM</div>
                  <div>Sab: 9:00 AM - 4:00 PM</div>
                  <div>Dom: Closed</div>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 VisionCare. Reservados todos los derechos.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                política de privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                Condiciones de servicio
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 bg-red-900/20 border border-red-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-red-200 mb-1">Atención oftalmológica de emergencia 24/7</h4>
              <p className="text-red-300 text-sm">Para lesiones oculares urgentes o cambios repentinos en la visión.</p>
            </div>
            <a
              href="tel:+15551234568"
              className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors duration-200"
            >
              Emergencia: (555) 123-4568
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;