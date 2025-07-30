import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, HardHat, Lightbulb } from 'lucide-react';

export default function Services() {
  const pillars = [
    {
      icon: <Target size={48} className="text-primary" />,
      title: 'Planejamento Estratégico',
      description:
        'Cada projeto começa com um plano detalhado, garantindo eficiência, previsibilidade e otimização de recursos desde o início.',
    },
    {
      icon: <HardHat size={48} className="text-primary" />,
      title: 'Execução de Precisão',
      description:
        'Nossa equipe executa cada fase da obra com rigor técnico e atenção aos detalhes, assegurando a máxima qualidade construtiva.',
    },
    {
      icon: <ShieldCheck size={48} className="text-primary" />,
      title: 'Segurança Inegociável',
      description:
        'Implementamos os mais altos padrões de segurança para proteger nossa equipe, nossos clientes e o seu patrimônio.',
    },
    {
      icon: <Lightbulb size={48} className="text-primary" />,
      title: 'Inovação Contínua',
      description:
        'Buscamos constantemente novas tecnologias e métodos construtivos para entregar projetos mais inteligentes, rápidos e sustentáveis.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="section-padding bg-light-bg">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 variants={cardVariants} className="section-title">
            Nossos Pilares de Atuação
          </motion.h2>
          <motion.p variants={cardVariants} className="section-subtitle">
            A excelência da NTC Brasil é sustentada por quatro pilares
            fundamentais que guiam todas as nossas operações e garantem o
            sucesso de cada empreendimento.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="flex flex-col text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-strong transform hover:-translate-y-2 transition-all duration-300"
              variants={cardVariants}
            >
              <div className="mx-auto mb-6 flex items-center justify-center h-20 w-20 rounded-full bg-primary/10">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 flex-grow">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
