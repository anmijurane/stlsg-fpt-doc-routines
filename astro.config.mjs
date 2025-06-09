// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fpt-routines.sitelseg.mx/',
  adapter: node({
    mode: 'standalone',
  }),

  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    starlight({
      disable404Route: true,
      prerender: false,
      title: 'Planet Fitness',
      logo: {
        src: './src/assets/pf_logo.webp',
      },
      favicon: '/favicon.ico',
      sidebar: [
        {
          label: 'Changelog',
          items: [
            { label: 'Documentación', slug: 'changelog/doc-changelog' },
            { label: 'Plataforma', slug: 'changelog/app-changelog' },
          ]
        },
        {
          label: 'Discovery',
          autogenerate: { directory: 'discovery' },
        },
        {
          label: 'Historias de usuario',
          items: [
            { label: 'Vista general', slug: 'user-stories/structure' },
            { label: 'Epic 1: Acceso e identificación de Club', autogenerate: { directory: 'user-stories/mod01' }, collapsed: true, },
            { label: 'Epic 2: Exploracion de rutinas', autogenerate: { directory: 'user-stories/mod02' }, collapsed: true, },
            { label: 'Epic 3: Pantalla informativa', autogenerate: { directory: 'user-stories/mod03' }, collapsed: true, },
            { label: 'Epic 4: Vista de rutinas', autogenerate: { directory: 'user-stories/mod04' }, collapsed: true, },
            { label: 'Epic 5: Detalle de ejercicio', autogenerate: { directory: 'user-stories/mod05' }, collapsed: true, },
            { label: 'Epic 6: Reproducción de video', autogenerate: { directory: 'user-stories/mod06' }, collapsed: true, },
            { label: 'Epic 7: Marcado local de progreso', autogenerate: { directory: 'user-stories/mod07' }, collapsed: true, },
            { label: 'Epic 8: Retroalimentación', autogenerate: { directory: 'user-stories/mod08' }, collapsed: true, },
          ],
        },
        {
          label: 'Planeacion',
          autogenerate: { directory: 'planning' },
          collapsed: true
        },
        {
          label: 'Diseño',
          items: [
            { label: 'Categorias de rutinas', autogenerate: { directory: 'design/routines-category' }, collapsed: true },
            { label: 'Disclamer', autogenerate: { directory: 'design/disclamer' }, collapsed: true },
            { label: 'Nivel de rutina', autogenerate: { directory: 'design/routine-level' }, collapsed: true },
            { label: 'Detalle del ejercicio', autogenerate: { directory: 'design/exercise-detail' }, collapsed: true },
            { label: 'Video ejecución', autogenerate: { directory: 'design/video-exercise' }, collapsed: true },
          ],
          collapsed: true
        },
        {
          label: 'Datos de rutinas',
          items: [
            { label: 'Concentrado', autogenerate: { directory: 'data-information/concentrate', }, collapsed: true },
            { label: 'Listado de gimnasios', slug: 'data-information/gym-list', },
          ],
          collapsed: true
        },
      ],
      customCss: ['./src/styles/theme.css'],
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
    }),
  ],

});
