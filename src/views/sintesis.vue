<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta  los aspectos relacionados con la calidad cárnica, la topografía y los cortes básicos de la canal delantera. Se destacan los factores que afectan la calidad de la carne, como las especies, razas, alimentación, edad, sexo y zona anatómica. También se aborda la composición química de la carne y el análisis de puntos críticos de control, incluyendo el estrés y la calidad microbiológica. Además, se detalla el estudio de los huesos con la clasificación del esqueleto en axial, apendicular y espilacráneo. Por último, se enumeran los cortes primarios colombianos y los cortes del cuarto delantero de la canal bovina, como sobrerrebrija, pecho, falda, costilla y morillo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
