import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753842037698_0.png';
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossos Pilares', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-secondary text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <a href="#home">
              <img
                className="h-16 w-auto bg-white p-2 rounded-md"
                src={logoUrl}
                alt="NTC Brasil Logo"
              />
            </a>
            <p className="mt-4 text-gray-300 max-w-xs">
              Construindo o futuro com excelência, inovação e um compromisso
              inabalável com a qualidade.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:mx-auto">
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>Telefone: +55 44 99104-0774</li>
              <li>Email: ffbrunoff@yahoo.com.br</li>
              <li>Endereço: Rua Padre Lebret, 801, Maringá - PR</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; {currentYear} NTC Brasil. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
