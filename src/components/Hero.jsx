import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-bg"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-light-bg to-light-bg"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight tracking-tighter"
          >
            Construindo o Futuro com
            <span className="block mt-2 md:mt-4 bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
              Excelência e Inovação
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Sua Visão, Nossa Missão: Projetos que Transformam. Da concepção à
            entrega, a NTC Brasil é sua parceira de confiança na construção de
            empreendimentos sólidos e duradouros.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="btn btn-primary text-lg w-full sm:w-auto"
            >
              Entre em Contato
            </a>
            <a
              href="#about"
              className="btn btn-secondary text-lg w-full sm:w-auto"
            >
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={32} />
      </motion.a>
    </section>
  );
}
