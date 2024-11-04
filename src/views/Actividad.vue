<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los principales factores que influyen en la calidad cárnica, comprendan la composición química de la carne y reconozcan los cortes básicos de la canal delantera.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los factores que afecta la calidad de la carne?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La raza.', esCorrecta: true },
            { id: 'b', texto: 'Los tipos de huesos.', esCorrecta: false },
            { id: 'c', texto: 'La refrigeración.', esCorrecta: false },
            { id: 'd', texto: 'El color de los músculos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué porcentaje de proteínas miofibrilares está presente en la carne?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '20-30 %.', esCorrecta: false },
            { id: 'b', texto: '65-75 %.', esCorrecta: true },
            { id: 'c', texto: '50-60 %.', esCorrecta: false },
            { id: 'd', texto: '35-45 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué ocurre con el pH de la carne en situaciones de estrés?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El pH se vuelve alcalino.', esCorrecta: true },
            {
              id: 'b',
              texto: 'El pH aumenta por la glucólisis.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'El pH se mantiene estable.', esCorrecta: false },
            {
              id: 'd',
              texto: 'El pH disminuye a niveles ácidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el principal componente de los filamentos gruesos en las proteínas del músculo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Actina.', esCorrecta: false },
            { id: 'b', texto: 'Miosina.', esCorrecta: true },
            { id: 'c', texto: 'Reticulina.', esCorrecta: false },
            { id: 'd', texto: 'Elastina.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué tipo de hueso es el fémur?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hueso plano.', esCorrecta: false },
            { id: 'b', texto: 'Hueso irregular.', esCorrecta: false },
            { id: 'c', texto: 'Hueso largo.', esCorrecta: true },
            { id: 'd', texto: 'Hueso corto.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Dónde se acumula principalmente la grasa intramuscular?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dentro del músculo.', esCorrecta: true },
            { id: 'b', texto: 'En la cavidad torácica.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Entre el músculo y la piel.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'En los ligamentos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué tipo de carne se obtiene cuando el pH es mayor a 6.0?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Carne DFD.', esCorrecta: true },
            { id: 'b', texto: 'Carne tierna y jugosa.', esCorrecta: false },
            { id: 'c', texto: 'Carne PSE.', esCorrecta: false },
            { id: 'd', texto: 'Carne magra y seca.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cómo se denomina la acumulación de colágeno en los animales adultos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Más enlaces intermoleculares.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Menor cantidad de agua.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Mayor cantidad de glucógeno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de ácido láctico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El análisis de peligros y puntos críticos de control (HACCP) identifica y controla peligros microbiológicos, físicos y químicos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Las razas <i>Bos taurus</i> y <i>Bos indicus</i> no participan en la producción bovina de Colombia.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
