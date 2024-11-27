<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Osteología: estudio de los huesos
    .row.mb-5
      .col-12(data-aos="fade-right")
        .p-4.bg-c8
          p.mb-0 El aparato locomotor es un sistema orgánico complejo cuya función central es realizar un trabajo mecánico. Se compone principalmente de huesos y músculos, que dan forma y estructura al cuerpo, permitiendo la locomoción. También incluye cartílagos, ligamentos y articulaciones.
    p.mb-5(data-aos="fade-right") #[b Los tipos de esqueleto son:]
    .row.justify-content-center.mb-5
      .col-auto(data-aos="fade-down")
        .p-4.p-lg-5.bg-c18
          ImagenInfografica.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema4/img1.png', alt='', style="width: 750px").m-auto
            .tarjeta.color-acento-botones1(x="95%" y="28.4%" numero="+")
              .p-3
                p.mb-0 #[b Esqueleto esplácnico]
                p.mb-0 Compuesto por el hueso del corazón en bovinos de avanzada edad, como los bueyes.
            .tarjeta.color-acento-botones2(x="29.6%" y="77.3%" numero="+")
              .p-3
                p.mb-0 #[b Esqueleto apendicular]
                p.mb-0 Formado por los huesos de los miembros anteriores y posteriores.
            .tarjeta.color-acento-botones3(x="5.6%" y="45%" numero="+")
              .p-3
                p.mb-0 #[b Esqueleto axial]
                p.mb-0 Comprende el cráneo, columna vertebral, costillas y esternón.
    .row.mb-4
      .col-auto.bg-c10(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Osteología básica bovina
    p.mb-5(data-aos="fade-right") La mayoría de las regiones del cuerpo del animal están determinadas por los huesos. Para hacer referencia a una zona específica, se debe recurrir a la anatomía topográfica.
    .row.mb-4
      .col-auto.bg-c10(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Clasificación de los huesos
    p.mb-4(data-aos="fade-right") Los huesos se clasifican de acuerdo con su tamaño y forma en:
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WTvR67GQ5_0?si=cUaai0h7oRmHwcR_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema4',
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
