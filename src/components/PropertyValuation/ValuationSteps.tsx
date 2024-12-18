import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, FileText, LineChart } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: 'Ubicación',
    description: 'Ubica el inmueble para poder empezar la tasación online.'
  },
  {
    icon: FileText,
    title: 'Descripción',
    description: 'Describe tu vivienda para ajustar la valoración.'
  },
  {
    icon: LineChart,
    title: 'Resultado',
    description: 'Obtén tu tasación online o personalízala con un profesional.'
  }
];

export function ValuationSteps() {
  return (
    <div className="h-full flex flex-col justify-between">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 mb-6 last:mb-0"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-4 rounded-xl">
              <step.icon className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}