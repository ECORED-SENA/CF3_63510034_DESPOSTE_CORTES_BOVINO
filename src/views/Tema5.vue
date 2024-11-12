<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Cortes primarios de la canal bovina
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c8
          p.mb-0 Los cortes primarios de la canal bovina representan las secciones principales en las que se divide el cuerpo del animal después del sacrificio.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img1.png', alt='', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 1.] Cortes primarios de la canal bovina
        .row
          .col-12
            .p-4.bg-c12.mb-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema5/img1.svg', alt='La figura presenta un diagrama de un bovino, señalando las distintas partes del animal que se utilizan en la industria cárnica.  Incluyendo zonas como la aguja, costillar, falda, lomo alto, pecho, cadera, babilla, entre otras.', style="width: 650px").m-auto
            figcaption(data-aos="fade-down")
              p.mb-0 Nota. Scoolinary. (2022)
    .row.mb-4
      .col-auto.bg-c10(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Cortes primarios de la canal del bovino para los mercados internos y externos
    p.mb-5(data-aos="fade-right") La media canal bovina, además de dividirse en cuartos, puede presentarse de distintas formas según el mercado de destino. En Colombia, generalmente se separa en cuartos delantero y trasero, mientras que algunos mercados internacionales pueden solicitar cortes específicos.
    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.color-acento-botones4(titulo="Pistola con siete costillas")
        .p-4
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 #[b Pistola con siete costillas]
              p.mb-0 Corresponde al cuarto posterior del corte colombiano sin la falda y las costillas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img2.png', alt='', style="width: 250px").m-auto
      .tarjeta.color-acento-botones4(titulo="Pistola con siete costillas<br>sin lagarto")
        .p-4
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 #[b Pistola con siete costillas sin lagarto]
              p.mb-0 Similar a la pistola con siete costillas, pero se retira el lagarto y se deja la tibia.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img3.png', alt='', style="width: 250px").m-auto
      .tarjeta.color-acento-botones4(titulo="Rueda con cadera")
        .p-4
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 #[b Rueda con cadera]
              p.mb-0 Parte del cuarto posterior, se retira la falda y la columna vertebral.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img4.png', alt='', style="width: 250px").m-auto
      .tarjeta.color-acento-botones4(titulo="Cuarto anterior de pistola o<br>con falda")
        .p-4
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 #[b Cuarto anterior de pistola o con falda]
              p.mb-0 Cuarto anterior resultante de retirar de la media canal un corte de pistola.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img5.png', alt='', style="width: 250px").m-auto
      .tarjeta.color-acento-botones4(titulo="Cuarto anterior con cinco o<br>seis costillas")
        .p-4
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 #[b Cuarto anterior con cinco o seis costillas]
              p.mb-0 Porción anterior de la media canal.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img6.png', alt='', style="width: 250px").m-auto
    .row.mb-4
      .col-auto.bg-c10(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
          .col
            h3.mb-0 Cortes del cuarto delantero de la canal bovina
    p.mb-5(data-aos="fade-right") Los cortes del cuarto delantero del bovino varían según el comprador. En Colombia, los cortes comerciales establecidos son:
    .row.bg-c7
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-right")
            .p-4.p-lg-5
              LineaTiempoC.color-acento-contenido(text-small)
                .row.justify-content-center(titulo="Sobrebarriga delgada")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Sobrebarriga delgada]
                    p.mb-0 Destinado culinario: sudar, rellenar.
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img7.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Sobrebarriga gruesa")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Sobrebarriga gruesa]
                    p.mb-0 Destinado culinario: sudar, freír, desmechar.
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img8.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Pecho")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Pecho]
                    p.mb-0 Destinado culinario: sudar, freír.
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img9.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Falda")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Falda]
                    p.mb-0 Destinado culinario: sudar, desmechar (carne destinada a sancocho).
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img10.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Punta de falda")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Punta de falda]
                    p.mb-0 Destinado culinario: sudar, asar, desmechar.
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img11.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Corbata (diafragma)")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Corbata (diafragma)]
                    p.mb-0 Destinado culinario: sudar, desmechar, moler.
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img12.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Lomo redondo")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Lomo redondo]
                    p.mb-0 Destinado culinario: asar, al carbón, a la plancha.
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img13.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Tapa de la nuca")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Tapa de la nuca]
                    p.mb-0 Destinado culinario: moler, sudar (una porción se vende como sobrebarriga gruesa).
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img14.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Cogote")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Cogote]
                    p.mb-0 Destinado culinario: sudar, moler (corte del cuello, carne dura).
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img15.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Morrillo")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Morrillo]
                    p.mb-0 Destinado culinario: sudar, moler (destinado al sancocho).
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img16.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Costilla")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Costilla]
                    p.mb-0 Destinado culinario: sudar, asar, a la plancha (corriente y especial).
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img17.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Bola negra")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Bola negra]
                    p.mb-0 Destinado culinario: asar, freír.
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img18.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Falso muchacho (sabaleta)")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Falso muchacho (sabaleta)]
                    p.mb-0 Destinado culinario: sudar, freír.
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img19.png', alt='', style="width: 250px").m-auto
                .row.justify-content-center(titulo="Lomo de brazo o lomo rayado (paletero)")
                  .col-10.col-lg-6.mb-4.mb-lg-0
                    p.mb-0 #[b Lomo de brazo o lomo rayado (paletero)]
                    p.mb-0 Destinado culinario: freír, asar.
                  .col-10.col-lg-4
                    figure
                      img(src='@/assets/curso/tema5/img20.png', alt='', style="width: 250px").m-auto
                    

</template>

<script>
export default {
  name: 'Tema5',
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
