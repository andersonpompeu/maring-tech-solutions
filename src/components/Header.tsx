import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Wrench, Tv, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = {
    eletrodomesticos: [
      { name: 'Máquinas de Lavar', href: '#servicos' },
      { name: 'Geladeiras', href: '#servicos' },
      { name: 'Fogões', href: '#servicos' },
      { name: 'Micro-ondas', href: '#servicos' },
    ],
    tvs: [
      { name: 'Smart TVs LED', href: '#servicos' },
      { name: 'TVs OLED', href: '#servicos' },
      { name: 'TVs QLED', href: '#servicos' },
    ],
    celulares: [
      { name: 'iPhone', href: '#servicos' },
      { name: 'Android', href: '#servicos' },
      { name: 'Tablets', href: '#servicos' },
    ],
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-card py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className={`transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              <span className="font-heading font-bold text-lg block leading-tight">TechFix</span>
              <span className="text-xs opacity-80">Maringá</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="#inicio"
              className={`font-medium transition-colors hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Início
            </a>

            {/* Mega Menu - Eletrodomésticos */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('eletro')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <Wrench className="w-4 h-4" />
                Eletrodomésticos
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'eletro' && (
                <div className="absolute top-full left-0 mt-2 bg-card rounded-lg shadow-lg p-4 min-w-[200px] animate-fade-in">
                  {services.eletrodomesticos.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* TVs */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('tvs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <Tv className="w-4 h-4" />
                TVs
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'tvs' && (
                <div className="absolute top-full left-0 mt-2 bg-card rounded-lg shadow-lg p-4 min-w-[200px] animate-fade-in">
                  {services.tvs.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Celulares */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('celulares')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                Celulares
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'celulares' && (
                <div className="absolute top-full left-0 mt-2 bg-card rounded-lg shadow-lg p-4 min-w-[200px] animate-fade-in">
                  {services.celulares.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#diferenciais"
              className={`font-medium transition-colors hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Diferenciais
            </a>

            <a
              href="#contato"
              className={`font-medium transition-colors hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5544999999999" className={`flex items-center gap-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              <Phone className="w-4 h-4" />
              <span className="font-medium">(44) 99999-9999</span>
            </a>
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://wa.me/5544999999999?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                Orçamento Grátis
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col gap-4 bg-card rounded-lg p-4 shadow-lg">
              <a href="#inicio" className="text-foreground font-medium hover:text-secondary">
                Início
              </a>
              <a href="#servicos" className="text-foreground font-medium hover:text-secondary">
                Serviços
              </a>
              <a href="#diferenciais" className="text-foreground font-medium hover:text-secondary">
                Diferenciais
              </a>
              <a href="#equipe" className="text-foreground font-medium hover:text-secondary">
                Equipe
              </a>
              <a href="#contato" className="text-foreground font-medium hover:text-secondary">
                Contato
              </a>
              <Button variant="hero" className="w-full" asChild>
                <a
                  href="https://wa.me/5544999999999?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Orçamento Grátis
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
