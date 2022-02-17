<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Formulación de proyectos 
    .row.justify-content-evenly.align-items-center(data-aos="fade-down") 
      .col-lg-10.bg-img-2.pt-4
        .row.justify-content-evenly.align-items-center
          .col-lg-8
            p.text-center Este apartado comprende el conocimiento de las herramientas que buscan estructurar un proceso que concluya con la consecución de recursos para llevar a cabo un proyecto de animación digital y/o la comercialización del mismo. 
    .row.justify-content-evenly.align-items-center
      .col-lg-10    
        img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img7.jpg', alt='')
        #anclas  
        p.mt-5(data-aos="fade-down") La adquisición de estas herramientas permite concursar en las distintas convocatorias que oferta el gobierno nacional, y en otras convocatorias internacionales de carácter público y privado, por tanto el manejo de una metodología es requisito indispensable para participar en ellas y que los contenidos contemplados en las industrias creativas sean de carácter intangible y cultural por ello la información que se presenta a continuación está relacionada con la formulación de proyectos desde la perspectiva de los proyectos culturales.
    .row.justify-content-evenly.align-items-center
      .col-lg-10 
        .row.justify-content-evenly.align-items-center.mt-5
          .col-lg-5(data-aos="fade-down")
            .divpadre(@click="goToElement('1')" @mouseover="mostrarIndicador = false")
              .row.justify-content-center.align-items-stretch
                .col-9.div01.p-3
                  .p.mb-0 Emprendimiento y emprendimiento cultural
                .col-3.div02.p-3
                  img.img-t.img-a(src='@/assets/curso/temas/lupa.svg', alt='')

          .col-lg-5(data-aos="fade-down")
            .divpadre(@click="goToElement('2')")
              .row.justify-content-center.align-items-stretch
                .col-9.div01.p-3
                  .p.mb-0 Proyecto cultural
                .col-3.div02.p-3
                  img.img-t.img-a(src='@/assets/curso/temas/lupa.svg', alt='')  
              .indicador--click(v-if="mostrarIndicador")                              

          .col-7.hr.mt-5 
  
    #1
    .row.justify-content-center.align-items-center.mt-5
      .col-8
        p(data-aos="fade-down") Antes de iniciar, es necesario comprender las diferencias entre el emprendimiento desde una visión general y el emprendimiento desde la visión cultural. 
      .col-auto(data-aos="fade-down")
        figure.beat(@click="goToElement('anclas')")
          img(src='@/assets/curso/temas/up.svg', alt='icon', style='width: 33px; cursor: pointer').m-auto
    .row.justify-content-center.align-items-center.mt-5
      .col-8(data-aos="fade-down")
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          p.p-3.mb-0 Según el diccionario de la Real Academia Española #[b -RAE-] emprendimiento viene de la palabra emprender que significa #[b “acometer y comenzar una obra, un negocio, un empeño, especialmente si encierran dificultad o peligro”.]

        p.mt-5(data-aos="fade-down") En el uso cotidiano, el emprendimiento está relacionado con accionar recursos, inicialmente propios, en el desarrollo de unas actividades en las que se invierte el tiempo y los saberes individuales para la obtención de recursos económicos.  
        .row.justify-content-center.align-items-center.mt-5
          .col-lg-8
            p(data-aos="fade-down") El emprendimiento cultural por su parte se refiere a las acciones de tipo artístico y creativo que involucran las expresiones individuales o grupales por medio de las cuales se transmite la cultura de un lugar determinado, a la vez que crean sentido y significado, y que se realizan más que con el fin de lucro económico, con la idea de impactar a un receptor en diferentes contextos. Como ya se verificó desde el marco legal, Colombia ha regulado el quehacer artístico y creativo para que además de la creación, la difusión, la circulación, la financiación y demás componentes de esta cadena de valor, se fortalezcan y se consoliden y generen un sector económico rentable y en crecimiento permanente.        
          .col-lg-4 
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img8.svg', alt='')

        .cajon.color-acento-contenido.p-4.mt-4
          p(data-aos="fade-down") El emprendimiento está relacionado con la administración de empresas como área de estudio y, aunque el éxito de un emprendimiento sí está determinado por el conocimiento de los distintos aspectos que conforman una organización, no es necesario estudiar esta carrera para tener resultados satisfactorios; basta con conocer las metodologías para convertir las ideas en proyectos y estos en realidades.           

    #2
    .row.justify-content-center.align-items-center.mt-5
      .col-8
        p(data-aos="fade-down") El proyecto es un formato definido para la comunicación entre un emprendedor, creativo o artista que tiene una idea o un bien intelectual o intangible, un producto o un servicio, y un financiador que tiene unos recursos económicos que puede destinar al mismo fin. El documento del proyecto contiene el detalle de las actividades, el presupuesto, el tiempo y los resultados finales; permite comprender una necesidad, un problema y ofrecer una solución. 
      .col-auto(data-aos="fade-down")
        figure.beat(@click="goToElement('anclas')")
          img(src='@/assets/curso/temas/up.svg', alt='icon', style='width: 33px; cursor: pointer').m-auto
    .row.justify-content-center.align-items-center
      .col-8
        .row.justify-content-center.align-items-center.mt-5
          .col-lg-4 
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img9.svg', alt='')         
          .col-lg-8(data-aos="fade-down")
            p Los proyectos se formulan para planificar de manera estratégica y anticiparse a todo lo que se espera que ocurra en el proceso de generación o creación de bienes, servicios, productos e intangibles. Es el primer paso en el camino para la materialización de las ideas desde un plan de negocio. 
            p Ahora bien, un proyecto cultural involucra factores que muchas veces se creen intangibles pero que también se pueden identificar, planificar, diseñar, organizar, implementar, ejecutar y evaluar, según los objetivos y actividades establecidas al inicio.

        .cajon.color-acento-contenido.p-4.mt-4
          p(data-aos="fade-down") Es importante diferenciar desde primer momento si lo que se pretende es realizar un proyecto o un plan de negocio, puesto que ambos tienen objetivos y procesos distintos, e implican métodos de trabajo diferentes, tal y como se observa en la siguiente tabla 1.         
     
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    goToElement(id) {
      const ele = document.getElementById(id)
      window.scrollTo(ele.offsetLeft, ele.offsetTop + 100)
    },
  },
}
</script>

<style lang="sass"></style>
