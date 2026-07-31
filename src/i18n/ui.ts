export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.proyectos': 'Proyectos',
    'nav.sobreMi': 'Sobre Mi',
    'nav.contacto': 'Contacto',

    'hero.greeting': 'Hola, Soy Bruno',
    'hero.badge': 'Disponible para trabajar',
    'hero.role': 'Desarrollador Web',
    'hero.location': 'de Posadas, Misiones, Argentina.',
    'hero.study': 'Estudio',
    'hero.degree': 'Licenciatura en Sistemas',
    'hero.at': 'en la',
    'hero.university': 'Universidad Nacional de Misiones',
    'hero.toast.copied': 'Email copiado al portapapeles',

    'projects.title': 'Proyectos',
    'projects.spotify.title': 'Clon de Spotify',
    'projects.spotify.description':
      'Un clon de Spotify con funcionalidades basicas de reproduccion de musica.',
    'projects.github': 'GitHub',
    'projects.viewProject': 'Proyecto',

    'aboutMe.title': 'Sobre mi',
    'aboutMe.p1Start':
      'Me llamo Bruno Elías Gamarra, mi camino en la programación empezó en 2020 al ingresar en la',
    'aboutMe.universityFull': 'Universidad Nacional de Misiones (UNaM)',
    'aboutMe.p1Middle': 'donde empece a estudiar la carrera de',
    'aboutMe.degree': 'Licenciatura en Sistemas de informacion',
    'aboutMe.p1End': 'la cual me encuentro cursando actualmente.',
    'aboutMe.p2Start': 'Mi enfoque principal es el',
    'aboutMe.focus': 'Desarrollo Web',
    'aboutMe.p2Middle': 'con',
    'aboutMe.stack': 'React, Express y PostgreSQL',
    'aboutMe.p2End':
      'Me gusta crear soluciones innovadoras y eficientes, y estoy en constante aprendizaje para mejorar mis habilidades.',

    'contactMe.title': 'Contactame',
    'contactMe.name': 'Nombre Completo',
    'contactMe.email': 'Correo Electronico',
    'contactMe.phone': 'Numero de Telefono',
    'contactMe.subject': 'Asunto del Correo',
    'contactMe.message': 'Tu Mensaje',
    'contactMe.submit': 'Enviar Correo',
    'contactMe.sending': 'Enviando...',
    'contactMe.toast.success':
      '¡Mensaje enviado! Te responderé a la brevedad.',
    'contactMe.toast.error':
      'Algo salió mal. Intentá de nuevo o escribime directamente.',

    'footer.copyright':
      '© 2026 Bruno Gamarra. Todos los derechos reservados.',

    'lang.switcher.label': 'Idioma',
    'toast.close': 'Cerrar',
  },
  en: {
    'nav.inicio': 'Home',
    'nav.proyectos': 'Projects',
    'nav.sobreMi': 'About Me',
    'nav.contacto': 'Contact',

    'hero.greeting': "Hi, I'm Bruno",
    'hero.badge': 'Available for work',
    'hero.role': 'Web Developer',
    'hero.location': 'from Posadas, Misiones, Argentina.',
    'hero.study': 'I study',
    'hero.degree': 'a Systems Information degree',
    'hero.at': 'at',
    'hero.university': 'National University of Misiones',
    'hero.toast.copied': 'Email copied to clipboard',

    'projects.title': 'Projects',
    'projects.spotify.title': 'Spotify Clone',
    'projects.spotify.description':
      'A Spotify clone with basic music playback features.',
    'projects.github': 'GitHub',
    'projects.viewProject': 'Project',

    'aboutMe.title': 'About me',
    'aboutMe.p1Start':
      'My name is Bruno Elías Gamarra, my journey in programming started in 2020 when I joined the',
    'aboutMe.universityFull': 'National University of Misiones (UNaM)',
    'aboutMe.p1Middle': 'where I started studying',
    'aboutMe.degree': 'a Systems Information degree',
    'aboutMe.p1End': 'which I am currently attending.',
    'aboutMe.p2Start': 'My main focus is',
    'aboutMe.focus': 'Web Development',
    'aboutMe.p2Middle': 'with',
    'aboutMe.stack': 'React, Express and PostgreSQL',
    'aboutMe.p2End':
      'I enjoy building innovative and efficient solutions, and I am constantly learning to improve my skills.',

    'contactMe.title': 'Contact me',
    'contactMe.name': 'Full Name',
    'contactMe.email': 'Email',
    'contactMe.phone': 'Phone Number',
    'contactMe.subject': 'Email Subject',
    'contactMe.message': 'Your Message',
    'contactMe.submit': 'Send Email',
    'contactMe.sending': 'Sending...',
    'contactMe.toast.success': 'Message sent! I will reply as soon as possible.',
    'contactMe.toast.error':
      'Something went wrong. Please try again or reach out directly.',

    'footer.copyright': '© 2026 Bruno Gamarra. All rights reserved.',

    'lang.switcher.label': 'Language',
    'toast.close': 'Close',
  },
} as const;

export type TranslationKey = keyof (typeof ui)['es'];

export function t(locale: Locale, key: TranslationKey): string {
  return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
}

export function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'es';
}
