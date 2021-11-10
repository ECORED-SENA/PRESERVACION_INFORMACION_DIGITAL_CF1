<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Generalidades
    p.mb-5 Conozca algunas generalidades sobre la información digital.
    SlyderB.mb-5(:datos="datosSlyder")
    #t_1_1.titulo-segundo.color-secundario(data-aos="fade-right")
      h2 1.1 Conceptos básicos  
    p.mb-5 En esta sección se expondrán conceptos que son relevantes a la hora de comprender las diferentes técnicas estandarizadas en la preservación de la información digital.
    h3(data-aos="fade-right") Aplicación de las técnicas de preservación de la información digital.
    p.mb-5 A continuación, se presenta las diferentes técnicas para tener en cuenta en la preservación digital: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    p.mb-5 Actualmente, existen diferentes tipos de documentos y formatos digitales, los cuales se presentan en la siguiente figura:
    .titulo-sexto.color-secundario
      h5.fw-normal
        b Figura 1 
        | Documentos y formatos digitales
    figure.mb-5(data-aos="zoom-in-up")
      img(src="@/assets/curso/7.svg" alt="Figura 1")
    h3(data-aos="fade-right") Componentes del documento digital.
    p.mb-5 Un documento digital creado por un sistema informático consta de diferentes partes como:  
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3
        .tarjeta-avatar-b.mb-5.h-100.hover
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/8.svg' alt='AvatarTop')
          .tarjeta.color-primario.d-flex.align-items-center
            .p-4
              h5.mb-0 El contenido o tema que se refiere a de qué trata el documento.
      .col-lg-4.mb-3
        .tarjeta-avatar-b.mb-5.h-100.hover
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/9.svg' alt='AvatarTop')
          .tarjeta.color-primario.d-flex.align-items-center
            .p-4
              h5.mb-0 La estructura se refiere a la relación entre formatos y sus curso/8
      .col-lg-4.mb-3
        .tarjeta-avatar-b.mb-5.h-100.hover
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/10.svg' alt='AvatarTop')
          .tarjeta.color-primario.d-flex.align-items-center
            .p-4
              h5.mb-0 Fecha de creación y creadores del documento. 
      .col-lg-4.mb-3
        .tarjeta-avatar-b.mb-5.h-100.hover
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/11.svg' alt='AvatarTop')
          .tarjeta.color-primario.d-flex.align-items-center
            .p-4
              h5.mb-0 Los metadatos son los datos que describen el contexto.
      .col-lg-4.mb-3
        .tarjeta-avatar-b.mb-5.h-100.hover
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/12.svg' alt='AvatarTop')
          .tarjeta.color-primario.d-flex.align-items-center
            .p-4
              h5.mb-0 Su gestión a lo largo del tiempo. 
    p.mb-5 Ahora, la preservación digital abarca tres tipos de objetos digitales, como se muestra en la siguiente figura.
    .titulo-sexto.color-secundario
      h5.fw-normal
        b Figura 2 
        | Objetos digitales
    .row.mb-5.justify-content-center
      .col-lg-11
        figure.mb-5(data-aos="zoom-in-up")
          img(src="@/assets/curso/13.svg" alt="Figura 2")
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p <b>La recolección de datos y/o información de los usuarios</b> (clientes) es primordial para casi cualquier estrategia de marketing. Sin data, se está comercializando a ciegas, simplemente con un falso objetivo de llegar al público objetivo. Muchas empresas recopilan datos digitalmente, pero no están ni segmentados, ni caracterizados. 
          br
          br
          |Por lo anterior, los programas de preservación digital deben tratar los objetos digitales en cuatro niveles expuestos en la siguiente figura.
      .col-lg-5(data-aos="fade-left"): img(src="@/assets/curso/14.png" alt="Figura 3")
    .titulo-sexto.color-secundario
      h5.fw-normal
        b Figura 3 
        | 
    figure.mb-5(data-aos="zoom-in-up")
      img(src="@/assets/curso/15.svg" alt="Figura 3")
    p.mb-5 Además, estos recursos pueden tener elementos de acompañamiento como:
    .row.mb-5
      .col-lg-3
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.h-100(style='min-height: 295px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/16.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h4.text-center Multimedia
      .col-lg-3
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor.h-100(style='min-height: 295px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/17.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h4.text-center Dinámicos
      .col-lg-3
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor.h-100(style='min-height: 295px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/18.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h4.text-center Enlaces de hipertexto 
      .col-lg-3
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor.h-100(style='min-height: 295px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/19.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h4.text-center Aplicaciones interactivas
    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.bg__rojo-claro.p-4.mb-4(data-aos="zoom-in-up")
          p Hay que tener en cuenta que pueden estar disponibles varias propuestas de preservación digital, pero no todas, son ideales para cada tipo de negocio, organización o entidad. Por ello, es importante conocer la necesidad para así saber qué propuesta es idónea. 
    p.mb-5 A continuación, se exponen algunas propuesta digitales:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg__morado-claro ")
      .row(titulo="Conservación")
        .col-md-4
          figure
            img(src='@/assets/curso/20.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Se trata de la gestión de documentos digitales para preservar tanto el contenido como la apariencia de los mismos.

      .row(titulo="Copias de seguridad")
        .col-md-4
          figure
            img(src='@/assets/curso/21.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es el proceso de hacer duplicados exactos del objeto digital. Este es un componente esencial de todas las estrategias de preservación, pero a su vez, las copias de seguridad no son una técnica de mantenimiento a largo plazo, ya que se ocupa exclusivamente de la pérdida de datos.
      .row(titulo="Actualización")
        .col-md-4
          figure
            img(src='@/assets/curso/22.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Hace referencia a la copia de información digital de soportes almacenados a largo plazo a otro del mismo tipo, sin ningún cambio en los documentos.
      .row(titulo="Metadatos")
        .col-md-4
          figure
            img(src='@/assets/curso/23.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Sirven para suministrar información sobre los datos producidos. Los metadatos agregan información que caracteriza los datos, describen el contenido, calidad, condiciones, trazabilidad, disponibilidad y otras características de los datos.
      .row(titulo="Preservación de la tecnología")
        .col-md-4
          figure
            img(src='@/assets/curso/24.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Se basa en la preservación del entorno técnico que hace funcionar el sistema, incluyendo sistemas operativos, software de aplicaciones, controladores de medios, etc.
      .row(titulo="Migración y almacenamiento")
        .col-md-4
          figure
            img(src='@/assets/curso/25.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es la es utilizada para copiar o convertir datos desde una tecnología a otra, conservando las características esenciales de los datos y, el almacenamiento es tratado como un estado pasivo en el ciclo de vida, pero sus soportes de formatos y almacenamiento van cambiando.
      .row(titulo="Estándares y emulación")
        .col-md-4
          figure
            img(src='@/assets/curso/26.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p En esta se busca la forma de codificar y formatear los objetos digitales adhiriéndose a estándares reconocidos y favoreciéndolos en lugar de los más esotéricos y menos soportados y, la emulación encapsula el comportamiento del software junto con el objeto digital del mismo, utiliza alternativas en la emulación de documento a documento, es la creación de un registro que identifique unívocamente entornos de hardware y software.
    p.mb-5 La recopilación de datos es valiosa porque puede usarla para tomar decisiones informadas. Cuantos más datos relevantes y de alta calidad tenga, más probabilidades tendrá de tomar buenas decisiones en lo que respecta al marketing, las ventas, el servicio al cliente, el desarrollo de productos y muchas otras áreas de su negocio.
      br
      br
      |Algunos usos específicos de los datos del cliente incluyen los siguientes:
    .row.mb-5
      .col-lg-3.mb-3
        .tarjeta-avatar.hover--imageUp
          img(src='@/assets/curso/27.svg' alt='AvatarTop' style='width: 120px')
          .tarjeta.color-acento-contenido.w-100.h-100
            .p-4
              h5.text-center Mejora la compresión de su audiencia.
              
      .col-lg-3.mb-3
        .tarjeta-avatar.hover--imageUp
          img(src='@/assets/curso/28.svg' alt='AvatarTop' style='width: 120px')
          .tarjeta.color-primario.w-100.h-100
            .p-4
              h5.text-center Identifica áreas de mejora o expansión.  
              
      .col-lg-3.mb-3
        .tarjeta-avatar.hover--imageUp
          img(src='@/assets/curso/29.svg' alt='AvatarTop' style='width: 120px')
          .tarjeta.color-acento-contenido.w-100.h-100
            .p-4
              h5.text-center Predice factores futuros. 
              
      .col-lg-3.mb-3
        .tarjeta-avatar.hover--imageUp
          img(src='@/assets/curso/30.svg' alt='AvatarTop' style='width: 120px')
          .tarjeta.color-primario.w-100.h-100
            .p-4
              h5.text-center Mejora la personalización de su contenido y la mensajería.
    #t_1_2.titulo-segundo.color-secundario(data-aos="fade-right")
      h2 1.2 Bibliotecas digitales 
    .row.mb-5
      .col-lg-5.mb-3(data-aos="fade-right"): img(src='@/assets/curso/31.png')
      .col-lg-7(data-aos="fade-left")
        p.mt-lg-3 Son un espacio virtual de conocimiento, que les facilita a los estudiantes y profesionales tener información a su alcance de una manera instantánea. Este espacio ofrece archivos digitales ya sean libros, audios, audiolibros, videos e imágenes. En esta biblioteca se puede decir que se hace una colección de objetos digitales que sirven a comunidades definidas y cuyos derechos de autor están presentes y administrados, contando con mecanismos de almacenamiento y preservación.
    .row.mb-5.justify-content-center
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/32.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cuando se trata de bibliotecas digitales se debe tener en cuenta el acceso a las fuentes de información vinculadas, y que los usuarios puedan acceder a ellas sin importar el lugar donde se encuentren, algunos de los recursos que componen una biblioteca virtual son los siguientes:
    .contenedor-tarjetas-flip.d-flex.justify-content-center.flex-wrap.mb-5
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1(@mouseover="indicadorTarjetaFlip = false")
        .indicador--hover(v-if="indicadorTarjetaFlip")
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/33.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.mb-0 Libros     
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/34.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.mb-0 Periódicos     
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/35.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.mb-0 Revistas   
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/36.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.mb-0 Manuscritos    
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/37.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.text-center.mb-0 Archivos de sonido    
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/38.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.mb-0 Cartas    
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/39.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.mb-0 Dibujos  
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/40.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.mb-0 Mapas    
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/41.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.mb-0  Documentos    
      .tarjeta.tarjeta-flip.color-primario.mb-3.mx-1
        .tarjeta-flip__contenedor(style='width:229px' )
          .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/42.jpg')})`}")
          .tarjeta-flip__contenido.d-flex.align-items-center.justify-content-center(style='height: 190px').p-4.p-xl-5
            h5.mb-0  Entre otros  
    .row.mb-5
      .col-lg-5.mb-3(data-aos='fade-right'): img(src='@/assets/curso/43.svg')
      .col-lg-7(data-aos='fade-left')
        p.mt-lg-3 Las bibliotecas digitales se componen de tres características principales que ayudan a promover la digitalización del acceso y protección del patrimonio cultural y científico, otorgando derechos de acceso a los usuarios, además crea interoperabilidad entre sistemas, promoviendo la promoción de estándares comunes y mejores prácticas, sensibilizando sobre las necesidades y asegurando la accesibilidad permanente de los materiales digitales.
    p.mb-5 Es así como las características principales de la biblioteca digital son:
    .row
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.bg__rojo-claro2.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/44.png', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/45.png', alt='Texto que describa la imagen' )
          p Ser una colección global de recursos importantes para la investigación, la enseñanza y el aprendizaje.
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.bg__rojo-claro2.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/46.png', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/47.png', alt='Texto que describa la imagen' )
          p Ser de fácil acceso para todo tipo de usuarios, tanto principiantes como expertos.
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.bg__rojo-claro2.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/48.png', alt='Texto que describa la imagen' )
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/49.png', alt='Texto que describa la imagen' )
          p Está gestionada por profesionales que se consideren administradores del patrimonio intelectual y cultural.
    .row.mb-3.px-5.justify-content-start(data-aos='fade-right')
      .col-lg-7
        .cajon.color-primario.bg__azul-claro.p-4.mb-4
          p.fw-bold.px-3.mb-0 Los derechos de autor y la legislación sobre la propiedad intelectual, porque aquí se desarrolla la creación y protección de una biblioteca digital siendo la mayor dificultad para su respectivo progreso.
    .row.mb-5.px-5.justify-content-end(data-aos='fade-left')
      .col-lg-7
        .cajon.color-primario.bg__azul-claro.p-4.mb-4
          p.px-5.fw-bold.mb-0 Los metadatos, los cuales tienen una gran importancia, porque facilitan la búsqueda y recuperación de la información siendo efectivos y precisos.
    h3(data-aos="fade-right") Objetivos de las bibliotecas digitales.
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg__naranja-claro.p-4.mb-3.d-flex.align-items-center.justify-content-end.position-relative(style='margin-top: 60px')
          img.position-absolute.d-none.d-lg-block.d-md-block.d-sm-block(src='@/assets/curso/50.svg', alt='Texto que describa la imagen' style='width:136px; left:5%;  bottom: 0px' )
          .col-lg-9.col-md-8.col-sm-7.col-12
            h5 El objetivo principal es:

            p.mb-0 Suministrar un acceso directo a recursos informativos, digitales y no digitales, estructurados y confiables, para poder articularlos a las tecnologías de la información en las bibliotecas actuales.
    h4(data-aos="fade-right") Otros objetivos son:      
    TabsA.color-secundario.mb-5
      .tarjeta.pestanas.p-4(titulo="Fomentar la digitalización")
        .row
          .col-lg-4: img(src='@/assets/curso/51.svg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Fomentar la digitalización 
            p el acceso para la permanencia del patrimonio cultural y científico.
      .tarjeta.pestanas.p-4(titulo="Dar acceso a todos los usuarios")
        .row
          .col-lg-4: img(src='@/assets/curso/52.svg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Dar acceso a todos los usuarios
            p a los recursos recopilados por las bibliotecas, respetando los derechos intelectuales.
      .tarjeta.pestanas.p-4(titulo="Crear sistemas interoperables")
        .row
          .col-lg-4: img(src='@/assets/curso/53.svg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Crear sistemas interoperables
            p para bibliotecas digitales promoviendo estándares abiertos y de libre acceso.
      .tarjeta.pestanas.p-4(titulo="Estándares")
        .row
          .col-lg-4: img(src='@/assets/curso/54.svg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Estándares
            p fomentar el papel esencial de las bibliotecas y organizaciones de información en la promoción de estándares y prácticas comunes.
      .tarjeta.pestanas.p-4(titulo="Accesibilidad")
        .row
          .col-lg-4: img(src='@/assets/curso/55.svg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Accesibilidad
            p sensibilizar sobre la necesidad imperativa de garantizar la accesibilidad permanente del material digital.
      .tarjeta.pestanas.p-4(titulo="Redes")
        .row
          .col-lg-4: img(src='@/assets/curso/56.svg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Redes
            p vincular las bibliotecas digitales a redes de investigación y desarrollo de alta velocidad.
      .tarjeta.pestanas.p-4(titulo="Difusión")
        .row
          .col-lg-4: img(src='@/assets/curso/57.svg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Difusión
            p aprovechar la creciente convergencia de roles e instituciones para crear y difundir contenido.
    h3(data-aos="fade-right")  Ventajas y desventajas. 
    p.mb-5 En la figura que está a continuación, se describen algunas de las ventajas y desventajas de las bibliotecas digitales.
    .titulo-sexto.color-secundario
      h5.fw-normal
        b Figura 4 
        | Ventajas y desventajas
    .row.mb-5.justify-content-center
      .col-lg-6.mb-3
        .tarjeta.color-acento-contenido.rounded-0.p-4.text-white.hover.h-100
          .contenedor-titulo.d-flex.align-items-center.mb-3
            img(src='@/assets/curso/58.svg', alt='Texto que describa la imagen' style='width: 107px' ).me-3
            h4.text-white.mb-0 Ventajas
          ul.lista-ul
            li 
              i.correct
              | Su accesibilidad son las 24/7, 24 horas de los 7 días de la semana. 
            li 
              i.correct
              | Sus costos no son tan altos y en su mayoría son gratuitas. 
            li 
              i.correct
              | Todo el material se puede adquirir sin infringir los derechos de autor.
            li 
              i.correct
              | Tienen metabuscadores que facilitan encontrar lo requerido. 
            li 
              i.correct
              | Se encuentran en la red de Internet, facilitando ser accesadas desde cualquier punto del planeta.
      .col-lg-6.mb-3
        .tarjeta.color-secundario.rounded-0.p-4.text-white.hover.h-100
          .contenedor-titulo.d-flex.align-items-center.mb-3
            img(src='@/assets/curso/59.svg', alt='Texto que describa la imagen' style='width: 107px' ).me-3
            h4.text-white.mb-0 Desventajas
          ul.lista-ul
            li 
              i.incorrect
              | No siempre su veracidad está garantizada, por ello verificar siempre que la fuente sea verídica. 
            li 
              i.incorrect
              | Aún persiste la preferencia por la lectura desde el medio impreso y no digital.
            li 
              i.incorrect
              | Requiere de altos sistemas de software, que garanticen su respaldo y seguridad, de lo contrario puede ser vulnerada o alterada la información.
    p.mb-5 A continuación, se comparten algunas bibliotecas digitales de gran reconocimiento a nivel mundial:
    .contenedor-tarjetas.d-flex.flex-wrap.justify-content-center.mb-3
      .tarjeta.p-3.color-primario.hover--bg(style='width: 229px; height: 450px').mx-1.mb-3
        h4.text-center Biblioteca 
          br
          | Digital Mundial
        .tarjeta-blanca.bg-white.p-3.text-center(style='height: 350px')
          figure(style='width: 100%; height: 110px')
            img(src='@/assets/curso/60.svg', alt='Texto que describa la imagen' style='width: 80px' ).m-auto.mb-3
          p Cuenta con el apoyo de Naciones Unidas. Se encuentran todo tipo de libros históricos, artículos y mapas de todos los países.
      .tarjeta.p-3.color-primario.hover--bg(style='width: 229px; height: 450px').mx-1.mb-3
        h4.text-center Biblioteca 
          br
          | Digital Europea
        .tarjeta-blanca.bg-white.p-3.text-center(style='height: 350px')
          figure(style='width: 100%; height: 110px')
            img(src='@/assets/curso/61.svg', alt='Texto que describa la imagen' style='width: 190px' ).m-auto.mb-3
          p Trata de ideas y de inspiración con enlaces a 2 millones de objetos digitales.
      .tarjeta.p-3.color-primario.hover--bg(style='width: 229px; height: 450px').mx-1.mb-3
        h4.text-center Biblioteca 
          br
          | Digital Hispánica
        .tarjeta-blanca.bg-white.p-3.text-center(style='height: 350px')
          figure(style='width: 100%; height: 110px')
            img(src='@/assets/curso/62.svg', alt='Texto que describa la imagen' style='width: 70px' ).m-auto.mb-3
          p Biblioteca Nacional de España: acceso libre a más de 10.000 obras de la Biblioteca Nacional .
      .tarjeta.p-3.color-primario.hover--bg(style='width: 229px; height: 450px').mx-1.mb-3
        h4.text-center Digital Hispánica
          br
          | Miguel de Cervantes
        .tarjeta-blanca.bg-white.p-3.text-center(style='height: 350px')
          figure(style='width: 100%; height: 110px')
            img(src='@/assets/curso/63.svg', alt='Texto que describa la imagen' style='width: 80px' ).m-auto.mb-3
          p Es la primera en lengua castellana, es un fondo bibliográfico con obras de literatura, historia, ciencias, etc., es de libre acceso.
      .tarjeta.p-3.color-primario.hover--bg(style='width: 229px; height: 450px').mx-1.mb-3
        h4.text-center Ciberoteca
        br
        .tarjeta-blanca.bg-white.p-3.text-center(style='height: 350px')
          p 
            b La biblioteca virtual más grande del mundo: 
            | desde la ciberoteca tendrá acceso gratuito a miles de textos literarios, científicos y técnicos, y a cientos de bibliotecas virtuales en el mundo. 
    #t_1_3.titulo-segundo.color-secundario(data-aos="fade-right")
      h2 1.3 Repositorios digitales
    .row.mb-5
      .col-lg-5(data-aos="fade-right"): img(src='@/assets/curso/64.png')
      .col-lg-7(data-aos="fade-left")
        p.mt-lg-3 Es una plataforma con información científica de empresas o instituciones, concentrada en una base de datos. Se pueden archivar documentos acordes a su direccionamiento, ya sean tesis, trabajos de grado expuestos en congresos o documentos institucionales.
    .row.mb-5
      .col-lg-3
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.h-100(style='min-height: 208px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/65.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h4.text-center Hardware
      .col-lg-3
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor.h-100(style='min-height: 208px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/66.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h4.text-center Software
      .col-lg-3
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor.h-100(style='min-height: 208px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/67.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h4.text-center Data
      .col-lg-3
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor.h-100(style='min-height: 208px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/68.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center.justify-content-center
              h4.text-center Procedimientos
    p.mb-5 En la siguiente figura, se presentan las principales características de un repositorio digital:
    .titulo-sexto.color-secundario
      h5.fw-normal
        b Figura 5 
        | Características
    figure.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/69.svg', alt='Texto que describa la imagen' style='width: 100%')
    .row.mb-5
      .col-lg-5(data-aos="fade-right"): img(src='@/assets/curso/70.png')
      .col-lg-7(data-aos="fade-left")
        p Teniendo en cuenta que los repositorios digitales son espacios donde se almacena, administra, preserva y facilita el acceso de todos los objetos digitales para permitir la búsqueda y recuperación, contienen mecanismos que también ayudan a importar, identificar, recuperar y exportar los objetos digitales desde un portal web. 
          br
          br
          |Los datos que se almacenan en un repositorio se pueden distribuir a través de una red informática como Internet, intranet o PC, por un medio físico como un disco compacto, unidad virtual de almacenamiento, etc.; estos pueden dar acceso público o estar protegidos y requieren una autenticación previa. Los repositorios de carácter académico e institucionales son los más conocidos, debido a que suelen contar con sistemas de respaldo, mantenimiento preventivo y correctivo, lo cual hace que la información se pueda recuperar.
    p.mb-5 Los repositorios digitales pueden ser publicados entre otros, por:
    .row.mb-5.align-items-center
      .col-lg-5(data-aos="fade-right"): img(src='@/assets/curso/71.svg')
      .col-lg-7(data-aos="fade-left")
        ul.lista-ul
          li 
            i.vineta1
            | Alumnos 
          li 
            i.vineta1
            | Graduados
          li 
            i.vineta1
            | Graduados
          li 
            i.vineta1
            | Persona particular
          li 
            i.vineta1
            | Investigadores 
          li 
            i.vineta1
            | Becarios
    .row
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.bg__azul-claro.hover--bg2.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/72.svg', alt='Texto que describa la imagen' style='height: 210px')
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/73.svg', alt='Texto que describa la imagen' style='height: 210px' )
          h4 Repositorios institucionales
          p Son usados y construidos por cada organización y son utilizados para depositar, usar y preservar la información científica y académica que generen.
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.bg__azul-claro.hover--bg2.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/74.svg', alt='Texto que describa la imagen' style='height: 210px' )
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/75.svg', alt='Texto que describa la imagen' style='height: 210px' )
          h4 Repositorios temáticos 
          p Son construidos por grupos de investigadores, en donde almacenan documentos relacionados con áreas o temáticas específicas.
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.bg__azul-claro.hover--bg2.p-4.h-100
          .tarjeta-avatar-slide__img.mb-4
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/76.svg', alt='Texto que describa la imagen' style='height: 210px' )
            .tarjeta-avatar-slide__img__item.p-4: img(src='@/assets/curso/77.svg', alt='Texto que describa la imagen' style='height: 210px' )
          h4 Repositorios de datos
          p En estos se almacena, conserva y comparte la información de investigaciones de varias áreas del conocimiento.
    p.mb-5 En la siguiente tabla se enuncian los repositorios más utilizados en Latinoamérica: 
    .titulo-sexto.color-secundario
      h5.fw-normal
        b Tabla 1 
        | Repositorios latinoamericanos
    SlyderF.mb-5.tarjeta-h(columnas="col-lg-6 col-xl-4 ")
      .tarjeta.bg__rojo-claro2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/78.jpg' alt='AvatarTop')
        p Es un espacio de acceso abierto a los documentos producidos por la institución; los contenidos y recursos generados por la comunidad universitaria en su función de conocimiento, enseñanza, aprendizaje y proyección social.

      .tarjeta.bg__rojo-claro2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/79.jpg' alt='AvatarTop')
        p Mediante este repositorio se almacenan los trabajos de investigación que se desarrollan en las distintas instituciones académicas ecuatorianas, ofreciendo cerca de 60.000 registros Open Access a texto completo sobre tesis de grado, tesis y material de clase que las diferentes universidades ecuatorianas han puesto a disposición del público.
      .tarjeta.bg__rojo-claro2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/80.jpg' alt='AvatarTop')
        p Permite dar visibilidad a la producción científica de las instituciones de educación superior e investigación de América Latina, promueve el acceso abierto y gratuito al texto completo, con especial énfasis en los resultados financiados con fondos públicos.
      .tarjeta.bg__rojo-claro2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/81.jpg' alt='AvatarTop')
        p Es una red federada de repositorios de acceso abierto, cuenta en este momento con la incorporación de 98 repositorios de 67 instituciones mexicanas. Para un total de 483.603 documentos incluyendo artículos, tesis de licenciatura, tesis de maestría y tesis de doctorado (2017-10-18).
      .tarjeta.bg__rojo-claro2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/82.jpg' alt='AvatarTop')
        p Ofrece acceso simultáneo a 65 repositorios institucionales de América Latina. Acceso inicial a más de 158.000 documentos académicos desarrollados por docentes e investigadores de las distintas instituciones incorporadas.
      .tarjeta.bg__rojo-claro2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/83.jpg' alt='AvatarTop')
        p Es una herramienta de acceso abierto impulsada por el Consejo Nacional de Rectores (CONARE), que permite el acceso en línea a la producción académica y científica nacional para el desarrollo científico y tecnológico del país. Cuenta con 44.044 documentos incluyendo tesis de maestría, tesis de grado, reportes y artículos.
      .tarjeta.bg__rojo-claro2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/84.jpg' alt='AvatarTop')
        p Es un repositorio cooperativo de documentos digitales que incluye las tesis doctorales leídas en las universidades miembros del CBUES, colecciones patrimoniales, colecciones personales de personajes relevantes para la memoria histórica de El Salvador.
      .tarjeta.bg__rojo-claro2.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/85.jpg' alt='AvatarTop')
        p Promueve el acceso abierto y el intercambio de la producción científico-tecnológica generada en el país. Además, las instituciones adheridas pueden solicitar financiamiento para crear/fortalecer sus repositorios digitales y para la formación de recursos humanos.
    figcaption.mb-5 Nota. Tomado del Politécnico Gran Colombiano (s.f.).
    h3(data-aos="fade-right") Creación de repositorios digitales 
    p.mb-5 Finalmente, para la creación de repositorios digitales se deben tener en cuenta cinco elementos principales establecidos a continuación:  
    .row.mb-5.justify-content-center
      .col-lg-8
        PasosA.color-secundario.mb-5(tipo="n")
          .row.justify-content-between
            .col-md-5
              figure
                img(src='@/assets/curso/86.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Diagnóstico y estrategia:
              p Se debe realizar un diagnóstico de la situación, y se debe tener en cuenta la planificación estratégica de la institución que quiere crear el repositorio.
          .row.justify-content-between
            .col-md-6.mb-4.mb-md-0
              h4 Obtener cobertura legal: 
              p Según la ley de propiedad intelectual será necesario contar con la autorización del autor o de sus herederos para incluir sus obras en el repositorio.
            .col-md-5
              figure
                img(src='@/assets/curso/87.svg', alt='Texto que describa la imagen')
          .row.justify-content-between
            .col-md-5
              figure
                img(src='@/assets/curso/88.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Recursos de hardware: 
              p El tipo de servidor que soportará el repositorio, puede ser un sistema de arquitectura local o externa, dependiendo de diferentes factores.
          .row.justify-content-between
            .col-md-6.mb-4.mb-md-0
              h4 Implementación planificación de tareas:  
              p Debe establecer un calendario para el proyecto.
            .col-md-5
              figure
                img(src='@/assets/curso/89.svg', alt='Texto que describa la imagen')
          .row.justify-content-between
            .col-md-5
              figure
                img(src='@/assets/curso/90.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Promoción del repositorio:  
              p Es necesario dar a conocer y formar a los usuarios potenciales del repositorio, a nivel interno de la institución. 
    #t_1_4.titulo-segundo.color-secundario(data-aos="fade-right")
      h2 1.4 Objetos digitales
    p.mb-5 Villegas (2010) refiere el concepto de objetos digitales así:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    p.mb-5 Los beneficios que los objetos de aprendizaje pueden tener en un contexto educativo son (Lowerison, Gallart & Boyd, 2003):
    .row.mb-5
      .col-lg-3.mb-3
        .tarjeta.color-primario--borde.p-5.h-100.hover
          img(src='@/assets/curso/91.svg' alt='AvatarTop').mb-3
          p.text-center
            b Flexibilidad, ya que el mismo recurso puede utilizarse en distintos contextos.
      .col-lg-3.mb-3
        .tarjeta.color-acento-contenido--borde.p-5.h-100.hover
          img(src='@/assets/curso/92.svg' alt='AvatarTop').mb-3
          p.text-center
            b Administración del contenido, que se facilita porque los recursos están descritos con metadatos que permiten su control.
      .col-lg-3.mb-3
        .tarjeta.color-secundario--borde.p-5.h-100.hover
          img(src='@/assets/curso/93.svg' alt='AvatarTop').mb-3
          p.text-center
            b Administración del contenido, que se facilita porque los recursos están descritos con metadatos que permiten su control.
      .col-lg-3.mb-3
        .tarjeta.color-acento-botones--borde.p-5.h-100.hover
          img(src='@/assets/curso/94.svg' alt='AvatarTop').mb-3
          p.text-center
            b Código abierto que elimina los problemas de incompatibilidad entre plataformas.
    h3(data-aos="fade-right") Atributos de objetos digitales 
    p.mb-5 Los objetos digitales no pueden ser creados como recurso de información aislado, deben ser recursos con atributos específicos para su interacción en un entorno e-learning, fáciles de localizar, utilizar, almacenar y compartir. Para ello, estos recursos deben ser (Rehak & Mason, 2003):
    .row.mb-5
      .col-lg-3.mb-3
        .tarjeta.color-primario.p-5.h-100.hover.d-flex.justify-content-center.align-items-center.align-items-center.hover-textos
          h5.titulo Reutilizable
          p.contenido.text-center.mb-0 Debe ser modular y servir como base para construir otro recurso.
      .col-lg-3.mb-3
        .tarjeta.color-primario.p-5.h-100.hover.d-flex.justify-content-center.align-items-center.align-items-center.hover-textos
          h5.titulo Accesible
          p.contenido.text-center.mb-0 Para facilitar su localización y recuperación.
      .col-lg-3.mb-3
        .tarjeta.color-primario.p-5.h-100.hover.d-flex.justify-content-center.align-items-center.align-items-center.hover-textos
          h5.titulo Interoperable
          p.contenido.text-center.mb-0 Permite su interacción u operabilidad entre varias plataformas
      .col-lg-3.mb-3
        .tarjeta.color-primario.p-5.h-100.hover.d-flex.justify-content-center.align-items-center.align-items-center.hover-textos
          h5.titulo Portable
          p.contenido.text-center.mb-0 Pueden moverse y ubicarse en diferentes plataformas, sin generar alteraciones.
    p.mb-5 Ahora bien, el tamaño de un objeto de aprendizaje  digital es muy variable y es conocido como granularidad, debido a esto no es posible definir la cantidad de información o elementos que conlleva un objeto de aprendizaje, dependiendo de las necesidades y habilidades que tenga el autor irá formando el curso o información necesaria para crear objetos que mantengan la unidad y sean autocontenidos.
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg__azul-claro.p-4.mb-3.d-flex.align-items-center.justify-content-end.position-relative(style='margin-top: 60px')
          img.position-absolute.d-none.d-lg-block.d-md-block(src='@/assets/curso/95.svg', alt='Texto que describa la imagen' style='width:267px; left:5%;  bottom: 10px' )
          .col-xxl-8.col-lg-7.col-md-5.col-12
            p.mb-0 Ahora bien, el tamaño de un objeto de aprendizaje  digital es muy variable y es conocido como granularidad, debido a esto no es posible definir la cantidad de información o elementos que conlleva un objeto de aprendizaje, dependiendo de las necesidades y habilidades que tenga el autor irá formando el curso o información necesaria para crear objetos que mantengan la unidad y sean autocontenidos.
          










</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
import BannerInterno from '../components/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
    BannerInterno, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Una de las primeras evidencias de escritura conocida es la de las tablillas de arcilla, las cuales eran secadas al sol aproximadamente hace unos seis mil años atrás. ',
        imagen: require('@/assets/curso/1.jpg'),
      },
      {
        titulo: '',
        texto:
          'Anteriormente, la información que debía ser preservada se hacía por medio de papiros o libros, pero poco a poco se evidenció la fragilidad y el riesgo de garantizar la conservación de estos a través del tiempo. ',
        imagen: require('@/assets/curso/2.jpg'),
      },
      {
        titulo: '',
        texto:
          'Durante el Siglo XX se siguió debilitando la permanencia, durabilidad y resistencia de los nuevos medios de registro. Por lo anterior, han venido apareciendo diferentes sistemas de conservación de la escritura como los discos ópticos, estos tienen una vida más prolongada.',
        imagen: require('@/assets/curso/3.jpg'),
      },
      {
        titulo: '',
        texto:
          'Sin embargo, cualquier alternativa puede tener riesgos, es así que aparece métodos que garanticen procesos y estándares para minimizar los riesgos y garantizar que la información esté disponible a los usuarios.',
        imagen: require('@/assets/curso/4.jpg'),
      },
      {
        titulo: '',
        texto:
          'Hoy en día estamos ante un nuevo paradigma en preservación, la conservación de los documentos físicos, es como la disponibilidad de estos de manera física, bajo condiciones que garanticen fiabilidad e integridad de la información suministrada, ya que la grabación de datos digitales aún no está garantizando la información 100% libre de alteración o eliminación de datos.',
        imagen: require('@/assets/curso/5.jpg'),
      },
      {
        titulo: '',
        texto:
          'Para las entidades que se encargan del almacenamiento y la preservación del patrimonio digital cultural “se ha convertido en un problema apremiante definir qué elementos se deben conservar para las generaciones futuras y cómo proceder en su selección y conservación”. Salvaguardar toda esta información requiere un consenso internacional sobre su acopio y difusión.',
        imagen: require('@/assets/curso/6.jpg'),
      },
    ],
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

<style lang="sass">
.pestanas
  border: 4px solid #e7f3fd
  background-color: #ecfafc
.hover-textos
  transition: all .3s ease-in-out
  .titulo
    color: $color-secundario
  .contenido
    display: none
  &:hover
    background-color: $color-secundario !important
    .titulo
      display: none
    .contenido
      display: block
      color: $white
.tarjeta-h
  .horizontal-scroll
    align-items: stretch
</style>
