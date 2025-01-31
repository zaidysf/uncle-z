// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logos/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/logos/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logos/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logos/favicon-16x16.png' },
        { rel: 'manifest', href: '/logos/site.webmanifest' }
      ],
      meta: [
        { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
        { name: 'apple-mobile-web-app-title', content: 'Zaid Yasyaf' },
        { name: 'theme-color', content: '#1e1e1e' }
      ],
      script: [{
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Zaid Yasyaf',
          jobTitle: 'Tech Lead',
          description: 'Tech Lead at Perqara with over 10 years of experience in full-stack development',
          url: 'https://uncle-z.com',
          sameAs: [
            'https://github.com/zaidysf',
            'https://linkedin.com/in/zaidysf'
          ],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'Indonesia'
          },
          email: 'zaid.ug@gmail.com',
          telephone: '+628112777854',
          knowsAbout: [
            'Full Stack Development',
            'System Architecture',
            'Team Leadership',
            'Node.js',
            'Vue.js',
            'TypeScript',
            'AWS',
            'Docker',
            'Elasticsearch',
            'GraphQL',
            'Laravel',
            'MongoDB',
            'MySQL',
            'PostgreSQL',
            'React',
            'Redis',
            'Go'
          ]
        })
      }]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    public: {
      githubUsernames: ['zaidysf'],
      githubTokenOne: process.env.GITHUB_TOKEN_ONE,
      githubTokenTwo: process.env.GITHUB_TOKEN_TWO
    },
    mailgun: {
      domain: process.env.MAILGUN_DOMAIN,
      apiKey: process.env.MAILGUN_API_KEY,
      from: process.env.MAILGUN_FROM
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/profile.md',
        '/experience.md',
        '/skills.md',
        '/education.md',
        '/github.vue',
        '/contact.md',
        '/about.md'
      ]
    }
  },

  experimental: {
    payloadExtraction: true
  },

  routeRules: {
    '/': { prerender: true },
    '/**': { ssr: true }
  },

  compatibilityDate: '2025-01-31'
})