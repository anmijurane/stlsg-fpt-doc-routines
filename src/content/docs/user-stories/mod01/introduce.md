---
title: Introducción al Módulo 1
sidebar:
  order: 0
  label: Introducción
lastUpdated: 2025-05-22
prev: false
next:
  label: Módulo 1 | Historia 1
---

# Acceso e Identificación de Club

## Objectivo

Registrar el acceso del usuario a la plataforma, asociándolo con la ubicación (club/sucursal) desde la cual escaneó el código QR. No requiere autenticación ni interacción directa, pero permite contextualizar el uso y activar el seguimiento estadístico.

## Componentes funcionales

1. Código QR único por club

  - Cada sucursal del gimnasio genera un QR con un parámetro embebido (por ejemplo: ?club=oceania)
  - Este parámetro se detecta al cargar la página.

2. Identificación automática del club

  - Al ingresar a la plataforma, el sistema:
      - Extrae el parámetro club de la URL.
      - Guarda ese dato en una cookie o sessionStorage para mantenerlo durante la sesión.
      - Usa ese identificador para:
        - Asociar métricas de navegación (tiempo, accesos, retroalimentación, etc.)

3. Registro del acceso

  - Al cargar la plataforma:
    - Se registra un evento de acceso con:
      - Fecha y hora
      - Club origen (si está presente)
      - Identificador de sesión (por cookie, UUID, etc.)

## Comportamiento esperado

  - Usuario escanea un QR dentro de las instalaciones de Planet Fitness.
  - Se abre la URL: https://routines.planet-fitness.mx?club=oceania
  - El sistema registra el acceso y guarda el identificador.
  - Se redirige automáticamente al home (pantalla de exploración de rutinas).

## Elementos visuales clave
  - [NO APLICA] Este módulo no muestra pantalla, pero sí ejecuta lógica de inicio de sesión contextual.


## Posibles mejoras a futuro
  > ES PROPUESTA PERO, NO QUIERE DECIR QUE SE IMPLEMENTARÍA
  - Personalizar contenido según el club (colores, saludo, recomendación del día).
  - Agregar un “badge” visible con el nombre del club detectado.
  - Si se integra backend de usuarios, asociar feedback y progreso por ubicación.
