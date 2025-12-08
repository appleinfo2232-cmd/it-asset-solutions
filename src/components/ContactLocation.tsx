import React from 'react';
import { COMPANY_INFO } from '../utils/constants';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Building,
  ArrowRight
} from 'lucide-react';

const ContactLocation: React.FC = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-curious-blue/20 to-mountain-meadow/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-gradient-to-br from-java/20 to-tradewind/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-curious-blue to-java">IT Asset Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our facility is conveniently located in Farmington Hills, Michigan. Stop by during business hours or contact us to schedule an appointment.
          </p>
        </div>

        {/* Get in Touch and Find Us Sections Side by Side */}
        <div className="grid grid-cols-1 gap-8">
          {/* Interactive Map */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200 h-full">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="p-3 rounded-full bg-mountain-meadow/15 mr-4 shadow-lg">
                <MapPin className="w-8 h-8 text-mountain-meadow" />
              </div>
              Find Us
            </h3>
            <div className="rounded-2xl h-[calc(100%-100px)] min-h-[400px] overflow-hidden relative shadow-xl">
              {/* Google Maps iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.0566329333!2d-83.37019492346611!3d42.49890997127249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824b1c3e9c9c8f9%3A0x3307316d3c1d0a6d!2s23985%20Industrial%20Park%20Dr%2C%20Farmington%20Hills%2C%20MI%2048335!5e0!3m2!1sen!2sus!4v1716825000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="IT Asset Solutions Location"
                className="rounded-xl shadow-md"
              ></iframe>
              
              {/* Overlay with action button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a 
                  href="https://maps.google.com/?q=23985+Industrial+Park+Dr,+Farmington+Hills,+MI+48335" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-mountain-meadow px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border border-gray-100"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;