import { useEffect, useRef } from 'react';
import brastemLogo from '@/assets/brands/brastemp.svg';
import electroluxLogo from '@/assets/brands/electrolux.svg';
import consulLogo from '@/assets/brands/consul.svg';
import samsungLogo from '@/assets/brands/samsung.svg';
import lgLogo from '@/assets/brands/lg.svg';
import mideaLogo from '@/assets/brands/midea.svg';
import panasonicLogo from '@/assets/brands/panasonic.svg';

const brands = [
  { name: 'Brastemp', logo: brastemLogo },
  { name: 'Electrolux', logo: electroluxLogo },
  { name: 'Consul', logo: consulLogo },
  { name: 'Samsung', logo: samsungLogo },
  { name: 'LG', logo: lgLogo },
  { name: 'Midea', logo: mideaLogo },
  { name: 'Panasonic', logo: panasonicLogo },
];

const BrandsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
    };
  }, []);

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Marcas Atendidas
          </span>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mt-2">
            Trabalhamos com Todas as Principais Marcas
          </h3>
        </div>

        <div
          ref={scrollRef}
          className="overflow-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex items-center gap-8 w-max">
            {duplicatedBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center justify-center bg-card rounded-2xl border border-border/50 shadow-sm px-8 py-5 min-w-[160px] h-[80px] hover:shadow-card-hover transition-shadow duration-300"
              >
                <img
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className="h-8 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
