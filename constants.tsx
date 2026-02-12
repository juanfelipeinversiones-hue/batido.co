
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
    focus: 'El detox que tu cuerpo estaba esperando',
    description: 'Ligero. Fresco. Directo al sistema. Tu reset natural para empezar la semana liviano y enfocado.',
    ingredients: ['Apio', 'Manzana verde', 'Limón', 'Pepino', 'Jengibre'],
    color: 'text-emerald-400',
    bgColor: 'bg-[#1a2e1a]',
    imageUrl: 'https://i.postimg.cc/852xNddd/Whats-App-Image-2026-02-07-at-10-58-02-PM.jpg'
  },
  {
    id: 'summer-glow',
    name: 'SUMMER GLOW',
    focus: 'Tu skin-care ahora se bebe',
    description: 'Balance cítrico + toque especiado. Glow natural y energía limpia.',
    ingredients: ['Zanahoria', 'Naranja', 'Manzana', 'Limón', 'Cúrcuma', 'Jengibre'],
    color: 'text-orange-400',
    bgColor: 'bg-[#2e1f1a]',
    imageUrl: 'https://i.postimg.cc/59FMTy5D/Whats-App-Image-2026-02-07-at-10-58-03-PM.jpg'
  },
  {
    id: 'full-recovery',
    name: 'FULL RECOVERY',
    focus: 'Combustible real para tu comeback',
    description: 'Ideal post-entreno o semanas intensas. Recarga natural, sin crashes.',
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
    description: '6 botellas de 400 ml. Combina sabores como quieras.',
    price: '$99.000',
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
    quote: 'Me quitó la pesadez y me ayudó a volver a la rutina con energía.',
    rating: 5
  },
  {
    name: 'Santiago R.',
    city: 'Bogotá',
    quote: 'El Full Recovery es brutal post-entreno.',
    rating: 5
  },
  {
    name: 'Camila P.',
    city: 'Miami',
    quote: 'El Summer Glow es mi favorito.',
    rating: 5
  },
  {
    name: 'Julián V.',
    city: 'Madrid',
    quote: 'Se nota la calidad desde el primer sorbo.',
    rating: 5
  }
];
