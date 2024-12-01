'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', // Limpia errores al escribir
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: formData.email ? '' : 'El correo electrónico es obligatorio.',
      subject: formData.subject ? '' : 'El asunto es obligatorio.',
      message: formData.message ? '' : 'El mensaje no puede estar vacío.',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccessMessage(
            'Correo enviado exitosamente. Revisa tu bandeja de entrada.',
          );
          setFormData({ email: '', subject: '', message: '' }); // Limpia el formulario
        } else {
          setSuccessMessage('Hubo un error al enviar el correo.');
        }
      } catch (error) {
        setSuccessMessage('Error de conexión con el servidor.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[90%] mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8">Contáctanos</h1>
      {successMessage && (
        <p className="text-green-500 text-center mb-4">{successMessage}</p>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
      >
        {/* Correo electrónico */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ${
              errors.email && 'border-red-500'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Asunto */}
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Asunto
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ${
              errors.subject && 'border-red-500'
            }`}
          >
            <option value="">Selecciona un asunto</option>
            <option value="Consulta General">Consulta General</option>
            <option value="Problemas Técnicos">Problemas Técnicos</option>
            <option value="Sugerencias">Sugerencias</option>
          </select>
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Mensaje */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ${
              errors.message && 'border-red-500'
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Botón de enviar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
