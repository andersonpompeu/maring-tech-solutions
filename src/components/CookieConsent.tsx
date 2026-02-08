import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'techfix-cookie-consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-5 md:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Utilizamos cookies 🍪
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Usamos cookies para melhorar sua experiência de navegação. Ao continuar, você concorda com nossa{' '}
                  <Link to="/politica-de-privacidade" className="text-primary underline hover:text-primary/80 transition-colors">
                    Política de Privacidade
                  </Link>.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="flex-1 sm:flex-none text-xs"
              >
                Recusar
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="flex-1 sm:flex-none text-xs"
              >
                Aceitar cookies
              </Button>
            </div>

            {/* Close button */}
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 sm:static text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
