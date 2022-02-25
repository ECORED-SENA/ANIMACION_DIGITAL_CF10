<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Modelo de negocio, costeo y presupuesto

    .bg-img-1.pt-3
      .row.justify-content-center.align-items-center.mt-5      
        .col-lg-10(data-aos="fade-down")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/img35.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p(data-aos="fade-down").mb-0 Uno de los momentos más complejos para el emprendedor suele ser el establecimiento del modelo de negocio porque implica pensar en función de aspectos con los que, en la mayoría de los casos, no está familiarizado. Mayoritariamente los emprendedores se lanzan a la ejecución de las ideas pasando muy por encima de todo lo que implica el área financiera de su proyecto. 
    .row.justify-content-center.align-items-center.mt-5      
      .col-lg-10
        p.text-center(data-aos="fade-down") Definir el modelo de negocio es responder con claridad a preguntas de gran relevancia:  
        .row.justify-content-center(data-aos="flip-down")
          .col-md-8
            SlyderF(columnas="col-12").color-chev
              .tarjeta.p-4
                img.img-t.img-a(src='@/assets/curso/temas/img55.svg' alt='AvatarTop')
              .tarjeta.p-4
                img.img-t.img-a(src='@/assets/curso/temas/img56.svg' alt='AvatarTop')
              .tarjeta.p-4
                img.img-t.img-a(src='@/assets/curso/temas/img57.svg' alt='AvatarTop')
              .tarjeta.p-4
                img.img-t.img-a(src='@/assets/curso/temas/img58.svg' alt='AvatarTop')
              .tarjeta.p-4
                img.img-t.img-a(src='@/assets/curso/temas/img59.svg' alt='AvatarTop')  

        p.mt-5(data-aos="fade-down") Si no se tienen claras las respuestas o no se hace un correcto análisis e interpretación de ellas más allá del papel, puede que todo el proyecto se quede sin sustento real.

        p(data-aos="fade-down") En el mundo de las #[b #[i startups]], una de las herramientas más comunes para definir el modelo de negocio es el Modelo #[b #[i Canvas]]. Este modelo recoge nueve aspectos que le permitirán al emprendedor determinar si debe lanzarse al mercado o aún no está listo para ello:  
    
    img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img60.svg', alt='')
    .row.justify-content-center.align-items-center.mt-5      
      .col-lg-10
        p(data-aos="fade-down") Finalmente, para conocer en más en profundidad cómo se elabora el modelo Canvas, se invita a ver el video Cómo aplicar el modelo Canvas en el lienzo – Ejemplo práctico, el cual se encuentra en el material complementario.

    .row.justify-content-evenly.align-items-center
      .col-lg-10 
        .row.justify-content-evenly.align-items-center.mt-5
          .col-lg-5(data-aos="fade-down")
            .divpadre(@click="modal1 = true")
              .row.justify-content-center.align-items-stretch
                .col-9.div01.p-3
                  .p.mb-0 Identificación de costos en proyectos de animación
                .col-3.div02.p-3
                  img.img-t.img-a(src='@/assets/curso/temas/lupa.svg', alt='')
             
          .col-lg-5(data-aos="fade-down")
            .divpadre(@click="modal2 = true")
              .row.justify-content-center.align-items-stretch
                .col-9.div01.p-3
                  .p.mb-0 Definición del presupuesto
                .col-3.div02.p-3
                  img.img-t.img-a(src='@/assets/curso/temas/lupa.svg', alt='')

    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center
        .col-10
          p En cualquier proyecto, empresa o negocio pueden diferenciarse costos directos, indirectos, relacionados con el capital, fijos y variables. 

          p Con el ánimo de que el aprendiz pueda identificarlos con facilidad en su emprendimiento, a continuación, se define cada tipo de gasto en relación con los proyectos de animación:

          LineaTiempoD.color-primario.mt-5
            .row.justify-content-center.align-items-center(numero="1" titulo="Costos directos")
              .col-lg-11
                img.img-t.img-a.mt-3(src='@/assets/curso/temas/img61.jpg', alt='')
                p.text-small.mt-4 Son los que se relacionan directamente con la prestación del servicio, como por ejemplo el pago del tiempo del personal que requiera el proyecto. La manera de asignarles el valor es medir en horas hombre, la cantidad de tiempo necesario para cada una de las actividades a desarrollar por cada uno de las personas que intervengan en el desarrollo del proyecto. Por ejemplo: Coordinador general del proyecto, operador, productor, animadores, camarógrafo, escenógrafo, etc.).

            .row.justify-content-center.align-items-center(numero="2" titulo="Costos indirectos")
              .col-lg-11
                img.img-t.img-a.mt-3(src='@/assets/curso/temas/img62.jpg', alt='')
                p.text-small.mt-5 Son los servicios complementarios que se originan como resultado de la realización del proyecto, como por ejemplo el alquiler de hardware o software, infraestructura física como #[i workstations], servidores, nodos de #[i render], sistema de redes, etc.
   
            .row.justify-content-center.align-items-center(numero="3" titulo="Costos de capital")
              .col-lg-11
                img.img-t.img-a.mt-3(src='@/assets/curso/temas/img63.jpg', alt='')
                p.text-small.mt-4 Son los que se producen en las inversiones realizadas, por la adquisición, acondicionamiento, mantenimiento o financiamiento de un equipo técnico, instrumentos e inmuebles necesarios para el objetivo principal del proyecto. El valor se asigna de acuerdo al valor del bien en el mercado en el caso de tener que comprarlo. Ejemplo: compra de hardware y software o acondicionamiento del mismo, compra de equipos de sonido, compra o acondicionamiento de instrumentos, licencia de Windows.

            .row.justify-content-center.align-items-center(numero="4" titulo="Costos fijos")
              .col-lg-11
                img.img-t.img-a.mt-3(src='@/assets/curso/temas/img64.jpg', alt='')
                p.text-small.mt-5 Son aquellos que no sufren variación cualquiera que sea la magnitud o naturaleza del proyecto, como el pago del arrendamiento de las instalaciones donde funciona el proyecto, el personal administrativo o de nómina si se ha definido una contratación mensual para uno o varios artistas. El pago del Internet, gastos financieros (contador, bancos, permisos gubernamentales) y todo lo relacionado con finanzas o registros del negocio o persona. 

            .row.justify-content-center.align-items-center(numero="5" titulo="Costos variables")
              .col-lg-11
                img.img-t.img-a.mt-3(src='@/assets/curso/temas/img65.jpg', alt='')
                p.text-small.mt-5 Dependen de las ejecuciones del proyecto y cambian de acuerdo con su magnitud y duración, como por ejemplo el número de escenas que se grabarán en una locación, un programa de animación, un #[i plugin] para usar en Maya, o un servicio en la nube para tener #[i backups] de proyectos (Dropbox o algo similar). Todo lo relacionado con las relaciones públicas y el #[i marketing]: gastos de publicidad, tarjetas de presentación, impresión de playeras, impresión de portafolios, visitas a potenciales clientes, etc.
                                 
    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center.align-items-center
        .col-10
          p Se trata de la organización y estimación de los recursos necesarios en cada una de las etapas y actividades del proyecto, divididos en tipos de gastos o rubros.

          p Para definir el presupuesto es fundamental e imprescindible contar con el cálculo de los costos y estar en capacidad real de estimar los ingresos, si fuera el caso. 

      .row.justify-content-center.align-items-stretch.mt-5
        .col-3.row-color-gray.p-0
          img(src='@/assets/curso/temas/img66.jpg', alt='')
        .col-7.row-color-gray.d-flex.align-items-center
          p.mb-0 En el caso de la venta de los servicios, para #[b determinar la asignación salarial], según los expertos, la manera más eficaz en un proyecto de animación es a través del cálculo del #[b costo por hora].  El cálculo del ingreso se realiza con base en la estimación de las horas que requerirá el proyecto, multiplicado por el valor que he establecido por la hora de trabajo. Este valor se establece de acuerdo con el prorrateo de todos los gastos mensuales y el establecimiento del margen de ganancia que se espera.  

      .row.justify-content-center.align-items-center.mt-5
        .col-10
          p El tipo de presupuesto más usado en la formulación de proyectos es el llamado presupuesto por rubro o tipo de gasto. En la presentación de los proyectos se deben desagregar todos los gastos que requiere la ejecución de cada actividad. Esta información debe ir acompañada del cronograma financiero en donde se debe discriminar en términos monetarios, cuánto cuesta. 
          
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-8
          p.bg-color-p-1.p-3.text-center Por regla general, los proyectos de animación incluyen este tipo de costos, ver tabla 2:
          .titulo-sexto.color-acento-contenido.mt-5
            h5 Tabla 2. 
            span Desglose de presupuesto para proyecto animado 2D
          .tabla-a
            table
              caption Fuente: Jimena Mendezu. Crehana (2020). https://www.crehana.com/recursos/herramientas/presupuesto-animacion-2d 
              tbody
                tr.color-header
                  <td colspan="2" style="border-right: 0px"> <b>Desglose presupuesto: proyecto animado 2D</b> </td>
                  td.text-center.bord-left <b>Desglose de costos</b>
                tr
                  td.bord-right.color-tr-1.p-tema5-color-red <b> Arte conceptual</b>
                  td.bord-right.color-tr-1.p-tema5-color-red <b> Responsable</b>
                  td
                tr
                  <td colspan="2"> Diseño de ambiente y utilería</td>
                  td 
                tr
                  <td colspan="2"> Diseño de personajes</td>
                  td
                tr
                  <td colspan="2"> Esquemas de colores</td>
                  td                     
                tr
                  <td colspan="2"> Propuesta look inicial</td>
                  td 
                tr
                  <td colspan="2"> Guión gráfico detallado</td>
                  td  
                tr.color-table-yellow
                  <td colspan="2"> <b>Total arte conceptual</b></td>
                  td
                tr
                  td.bord-right.color-tr-1.p-tema5-color-red <b> Animación y modelado</b>
                  td.bord-right.color-tr-1.p-tema5-color-red <b> Responsable</b>
                  td
                tr
                  <td colspan="2"> Modelos de personajes</td>
                  td 
                tr
                  <td colspan="2"> Plataformas de animación</td>
                  td
                tr
                  <td colspan="2"> Animación de personajes</td>
                  td                     
                tr
                  <td colspan="2"> Modelado final</td>
                  td  
                tr.color-table-yellow
                  <td colspan="2"> <b>Total animación y modelado</b></td>
                  td                        
                tr
                  td.bord-right.color-tr-1.p-tema5-color-red <b> Iluminación</b>
                  td.bord-right.color-tr-1.p-tema5-color-red <b> Responsable</b>
                  td 
                tr
                  <td colspan="2"> Sombras</td>
                  td 
                tr
                  <td colspan="2"> Luces</td>
                  td
                tr.color-table-yellow
                  <td colspan="2"> <b>Total iluminación</b></td>
                  td 
                tr
                  td.bord-right.color-tr-1.p-tema5-color-red <b> Post producción</b>
                  td.bord-right.color-tr-1.p-tema5-color-red <b> Responsable</b>
                  td 
                tr
                  <td colspan="2"> Visual</td>
                  td 
                tr
                  <td colspan="2"> Sonido</td>
                  td
                tr
                  <td colspan="2"> Edición final</td>
                  td                  
                tr.color-table-yellow
                  <td colspan="2"> <b>Total post producción</b></td>
                  td                                             
                tr
                  <td colspan="2" style="text-align: center"> <b>Total del presupuesto por animación 2D</b></td>
                  td.color-tr-1
                  
      .row.justify-content-center.align-items-center.mt-5
        .col-10
          p Una vez que se ha definido el modelo de negocio y se sabe cómo se generan ingresos y cuáles son los costos, es necesario definir la rentabilidad, que básicamente se traduce en la diferencia positiva resultante entre los ingresos y los costos.  
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    modal1: false,
    modal2: false,
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
