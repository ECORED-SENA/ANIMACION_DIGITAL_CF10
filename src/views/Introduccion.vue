<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-between.align-items-stretch(data-aos="zoom-in")      
      .col-lg-7.ps-5.py-5.pe-3.bg-color-intro
        p(data-aos="fade-down-right") Durante el siguiente componente formativo, se abordan los contenidos que permiten introducirse en las temáticas relativas a la legislación colombiana para las industrias culturales y creativas, aprovechando las disposiciones de ley y programas de ayudas de los que se dispone; igualmente se podrá entender la importancia de la formulación de proyectos, las metodologías para la formulación y gestión, así como las convocatorias de ayudas y fuentes de financiación.

        p.mt-3.p-4.color-p-intro(data-aos="fade-down-left") Posteriormente, se obtendrá la información que posibilite la elaboración de la lista de costos y presupuestos para que finalmente se puedan integrar los productos en estrategias digitales que consigan difusión, competitividad, visibilidad o algún otro proceso necesario que contribuya a la conversión digital de las empresas del país.  

      .col-lg-5.bg-color-intro.p-0
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img1.png', alt='')            

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
