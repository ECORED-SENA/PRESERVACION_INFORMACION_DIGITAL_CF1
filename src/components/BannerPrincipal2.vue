<template lang="pug">
.banner-principal
  .container.tarjeta.p-0(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.g-0
      img.fondo-contenido.d-none.d-xl-block(:src="globalData.fondoContenido")
      .col-xl-6.col-xl-7.ps-4.ps-sm-5.py-2.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0.px-5(v-html="globalData.componenteFormativo")
        .col-xl-9
          .banner-principal__descripcion
            p.mb-0.px-5(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .col-lg-5.px-5.position-relative.d-none.d-xl-block
        .contenedor-imagenes.position-relative.h-100
          .imagen_flotante_5.d-none.d-xl-block: img(src='@/assets/curso/float5.png' style='width: 800px')
          .imagen_flotante_2: img(src='@/assets/curso/float2.png')
          .imagen_flotante_3: img(src='@/assets/curso/float3.png')
          .imagen_flotante_4: img(src='@/assets/curso/float4.png')
          .imagen_flotante_1: img(src='@/assets/curso/float1.png')

</template>

<script>
import mixins from '../../node_modules/ecored-base-pkg/src/mixins/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-principal__info
  z-index: 3


.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    overflow: hidden
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.imagen_flotante
  &_1
    animation: manUp 3s alternate infinite;
    position: absolute
    width: 400px
    bottom: -100%
    right: 10%
  &_2
    position: absolute
    width: 100px
    bottom: 10%
    left: 0
  &_3
    animation: rotateUp 2s alternate infinite linear
    position: absolute
    transform-origin: center bottom
    top: 30px
    left: 0%

  &_4
    animation: rotate 5s infinite
    position: absolute
    width: 100px
    top: 10%
    right: 10%
  &_5
    position: absolute
    width: 150%
    bottom: 0
    right: 10%
@keyframes manUp
  0%
    bottom: -100%
  60%
    bottom: 0
  100%
    bottom: 0
@keyframes rotate
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
@keyframes rotateUp
  0%
    transform: rotate(-95deg)
  100%
    transform: rotate(-30deg)
@media (max-width: $bp-max-lg)
  .banner-principal .tarjeta
    background-image: url('../assets/curso/fondo2.svg') !important
</style>
