import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <Icon className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
  </a>
);

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#05001f] text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo & Description */}
          <a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent hover:opacity-90 transition-opacity" style={{fontFamily : "Zen Dots"}}
          >
            Techtopia
          </a>
          <p className="text-sm text-center max-w-md">
            Empowering the future through technology and innovation.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <SocialLink href="https://twitter.com/techtopia" icon={Twitter} label="Twitter" />
            <SocialLink href="https://facebook.com/techtopia" icon={Facebook} label="Facebook" />
            <SocialLink href="https://instagram.com/techtopia" icon={Instagram} label="Instagram" />
            <SocialLink href="https://linkedin.com/company/techtopia" icon={Linkedin} label="LinkedIn" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Techtopia™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;