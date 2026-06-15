import React from 'react';
import { Sparkles, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants/data';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <Sparkles size={14} className="text-white" />
              </div>
              <span className="text-lg font-bold text-[#111827]">Kidrove</span>
            </a>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-[240px]">
              Empowering young minds through technology education since 2024.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#64748B] hover:text-[#111827] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@kidrove.ai"
                  className="text-sm text-[#64748B] hover:text-[#111827] transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail size={14} className="text-[#14B8A6]" />
                  hello@kidrove.ai
                </a>
              </li>
              <li className="text-sm text-[#64748B] flex items-center gap-2">
                <MapPin size={14} className="text-[#14B8A6]" />
                Bengaluru, India
              </li>
              <li className="text-sm text-[#64748B] flex items-center gap-2">
                <Phone size={14} className="text-[#14B8A6]" />
                +91 1800 123 456
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-[#64748B] hover:text-[#111827] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#64748B] hover:text-[#111827] transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#64748B] hover:text-[#111827] transition-colors duration-200"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
          <p className="text-sm text-[#94A3B8] text-center">
            &copy; {year} Kidrove. All rights reserved. Made with ❤️ for young innovators.
          </p>
        </div>
      </div>
    </footer>
  );
};
