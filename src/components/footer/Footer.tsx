import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-4">
        <div className="text-sm">
          <span>© Podcat {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 text-sm">
          <Link to="/privacy-policy" className="hover:text-[#F0F0F0] transition-colors">Integritetspolicy</Link>
          <Link to="/terms-of-service" className="hover:text-[#F0F0F0] transition-colors">Användarvillkor</Link>
          <Link to="/contact" className="hover:text-[#F0F0F0] transition-colors">Kontakt</Link>
          <Link to="/about" className="hover:text-[#F0F0F0] transition-colors">Om oss</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
