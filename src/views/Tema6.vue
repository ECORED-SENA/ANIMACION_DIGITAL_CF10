<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Seguimiento o monitoreo de proyectos

    .row.justify-content-center.align-items-center   
      .col-lg-10(data-aos="fade-down")
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Esta fase comprende los procesos necesarios para realizar el seguimiento, revisión y monitorización del progreso de proyecto. Se concibe como el medio para detectar desviaciones con la máxima premura posible, y así identificar las áreas en las que puede ser requerido un cambio en la planificación y un plan de contingencias. La etapa de seguimiento y control se encuentra naturalmente asociada a la de ejecución, de la que no puede concebirse de forma separada por su importancia y valor crítico.aculis euismod. Sed fringilla vel nisl quis aliquam.
            
          .bloque-texto-d__autor 
            .h5.mb-0.mright - Guía OBS Online, Business School, 2019.
            i.fas.fa-quote-right.mtop   

    .row.justify-content-center.align-items-center.mt-5   
      .col-lg-5 
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img49.svg', alt='')
      .col-lg-5(data-aos="fade-down")
        p Las actividades necesarias para esta etapa son las siguientes:
        ol.lista-ol--cuadro.mt-4(data-aos="fade-down")
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Actualización y seguimiento de los instrumentos de gestión de proyecto.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Definición y establecimiento de los indicadores clave de gestión.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Monitorización de los indicadores clave de gestión.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Comunicación de desviaciones.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Planificación y puesta en marcha de acciones correctoras.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Creación de un plan de contingencias.
         
    .row.justify-content-center.align-items-center.mt-5   
      .col-lg-10
        p(data-aos="fade-down") Los documentos relevantes durante esta etapa son el Checklist y revisiones de cada fase como el plan de gestión del riesgo, la comunicación de desviaciones detectadas, comunicación de acciones correctoras o modificaciones a aplicar y su plazo. 

    .row.justify-content-evenly.align-items-center
      .col-lg-10 
        .row.justify-content-evenly.align-items-center.mt-5
          .col-lg-5(data-aos="fade-down")
            .divpadre(@click="modal1 = true")
              .row.justify-content-center.align-items-stretch
                .col-9.div01.p-3
                  .p.mb-0 Seguimiento o monitoreo de proyectos
                .col-3.div02.p-3
                  img.img-t.img-a(src='@/assets/curso/temas/lupa.svg', alt='')
             
          .col-lg-5(data-aos="fade-down")
            .divpadre(@click="modal2 = true")
              .row.justify-content-center.align-items-stretch
                .col-9.div01.p-3
                  .p.mb-0 Métodos para el seguimiento de proyectos
                .col-3.div02.p-3
                  img.img-t.img-a(src='@/assets/curso/temas/lupa.svg', alt='')

    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center.mt-5
        .col-10
          img.img-t.img-a(src='@/assets/curso/temas/img50.jpg', alt='')

          p.mt-5 Las metodologías más usadas para el seguimiento de proyectos son el Diagrama de Gantt, Pert, CPM o el Método de la Cadena Crítica. Sin embargo, muchas aplicaciones para la gestión de proyectos están basadas en estas metodologías o permiten que se adapten, por lo que la contratación de un servicio de pago o gratuito, actualmente facilita el seguimiento de los procesos, incluso en equipos que trabajan exclusivamente de manera virtual. Dar una opinión sobre cuál de estas herramientas es mejor, es complejo y cada usuario o equipo debe encontrar la que mejor se adapte a sus necesidades.

          p.mt-5.text-center.p-tema5-red.p-3 Para ampliar la información sobre esta temática, se invita a visitar en el material complementario mediante los siguientes recursos: 

          ol.lista-ol--cuadro.mt-5(data-aos="fade-down")
            li 
              .lista-ol--cuadro__vineta
                span 1
              |  Cómo realizar el seguimiento de un proyecto – Metodologías de seguimiento y control.
            li 
              .lista-ol--cuadro__vineta
                span 2
              |  Diagrama de Gantt – Administración de proyectos.
            li 
              .lista-ol--cuadro__vineta
                span 3
              |  31 herramientas de gestión de proyectos destacadas para 2022.         

    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center.align-items-center.mt-5
        .col-10
          img.img-t.img-a(src='@/assets/curso/temas/img51.jpg', alt='')

          p.mt-5 Los indicadores son herramientas que aportan información medible sobre los aspectos más relevantes de un proyecto. 

          .cajon.color-acento-contenido.p-4.mt-4
            p Un Indicador es una expresión cualitativa o cuantitativa observable que permite describir características, comportamientos o fenómenos de la realidad a través de la evolución de una variable o el establecimiento de una relación entre variables que, comparadas con periodos anteriores, o frente a una meta o compromiso, permite evaluar el desempeño y su evolución en el tiempo. Los indicadores sirven para establecer el logro y el cumplimiento de la misión, objetivos, metas, programas o políticas de un determinado proceso o estrategia, por esto podemos decir que son, ante todo, la información que agrega valor y no simplemente un dato.
          
          p.mt-5 Los indicadores permiten evidenciar el nivel de cumplimiento acerca de lo que está haciendo la organización y sobre los efectos de sus actividades y según el Departamento Administrativo de la Función Pública (2012), en la guía para indicadores de gestión señala a través de la medición de aspectos tales como: talento humano, presupuesto, planta y equipos; cargas de trabajo, número de personas requeridas para realizar una actividad. Resultados como ciudadanos atendidos, oficios respondidos, ejecución del cronograma, niños vacunados, kilómetros construidos, etc. 

          .row.mt-5
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img.img-t.img-a(src='@/assets/curso/temas/img52.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4.pt-1
                    h5.text-center Impacto
                    p.text-center de los productos y/o servicios, tales como enfermedades prevenidas, impuestos recolectados, niveles de seguridad laboral alcanzados. 

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img.img-t.img-a(src='@/assets/curso/temas/img53.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4.pt-1
                    h5.text-center Productividad
                    p.text-center como casos atendidos por profesionales, solicitudes procesadas por persona, llamadas de emergencia atendidas. 

            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img.img-t.img-a(src='@/assets/curso/temas/img54.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4.pt-1
                    h5.text-center Satisfacción del usuario
                    p.text-center como el número de quejas recibidas, resultados de las encuestas, utilización de procesos participativos, visitas a los clientes.         

            
</template>

<script>
export default {
  name: 'Tema6',
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
