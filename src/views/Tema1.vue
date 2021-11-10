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
.bg
  &__rojo-claro
    background-color: #ffcaca !important
  &__morado-claro
    background-color: #cdc0f8
</style>
