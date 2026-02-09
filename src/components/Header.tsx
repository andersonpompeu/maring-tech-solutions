import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Wrench, Tv, Smartphone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = {
    eletrodomesticos: {
      icon: Wrench,
      title: 'Eletrodomésticos',
      description: 'Conserto de linha branca',
      href: '/eletrodomesticos',
      items: [
        { name: 'Máquinas de Lavar', desc: 'Todas as marcas', href: '/eletrodomesticos' },
        { name: 'Geladeiras', desc: 'Frost Free e convencionais', href: '/eletrodomesticos' },
        { name: 'Fogões', desc: 'Gás e elétricos', href: '/eletrodomesticos' },
        { name: 'Micro-ondas', desc: 'Reparo especializado', href: '/eletrodomesticos' },
      ],
    },
    tvs: {
      icon: Tv,
      title: 'Televisores',
      description: 'Smart TVs e monitores',
      href: '/televisores',
      items: [
        { name: 'Smart TVs LED', desc: 'Samsung, LG, Sony', href: '/televisores' },
        { name: 'TVs OLED', desc: 'Alta definição', href: '/televisores' },
        { name: 'TVs QLED', desc: 'Qualidade premium', href: '/televisores' },
      ],
    },
    celulares: {
      icon: Smartphone,
      title: 'Celulares',
      description: 'Smartphones e tablets',
      href: '/celulares',
      items: [
        { name: 'iPhone', desc: 'Todos os modelos', href: '/celulares' },
        { name: 'Android', desc: 'Samsung, Motorola, Xiaomi', href: '/celulares' },
        { name: 'Tablets', desc: 'iPad e Android', href: '/celulares' },
      ],
    },
  };

  const navLinks = [
    { name: 'Início', href: isHomePage ? '#inicio' : '/' },
    { name: 'Diferenciais', href: isHomePage ? '#diferenciais' : '/#diferenciais' },
    { name: 'Depoimentos', href: isHomePage ? '#depoimentos' : '/#depoimentos' },
    { name: 'Contato', href: isHomePage ? '#contato' : '/#contato' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden lg:block bg-primary text-primary-foreground transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Maringá, PR
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Seg-Sáb: 8h às 18h
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+5544999999999" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                (44) 99999-9999
              </a>
              <a 
                href="https://wa.me/5544999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50'
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-primary via-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
                  <Wrench className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-[8px] font-bold text-secondary-foreground">✓</span>
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-foreground block leading-tight tracking-tight">
                  TechFix
                </span>
                <span className="text-xs text-muted-foreground font-medium">Maringá • PR</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center bg-muted/50 rounded-full px-2 py-1.5">
                {/* Serviços Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('servicos')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                      activeDropdown === 'servicos' 
                        ? 'bg-background text-primary shadow-sm' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    Serviços
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'servicos' ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Menu */}
                  {activeDropdown === 'servicos' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="w-[720px] bg-background rounded-2xl shadow-2xl border border-border/50 p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Arrow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-background rotate-45 border-l border-t border-border/50" />
                        
                        <div className="grid grid-cols-3 gap-6 relative">
                          {Object.entries(services).map(([key, category]) => (
                            <div key={key} className="space-y-3">
                              <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                  <category.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <h4 className="font-heading font-semibold text-foreground">{category.title}</h4>
                                  <p className="text-xs text-muted-foreground">{category.description}</p>
                                </div>
                              </div>
                              <div className="space-y-1">
                                {category.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block px-3 py-2.5 rounded-lg hover:bg-muted transition-colors group/item"
                                  >
                                    <span className="font-medium text-sm text-foreground group-hover/item:text-primary transition-colors">
                                      {item.name}
                                    </span>
                                    <span className="block text-xs text-muted-foreground">{item.desc}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">
                            <span className="text-secondary font-semibold">Conserto no mesmo dia</span> • Garantia de 90 dias
                          </p>
                          <Button variant="hero" size="sm" asChild>
                            <Link to="/eletrodomesticos">Ver todos os serviços</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Nav Links */}
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 rounded-full font-medium text-sm text-foreground hover:text-primary hover:bg-background transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="tel:+5544999999999" 
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors px-3"
              >
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
              </a>
              <Button variant="hero" size="default" className="rounded-full shadow-lg hover:shadow-secondary/30" asChild>
                <a
                  href="https://wa.me/5544999999999?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Orçamento Grátis
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container mx-auto px-4 pb-6">
            <div className="bg-muted/50 rounded-2xl p-4 space-y-2">
              {/* Services Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-servicos' ? null : 'mobile-servicos')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-foreground hover:bg-background transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-primary" />
                    Serviços
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'mobile-servicos' ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'mobile-servicos' ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-4 py-2 space-y-4">
                    {Object.entries(services).map(([key, category]) => (
                      <div key={key}>
                        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-2">
                          <category.icon className="w-4 h-4" />
                          {category.title}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-sm text-foreground hover:text-primary py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nav Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-foreground hover:bg-background transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* Contact Info */}
              <div className="pt-4 mt-2 border-t border-border/50 space-y-3">
                <div className="flex items-center gap-3 px-4 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Maringá, PR</span>
                </div>
                <div className="flex items-center gap-3 px-4 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Seg-Sáb: 8h às 18h</span>
                </div>
                <a 
                  href="tel:+5544999999999" 
                  className="flex items-center gap-3 px-4 text-sm text-foreground font-medium"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  (44) 99999-9999
                </a>
              </div>

              {/* CTA Button */}
              <Button variant="hero" className="w-full rounded-xl mt-4" size="lg" asChild>
                <a
                  href="https://wa.me/5544999999999?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento Grátis
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
