<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Composición de la carne
    p(data-aos="fade-right") La carne está compuesta por tejido #[b muscular], #[b conjuntivo], #[b adiposo] y #[b nervioso]; estos tejidos se transforman en carne a través de procesos bioquímicos y físicos que ocurren después del sacrificio.
    .row.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Con la muerte del animal, se activa el proceso de #[b apoptosis] o #[b muerte celular]. Las reservas de #[b glucógeno presentes en el músculo] se utilizan para formar ácido láctico, lo que disminuye el pH debido a su acidez, iniciando así la conversión del músculo en carne.
        .row
          .col-12
            .p-3.bg-c8
              p.mb-0 Si el glucógeno muscular es insuficiente debido a situaciones de estrés, el #[b pH final] de la carne puede ser alcalino, superando un potencial de hidrogeniones de 6.0. En este caso, se estaría hablando de carne DFD (#[i Dark Firm Dry]) o DFDB (#[i Dark Firm Dry Beef]), por su traducción, "#[b Carne de Res Oscura, Firme y Seca.]"
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 450px").m-auto
    .row.bg-c9
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c10(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
                .col
                  h3.mb-0 El estrés
          p.mb-5(data-aos="fade-right") Durante el sacrificio, varios factores pueden afectar negativamente el producto final destinado al consumidor. El estrés pre-mortem en los animales puede provocar la liberación de grandes cantidades de adrenalina y un desgaste energético considerable. Las causas más comunes de estrés en bovinos de carne incluyen:
          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              .row
                .col-auto.d-none.d-lg-block.pe-0
                  figure
                    img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 410px").m-auto
                .col.bg-c2
                  .p-3
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #AA7B72")
                        |
                        p.mb-0 Largos trayectos desde la granja hasta la planta de sacrificio.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #AA7B72")
                        |
                        p.mb-0 Aumento del tiempo de espera para el sacrificio.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #AA7B72")
                        |
                        p.mb-0 Conflictos con animales más dominantes.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #AA7B72")
                        |
                        p.mb-0 Ruido excesivo en la zona de sacrificio.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #AA7B72")
                        |
                        p.mb-0 Si el grado de estrés es prolongado, puede producirse el síndrome #[i Pale Soft Exudative] (PSE), o Pálida, Suave y Exudativa.
          Separador
          #t_2_1
          .titulo-segundo.color-secundario
            h2 2.1 Componentes químicos
          p.mb-5(data-aos="fade-right") Los componentes químicos de la carne incluyen agua, proteínas, grasas y una pequeña cantidad de carbohidratos.
          .row.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-4
                .col-auto.bg-c10(data-aos="fade-left")
                  .row.align-items-center
                    .col-auto.px-0
                      figure
                        img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
                    .col
                      h3.mb-0 Agua
              p.mb-0 La cantidad de agua en la carne está directamente relacionada con el contenido de grasa y varía entre el 60 % y el 80 %. El agua contribuye a la jugosidad y a otros atributos como la textura, el color y la firmeza de la carne.
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img4.png', alt='', style="width: 450px").m-auto
          .row.mb-5
            .row.mb-4
              .col-auto.bg-c10(data-aos="fade-left")
                .row.align-items-center
                  .col-auto.px-0
                    figure
                      img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
                  .col
                    h3.mb-0 Proteínas
            p.mb-0(data-aos="fade-right") Las proteínas de la carne se dividen en tres grupos principales:
            p.mb-4(data-aos="fade-right") #[b Aquí tienes la tabla con la información solicitada:]
            .row
              .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/tema2/img5.png', alt='', style="width: 300px").m-auto
              .col-lg-9(data-aos="fade-left")
                AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                  .row(titulo="Proteínas miofibrilares")
                    .col-12
                      p.mb-0 Representan entre el 65 % y el 75 % de las proteínas del músculo. Las más importantes son la actina y la miosina.
                  .row(titulo="Proteínas sarcoplásmicas")
                    .col-12
                      p.mb-0 Constituyen alrededor del 30 % al 35 % de las proteínas en el citoplasma de la fibra muscular. La más importante es la mioglobina, que influye en el color de la carne.
                  .row(titulo="Proteínas del estroma")
                    .col-12
                      p.mb-0 Son las proteínas del tejido conectivo que forman las envolturas del tejido muscular (perimisio, endomisio y epimisio). La principal es el colágeno.
    .row.bg-c11.mb-5
      .col-12
        .px-5
          .row.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .row.mb-4
                .col-auto.bg-c10(data-aos="fade-left")
                  .row.align-items-center
                    .col-auto.px-0
                      figure
                        img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
                    .col
                      h3.mb-0 Elastina
              p.mb-0 Presente en el tejido conectivo, especialmente en ligamentos, vasos linfáticos y arterias. Es una proteína rica en glicina y muy insoluble.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img7.png', alt='', style="width: 450px").m-auto
          .row.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .row.mb-4
                .col-auto.bg-c10(data-aos="fade-left")
                  .row.align-items-center
                    .col-auto.px-0
                      figure
                        img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
                    .col
                      h3.mb-0 Reticulina
              p.mb-0  Estas fibras rodean los vasos linfáticos y, aunque se encuentran en cantidades mínimas, no son significativas desde el punto de vista bromatológico.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 450px").m-auto
          .row.mb-4
            .col-auto.bg-c10(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
                .col
                  h3.mb-0 Grasas
          p.mb-5(data-aos="fade-right")  El contenido de grasa en la carne varía considerablemente y depende de la proporción grasa-agua. La grasa acumulada en los bovinos se distribuye en cuatro zonas:
          .row.justify-content-center
            .col-lg-10(data-aos="fade-up")
              .p-4.p-lg-5.bg-c12
                .row.align-items-center
                  .col-lg-8.mb-3.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img9.png', alt='', style="width: 540px").m-auto
                  .col-lg-4
                    .row.mb-3
                      .col-12
                        .p-4.bg-c13
                          p.mb-0 #[b Cavidad corporal]
                          p.mb-0 Torácica, abdominal y pélvica.
                    .row.mb-3
                      .col-12
                        .p-4.bg-c13
                          p.mb-0 #[b Zona subcutánea]
                          p.mb-0 Entre la piel y el músculo.
                    .row.mb-3
                      .col-12
                        .p-4.bg-c13
                          p.mb-0 #[b Localización intramuscular]
                          p.mb-0 Entreverada dentro del músculo.
                    .row
                      .col-12
                        .p-4.bg-c13
                          p.mb-0 #[b Localización intermuscular]
                          p.mb-0 Entre las uniones musculares.
    p.mb-5(data-aos="fade-right") El principal factor que afecta la presencia y composición de la grasa es la especie. La raza, edad y sexo también influyen en la cantidad de grasa. Las hembras tienden a acumular más grasa debido a su condición, y los machos castrados presentan mayores depósitos de grasa. Factores extrínsecos, como la alimentación, también impactan la acumulación de grasa.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esto sucede porque la mayoría de las hormonas destinadas a la producción se originan a partir del colesterol. Al no haber producción hormonal debido a la pérdida de libido por la castración, la grasa se acumula en los depósitos.
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row.mb-4
          .col-auto.bg-c10(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 40px')
              .col
                h3.mb-0 Carbohidratos
        p.mb-0 Los carbohidratos representan menos del 1 % de la carne, siendo el glucógeno el más importante. Este polímero de alfa-D-glucosa con enlaces (alfa 1-4) y (alfa 1-6) es la fuente de energía del músculo. Parte del glucógeno se consume durante el rigor mortis.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img11.png', alt='', style="width: 450px").m-auto
    p.mb-5(data-aos="fade-right") #[b La cantidad de glucógeno depende de varios factores:]
    .row.justify-content-center.mb-5
      .col-10.col-md-7.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c14
          p #[b Factores intrínsecos]
          p.mb-0 Los équidos tienen más glucógeno que los cerdos, y estos a su vez más que los ovinos. Los animales jóvenes y aquellos con fibras musculares blancas poseen mayor cantidad de glucógeno.
      .col-10.col-md-7.col-lg-4(data-aos="fade-left")
        .p-4.bg-c15.h-100
          p #[b Factores extrínsecos]
          p.mb-0 La cantidad de glucógeno depende de si la dieta es rica en carbohidratos o no.
    p.mb-0(data-aos="fade-right") Además de carbohidratos, la carne contiene nitrógeno no proteico, taurina, carnosina, tiamina, piridoxina, cianocobalamina (vitaminas del complejo B), fosfato de creatina, ATP y minerales como zinc, hierro, cobre, fósforo, potasio, magnesio y selenio.
    Separador
    #t_2_2
    .titulo-segundo.color-secundario
      h2 2.2 Conceptos bioquímicos
    p.mb-5(data-aos="fade-right") Los conceptos bioquímicos relacionados con la carne incluyen:
    .row.justify-content-center
      .col-11.col-md-10.col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img12.png', alt='')
        .row
          .col-12
            .p-4.bg-c14
              p #[b Contracción muscular y rigidez cadavérica]
              p.mb-0 Se refiere a la conversión del músculo en carne. Este proceso implica la unión irreversible de las proteínas musculares actina y miosina, formando la actomiosina, lo que conocemos como rigor mortis.
      .col-11.col-md-10.col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img13.png', alt='')
        .row
          .col-12
            .p-4.bg-c15
              p #[b Glucólisis normal y anormal]
              p.mb-0 Este proceso depende del glucógeno muscular y ocurre después de la muerte del animal. Puede provocar la aparición de carnes DFD si no se lleva a cabo adecuadamente.
    Separador
    #t_2_3
    .titulo-segundo.color-secundario
      h2 2.3 Calidad microbiológica
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La carne, al contener un 75 % de agua, es un medio adecuado para el crecimiento de microorganismos. Es fundamental que la relación entre glucógeno y ácido láctico sea la correcta, ya que la acidez producida por el ácido láctico retrasa la proliferación de colonias microbianas, evitando cambios en la estructura, olor y la rancidez de la carne.
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Después de 3 o 4 días de almacenamiento en refrigeración (menos de 4 °C), la carne se vuelve más flácida debido a la "#[b resolución del rigor]", un proceso causado por la acción enzimática durante el periodo post-mortem que suaviza la carne.
        .row
          .col-12
            .p-4.bg-c8
              p.mb-0 El entorno puede influir en la contaminación de la carne, ya que los residuos de estiércol, orina y otros contaminantes del suelo pueden entrar en contacto con los animales.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img15.png', alt='', style="width: 450px").m-auto
    .row.bg-c7
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-right")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Utensilios]
                    p.mb-0 Cuchillos, chairas, pacoras y otros instrumentos utilizados en el desposte de la carne pueden ser fuentes de contaminación si no se limpian y desinfectan adecuadamente.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img16.png', alt='', style="width: 350px").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Microorganismos principales]
                    p.mb-0 La carne puede albergar bacterias Gram negativas (#[i Acinetobacter], #[i Aeromonas], #[i Pseudomonas]) y bacterias Gram positivas (#[i Staphylococcus], #[i Lactobacillus], #[i Micrococcus]), así como levaduras y hongos.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img18.png', alt='', style="width: 350px").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    p #[b Señales de deterioro]
                    p.mb-0 La carne en descomposición puede presentar olores anormales, cambios visibles en su estructura y decoloración. Puede albergar microorganismos patógenos como #[i Escherichia coli], #[i Listeria monocytogenes], #[i Salmonella typhimurium] y parásitos como #[i Taenia saginata].
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/img17.png', alt='', style="width: 350px").m-auto

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
