import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import logo from 'figma:asset/4d6a06e3ea30bc71281c73708656874679abe202.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Media', href: '/media' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + '/');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      {/* Top utility bar */}
      <div className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-6 py-2 text-sm">
            <a href="/#security" className="text-slate-600 hover:text-slate-900 transition-colors">
              Security
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              Careers
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Nija World" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm relative group ${
                  isActive(link.href) ? 'text-slate-900' : 'text-slate-600'
                } hover:text-slate-900 transition-colors`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 transition-transform origin-left ${
                  isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Overview
            </button>
            <button className="px-5 py-2.5 bg-emerald-500 text-white text-sm rounded-lg hover:bg-emerald-600 transition-colors">
              Request a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg ${
                  isActive(link.href)
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-3 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Overview
              </button>
              <button className="w-full px-4 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                Request a Demo
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}