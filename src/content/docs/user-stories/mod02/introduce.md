---
title: Introducción al Módulo 2
sidebar:
  order: 0
  label: Introducción
lastUpdated: 2025-05-22
prev: false
next:
  label: Módulo 2 | Historia 1
---

# Exploración de Rutinas

## Objectivo

Permitir al usuario visualizar las categorías disponibles y, dentro de cada una, los niveles correspondientes (del 1 al 4), para acceder posteriormente a una rutina específica.

## Componentes funcionales

1. Tarjetas de Categorías

  - Visualización de 4 tarjetas:
    - Adaptación
    - Salud
    - Quema de grasa
    - Ganancia muscular
  Cada tarjeta tiene un chevron en la esquina superior derecha.
    - Clic en el chevron → despliega los niveles disponibles para esa categoría.
    - Solo una categoría debe estar expandida a la vez (colapsa las otras automáticamente).
2. Tarjetas de Niveles

  - Cada categoría contiene 4 niveles (1 a 4).
  - Cada tarjeta de nivel incluye:
    - Número de ejercicios
    - Número de días sugeridos
    - Texto de zonas funcionales que varían según la categoría y el nivel
  - Al hacer clic en una tarjeta de nivel → el usuario navega a la Pantalla informativa (disclaimer antes de iniciar rutina).

## Comportamiento esperado

  - Vista inicial: todas las categorías están colapsadas.
  - Al dar clic en un chevron de categoría, se expande esa categoría mostrando sus niveles.
  - El usuario solo puede ver una categoría expandida a la vez.
  - Clic en nivel → lleva a la pantalla informativa (módulo 3).


## Elementos visuales clave
  - Chevron en la esquina superior derecha de la tarjeta.
  - Iconografía variable en los niveles (debe transmitir contexto según categoría).
  - Indicador visual claro de tarjeta expandida/colapsada.

## Posibles mejoras a futuro
  > ES PROPUESTA PERO, NO QUIERE DECIR QUE SE IMPLEMENTARÍA
  - Tooltip sobre los íconos para mayor comprensión.
  - Microanimaciones para abrir/cerrar categorías.
  - Filtrado o búsqueda por nombre de rutina (si se incrementan las categorías a futuro).

