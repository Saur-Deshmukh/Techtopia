import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#05001f]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <BrowserRouter
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Techopia
          </BrowserRouter>
          <div className="flex space-x-6">
            <BrowserRouter href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </BrowserRouter>
            <BrowserRouter href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </BrowserRouter>
            <BrowserRouter href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </BrowserRouter>
            <BrowserRouter href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </BrowserRouter>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">© Techopia™. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;