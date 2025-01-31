<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: 'Zaid Yasyaf - Tech Lead & Full Stack Developer',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { 
      name: 'description', 
      content: 'Tech Lead at Perqara with over 10 years of experience in full-stack development, system architecture, and team leadership. Expertise in Node.js, Vue.js, TypeScript, and cloud technologies.'
    },
    // OpenGraph
    { property: 'og:type', content: 'profile' },
    { property: 'og:title', content: 'Zaid Yasyaf - Tech Lead & Full Stack Developer' },
    { 
      property: 'og:description', 
      content: 'Tech Lead at Perqara with over 10 years of experience in full-stack development, system architecture, and team leadership.'
    },
    { property: 'og:url', content: 'https://uncle-z.com' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image', content: 'https://uncle-z.com/logos/logo.png' },
    { property: 'og:image:width', content: '512' },
    { property: 'og:image:height', content: '512' },
    { property: 'og:site_name', content: 'Uncle Z' },
    // Profile specific
    { property: 'profile:first_name', content: 'Zaid' },
    { property: 'profile:last_name', content: 'Yasyaf' },
    { property: 'profile:username', content: 'zaidysf' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Zaid Yasyaf - Tech Lead & Full Stack Developer' },
    { 
      name: 'twitter:description', 
      content: 'Tech Lead at Perqara with over 10 years of experience in full-stack development, system architecture, and team leadership.'
    },
    { name: 'twitter:image', content: 'https://uncle-z.com/logos/logo.png' },
    // Keywords
    { 
      name: 'keywords', 
      content: 'Tech Lead, Full Stack Developer, Node.js, Vue.js, TypeScript, System Architecture, Team Leadership, Cloud Technologies, AWS, Docker, Elasticsearch, GraphQL, Laravel, MongoDB, MySQL, PostgreSQL, React, Redis, Go'
    },
    // Additional SEO
    { name: 'author', content: 'Zaid Yasyaf' },
    { name: 'robots', content: 'index, follow' },
    { name: 'format-detection', content: 'telephone=no' },
    // Location
    { name: 'geo.region', content: 'ID' },
    { name: 'geo.placename', content: 'Indonesia' },
    // Mobile app
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    // Color scheme
    { name: 'color-scheme', content: 'dark' },
    { name: 'theme-color', content: '#1e1e1e' },
    // Cache control
    { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
    { 'http-equiv': 'Pragma', content: 'no-cache' },
    { 'http-equiv': 'Expires', content: '0' }
  ],
  link: [
    { rel: 'canonical', href: 'https://uncle-z.com' },
    { rel: 'icon', type: 'image/x-icon', href: '/logos/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/logos/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logos/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logos/favicon-16x16.png' },
    { rel: 'manifest', href: '/logos/site.webmanifest' }
  ]
})
</script>
