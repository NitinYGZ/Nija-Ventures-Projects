import { Link } from 'react-router-dom';

export function Footer() {
  const links = [
    { label: 'About', href: '/about' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Media', href: '/media' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-xl font-bold text-white mb-4">NIJA WORLD</div>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Nija World builds secure AI and blockchain solutions for organisations modernising digital operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-slate-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Nija Ventures Private Impact Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-emerald-500 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-emerald-500 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
