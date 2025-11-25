import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/PromoShare-Fan-Activation-e1729535013606111.png" 
                alt="Promoshare Logo" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Turn your superfans into brand ambassadors and drive real business results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group">
                <Facebook className="w-4 h-4 text-slate-400 group-hover:text-violet-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group">
                <Twitter className="w-4 h-4 text-slate-400 group-hover:text-violet-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group">
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-violet-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group">
                <Instagram className="w-4 h-4 text-slate-400 group-hover:text-violet-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm">Fan Activation</li>
              <li className="text-slate-400 text-sm">Ambassador Programs</li>
              <li className="text-slate-400 text-sm">Social Media Amplification</li>
              <li className="text-slate-400 text-sm">Event Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-violet-400" />
                <a href="https://promoshare.typeform.com/to/OQllUGDG?typeform-source=promoshare.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
                  Let's connect
                </a>
              </li>
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-violet-400" />
                <a href="tel:+17739089746" className="hover:text-violet-400 transition-colors">
                  +1 (773) 908-9746
                </a>
              </li>
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-violet-400" />
                <span>10500 163rd Pl, Orland Park, IL 60467</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Promoshare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-violet-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-violet-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

