<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .p-5
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Colombia ha transformado su cadena cárnica, especialmente en el consumo, lo cual se refleja en la presentación de los puntos de venta. Además, se han implementado cambios significativos en la calidad y evaluación microbiológica de la carne, adoptando resoluciones y decretos que exigen un cambio de mentalidad y la certificación en normas de buenas prácticas para garantizar la inocuidad del producto en el mercado.
              .row
                .col-md-3.bg-c2
                  .p-3.h-100
                    .row.align-items-center.h-100
                      .col-12
                        figure
                          img(src='@/assets/curso/intro/img1.svg', alt='', style="width: 110px").m-auto
                .col-md-9.bg-c3
                  .p-3
                    p.mb-0 Este esfuerzo no ha sido en vano, ya que el cambio cultural en los consumidores, quienes son clave para el éxito de estas iniciativas, se ha convertido en el factor más variable de la cadena, condicionando los productos a sus exigencias y necesidades.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img2.png', alt='', style="width: 450px").m-auto
          .row
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img3.png', alt='', style="width: 550px").m-auto
            .col-lg-7(data-aos="fade-left")
              p Por lo tanto, es fundamental seguir mejorando los estándares de calidad para ofrecer, día a día, un producto cárnico que cumpla con las expectativas del mercado, tanto a nivel nacional como internacional.
              figure
                img(src='@/assets/curso/intro/img2.svg', alt='', style="width: 250px")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
