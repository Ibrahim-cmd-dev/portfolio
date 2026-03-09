import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { socialLinks } from '@/lib/constants';

const footerSocials = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
  { icon: FaWhatsapp, href: socialLinks.whatsapp, label: 'WhatsApp' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/50 backdrop-blur-sm px-4 sm:px-6 py-6 sm:py-8 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        {/* Copyright */}
        <div className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
          &copy; {currentYear} Ibrahim Mohamed. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {footerSocials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-amber-300 transition-colors duration-300"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
