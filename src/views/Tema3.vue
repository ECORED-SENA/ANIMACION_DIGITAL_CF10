<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 ¿Cómo realizar proyectos? 

    .bg-img-1.pt-3
      .row.justify-content-center.align-items-center.mt-5      
        .col-lg-8
          p.mt-4.color-p-1.py-3.text-center(data-aos="fade-down") Para formular un proyecto es necesario formular y responder a las siguientes preguntas:  

      .row.justify-content-center.mt-5(data-aos="flip-down")
        .col-md-8
          SlyderF(columnas="col-12").color-chev
            .tarjeta.p-4
              img.img-t.img-a(src='@/assets/curso/temas/img11.svg' alt='AvatarTop')
            .tarjeta.p-4
              img.img-t.img-a(src='@/assets/curso/temas/img12.svg' alt='AvatarTop')
            .tarjeta.p-4
              img.img-t.img-a(src='@/assets/curso/temas/img13.svg' alt='AvatarTop')
            .tarjeta.p-4
              img.img-t.img-a(src='@/assets/curso/temas/img14.svg' alt='AvatarTop')
            .tarjeta.p-4
              img.img-t.img-a(src='@/assets/curso/temas/img15.svg' alt='AvatarTop')   
            .tarjeta.p-4
              img.img-t.img-a(src='@/assets/curso/temas/img16.svg' alt='AvatarTop')  

      .row.justify-content-center.align-items-center.mt-5      
        .col-lg-8
          p(data-aos="fade-down") A partir de esta información, todos los proyectos tienen un ciclo de vida estandarizado que se refiere al orden de las etapas por las que transita desde su inicio hasta el fin, ver figura 1.
          .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-left")
            h5 Figura 1. 
            span Etapas del ciclo de vida del proyecto.
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/img17.svg', alt='')

          p(data-aos="fade-down").mt-5 El ciclo de vida de un proyecto inicia con un proceso de #[b identificación] que comprende el análisis de los involucrados, los problemas, los objetivos y de las estrategias. Seguidamente, debe elaborarse una #[b valoración de factibilidad], de implicaciones financieras, de sostenibilidad y de factores de éxito. Sólo luego de este proceso es posible adentrarse en la etapa de la #[b formulación] del proyecto, que debe contar con una estructura lógica. Posteriormente inicia una fase de #[b negociaciones] en las que se evalúa la financiación del proyecto, se buscan y se realizan convenios y definen la etapa de #[b ejecución], es decir, el plan operativo, y el plan de acción. Finalmente, siempre deben existir actividades de #[b monitoreo o seguimiento y evaluación] de eficiencia, efectividad e impacto de las iniciativas culturales. 

          .cajon.color-primario.p-4.mt-4
            p(data-aos="fade-down") La decisión de realizar un proyecto tiene que ver con una motivación, inquietud, oportunidad o suceso que provoca en el autor un interés tal, como para iniciar el proceso de consecución de recursos que permitirán su ejecución. Los proyectos normalmente están condicionados por el contexto económico, social e institucional que determinan el alcance que tendrán.

    .row.justify-content-evenly.align-items-center
      .col-lg-10 
        .row.justify-content-evenly.align-items-center.mt-5
          .col-lg-5.my-2(data-aos="fade-down")
            .divpadre(@click="modal1 = true")
              .row.justify-content-center.align-items-stretch
                .col-9.div01.p-3
                  .p Etapas de un proyecto
                .col-3.div02.p-3
                  img.img-t.img-a(src='@/assets/curso/temas/lupa.svg', alt='')             

          .col-lg-5.my-2(data-aos="fade-down")
            .divpadre(@click="modal2 = true")
              .row.justify-content-center.align-items-stretch
                .col-9.div01.p-3
                  .p.mb-0 Metodologías para la formulación de proyectos 
                .col-3.div02.p-3
                  img.img-t.img-a(src='@/assets/curso/temas/lupa.svg', alt='') 

    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center
        .col-lg-10 
          p Para el caso de un proyecto audiovisual, este proceso se refiere a la búsqueda, definición y gestión de recursos financieros, materiales y de talento humano necesarios para transformar una idea concebida o adquirida, en un producto o contenido audiovisual.

          p.border-yellow.p-2.text-center.mt-5 Paralelo al ciclo de vida de un proyecto genérico, las etapas de un proyecto o producción audiovisual son las siguientes:
                
      figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/jfUgtkw5sow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-10
          p.p-3.bg-color-p A continuación, se presentan los elementos, ordenados según fases, que según el Instituto Latinoamericano de Planificación Económica y Social (ILPES), de la FAO y de otras instituciones y autores, se consideran básicos en la formulación de proyectos, independiente del área social, económica o educativa al que pertenezca: 

          SlyderE.mt-5(indicadores="izquierda")
            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Título del proyecto
                p Aporta en forma clara y precisa datos e información sobre el tema, el problema, o instituciones que participan en el proyecto; es un instrumento que unifica la temática y metodología del mismo, y sirve para diferenciarlo de otros, para caracterizar su temática y enunciar el contenido. Debe contener aspectos que permitan responder. ¿Qué actividad se realizará? ¿Dónde y cuándo? y ¿a quiénes va dirigido? Debe resumir el proyecto y especificar características. Al leerlo se debe comprender el proyecto.
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img18.jpg', alt='')      

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Identificación de la organización y/o autores del proyecto
                p Incluye los datos relevantes de la organización o del autor(es) del proyecto, una breve descripción de la organización o resumen curricular del autor(es) del proyecto. 
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img19.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Identificación del proyecto/definición del problema
                p La naturaleza, carácter, categoría, tipo y finalidad, expresada a través de una descripción más o menos amplia, donde se expone la idea central para la que se pretende realizar con el proyecto.
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img20.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Justificación del proyecto
                p Describe la importancia del problema, el porqué del proyecto y su viabilidad; argumenta de forma científica o técnica una problemática resultante de diagnóstico previo y considerado prioritario.
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img21.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Objetivos
                p Constituyen el punto central de referencia de un proyecto, teniendo en cuenta que hablan sobre para qué se efectúa y que se espera al finalizar el proyecto.
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img22.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Alcance
                p Se refiere a la delimitación de los alcances del proyecto, los cuales a su vez se relacionan con los recursos humanos, técnicos, físicos, de tiempo y financieros disponibles. 
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img23.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Cobertura geográfica o espacial
                p Se refiere al espacio o zona que cubrirá el proyecto en cuanto al área de influencia, lugar donde se realizará el proyecto.
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img24.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Productos, resultados y efectos
                p Generalmente el producto es considerado como el resultado de un trabajo o de una actividad determinada; su realización debe comprobarse en tiempo y en consecución de los objetivos que estén y que sean realizados con los recursos disponibles.
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img25.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Impacto del proyecto
                p Se refiere a los beneficios concretos que se espera conseguir con el proyecto después de haber alcanzado con éxito los objetivos. Se pretende demostrar cómo los logros del proyecto habrán modificado favorablemente y en forma estable las condiciones iniciales.
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img26_1.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Beneficiarios
                p Dependen del carácter, naturaleza, categoría o tipo de proyecto; su composición es variada y diferente.  La distribución de la población se puede hacer desde el punto de vista social, económico, educativo, de tal manera que permite visualizar la población que puede constituirse en objeto de un proyecto. 
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img26.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Actividades
                p Son las acciones necesarias para alcanzar los resultados o productos del proyecto. Solo se incluyen las actividades que realiza el equipo de trabajo y que se establecen en relación con el tiempo en el que se ejecutarán.
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img27.jpg', alt='')  

            .row.justify-content-evenly.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5 Recursos
                p Se refiere a los medios humanos y materiales disponibles que se invierten en las actividades y que son necesarios para la consecución de los objetivos.
            
              .col-md-6
                img.img-t.img-a(src='@/assets/curso/temas/img28.jpg', alt='')

    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center.align-items-center
        .col-lg-10 
          p Además del ciclo de vida, para abordar las problemáticas desde la perspectiva de proyecto, existen otros métodos o metodologías para asumir las acciones a desarrollar. Cada metodología prioriza los aspectos en los que se enfocará el desarrollo del proyecto, pero todas persiguen alcanzar resultados satisfactorios. La elección de la metodología es uno de los aspectos más importantes en la formulación de proyectos, ya que de la correcta ejecución de cada una de sus etapas, se conseguirán o no, los objetivos previstos.

          p.border-yellow.p-2.text-center.mt-5 Se verá a continuación un referente de las más utilizadas a través del siguiente vídeo: 
                
      figure.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/JC6-d44r7SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-10
          p.bg-yellow-p.p-4.mb-0 En el caso de #[u la creación de los contenidos] o piezas de #[u animación digital] que #[u son en sí mismos un proyecto tecnológico (videojuego, película)] o que sirven como componentes de ellos (aplicación, web, etc.), es necesario evaluar el uso de las metodologías para la gestión de proyectos digitales o de #[i software].

          p.mt-5 La compañía Wrike ha categorizado en su página web las principales metodologías para la gestión de proyectos de la siguiente manera:

      .tarjeta.tarjeta--gris.p-4.mt-5.bg-gradi
        LineaTiempoC.color-primario(text-small)
          .row.justify-content-center.align-items-center.my-5(titulo="Proyecto")
            .col-lg-8
              p.color-p-intro.p-4 #[b Metodologías secuenciales tradicionales]
                ul.lista-ul--color.mt-4
                  li 
                    i.lista-ul__vineta
                    | Metodología de gestión de proyectos en cascada.    
                  li 
                    i.lista-ul__vineta
                    | Método de la ruta crítica (CPM en inglés).
                  li 
                    i.lista-ul__vineta
                    | Gestión de proyectos de cadena crítica (CCPM en inglés).
              
              img.img-t.img-a.mt-5(src='@/assets/curso/temas/img29.svg', alt='')

          .row.justify-content-center.align-items-center.my-5(titulo="Agile")
            .col-lg-8
              p.color-p-intro.p-4 #[b Metodologías Agile]
                ul.lista-ul--color.mt-4
                  li 
                    i.lista-ul__vineta
                    | Metodología de gestión de proyectos Agile.
                  li 
                    i.lista-ul__vineta
                    | Scrum.
                  li 
                    i.lista-ul__vineta
                    | Kanban.
                  li 
                    i.lista-ul__vineta
                    | Extreme Programming (XP).
                  li 
                    i.lista-ul__vineta
                    | Marco de proyectos adaptativo (APF, por sus siglas en inglés).

              img.img-t.img-a.mt-5(src='@/assets/curso/temas/img30.svg', alt='')


          .row.justify-content-center.align-items-center.my-5(titulo="Cambio")
            .col-lg-8
              p.color-p-intro.p-4 #[b Metodologías de gestión del cambio]
                ul.lista-ul--color.mt-4
                  li 
                    i.lista-ul__vineta
                    | Metodología de la cadena de eventos (ECM, por sus siglas en inglés).
                  li 
                    i.lista-ul__vineta
                    | Gestión de proyectos extrema (XPM, por sus siglas en inglés).
              
              img.img-t.img-a.mt-5(src='@/assets/curso/temas/img31.svg', alt='')


          .row.justify-content-center.align-items-center.my-5(titulo="Proceso")
            .col-lg-8
              p.color-p-intro.p-4 #[b Metodologías basadas en el proceso]
                ul.lista-ul--color.mt-4
                  li 
                    i.lista-ul__vineta
                    | Lean.
                  li 
                    i.lista-ul__vineta
                    | Six Sigma.
                  li 
                    i.lista-ul__vineta
                    | Lean Six-Sigma.
                  li 
                    i.lista-ul__vineta
                    | Gestión de proyectos basada en procesos.
              
              img.img-t.img-a.mt-5(src='@/assets/curso/temas/img32.svg', alt='')


          .row.justify-content-center.align-items-center.my-5(titulo="Metodologías")
            .col-lg-8
              p.color-p-intro.p-4 #[b Otras metodologías]
                ul.lista-ul--color.mt-4
                  li 
                    i.lista-ul__vineta
                    | PRINCE2.
                  li 
                    i.lista-ul__vineta
                    | PRiSM.
                  li 
                    i.lista-ul__vineta
                    | Materialización de beneficios.
 
              
              img.img-t.img-a.mt-5(src='@/assets/curso/temas/img33.svg', alt='')

          .row.justify-content-center.align-items-center.my-5(titulo="PMBOK")
            .col-lg-8
              p.color-p-intro.p-4 #[b El método PMBOK: con cinco etapas que son]
                ul.lista-ul--color.mt-4
                  li 
                    i.lista-ul__vineta
                    | Inicio
                  li 
                    i.lista-ul__vineta
                    | Planificación
                  li 
                    i.lista-ul__vineta
                    | Ejecución
                  li 
                    i.lista-ul__vineta
                    | Seguimiento
                  li 
                    i.lista-ul__vineta
                    | Cierre
              
              img.img-t.img-a.mt-5(src='@/assets/curso/temas/img34.svg', alt='') 

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-10
          p Cabe resaltar que, dependiendo de la envergadura del proyecto, estos tipos de metodologías pueden usarse de manera combinada o aleatoria, en función del rigor que requiera cada una de las fases. Por ejemplo, para la fase de identificación se puede utilizar la metodología del árbol de problemas, y definir la ejecución del proyecto con un enfoque de gestión Kanban. En todo caso, cuando se trata de proyectos a pequeña escala, los requisitos casi siempre vendrán dados por la convocatoria de ayudas a la financiación o los concursos a los que el aspirante se presente.
          p Para profundizar y conocer en detalle, en qué consisten estas metodologías, lo invitamos a ver en el material complementario Metodologías de gestión de proyectos.

              

</template>

<script>
export default {
  name: 'Tema3',
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
