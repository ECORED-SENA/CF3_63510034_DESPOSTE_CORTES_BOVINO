export default {
  global: {
    componenteFormativo:
      'Calidad cárnica, topografía y cortes básicos de la canal delantera',
    descripcionCurso:
      'El componente formativo aborda la calidad cárnica, los factores que la afectan (especie, raza, alimentación, edad, sexo y manejo), la composición química de la carne, análisis de peligros y puntos críticos de control en su procesamiento. También cubre la osteología bovina y describe los cortes principales de la canal delantera, tanto para mercados internos como internacionales, resaltando su importancia comercial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Factores que afectan la calidad de la carne',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Composición de la carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Componentes químicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Conceptos bioquímicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Calidad microbiológica',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de peligros y puntos críticos de control',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Osteología: estudio de los huesos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cortes primarios de la canal bovina',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63510034_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Factores que afectan la calidad de la carne',
      referencia:
        'Asocebu Colombia. (2020). Factores que afectan la calidad de la carne. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=_YdFTq2TLgA&ab_channel=AsocebuColombia',
    },
    {
      tema: 'Composición de la carne',
      referencia:
        'BM Editores. (2018). Carnes y Derivados. Composición y Propiedades.',
      tipo: 'Artículo',
      link:
        'https://bmeditores.mx/porcicultura/carnes-y-derivados-composicion-y-propiedades/',
    },
    {
      tema: 'Conceptos bioquímicos',
      referencia:
        'Andújar, G., Pérez, D., & Venegas, O. (2003). <i>Química y bioquímica de la carne y los productos cárnicos</i>. Libros sobre Ciencia y Tecnología de la Carne y Productos Cárnicos. ISBN 978-959-16-1059-1.',
      tipo: 'Documento',
      link:
        'https://www.researchgate.net/publication/322583249_Relacion_entre_las_caracteristicas_de_los_transportes_con_las_caracteristicas_nutricionales_de_la_carne_porcina_destinada_a_consumo_humano_en_el_Valle_de_Aburra_2017/fulltext/5a6145790f7e9b6b8fd3efb3/Relacion-entre-las-caracteristicas-de-los-transportes-con-las-caracteristicas-nutricionales-de-la-carne-porcina-destinada-a-consumo-humano-en-el-Valle-de-Aburra-2017.pdf',
    },
    {
      tema: 'Calidad microbiológica',
      referencia:
        'Jiménez Edeza, Maribel, Chaidez Quiroz, Cristóbal, & León Félix, Josefina. (2012). Calidad microbiológica de carne de res comercializada en el mercado municipal de Culiacán, Sinaloa. Veterinaria México, 43(4), 273-284.',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0301-50922012000400002&lng=es&tlng=es',
    },
    {
      tema: 'Osteología: estudio de los huesos',
      referencia:
        'Jordano Castillo (2021). Sistema Óseo Bovino. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=hcnz_7oTtkQ&ab_channel=JordanoCastillo',
    },
    {
      tema: 'Cortes primarios de la canal bovina',
      referencia:
        'Ecosistema de Recursos Educativos. (2018). Pasos para el desposte de una canal delantera bovina  [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Fc0-hgIVI58&t=2s',
    },
  ],
  glosario: [
    {
      termino: 'Calidad cárnica',
      significado:
        'conjunto de características que determinan la aceptabilidad de la carne, como color, terneza y jugosidad.',
    },
    {
      termino: 'Raza',
      significado:
        'clasificación genética de los bovinos que influye en la calidad de la carne producida.',
    },
    {
      termino: 'pH',
      significado:
        'medida de acidez o alcalinidad de la carne, que afecta su color y conservación.',
    },
    {
      termino: 'DFD (<i>Dark Firm Dry</i>)',
      significado:
        'carne oscura, firme y seca, producida por un ph elevado debido al estrés antes del sacrificio.',
    },
    {
      termino: 'PSE (<i>Pale Soft Exudative</i>)',
      significado:
        'carne pálida, blanda y exudativa, resultado de estrés en el animal y un pH bajo.',
    },
    {
      termino: 'Glucógeno',
      significado:
        'reserva de carbohidratos en el músculo, clave en la transformación de músculo a carne.',
    },
    {
      termino: 'Colágeno',
      significado:
        'proteína del tejido conectivo que afecta la terneza de la carne, aumentando con la edad del animal.',
    },
    {
      termino: 'Cortes primarios',
      significado:
        'principales secciones en las que se divide la canal bovina, como el cuarto delantero y trasero.',
    },
    {
      termino: 'HACCP',
      significado:
        'sistema de análisis de peligros y puntos críticos de control en la producción de alimentos.',
    },
    {
      termino: 'Osteología',
      significado:
        'estudio de los huesos del bovino, relevante para la identificación de cortes de carne.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ácido Hialurónico. (2018). <i>Elastina, qué es, para qué sirve, función y dónde se encuentra</i>. ',
      link: 'https://www.acidohialuronico.org/elastina-funcion-para-que-sirve/',
    },
    {
      referencia:
        'Agroinformación. (2014). <i>Autorizan el uso del logotipo Raza Autóctona a los criadores de la Raza Morucha Selecta</i>. ',
      link:
        'http://www.agroinformacion.com/autorizan-el-uso-del-logotipo-%C2%93raza-autoctona%C2%94-a-los-criadores-de-la-raza-morucha-selecta/',
    },
    {
      referencia:
        'Bavera, G. A. (2008). <i>Regiones del exterior del bovino</i>. ',
      link:
        'http://www.produccion-animal.com.ar/informacion_tecnica/exterior/01-regiones_del_exterior_del_bovino.pdf',
    },
    {
      referencia:
        'Castilla y León. (2014). <i>Suben los cereales, pero bajan el bovino de carne, los tostones y los lechones en la sesión del 12 de mayo de la Lonja de Salamanca</i>. ',
      link:
        'http://www.agronewscastillayleon.com/suben-los-cereales-pero-bajan-el-bovino-de-carne-los-tostones-y-los-lechones-en-la-sesion-del-12-de',
    },
    {
      referencia:
        'Castrillón, D. (2014). <i>Informe: Cuidados que usted debe tener con la carne que consume</i>. ',
      link:
        'https://www.contextoganadero.com/ganaderia-sostenible/informe-cuidados-que-usted-debe-tener-con-la-carne-que-consume',
    },
    {
      referencia: 'FAO. (2018). <i>Definición de criterio microbiológico</i>. ',
      link: 'http://www.fao.org/docrep/W6419S/w6419s0g.htm',
    },
    {
      referencia:
        'Fonseca, P. (2016). <i>Informe: Así funcionan los ciclos productivos de las ganaderías</i>. ',
      link:
        'https://www.contextoganadero.com/ganaderia-sostenible/informe-asi-funcionan-los-ciclos-productivos-de-las-ganaderias',
    },
    {
      referencia:
        'García, A. (2018). <i>La carne no es tan mala como la pintan</i>. ',
      link:
        'https://www.elmundo.es/vida-sana/bienestar/2018/03/18/5aabc304e5fdea8f538b463c.html',
    },
    {
      referencia:
        'König, H. E., & Liebich, H. G. (2015). <i>Anatomie der Haussäugetiere</i>. Schattauer. ',
      link: '',
    },
    {
      referencia: 'Lomiwes, D. (2018). <i>pH de la carne</i>. ',
      link:
        'https://www.researchgate.net/figure/The-colour-of-meat-at-various-pH-levels-MIRINZ-Food-Technology-and-Research-1999-With_fig1_45162721',
    },
    {
      referencia:
        'Lurueña, M. A. (2013, noviembre 15). <i>¿Por qué algunos filetes pierden tanta agua?</i> [Blog]. ',
      link:
        'http://www.gominolasdepetroleo.com/2013/11/por-que-algunos-filetes-pierden-tanta_15.html',
    },
    {
      referencia:
        'Madrigal, K. (2014). <i>País será sede de reunión mundial de productores de ganado Jersey</i>. ',
      link:
        'https://www.larepublica.net/noticia/pais-sera-sede-de-reunion-mundial-de-productores-de-ganado-jersey',
    },
    {
      referencia:
        'Monteiro, A. C. (2016). <i>Principales factores que afectan a la calidad de la carne bovina (II)</i>. ',
      link:
        'https://foroagroganadero.es/principales-factores-que-afectan-a-la-calidad-de-la-carne-bovina-ii/',
    },
    {
      referencia:
        'Peluffo, M., & Monteiro, M. (2002). <i>Terneza: Una característica a tener en cuenta</i>. ',
      link: 'http://www.ipcva.com.ar/vertext.php?id=125',
    },
    {
      referencia:
        'Quiroga, G. (2008). <i>Calidad y cortes de la canal bovina para el mercado interno y exigencias internacionales</i>. ',
      link: '',
    },
    {
      referencia:
        'Secretaría de Agricultura y Desarrollo Rural, Gobernación de Cundinamarca.',
      link: '',
    },
    {
      referencia:
        'Razas Bovinas de Colombia. (2018). <i>Raza Aberdeen Angus</i>. ',
      link: 'https://razasbovinasdecolombia.weebly.com/aberdeen-angus.html',
    },
    {
      referencia:
        'Secretariat for Agriculture, Livestock, Fisheries and Food. (s.f.). <i>Beef cuts</i>. ',
      link:
        'http://www.minagri.gob.ar/sitio/areas/bovinos/informacion_interes/informes/_archivos//000018_Nomencladores/000000-%20Presentaci%C3%B3n%20glosario%20de%20cortes%20bovinos,%20porcinos%20y%20ovinos.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA) en convenio con Super Inter Supermercados. (2014). <i>Pasos para el desposte de una canal delantera bovina</i>. Armenia: Autor. ',
      link: '',
    },
    {
      referencia:
        'Super Inter Supermercados. (2018). <i>Carne de res</i>. Cali: Autor.',
      link: '',
    },
    {
      referencia: 'Xunta de Galicia. (s.f.). <i>Rigidez</i>. ',
      link:
        'https://www.edu.xunta.es/espazoAbalar/sites/espazoAbalar/files/datos/1464947489/contido/52_rigidez.html',
    },
    {
      referencia:
        'Scoolinary. (2022). <i>Partes de la vaca: mejores cortes de vacuno</i>. ',
      link: 'https://blog.scoolinary.com/las-piezas-de-la-carne-de-vacuno',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Iván Cifuentes García',
          cargo: 'Experto temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López ',
          cargo: 'Locución ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
