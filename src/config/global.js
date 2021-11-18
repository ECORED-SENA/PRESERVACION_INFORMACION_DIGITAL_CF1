export default {
  global: {
    componenteFormativo: 'Generalidades información digital',
    descripcionCurso:
      'La información por ser un activo primordial en las organizaciones tiene gran importancia en el manejo del archivo y su digitalización, ayuda a mejorar los procesos, procedimientos internos y externos en cada una de las empresas y entidades. Es así como la información digital se convierte no solo en escanear y almacenar información, sino en aplicar procesos con técnicas según normativa que contribuya a mantener la información preservada y disponible para sus usuarios.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    fondoBannerInterno: require('@/assets/curso/0.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos básicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Bibliotecas digitales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Repositorios digitales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Objetos digitales',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de preservación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Barrueco, M. (s.f). Preservación y conservación de documentos digitales. ',
      link:
        'http://www.edaddeplata.org/docactos/pdf/educativa/manual/CAPITULO7.pdf ',
    },
    {
      referencia:
        'Bloguer.com. (2017). Herramientas tecnológicas para Historia. ',
      link:
        'http://herramientasparahistoria.blogspot.com/2017/01/repositorios-digitales.html ',
    },
    {
      referencia:
        'Candas, J. (2006). El papel de los metadatos en la preservación digital. ',
      link: 'http://eprints.rclis.org/8359/1/final.pdf ',
    },
    {
      referencia: 'Colonna, M. (2019). Repositorios digitales. Prezi.',
      link: 'https://prezi.com/p/2wncxn_eaqmv/repositorios-digitales/ ',
    },
    {
      referencia: 'Escobar, C. (2020). Preservación digital. Uah.',
      link: 'https://fen.uahurtado.cl/2020/articulos/preservacion-digital/ ',
    },
    {
      referencia: 'Evies, Y. (2017). Biblioteca digital. Issuu',
      link: 'https://issuu.com/yadirievies/docs/bibliotecas_digitales',
    },
    {
      referencia:
        'González, L. (2014). Técnicas de preservación digital. Biblipos.',
      link: 'https://www.bibliopos.es/tecnicas-de-preservacion-digital/',
    },
    {
      referencia: 'López, C. (2021). Objetos de aprendizaje.',
      link:
        'http://www.biblioweb.tic.unam.mx/libros/repositorios/objetos_aprendizaje.htm',
    },
    {
      referencia:
        'Lowerison, G. y Boyd, G. (2003). Learning objects in distance education: addressing issues of quality, learner control and accessibility. CADEACED Conference. ',
      link: '',
    },
    {
      referencia:
        'Villegas, A. (2021). Los objetos digitales de aprendizaje. E-historia. ',
      link:
        'http://www.e-historia.cl/e-historia/los-objetos-digitales-de-aprendizaje-odas-2/ ',
    },
  ],
  glosario: [
    {
      termino: 'Autenticidad',
      significado:
        'Es un adjetivo que califica a aquello que está documentado o certificado como verdadero o seguro.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Es la etapa última del proceso productivo. Es un actor vital para el desarrollo de la economía o proceso mercantil. Es el que adquiere el producto o servicio.',
    },
    {
      termino: 'Derechos de autor',
      significado:
        'Se utiliza para describir los derechos de los creadores sobre sus obras literarias y artísticas. ',
    },
    {
      termino: 'Estrategias',
      significado:
        'Son procedimientos dispuestos para la toma de decisiones y/o para accionar frente a un determinado escenario. ',
    },
    {
      termino: 'Evidencias',
      significado:
        'Son una muestra verificada y certera, obtenida en una investigación.',
    },
    {
      termino: 'Legibilidad',
      significado:
        'Es la facilidad con que se puede leer y comprender un texto. En un sentido más amplio es la aptitud de un texto de ser leído fácil y cómodamente, y esta aptitud hace referencia a elementos tipográficos, de presentación del escrito en la página, y también al estilo, a la claridad de la exposición, a la manera de escribir, al lenguaje.',
    },
    {
      termino: '<i>Marketing </i> digital',
      significado:
        'Es la aplicación de las estrategias de comercialización llevadas a cabo en los medios digitales.',
    },
    {
      termino: 'Modelo OASIS',
      significado:
        'Sistema de información de archivo abierto es una Norma ISO, desarrollada originalmente por el Consultative Committee for Space Data Systems (ccsds), que define los procesos necesarios para preservar y acceder a los objetos de información de forma efectiva y a largo plazo, y establece un lenguaje común que los describe.',
    },
    {
      termino: '<i>Open Source</i>',
      significado:
        'La expresión <i>Open Source</i> (o código abierto) hace referencia al <i>software</i> (OSS) que es un código diseñado de manera que sea accesible al público, en el que todos pueden ver, modificar y distribuir el código de la forma que consideren conveniente.',
    },
    {
      termino: 'Preservación',
      significado:
        'Es cuidar, amparar o defender algo con anticipación, con el objetivo de evitar un eventual perjuicio o deterioro. ',
    },
    {
      termino: 'Productor',
      significado:
        'Los productores son el sistema de apoyo para los artistas, las personas que conectan a los clientes con la visión, que ofrecen estructura al caos de la producción cinematográfica, los que mantienen toda la máquina funcionando sin problemas para que los conductores puedan conducir la película desde la imaginación hasta la realidad tangible.',
    },
    {
      termino: 'Registro',
      significado:
        'Es el espacio físico o virtual donde se deja constancia de un hecho o el acto de hacer lo mismo. Esto, con el fin de que terceras personas y las autoridades competentes estén informadas al respecto.',
    },
    {
      termino: 'Sistemas informáticos',
      significado:
        'Es un sistema que permite almacenar y procesar información; es el conjunto de partes interrelacionadas: <i>hardware, software</i> y personal informático.',
    },
    {
      termino: 'Técnicas',
      significado:
        'Se define la manera en que un conjunto de procedimientos, materiales o intelectuales es aplicado en una tarea específica, con base en el conocimiento de una ciencia o arte, para obtener un resultado determinado.',
    },
  ],
  complementario: [
    {
      texto:
        'Astrid, B. (2020). Bibliotecas virtuales y digitales [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NgJ6Gb79PxI',
    },
    {
      texto:
        'Botel, J. (2017). ¿Qué es un repositorio digital? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u9lyFwpDTb0',
    },
    {
      texto:
        'Dina, I. (2014). Fundamentos de la preservación digital. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=D8mEBZAg_7s',
    },
    {
      texto:
        'Dina, I. (2014). Estrategias técnicas de preservación digital. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o3znbolaYeQ&t=4s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto temático ',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
