<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Composición de la carne
    p La carne está compuesta por tejido #[b muscular], #[b conjuntivo], #[b adiposo] y #[b nervioso]; estos tejidos se transforman en carne a través de procesos bioquímicos y físicos que ocurren después del sacrificio.
    .row.mb-5
      .col-lg-7.order-2.order-lg-1
        p Con la muerte del animal, se activa el proceso de #[b apoptosis] o #[b muerte celular]. Las reservas de #[b glucógeno presentes en el músculo] se utilizan para formar ácido láctico, lo que disminuye el pH debido a su acidez, iniciando así la conversión del músculo en carne.
        .row
          .col-12
            .p-3.bg-c8
              p.mb-0 Si el glucógeno muscular es insuficiente debido a situaciones de estrés, el #[b pH final] de la carne puede ser alcalino, superando un potencial de hidrogeniones de 6.0. En este caso, se estaría hablando de carne DFD (#[i Dark Firm Dry]) o DFDB (#[i Dark Firm Dry Beef]), por su traducción, "#[b Carne de Res Oscura, Firme y Seca.]"
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 450px").m-auto


</template>

<script>
export default {
  name: 'Tema2',
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
