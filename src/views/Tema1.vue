<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Legislación para industrias creativas y culturales 

    .bg-img-1.pt-3
      .row.justify-content-center.align-items-center.mt-5      
        .col-lg-10
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img3.svg', alt='')
            p.mt-4.color-p-1.py-3.text-center(data-aos="fade-down") A lo largo de los años la legislación para industrias creativas y culturales se ha ido actualizando y modificando: 
      .row.justify-content-center.align-items-center.mt-5      
        .col-lg-8(data-aos="fade-left")
          LineaTiempoA.color-primario.mb-5(:datos="datosLineaTiempoA")
    .row.justify-content-end.align-items-start.row-top-2      
      .col-lg-5
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.svg', alt='')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        .tarjeta-avatar.rounded(data-aos="zoom-in")
          img.avatar-w(src='@/assets/curso/temas/alert.svg' alt='AvatarTop')
          .tarjeta.color-primario.bg-card-alert
            p.p-4.pt-0.mb-0(data-aos="fade-down") Es importante resaltar que las industrias creativas comprenden los sectores que conjugan creación, producción y comercialización de bienes y servicios basados en contenidos intangibles de carácter cultural, y/o aquellos que generen protección en el marco de los derechos de autor.  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img5.svg', alt='')
      .col-lg-5(data-aos="fade-down") 
        p En el marco legal, el Consejo de la Economía Naranja construye un programa para incentivar y aumentar las exportaciones de bienes y servicios creativos que creará un reconocimiento a las empresas que generan las mayores exportaciones en dichos sectores.
        p Este es entonces, el marco legal en el que pueden operar las empresas o profesionales que se dediquen a la producción de contenido audiovisual, donde encajan los productos de #[b animación digital].


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '1997',
        texto:
          'Reestructuración ministerial donde el Instituto Colombiano de Cultura (Colcultura) cerró para crear el Ministerio de Cultura y con este, desarrollar distintos programas para fortalecer y consolidar el sector cinematográfico del país.',
      },
      {
        ano: '2003',
        texto:
          'Se crea Ley del Cine 814 con el objetivo de consolidar y recaudar ingresos para la internacionalización del cine nacional por medio de estímulos tributarios en el sector privado. Su intención consistía en dinamizar e impulsar producciones para garantizar un flujo de recursos y de esta forma trabajar junto con la Comisión Fílmica Colombiana en el fomento de las producciones..',
      },
      {
        ano: '2012',
        texto:
          'Se crea la Ley 1556 que propone una contraprestación del 40% del valor de los gastos realizados en el país por concepto de servicios cinematográficos y del 20% del valor de los gastos en hotelería, alimentación y transporte a las empresas que celebren contratos con Filmación Colombia y realicen las producciones cinematográficas total o parcialmente en el territorio colombiano.',
      },
      {
        ano: '2017',
        texto:
          'Se crea la Ley 1834 de 2017 que tiene como objeto desarrollar, fomentar, incentivar y proteger las industrias creativas. Estas son entendidas como aquellas industrias que generan valor, en razón de sus bienes y servicios, los cuales se fundamentan en la propiedad intelectual.',
      },
      {
        ano: '2020',
        texto:
          'través del Decreto 474 la ley 1556 se extiende por 10 años más y se amplían los beneficios de esta norma a otros géneros audiovisuales como series, videos musicales, proyectos de animación y videojuegos, realización audiovisual publicitaria y series de contenidos cortos para web.<br> Igualmente se ofrece el Certificado de Inversión Audiovisual - CINA, un incentivo tributario que busca apalancar proyectos de inversión de productores extranjeros y que pretende posicionar a Colombia como el nuevo hub de la industria audiovisual en América Latina. ',
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
.tarjeta-avatar > img
  top: 2em !important
</style>
