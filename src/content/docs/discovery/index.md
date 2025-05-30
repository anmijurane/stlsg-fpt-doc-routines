---
title: Análisis Inicial
description: Proyecto rutinas interactivas
lastUpdated: 2025-05-24
prev: false
next:
  label: Historias de usuario | Vista general
  link: /user_stories/structure
---

El presente proyecto consiste en el desarrollo de una plataforma web para planet fitness, orientada a ofrecer a los usuarios una experiencia interactiva y personalizada en la visualización de rutinas de entrenamiento.

La plataforma permitirá a los clientes activos acceder a una biblioteca organizada por categorías (salud, ganancia muscular, quema de grasa y adaptación) y niveles de dificultad (del 1 al 4), con ejercicios detallados que incluyen repeticiones, series, partes del cuerpo involucradas e instructivos en video e imagen.


## Objetivo del Proyecto:
Brindar a los usuarios/socios de Planet Fitness que visualice las categorías de rutinas disponibles, así como los niveles disponibles (del 1 al 4) mostrando los ejercicios a realizar con ello poder hacer autónoma su estadía y sus ejercicios.


## Contexto
Actualmente los gimnasios y centros deportivos, se ha detectado una creciente necesidad de ofrecer experiencias digitales accesibles y motivadoras para los usuarios. Aunque los entrenadores presenciales siguen siendo un pilar importante, muchos usuarios buscan rutinas prácticas, visuales y adaptables que les permitan ejercitarse de forma autónoma dentro del mismo club.

El gimnasio donde se implementará este proyecto busca mejorar el acompañamiento de sus clientes sin requerir personal adicional ni sistemas complejos de login. El objetivo es ofrecer un sistema que brinde valor desde el primer uso y al mismo tiempo sirva como herramienta para entender mejor los intereses y hábitos de los usuarios.

## Problemas identificados

1. Falta de seguimiento a usuarios potenciales:
  - Actualmente no hay un registro claro de cuántas personas visitan el gimnasio ni de su comportamiento durante la visita.
2. Desconocimiento de las rutinas disponibles:
  - Muchos usuarios no conocen las rutinas propuestas por el club o no tienen acceso fácil a explicaciones detalladas.
3. Ausencia de guía visual para ejercicios:
  - La ejecución incorrecta de ejercicios por falta de orientación visual puede derivar en lesiones o frustración.
4. Sin retroalimentación sobre experiencia de uso:
  - No se cuenta con mecanismos para medir la experiencia del usuario ni para detectar las rutinas más útiles o populares.
5. Desaprovechamiento del tiempo de navegación en el club:
  - No se optimiza el tiempo del usuario en sala, ya que no hay una herramienta que lo acompañe de manera autónoma durante su rutina.
6. Falta de métricas para toma de decisiones:
  - La gerencia no cuenta con datos cuantificables sobre uso de rutinas, horarios de mayor actividad ni feedback emocional del usuario.

## Alcance
El sistema abarcará las siguientes funcionalidades clave:

1. Identificación de club:
  - Escaneo de un QR para identificar la ubicación del club.
  - Registro del acceso (club, fecha y hora).
2. Exploración de rutinas:
  - Visualización de rutinas categorizadas por objetivos: salud, ganancia muscular, quema de grasa y adaptación.
  - Clasificación por niveles (1 a 4).
3. Pantalla informativa:
  - Presentación de contenido informativo o promocional relevante para el usuario.
4. Visualización detallada de ejercicios:
  - Detalles por ejercicio: repeticiones, series, video de ejecución, imagen de referencia.
5. Marcado de progreso local (por sesión):
  - Capacidad de marcar qué ejercicios han sido realizados durante una sesión (no se guarda entre sesiones).
6. Módulo de retroalimentación:
  Captura de métricas como:
    - Número de accesos diarios.
    - Accesos por hora del día.
    - Tiempo promedio de navegación.
    - Secciones o rutinas más vistas.
    - Feedback con emojis (feliz, neutral, triste) y comentario opcional.
    - Registro de omisión del feedback (rechazo).
  - Presentación de feedback aleatoria del módulo tras cierto tiempo de navegación.

## Limitantes

1. Persistencia de progreso del usuario entre sesiones.
  - No habrá login ni base de datos para usuarios finales.
2. Personalización de rutinas.
  - Los usuarios no podrán modificar ni crear rutinas.
3. Panel de administración o métricas en tiempo real.
  - No se desarrollará una interfaz para el staff o analistas aún.
4. Integración con sistemas externos o plataformas deportivas.
  - Sin conexión con apps de salud, CRMs, ERPs o plataformas deportivas.
5. Compra de membresías o pagos en línea.
  - No se contempla e-commerce.
6. No esta diseñado para equipos de escritorio, se puede usar pero su visualización y funcionamiento será igual que para mobiles.

## Stakeholders Clave:

1. Usuarios Finales (Clientes del gimnasio)
2. Gerencia del gimnasio
3. Staff operativo del gimnasio (entrenadores y recepcionistas)
4. Equipo de desarrollo y diseño
5. Equipo de marketing
6. Socios comerciales o directivos

