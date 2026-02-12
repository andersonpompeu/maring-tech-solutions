import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Wrench, Tv, Smartphone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

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
        { name: 'Máquinas de Lavar', desc: 'Todas as marcas', href: '/maquina-de-lavar' },
        { name: 'Geladeiras', desc: 'Frost Free e convencionais', href: '/geladeira' },
        { name: 'Fogões', desc: 'Gás e elétricos', href: '/fogao' },
        { name: 'Micro-ondas', desc: 'Reparo especializado', href: '/micro-ondas' },
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
    { name: 'Blog', href: '/blog' },
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
              <a href="tel:+5544997398826" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                (44) 99739-8826
              </a>
              <a
                href="https://wa.me/5544997398826"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50'
            : 'bg-background/80 backdrop-blur-sm'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Assistência Técnica Maringá"
                width={300}
                height={90}
                className="h-14 lg:h-16 w-auto object-contain"
              />
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
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${activeDropdown === 'servicos'
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
                href="tel:+5544997398826"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors px-3"
              >
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
              </a>
              <Button variant="hero" size="default" className="rounded-full shadow-lg hover:shadow-secondary/30 animate-whatsapp-pulse" asChild>
                <a
                  href="https://wa.me/5544997398826?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 animate-bounce-subtle" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
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
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
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
                  <span>Atendimento 24h</span>
                </div>
                <a
                  href="tel:+5544997398826"
                  className="flex items-center gap-3 px-4 text-sm text-foreground font-medium"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  (44) 99739-8826
                </a>
              </div>

              {/* CTA Button */}
              <Button variant="hero" className="w-full rounded-xl mt-4" size="lg" asChild>
                <a
                  href="https://wa.me/5544997398826?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
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