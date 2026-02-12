import { useEffect } from 'react';
import lottie from 'lottie-web';

const AnimatedFavicon = () => {
  useEffect(() => {
    const container = document.createElement('div');
    container.style.width = '32px';
    container.style.height = '32px';
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    document.body.appendChild(container);

    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;

    const anim = lottie.loadAnimation({
      container,
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      path: '/favicon-animation.json',
      rendererSettings: {
        context: canvas.getContext('2d')!,
        clearCanvas: true,
      },
    });

    const link = document.querySelector<HTMLLinkElement>("link[rel='icon']") 
      || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    if (!link.parentNode) document.head.appendChild(link);

    anim.addEventListener('enterFrame', () => {
      try {
        const innerCanvas = container.querySelector('canvas');
        if (innerCanvas) {
          link.href = innerCanvas.toDataURL('image/png');
        }
      } catch { /* ignore */ }
    });

    return () => {
      anim.destroy();
      container.remove();
    };
  }, []);

  return null;
};

export default AnimatedFavicon;
