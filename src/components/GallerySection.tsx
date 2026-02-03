import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import serviceWashingMachine from '@/assets/gallery/service-washing-machine.jpg';
import serviceRefrigerator from '@/assets/gallery/service-refrigerator.jpg';
import serviceTv from '@/assets/gallery/service-tv.jpg';
import serviceSmartphone from '@/assets/gallery/service-smartphone.jpg';
import serviceMicrowave from '@/assets/gallery/service-microwave.jpg';
import serviceStove from '@/assets/gallery/service-stove.jpg';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: serviceWashingMachine,
    title: 'Máquina de Lavar Brastemp',
    description: 'Reparo completo do sistema de drenagem e substituição da bomba d\'água. Cliente satisfeito com funcionamento perfeito.',
    category: 'Eletrodomésticos',
  },
  {
    id: 2,
    image: serviceRefrigerator,
    title: 'Geladeira Frost Free Samsung',
    description: 'Diagnóstico e reparo do sistema de refrigeração. Troca do compressor e recarga de gás.',
    category: 'Eletrodomésticos',
  },
  {
    id: 3,
    image: serviceTv,
    title: 'Smart TV LG 55" OLED',
    description: 'Conserto da placa principal e atualização de firmware. Imagem restaurada com qualidade original.',
    category: 'Televisores',
  },
  {
    id: 4,
    image: serviceSmartphone,
    title: 'iPhone 14 Pro Max',
    description: 'Substituição de tela quebrada e bateria. Aparelho devolvido como novo em menos de 2 horas.',
    category: 'Celulares',
  },
  {
    id: 5,
    image: serviceMicrowave,
    title: 'Micro-ondas Electrolux',
    description: 'Reparo do magnetron e painel de controle. Equipamento funcionando perfeitamente.',
    category: 'Eletrodomésticos',
  },
  {
    id: 6,
    image: serviceStove,
    title: 'Fogão Cooktop Fischer',
    description: 'Manutenção dos queimadores e válvulas de segurança. Instalação revisada e aprovada.',
    category: 'Eletrodomésticos',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Trabalhos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Galeria de Serviços Realizados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos recentes. Cada conserto é realizado com dedicação e garantia de qualidade.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(item)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-opacity duration-300 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Zoom Icon */}
                <div 
                  className={`absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                >
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 ${
                    hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Info (visible when not hovered) */}
              <div 
                className={`p-4 transition-all duration-300 ${
                  hoveredId === item.id ? 'opacity-0 h-0 p-0' : 'opacity-100'
                }`}
              >
                <h3 className="font-heading font-semibold text-foreground mb-1 truncate">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Precisa de um serviço semelhante? Entre em contato conosco!
          </p>
          <a
            href="https://wa.me/5544999999999?text=Olá! Vi a galeria de serviços e gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground font-semibold px-6 py-3 rounded-full hover:bg-whatsapp/90 transition-all duration-300 hover:-translate-y-1 shadow-whatsapp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background border-none overflow-hidden">
          {selectedImage && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="aspect-video">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6 bg-background">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
