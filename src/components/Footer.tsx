import { Wrench, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg block leading-tight">Assistência Técnica</span>
                <span className="text-xs opacity-80">Maringá</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Assistência técnica premium em Maringá. Especialistas em conserto de 
              eletrodomésticos, Smart TVs e celulares.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href="#servicos" className="hover:text-secondary transition-colors">
                  Conserto de Máquinas de Lavar
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary transition-colors">
                  Conserto de Geladeiras
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary transition-colors">
                  Manutenção de Fogões
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary transition-colors">
                  Reparo de Smart TVs
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary transition-colors">
                  Conserto de Celulares
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary transition-colors">
                  Reparo de Micro-ondas
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href="#inicio" className="hover:text-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-secondary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-secondary transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-secondary transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-secondary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <address className="not-italic space-y-4 text-white/80 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>
                  Av. Brasil, 3278 - Zona 01<br />
                  Maringá - PR, 87013-000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+5544997398826" className="hover:text-secondary transition-colors">(44) 99739-8826</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:contato@assistenciatecnica.maringa.br" className="hover:text-secondary transition-colors">contato@assistenciatecnica.maringa.br</a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {currentYear} Assistência Técnica Maringá. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/termos-de-uso" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
