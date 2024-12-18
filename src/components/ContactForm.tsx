import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';
import { EMAIL_CONFIG } from '../lib/constants/config';

interface ContactFormProps {
  onClose?: () => void;
  isPopup?: boolean;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm({ onClose, isPopup = false }: ContactFormProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
          to_email: 'gesttiona.mcb@gmail.com'
        },
        EMAIL_CONFIG.PUBLIC_KEY
      );

      reset();
      alert('Mensaje enviado correctamente');
      if (onClose) onClose();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${isPopup ? 'bg-white p-8 rounded-lg relative' : ''}`}>
      {isPopup && onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      )}
      
      {isPopup && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contacta con Nosotros</h2>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nombre completo
        </label>
        <input
          {...register('fullName', { required: 'Este campo es obligatorio' })}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
          placeholder="Tu nombre"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          {...register('email', { 
            required: 'Este campo es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'
            }
          })}
          type="email"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Teléfono
        </label>
        <input
          {...register('phone', { required: 'Este campo es obligatorio' })}
          type="tel"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
          placeholder="Tu teléfono"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje
        </label>
        <textarea
          {...register('message', { required: 'Este campo es obligatorio' })}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors h-32 resize-none"
          placeholder="¿En qué podemos ayudarte?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}