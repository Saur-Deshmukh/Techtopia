import React from 'react';
import { Button } from "@/components/ui/button";
import { BrowserRouter } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#0D0D0F]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <BrowserRouter href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Techopia
          </span>
        </BrowserRouter>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Features
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Pricing
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Product
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About Us
          </a>
        </nav>
        <Button variant="outline" className="bg-purple-600 text-white border-none hover:bg-purple-700">
          Start Free Trial
        </Button>
      </div>
    </header>
  );
}

export default Header;