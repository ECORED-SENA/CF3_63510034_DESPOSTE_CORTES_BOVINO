<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Factores que afectan la calidad de la carne
    .row.bg-c4
      .col-12
        .px-5
          p.mb-5(data-aos="fade-right") La calidad de la carne puede clasificarse en dos grandes categorías según la percepción del cliente:
          .row.justify-content-center.mb-3
            .col-lg-10(data-aos="fade-down")
              .row
                .col-auto.d-none.d-lg-block.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 280px").m-auto
                .col.bg-c5
                  .p-3
                    p.mb-0 En primer lugar, el comprador se guía por el color del músculo y la grasa. Un tono muscular pálido o una grasa amarillenta generan menos confianza en comparación con una carne de color rojo y grasa blanca.
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-left")
              .row
                .col-auto.d-none.d-lg-block.pe-0
                  figure
                    img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 280px").m-auto
                .col.bg-c6
                  .p-3
                    p.mb-0 En segundo lugar, el consumidor valora características como la terneza y jugosidad del producto cárnico.
          p.mb-5(data-aos="fade-right") La calidad de la carne está influenciada por diversos factores, tanto internos como externos, que incluyen el manejo y almacenamiento. Los factores principales que determinan el grado de calidad son: especie, raza, alimentación, edad, sexo y zona anatómica.
    .row.bg-c7
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-down")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Especie y raza]
                    p.mb-0 Los bovinos se dividen en dos especies, Bos taurus y Bos indicus, ambas presentes en la población bovina de Colombia. Las razas de Bos taurus, como Aberdeen Angus, destacan por ofrecer una calidad cárnica superior.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img5.png', alt='', style="width: 350px").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Alimentación]
                    p.mb-0 Genera carnes más pálidas debido a la mayor concentración de grasa entreverada, lo cual puede influir en la preferencia del consumidor final.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='', style="width: 350px").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Edad]
                    p.mb-0 La edad de los bovinos influye en la calidad de la carne. Animales entre dos y tres años son más valorados que los mayores de cuatro años, ya que su carne es más tierna y jugosa.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img7.png', alt='', style="width: 350px").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Sexo]
                    p.mb-0 Las canales de machos suelen ser de mejor calidad que las de hembras. A igualdad de condiciones, las hembras no alcanzan el peso de los machos, resultando en canales más ligeras.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img8.png', alt='', style="width: 350px").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Zona anatómica]
                    p.mb-0 La terneza de la carne varía según la zona anatómica. Los lomos y músculos superiores de la pierna son más tiernos que los músculos de la nuca, debido a menor movimiento.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img9.png', alt='', style="width: 350px").m-auto
      
</template>

<script>
export default {
  name: 'Tema1',
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
