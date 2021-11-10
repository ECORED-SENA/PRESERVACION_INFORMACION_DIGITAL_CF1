<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Técnicas de preservación
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mt-lg-3 La Digital Preservation Coalition (DPC) define la preservación digital como el conjunto de actividades gestionadas necesarias para garantizar el acceso continuo a los materiales digitales durante el tiempo que sea necesario y se refiere a todas las acciones necesarias para mantener el acceso a los materiales digitales, más allá de los límites del fracaso de los medios de comunicación o del cambio tecnológico y organizativo. 
          br
          br
          |Siendo un conjunto de técnicas y metodologías que  permiten tener la información almacenada digitalmente en cualquier tipo de formato, máquina o programa que siga siendo accesible a mediano y largo plazo.
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/96.png')
    p.mb-5 Hoy en día existen diferentes opciones de preservación digitales entre las cuales se encuentran:
    TabsA.color-secundario.mb-5
      .tarjeta.pestanas.p-4(titulo="Actualización refreshing")
        .row
          .col-lg-4: img(src='@/assets/curso/97.jpg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Actualización refreshing
            p En este tipo de perseveración digital se maneja la transferencia de datos de un soporte a otro, la actualización varía según la política y el tipo de soporte.
      .tarjeta.pestanas.p-4(titulo="Migración")
        .row
          .col-lg-4: img(src='@/assets/curso/98.jpg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Migración
            p Aquí se realiza la transferencia de datos de un formato a otro, transferencia a otro hardware y/o conversión a otro archivo; esta estrategia pese a que corre el riesgo de perder las características esenciales de los datos es muy utilizada. 
      .tarjeta.pestanas.p-4(titulo="Emulaciones")
        .row
          .col-lg-4: img(src='@/assets/curso/99.jpg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4  Emulaciones
            p Se simula el comportamiento del software original con el que se crean los documentos digitales, de forma que estos puedan ejecutarse en el programa de origen.
      .tarjeta.pestanas.p-4(titulo="Preservación de la tecnología")
        .row
          .col-lg-4: img(src='@/assets/curso/100.jpg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Preservación de la tecnología  
            p Se preserva el entorno técnico que ejecuta el sistema incluyendo software y hardware, es una estrategia poco viable ya que con el paso del tiempo los avances tecnológicos dificultan el mantenimiento de dicho entorno.
      .tarjeta.pestanas.p-4(titulo="Arqueología digital")
        .row
          .col-lg-4: img(src='@/assets/curso/101.jpg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Arqueología digital
            p Se preserva el entorno técnico que ejecuta el sistema incluyendo software y hardware, es una estrategia poco viable ya que con el paso del tiempo los avances tecnológicos dificultan el mantenimiento de dicho entorno.
      .tarjeta.pestanas.p-4(titulo="Metadatos")
        .row
          .col-lg-4: img(src='@/assets/curso/102.jpg', alt='Texto que describa la imagen' )
          .col-lg-8
            h4 Metadatos 
            p Se crean datos vinculados a la información para la correcta identificación y descripción de los documentos. La técnica que prioriza los metadatos es una de las opciones más importantes, en las que las instituciones y la comunidad científica se muestra más interesada.
    h3(data-aos="fade-right") Principios de la preservación digital
    p.mb-5 A continuación, se mencionan algunos principios:
    BotonesC.mb-5 
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-8
        .bg__rojo-claro3.rounded-3.p-4.px-5
          p.px-4 “La dependencia tecnológica, es decir, la necesidad de un entorno tecnológico concreto para acceder a la información es la característica básica y definitoria de la información digital y la que la distingue de la encontrada en soporte tradicional, el acceso a la cual se hace directamente. De acuerdo con esto se puede decir que la preservación digital ha de basarse en la de los soportes de almacenamiento y en la actuación que evite que el avance tecnológico deje inaccesible la información digital” (Candas, 2006).
    p.mb-5 La preservación digital se puede clasificar de tres formas: 
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3
        .tarjeta.color-acento-contenido.p-4.h-100.text-white.hover
          img(src='@/assets/curso/104.svg', alt='Texto que describa la imagen' style='width: 85px' ).mb-4
          h4 Preservación de corta duración
          p Se esfuerza por garantizar que se acceda al contenido del objeto digital dentro del tiempo especificado o que el tiempo de cálculo para el uso del documento sea menor que el tiempo para cambios técnicos.
      .col-lg-4.mb-3
        .tarjeta.color-primario.p-4.h-100.hover
          img(src='@/assets/curso/105.svg', alt='Texto que describa la imagen' style='width: 85px' ).mb-4
          h4 Preservación de duración media
          p Se esfuerza por garantizar que se pueda acceder al contenido de los objetos digitales incluso después de los cambios tecnológicos o dentro de un período de tiempo específico.
      .col-lg-4.mb-3
        .tarjeta.color-secundario.p-4.h-100.text-white.hover
          img(src='@/assets/curso/106.svg', alt='Texto que describa la imagen' style='width: 85px' ).mb-4
          h4 Preservación de larga duración
          p Está diseñado para garantizar un acceso ilimitado al contenido de los objetos digitales. Toda organización puede planificar y ejecutar las acciones que considere adecuadas para almacenar digitalmente sus activos digitales, de hecho, existen modelos específicos para ello.
    .row.mb-5.justify-content-center
      .col-lg-9
        .bloque-texto-g.bg--azul.p-3.p-sm-4.p-md-5(data-aos="zoom-in-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/107.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Uno de los modelos que más se utiliza es el OAIS (Open Archival Information System), donde se encuentran los lineamientos generales de las acciones que debe realizar una entidad para preservar digitalmente sus documentos, pero a su vez da la libertad de determinar la mejor forma de realizarlo con la tecnología o estrategia que las organizaciones prefieran.
    p.mb-5 Esta norma propone un modelo que busca proporcionar una comprensión más alta para preservar la información y que esta pueda ser accesible a largo plazo, teniendo en cuenta los aspectos y avances tecnológicos, el crecimiento exponencial de información en formatos digitales. Esta es una necesidad de mantener la información comprensible de forma independiente donde se dé garantía de su autenticidad.
      br
      br
      |Bajo el modelo OAIS hay tres principales tipos de actores que son:
    .row.mb-5
      .col-lg-4.mb-3
        .tarjeta.color-primario.p-5.d-flex.align-items-center.justify-content-center.hover--bg
          h4.mb-0 Productor
      .col-lg-4.mb-3
        .tarjeta.color-primario.p-5.d-flex.align-items-center.justify-content-center.hover--bg
          h4.mb-0 Consumidor
      .col-lg-4.mb-3
        .tarjeta.color-primario.p-5.d-flex.align-items-center.justify-content-center.hover--bg
          h4.mb-0 Dirección
    .row.mb-5
      .col-lg-5(data-aos="fade-right"): img(src='@/assets/curso/108.png')
      .col-lg-7(data-aos="fade-left")
        p Además de los tipos de actores, el modelo OAIS también incluye paquetes de información. Estos corresponden a la unión de los objetos de datos de contenido y la información de presentación relacionada, lo que significa que, para guardar documentos digitales, no solo es necesario almacenar archivos, sino que también deben clasificarse y describirse por adelantado.
          br
          br
          |Las tareas que se asocian a la preservación digital son complejas y numerosas, por lo cual la organización debe ser lo suficientemente robusta para dar respuesta a todas esas acciones y ser sustentable en el tiempo, debido a esto se debe tener presente las recomendaciones al implementar el sistema, que se enuncian en la tabla 2.
    .titulo-sexto.color-secundario
      h5.fw-normal
        b Tabla 2
        | Recomendaciones
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-b.color-acento-contenido.tabla-borde.mb-5
          table
            tr
              th Open Source
              td Prefieren soluciones de código abierto que tengan una amplia comunidad de desarrolladores y de mantenimiento sencillo.
            tr
              th Multiplataforma
              td Permitir el trabajo sobre diversos sistemas operativos, en particular Linux (en sus diversas distribuciones), Windows, entre otros.
            tr
              th Escalabilidad
              td Contar con la habilidad de reaccionar y adaptarse a altas cargas de trabajo sin perder su rendimiento (performance).
            tr
              th Seguridad
              td Contar con altos estándares de seguridad en las siguientes áreas: integridad de la información transferida, acceso controlado, bitácora de trazabilidad, manejo de perfiles y roles de usuarios, alertas operativas y todo otro elemento requerido para garantizar la información transmitida y almacenada.
            tr
              th Mantenibilidad 
              td Contar con herramientas que permitan realizar mantenimiento a nivel usuario, es decir, que no requiera de la concurrencia de un programador para hacer cambios de configuración básicos.
            tr
              th Capacidad de recuperación
              td El sistema debe ser estable desde el punto de vista operativo, con mecanismos de recuperación en caso de caídas y/o fallas.
            tr
              th Modularidad
              td El sistema completo debe ser de carácter modular. Se recomienda el uso de microservicios en vez del desarrollo monolítico (modelo clásico en el desarrollo de software), es decir, que cada funcionalidad o grupo de funcionalidades se desarrolle como un componente, los que deberán estar desarrollados bajo tecnologías abiertas y conocidas.
            tr
              th Usos de formatos abiertos
              td Las estrategias para preservar los documentos digitales se basan principalmente en los formatos de los documentos. Se recomienda fuertemente el uso de formatos libres para generar los archivos de preservación y acceso, principalmente para no generar dependencia de un software y/o proveedor en particular.
</template>

<script>
import BotonesC from '../components/BotonesC.vue'
import BannerInterno from '../components/BannerInterno'
export default {
  name: 'Tema2',
  components: { BannerInterno, BotonesC },
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

<style lang="sass">
.bg--azul
  background-color: #64b5f6 !important
.tabla-borde
  border-top: 8px solid $color-acento-contenido !important
  th
    background-color: #edfbfd
    text-align: center
    font-weight: 900
</style>
