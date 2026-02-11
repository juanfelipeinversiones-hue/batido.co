
import { JuiceFlavor, PricingPack, FAQItem, Testimonial } from './types';

export const WHATSAPP_NUMBER = '573044758290';
export const WHATSAPP_MESSAGE =
  'Hola!%20Quiero%20pedir%20el%20Six-pack%20promo%20de%20Batido.%20Estoy%20en%20Medell%C3%ADn.';
export const RAPPI_URL = '';
export const BOTTLE_SIZE_ML = 400;

export const FLAVORS: JuiceFlavor[] = [
  {
    id: 'so-green',
    name: 'SO GREEN',
    focus: 'El detox que tu cuerpo grita',
    description: 'Fresco, liviano y directo. Ideal para resetear tu día y sentirte más ligero desde la primera botella.',
    ingredients: ['Manzana', 'Limón'],
    color: 'text-emerald-400',
    bgColor: 'bg-[#1a2e1a]',
    imageUrl: 'https://i.postimg.cc/852xNddd/Whats-App-Image-2026-02-07-at-10-58-02-PM.jpg'
  },
  {
    id: 'summer-glow',
    name: 'SUMMER GLOW',
    focus: 'Tu skin-care se bebe',
    description: 'Brillo natural con un balance cítrico y especiado. Siente la piel con glow y el cuerpo con energía suave.',
    ingredients: ['Zanahoria', 'Naranja', 'Manzana', 'Limón', 'Cúrcuma', 'Jengibre'],
    color: 'text-orange-400',
    bgColor: 'bg-[#2e1f1a]',
    imageUrl: 'https://i.postimg.cc/59FMTy5D/Whats-App-Image-2026-02-07-at-10-58-03-PM.jpg'
  },
  {
    id: 'full-recovery',
    name: 'FULL RECOVERY',
    focus: 'Tu combustible para el comeback',
    description: 'Un impulso real para el rendimiento. Ideal para entrenar duro y recuperarte mejor.',
    ingredients: ['Remolacha', 'Limón', 'Manzana', 'Zanahoria', 'Pera'],
    color: 'text-purple-400',
    bgColor: 'bg-[#1e1a2e]',
    imageUrl: 'https://i.postimg.cc/15wsnXfN/Whats-App-Image-2026-02-07-at-10-58-03-PM-(1).jpg'
  }
];

export const PACKS: PricingPack[] = [
  {
    id: 'sickpack',
    name: 'Six-pack',
    description: 'Promo Medellín. Tu reset premium con jugos cold-pressed listos para rendir toda la semana.',
    price: '$99.900',
    compareAt: '$119.000',
    sizeMl: BOTTLE_SIZE_ML,
    availabilityNote: 'Entrega sujeta a disponibilidad. Te confirmamos por WhatsApp.',
    isPopular: true,
    cta: 'Pedir Six-pack ahora'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Qué tamaño tiene cada botella?',
    answer: `Cada botella es de ${BOTTLE_SIZE_ML} ml y viene lista para consumir.`
  },
  {
    question: '¿Hacen entregas en Medellín?',
    answer: 'Sí. La entrega está sujeta a disponibilidad y te confirmamos por WhatsApp lo más pronto posible.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos tarjeta de crédito, transferencia Bancolombia y Nequi. Si prefieres Rappi, te enviamos el link por WhatsApp.'
  },
  {
    question: '¿Cómo se conservan?',
    answer: 'Mantén las botellas refrigeradas. Te contamos fecha de vencimiento al confirmar el pedido.'
  },
  {
    question: '¿Qué sabores hay disponibles?',
    answer: 'So Green, Summer Glow y Full Recovery. Cada uno con ingredientes frescos y sin azúcar añadida.'
  }
];

export const INSTAGRAM_REELS = [
  'https://www.instagram.com/reel/DPPYX54FdSZ/',
  'https://www.instagram.com/reel/DMfwWoroHf8/'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Laura M.',
    city: 'Medellín',
    quote: 'Me quitó la pesadez y me ayudó a volver a la rutina con energía. Se siente limpio y real.',
    rating: 5,
    result: 'Más energía en la mañana'
  },
  {
    name: 'Santiago R.',
    city: 'Bogotá',
    quote: 'El Full Recovery me salvó post‑entreno. Sabor top y cero azúcar añadida.',
    rating: 5,
    result: 'Mejor recuperación'
  },
  {
    name: 'Camila P.',
    city: 'Miami',
    quote: 'Súper práctico para semanas pesadas. El Summer Glow es mi favorito.',
    rating: 5,
    result: 'Glow y ligereza'
  },
  {
    name: 'Julián V.',
    city: 'Madrid',
    quote: 'Se nota la calidad. Ingredientes reales y el sabor es brutal.',
    rating: 5,
    result: 'Sabor honesto'
  },
  {
    name: 'Valentina C.',
    city: 'Medellín',
    quote: 'Me encanta que confirmen rápido por WhatsApp. Muy buen servicio.',
    rating: 5,
    result: 'Compra fácil'
  },
  {
    name: 'Andrés T.',
    city: 'CDMX',
    quote: 'Cold‑pressed de verdad. Se siente premium desde el primer sorbo.',
    rating: 5,
    result: 'Experiencia premium'
  }
];
