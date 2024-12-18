import React from 'react';
import { LazyImage } from './ui/LazyImage';
import { images } from '../lib/images';

export function About() {
  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <LazyImage
              src={images.about}
              alt="Espacio de trabajo Gesttiona"
              className="rounded-lg shadow-lg object-cover h-[600px] w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-gray-600 text-lg mb-6">
              Gesttiona es tu empresa inmobiliaria de confianza en la Comunidad Valenciana. 
              Ofrecemos un abanico integral de servicios personalizados para compradores, 
              vendedores e inversores, guiándolos con experiencia y profesionalismo hacia 
              el logro de sus objetivos inmobiliarios.
            </p>
            <p className="text-gray-600 text-lg">
              Sea que busques comprar, vender o invertir en una propiedad, nuestro equipo 
              de profesionales te acompañará en cada paso del camino, asegurando una 
              experiencia satisfactoria y resultados exitosos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}