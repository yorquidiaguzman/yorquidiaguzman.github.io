export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Yorquidia Guzmán Guzmán',
    subtitle: 'Desarrolladora Full Stack',
    description: 'Porfolio profesional de Yorquidia Guzmán Guzmán 💻',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Projectos',
            href: '/projects'
        },
        {
            text: 'CV',
            href: '/blog'
        },
        {
            text: 'Github',
            href: 'https://github.com/yorquidiaguzman'
        },
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Términos',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://linkedin.com/in/yorquidia-guzman-guzman'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
    ],
    hero: {
        title: 'Sobre mí',
        text: " ¡Hola! Soy Yorquidia, una desarrolladora full stack que se entusiasma con la creación de soluciones tecnológicas. Mi experiencia abarca tanto el front-end como el back-end, utilizando tecnologías como React, JavaScript, HTML/CSS para construir interfaces dinámicas y Node.js, Python, SQL para gestionar la lógica del servidor y las bases de datos. Te invito a echar un vistazo a mis proyectos para que conozcas mi trabajo en <a href='https://github.com/yorquidiaguzman'>GitHub</a> y a conectar y/o contactar conmigo en <a href='https://linkedin.com/in/yorquidia-guzman-guzman'>Linkedin/X</a>.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Contacto',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'No dudes en contactarme',
        text: 'Si necesitas más información, escribe tu correo aquí y te contactaré en cuanto pueda',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
