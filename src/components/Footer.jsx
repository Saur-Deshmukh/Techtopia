import React from 'react';



export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#000000] text-gray-300">
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
            IEEE SPIT
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;