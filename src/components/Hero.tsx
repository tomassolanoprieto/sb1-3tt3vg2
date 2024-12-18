import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { LazyImage } from './ui/LazyImage';
import { images } from '../lib/images';
import { ContactFormModal } from './ContactFormModal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <LazyImage
            src={images.hero}
            alt="Modern interior design"
            className="w-full h-full object-cover"
            style={{
              objectPosition: '50% 50%',
              imageRendering: 'crisp-edges'
            }}
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-lg">
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Tu Hogar Ideal en Valencia
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              En Gesttiona, nos especializamos en hacer realidad tus sueños inmobiliarios. 
              Descubre propiedades exclusivas y servicios personalizados.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#featured-properties"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:translate-y-[-2px] flex items-center group"
              >
                Ver Propiedades
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all transform hover:translate-y-[-2px]"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}