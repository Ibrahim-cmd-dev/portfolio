import React from 'react';
// Optional: Import icons if you want to include social links again
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// Optional: Define social links again or import from a shared constants file
const socialLinks = {
  github: '#',
  linkedin: '#',
  whatsapp: 'https://wa.me/YOUR_PHONE_NUMBER', // Replace YOUR_PHONE_NUMBER
  instagram: '#',
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-slate-400 px-6 py-8 mt-auto"> {/* mt-auto pushes footer down */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Copyright Notice */}
        <div className="text-sm text-center sm:text-left">
          &copy; {currentYear} Ibrahim Mohamed. All rights reserved.
        </div>

        {/* Optional: Social Links */}
        <div className="flex items-center gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-amber-300 transition-colors duration-200">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-amber-300 transition-colors duration-200">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-amber-300 transition-colors duration-200">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-amber-300 transition-colors duration-200">
            <FaWhatsapp className="h-5 w-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
