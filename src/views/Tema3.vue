<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Análisis de peligros y puntos críticos de control
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c8
          p.mb-0 En la industria alimentaria, es común encontrar situaciones críticas que pueden comprometer la seguridad del producto. El Análisis de Peligros y Puntos de Control Críticos (APPCC o HACCP, por sus siglas en inglés) es un método específico diseñado para identificar peligros microbiológicos, físicos o químicos a lo largo del proceso y establecer medidas preventivas.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='', style="width: 450px").m-auto
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      p.mb-0 #[b Tabla 1.] Análisis de peligros y puntos de control críticos
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-down")
      table
        thead
          tr
            th Etapa del proceso microbiológicos
            th Peligros encontrados físicos
            th Puntos de control químicos
            th Medidas preventivas
        tbody
          tr(style="background-color: #F3F9FF")
            td Oreado y refrigeración de la canal bovina.
            td Contaminación por agentes microbianos.
            td Temperaturas incorrectas.
            td Verificación y control de la temperatura en cámara de refrigeración. Control de ingreso de canales y tiempo de refrigeración.
          tr(style="background-color: #E7EEFD")
            td Transporte de la canal desde el cuarto frío a la sala de desposte.
            td Contaminación cruzada.
            td Cambio brusco de temperatura, manejo inadecuado de la canal.
            td Plan de mantenimiento de equipos de refrigeración.
          tr(style="background-color: #F3F9FF")
            td Recibo de canales en cuarto de desposte.
            td Mal manejo de canales, presencia de grasa de las poleas transportadoras.
            td 
            td Plan de mantenimiento de equipos de transporte, verificación de protocolos de buenas prácticas de manipulación.
          tr(style="background-color: #E7EEFD")
            td Banda de transporte.
            td Incremento de microorganismos.
            td Presencia de metal de cuchillos o de chairas, presencia de jabón por mal lavado.
            td Control del buen estado de las herramientas de trabajo, lavado y desinfección de instalaciones bajo lineamientos establecidos.
          tr(style="background-color: #F3F9FF")
            td Zona de empaque.
            td Presencia de cabellos del operario empacador.
            td Presencia de jabón por mal lavado.
            td Verificación del uso de cofias o mallas, supervisión de protocolos de desinfección.
    .row.bg-c17
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-right")
              .p-4.p-lg-5.bg-c14
                p.mb-5 Los peligros críticos incluyen agentes microbianos, mal manejo de temperaturas y una inadecuada manipulación. Las zonas críticas establecidas fueron:
                .row.justify-content-center
                  .col-10.col-md-6.col-lg-4
                    .p-4.bg-c16.mb-4.mb-lg-0
                      figure.mb-3
                        img(src='@/assets/curso/tema3/img1.svg', alt='', style="width: 120px").m-auto
                      p.mb-0.text-center Cámara de refrigeración
                  .col-10.col-md-6.col-lg-4
                    .p-4.bg-c16.mb-4.mb-lg-0
                      figure.mb-3
                        img(src='@/assets/curso/tema3/img2.svg', alt='', style="width: 120px").m-auto
                      p.mb-0.text-center Banda transportadora
                  .col-10.col-md-6.col-lg-4
                    .p-4.bg-c16
                      figure.mb-3
                        img(src='@/assets/curso/tema3/img3.svg', alt='', style="width: 120px").m-auto
                      p.mb-0.text-center Zona de empaque
          p.mb-5(data-aos="fade-right") El sistema #[b HACCP] debe seguir siete principios clave:
          .row
            .col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema3/img3.png', alt='', style="width: 450px").m-auto
            .col-lg-7(data-aos="fade-left")
              .p-4.bg-c3
                ol.lista-ol--cuadro
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 1
                    |
                    p.mb-0 Realizar un análisis de peligros e identificar las medidas preventivas.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 2
                    |
                    p.mb-0 Determinar los puntos críticos de control (PCC).
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 3
                    |
                    p.mb-0 Establecer límites críticos.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 4
                    |
                    p.mb-0 Implementar un sistema de monitoreo de los PCC.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 5
                    |
                    p.mb-0 Establecer acciones correctivas cuando un PCC no esté bajo control.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 6
                    |
                    p.mb-0 Verificar si el sistema HACCP está funcionando de manera adecuada.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 7
                    |
                    p.mb-0 Documentar todos los procedimientos y registros pertinentes.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
