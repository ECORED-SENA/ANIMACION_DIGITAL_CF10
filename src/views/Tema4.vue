<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Presentar proyectos a convocatorias y concursos

    .row.justify-content-center.align-items-center
      .col-lg-10  
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img35.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 A raíz de la implementación de la Ley Naranja 1834 de 2017, el país ha abierto espacios significativos para el desarrollo de las industrias culturales y creativas. 
            br
            br
            p(data-aos="fade-down").mb-0 Entre esos espacios se encuentra la creación de convocatorias para el desarrollo y fortalecimiento de proyectos artísticos y culturales, que se suman a las que ya venían de años anteriores como la Ley Filmación Colombia (2012) y el programa de Estímulos del Ministerio de Cultura.
            
        p(data-aos="fade-down").mt-5 Los requerimientos para presentarse en una convocatoria en Colombia son diferentes, dependiendo de las condiciones que establezca la propia convocatoria, pero en general tienen que ver con tener un documento del proyecto o propuesta, ser ciudadano colombiano mayor de edad, no tener impedimentos para concursar con el Estado, no haber sido ganador en convocatorias anteriores y cumplir con los requisitos documentales que se soliciten. 
        
        .row.justify-content-center.align-items-center.bg-gradi-1.p-4.mt-5
          .col-9
            p(data-aos="fade-down") Muchas convocatorias están restringidas a personas jurídicas o grupos constituidos, pero otras dan libre acceso también a personas naturales.
    
            p(data-aos="fade-down") En el caso de los concursos, se debe contar con la pieza o contenido con el que se quiere participar tal y como lo establezca la dirección del evento y en la mayoría de los casos, contar con registro de propiedad intelectual.        
          .col-3.p-0
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img36.svg', alt='')

        p(data-aos="fade-down").mt-5 Para Pedro Fuentes Rueda (2020), en el artículo Claves fundamentales para hacer un buen #[i pitching] audiovisual, en el caso de los proyectos audiovisuales, en los últimos tiempos se ha impuesto el #[i pitching] como metodología para presentar los proyectos ante posibles financiadores. #[i pitching] quiere decir lanzar y, en proyectos audiovisuales se refiere a la venta de series, de largometrajes, de documentales, o de programas de televisión.
     
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h5.mb-2 Un <em>pitching</em> puede darse en una reunión individual, pero el formato más habitual consiste en una presentación pública ante posibles inversores, productores y cadenas, en una presentación que dura alrededor de diez minutos y que se puede apoyar en un Power Point. Tras esto, llega un turno de preguntas por parte del público asistente. 
          span - Pedro Fuentes Rueda, 2020.

        p.mt-5 Para profundizar sobre el #[i pitching] audiovisual, se invita a ver el video #[b #[i pitching], cómo vender nuestro proyecto], el cual se encuentra en el material complementario. 

        .row.justify-content-evenly.align-items-center.mt-5
          .col-lg-5(data-aos="fade-down")
            .divpadre_icon
              .row.justify-content-center.align-items-stretch
                .col-9.div01.p-3
                  .p.mb-0 Convocatorias para proyectos 
                .col-3.div02.p-3
                  img.img-t.img-a(src='@/assets/curso/temas/book.svg', alt='')
        .row.justify-content-evenly.align-items-center
          .col-lg-8.hr.mt-5 

        p.mt-5 Anualmente, a través de diversos organismos y entidades, el estado colombiano otorga recursos financieros para apoyar la generación o el mantenimiento de iniciativas. Las fechas para estas ayudas se distribuyen a lo largo del año y habitualmente tienen un tiempo suficiente entre su apertura y cierre. En todo caso, lo recomendable es contar con una idea clara y sólida, o un avance del producto final, para no fallar en la fecha de convocatoria, ya que en ocasiones puede ser lento completar los requisitos documentales que se solicitan.

        img.img-t.img-a.mt-5(src='@/assets/curso/temas/img37.jpg', alt='')

    .row.justify-content-center.align-items-start.mt-5
      .col-lg-5
        p.title-colo-1.p-4.mb-0.text-center #[b Convocatorias para proyectos artísticos y culturales y festivales]
        p.content-color-1.p-4 Algunas de las convocatorias de carácter general (no específicas para proyectos audiovisuales) son las siguientes:
          br
          span - Programa Nacional de Estímulos
          br
          span - Programa departamental de Estímulos
          br
          span - Programa Distrital de Estímulos 2021
          br
          span - INNpulsa
          br
          span - Convocatoria Jóvenes en Movimiento
          br
          span - Convocatoria Laboratorio Startup de APPS.CO 
          br
          span - Semilleros de Emprendimiento Digital de Apps.co
          br
          span - Fondo Emprender del Sena
          br
          span - Programa Nacional de Concertación Cultural
          br
          span - Festivales de emprendimiento: Héroes Fest e InspiraTIC
        .row.justify-content-center.align-items-center.border-yellow-1.p-3.mt-5.mx-1
          .col-7 
            p.mb-0 Para conocer en detalle las convocatorias y otras ayudas para la financiación de proyectos se puede visitar la página web:
          .col-5
            a(href="https://economianaranja.gov.co/convocatorias/" target="_blank")          
              img.img-t.img-a.beat(src='@/assets/curso/temas/web.svg', alt='')
        .row.justify-content-center.align-items-center.border-yellow-1.p-3.mt-5.mx-1.mb-3
          .col-7 
            p.mb-0 Finalmente puede verificar el formato de Propuesta Creativa para la convocatoria audiovisual del Mintic 2021 a través del siguiente recurso: PDF
          .col-5
            a(:href="obtenerLink('/downloads/Formato_de_propuesta_creativa.pdf')" target="_blank")          
              img.img-t.img-a.beat(src='@/assets/curso/temas/download.svg', alt='')              

      .col-lg-5
        p.title-colo-2.p-4.mb-0.text-center.pb-5 #[b Convocatorias para proyectos audiovisuales]
        p.content-color-2.p-4 Algunas de las convocatorias específicas para proyectos audiovisuales son las siguientes: 

          br
          span - Convocatorias Audiovisuales Mintic 
          br
          span - Crea digital
          br
          span - Ampliación beneficios Ley Filmación Colombia al sector audiovisual
          br
          span - Ley 814 de 2003: Estímulos e incentivos para las creación, producción, coproducción y realización de largometrajes y cortometrajes colombianos
          br
          span - Festival de Cine Verde de Barichara
          br
          span - Festival Internacional de Cine Independiente de Villa de Leyva
          br
          span - Festival Internacional de Cine de Cartagena
          br
          span - Festival de Cine Corto de Popayán
          br
          span - Festival de Cine de Bogotá 
          br
          span - Festival Internacional de Cine de Cali
          br
          span - Festival Internacional de Cine de Santander
          br
          span - Festival Internacional de Cine de Barranquilla
          br
          span - Festival de Cine e Infancia y Adolescencia

        .row.justify-content-center.align-items-center.border-yellow-1.p-3.mt-5.mx-1
          .col-7 
            p.mb-0 Para conocer en detalle el total de festivales y muestras de cine colombiano que se realizan en el país, se puede visitar el siguiente enlace:
          .col-5
            a(href="https://mincultura.gov.co/areas/cinematografia/Paginas/Festivales.aspx" target="_blank")          
              img.img-t.img-a.beat(src='@/assets/curso/temas/web.svg', alt='')          
</template>

<script>
export default {
  name: 'Tema4',
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
