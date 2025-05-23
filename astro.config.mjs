// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Planet Fitness',
			logo: {
				src: './src/assets/pf_logo.webp',
			},
			favicon: './public/favicon.ico',
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
						{ label: 'Epic 4: Visualización de rutinas', autogenerate: { directory: 'user-stories/mod04' }, collapsed: true, },
						{ label: 'Epic 5: Detalle de ejercicio', autogenerate: { directory: 'user-stories/mod05' }, collapsed: true, },
						{ label: 'Epic 6: Reproducción de video', autogenerate: { directory: 'user-stories/mod06' }, collapsed: true, },
						{ label: 'Epic 7: Marcado local de progreso', autogenerate: { directory: 'user-stories/mod07' }, collapsed: true, },
						{ label: 'Epic 8: Retroalimentación', autogenerate: { directory: 'user-stories/mod08' }, collapsed: true, },
					],
				},
				{
					label: 'Planeacion',
					autogenerate: { directory: 'planning' },
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
