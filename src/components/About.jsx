import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Building } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const stats = [
    {
      icon: <Building size={40} className="text-primary" />,
      title: 'Projetos de Impacto',
      description:
        'Transformamos ideias em estruturas que definem paisagens e melhoram vidas.',
    },
    {
      icon: <Users size={40} className="text-primary" />,
      title: 'Equipe Especializada',
      description:
        'Profissionais dedicados e qualificados para garantir a excelência em cada etapa.',
    },
    {
      icon: <CheckCircle size={40} className="text-primary" />,
      title: 'Compromisso com a Qualidade',
      description:
        'Utilizamos os melhores materiais e práticas para entregar resultados superiores.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Construção de Confiança e Qualidade
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Na NTC Brasil, cada projeto é um compromisso com a excelência.
            Combinamos técnica, inovação e paixão para construir não apenas
            edifícios, mas legados duradouros.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-secondary">
              Nossa Missão é Transformar Sua Visão em Realidade
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Entendemos que cada construção é a materialização de um sonho. Por
              isso, trabalhamos em estreita colaboração com nossos clientes,
              garantindo transparência, cumprimento de prazos e um resultado
              final que supera as expectativas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa abordagem é fundamentada na segurança, sustentabilidade e na
              busca contínua por soluções inovadoras que otimizem recursos e
              agreguem valor ao seu investimento.
            </p>
            <a href="#contact" className="inline-block btn btn-primary mt-4">
              Descubra como podemos ajudar
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-start p-6 bg-light-bg rounded-xl shadow-md hover:shadow-strong transition-shadow duration-300"
                variants={cardVariants}
              >
                <div className="flex-shrink-0 mr-5">{stat.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-secondary">
                    {stat.title}
                  </h4>
                  <p className="mt-2 text-gray-600">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
