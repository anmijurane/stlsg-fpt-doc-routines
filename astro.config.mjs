// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import dotenv from 'dotenv';
import node from '@astrojs/node';
import starlightOpenAPIPlugin, { openAPISidebarGroups } from 'starlight-openapi';
import tailwindcss from '@tailwindcss/vite';

dotenv.config();

const PORT = Number(process.env.PORT) || 8765;

console.log('openAPISidebarGroups', openAPISidebarGroups);

export default defineConfig({
  site: 'https://fpt-routines.sitelseg.mx/',
  adapter: node({
    mode: 'standalone',
  }),

  output: 'server',

  server: {
    port: PORT
  },

  integrations: [
    starlight({
      disable404Route: true,
      prerender: false,
      title: 'Planet Fitness',
      plugins: [
        starlightOpenAPIPlugin([
          {
            base: 'api-docs',
            schema: './src/swagger/swagger_fpt_api_analytics.yml',
            sidebar: {
              label: 'API Analítica'
            }
          }
        ])
      ],
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
          items: [{ autogenerate: { directory: 'discovery' } }],
        },
        {
          label: 'Historias de usuario',
          items: [
            { label: 'Vista general', slug: 'user-stories/structure' },
            { label: 'Epic 1: Acceso e identificación de Club', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod01', collapsed: true } }] },
            { label: 'Epic 2: Exploracion de rutinas', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod02', collapsed: true } }] },
            { label: 'Epic 3: Pantalla informativa', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod03', collapsed: true } }] },
            { label: 'Epic 4: Vista de rutinas', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod04', collapsed: true } }] },
            { label: 'Epic 5: Detalle de ejercicio', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod05', collapsed: true } }] },
            { label: 'Epic 6: Reproducción de video', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod06', collapsed: true } }] },
            { label: 'Epic 7: Marcado local de progreso', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod07', collapsed: true } }] },
            { label: 'Epic 8: Retroalimentación', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod08', collapsed: true } }] },
            { label: 'Epic 9: Disclaimer Legal de Uso', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod09', collapsed: true } }] },
            { label: 'Epic 10: Perfilamiento Demográfico de Usuario', collapsed: true, items: [{ autogenerate: { directory: 'user-stories/mod10', collapsed: true } }] },
          ],
        },
        {
          label: 'Planeacion',
          collapsed: true,
          items: [{ autogenerate: { directory: 'planning', collapsed: true } }]
        },
        {
          label: 'Diseño',
          items: [
            { label: 'Categorias de rutinas', collapsed: true, items: [{ autogenerate: { directory: 'design/routines-category', collapsed: true } }] },
            { label: 'Disclamer', collapsed: true, items: [{ autogenerate: { directory: 'design/disclamer', collapsed: true } }] },
            { label: 'Nivel de rutina', collapsed: true, items: [{ autogenerate: { directory: 'design/routine-level', collapsed: true } }] },
            { label: 'Detalle del ejercicio', collapsed: true, items: [{ autogenerate: { directory: 'design/exercise-detail', collapsed: true } }] },
            { label: 'Formulario Demográfico', collapsed: true, items: [{ autogenerate: { directory: 'design/formulary-more-info', collapsed: true } }] },
          ],
          collapsed: true
        },
        {
          label: 'Datos de rutinas',
          items: [
            { label: 'Concentrado', collapsed: true, items: [{ autogenerate: { directory: 'data-information/concentrate', collapsed: true } }] },
            { label: 'Accesos QR', collapsed: true, items: [{ autogenerate: { directory: 'data-information/QR', collapsed: true } }] },
            { label: 'Listado de gimnasios', slug: 'data-information/gym-list', },
          ],
          collapsed: true
        },
        {
          label: 'Feedback de rutinas',
          collapsed: true,
          items: [{ autogenerate: { directory: 'feedback/periods', collapsed: true } }]
        },
        {
          label: 'API Diccionario',
          items: [
            { label: 'Errores', slug: 'api/diccionario/code_errors' },
            { label: 'Ejercicios', slug: 'api/diccionario/exercises' },
            { label: 'Clubs', slug: 'api/diccionario/clubs' }
          ]
        },
        ...openAPISidebarGroups,
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
  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss()
    ],
  },
});
