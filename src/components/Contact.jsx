import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: null });

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitStatus({ success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, error: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Phone className="text-primary" />, text: '+55 44 99104-0774' },
    { icon: <Mail className="text-primary" />, text: 'ffbrunoff@yahoo.com.br' },
    {
      icon: <MapPin className="text-primary" />,
      text: 'Rua Padre Lebret, 801, Maringá - PR',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Fale Com Nossos Especialistas</h2>
          <p className="section-subtitle">
            Pronto para começar seu próximo projeto? Preencha o formulário
            abaixo ou entre em contato através de nossos canais.
          </p>
        </motion.div>

        <div className="mt-16 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 bg-light-bg p-8 md:p-12 rounded-2xl shadow-strong">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold text-secondary">
                Informações de Contato
              </h3>
              <p className="mt-3 text-gray-600">
                Estamos à disposição para atender você.
              </p>
              <ul className="mt-8 space-y-6">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="ml-4 text-lg text-secondary">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Conte-nos sobre seu projeto..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-primary focus:ring-primary shadow-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {submitStatus.success && (
                <div className="flex items-center gap-2 text-green-600 p-3 bg-green-100 rounded-lg">
                  <CheckCircle /> Mensagem enviada com sucesso! Entraremos em
                  contato em breve.
                </div>
              )}
              {submitStatus.error && (
                <div className="flex items-center gap-2 text-red-600 p-3 bg-red-100 rounded-lg">
                  <AlertTriangle /> Erro: {submitStatus.error}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
