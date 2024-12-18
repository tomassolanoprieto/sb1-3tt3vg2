import React from 'react';
import { LazyImage } from './ui/LazyImage';
import { images } from '../lib/images';

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">¿Por Qué Elegirnos?</h2>
            <p className="text-gray-600 text-lg mb-8">
              En Gesttiona nos diferenciamos por nuestro compromiso con la excelencia 
              y la satisfacción del cliente. Nuestra experiencia y profesionalidad 
              nos avalan como tu mejor opción en el mercado inmobiliario.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experiencia Comprobada</h3>
                  <p className="text-gray-600">Años de experiencia en el mercado inmobiliario valenciano.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
                  <p className="text-gray-600">Servicio adaptado a tus necesidades específicas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <LazyImage
              src={images.whyChooseUs}
              alt="Interior moderno"
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}