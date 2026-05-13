import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-white/20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 group">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C8A882] to-[#B5956B] flex items-center justify-center shadow-lg group-hover:shadow-[0_8px_24px_rgba(200,168,130,0.4)] transition-all duration-300">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="hidden sm:inline text-lg font-semibold text-[#1A1714] tracking-tight">
                WebStudio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: 'О нас', href: '#' },
              { label: 'Услуги', href: '#' },
              { label: 'Примеры', href: '#' },
              { label: 'Контакты', href: '#' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-[#5C5550] hover:text-[#1A1714] hover:bg-white/50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="group inline-flex items-center gap-2 bg-[#C8A882] hover:bg-[#B5956B] text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-[0_8px_24px_rgba(200,168,130,0.4)]">
              Заявка
              <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/50 rounded-lg transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-[#1A1714]" />
            ) : (
              <Menu size={24} className="text-[#1A1714]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col p-4 gap-1">
              {[
                { label: 'О нас', href: '#' },
                { label: 'Услуги', href: '#' },
                { label: 'Примеры', href: '#' },
                { label: 'Контакты', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-[#5C5550] hover:text-[#1A1714] hover:bg-white/50 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full mt-2 bg-[#C8A882] hover:bg-[#B5956B] text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-200">
                Оставить заявку
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
