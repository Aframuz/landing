const pricingData = [
   {
      price: "$100.000",
      plan: "Plan básico",
      description: "Landing page para maximizar la tasa de conversión",
      details: ["Marca personalizada", "Solo Landing page", "SEO optimizado", "Casillade correo", "Formulario de contacto"],
      button: {
         text: "Más información",
         url: "#",
         style: "muted",
      },
      subtext: "$50.000 por avanzado + $50.000 al finalizar",
   },
   {
      price: "$250.000",
      plan: "Plan Pro",
      description: "Sitio personalizado para mostrar tu marca",
      details: [
         "Plan básico+",
         "Hasta 10 páginas",
         "Integración con redes sociales",
         "CMS para contenido personalizado",
         "Analítica personalizada",
      ],
      button: {
         text: "Regístrate",
         url: "#",
         style: "secondary",
      },
      subtext: "$100.000 por avanzado + $250.000 al finalizar",
      featured: true,
   },
   {
      price: "$500.000",
      plan: "Plan bloguero",
      description: "Sitio personalizado con blog adjunto",
      details: ["Plan Pro+", "Blog completo", "Funciones de búsqueda", "Dos casillas de correo", "Dominio gratuito (1 año)"],
      button: {
         text: "Más información",
         url: "#",
         style: "muted",
      },
      subtext: "$250.000 por avanzado + $250.000 al finalizar",
   },
];

const pricingDataEng = [
   {
      price: "$1000",
      plan: "Starter Plan",
      description: "Landing page to maximize conversion rate",
      details: ["Custom Branding", "Single Landing page", "SEO-optimized", "One Email inbox", "Contact Form"],
      button: {
         text: "Learn more",
         url: "#",
         style: "muted",
      },
      subtext: "$500 up front + $500 upon completion",
   },
   {
      price: "$1400",
      plan: "Pro Plan",
      description: "Personalized site to showcase your brand",
      details: ["Starter Plan+", "Up to 5 pages", "Social feed integrations", "CMS for custom content", "Custom analytics"],
      button: {
         text: "Sign up",
         url: "#",
         style: "secondary",
      },
      subtext: "$700 up front + $700 upon completion",
      featured: true,
   },
   {
      price: "$2000",
      plan: "Writer’s Plan",
      description: "Personalized site with accompanying blog",
      details: ["Pro Plan+", "Full-featured blog", "Search functionality", "Two email inboxes", "Free domain name (1 year)"],
      button: {
         text: "Learn more",
         url: "#",
         style: "muted",
      },
      subtext: "$1000 up front + $1000 upon completion",
   },
];

export default pricingData;
