(function(e){function a(a){for(var o,t,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)t=c[d],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&u.push(i[t][0]),i[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,t=1;t<n.length;t++){var c=n[t];0!==i[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},t={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7",tema8:"tema8"}[e]||e)+"."+{actividad:"c7d083ce","chunk-0206bfa0":"5ee2c20a","chunk-0b10f9b9":"204bb85e","chunk-0d02006a":"6c318074","chunk-10d7dd5c":"900a4ca9","chunk-13a6037e":"7e587da9","chunk-205221e7":"82f28f31","chunk-2c06842c":"03c707f1","chunk-2d0e96ec":"36061af0","chunk-2d208d90":"624886ef","chunk-2d21d0e2":"9d5149d2","chunk-2d22c123":"09b2207b","chunk-2d4cff20":"a2d587be","chunk-2e80bb9a":"3bf8ba1b","chunk-2fdc87ee":"6e5ceced","chunk-4ef72cd9":"a90e6a73","chunk-515a8379":"684e720f","chunk-5309f94e":"b3535537","chunk-53ccb27e":"d775fe39","chunk-59974754":"22630042","chunk-60a150e8":"814603e1","chunk-69444b4c":"11d4a5d3","chunk-6e1e538a":"6fa6f4c5","chunk-7d598149":"64b5dfeb","chunk-a71bdd78":"c7e2045c","chunk-c796899c":"8db2fdf4","chunk-cda87f0a":"e1761a82","chunk-e8a7823a":"2b4d785b",comple:"e7ac3640",creditos:"9add533a",glosario:"5ea8099f",intro:"c6db982c",referencias:"459c64db",sintesis:"2a69455d",tema1:"73abb4c1",tema2:"6ce1c004",tema3:"460734ed",tema4:"ede90386",tema5:"d6f056aa",tema6:"73d08630",tema7:"d504233d",tema8:"c76fe9e9"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0b10f9b9":1,"chunk-0d02006a":1,"chunk-10d7dd5c":1,"chunk-205221e7":1,"chunk-2d4cff20":1,"chunk-4ef72cd9":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60a150e8":1,"chunk-6e1e538a":1,"chunk-7d598149":1,"chunk-a71bdd78":1,"chunk-cda87f0a":1,comple:1,creditos:1,glosario:1,referencias:1,tema1:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7",tema8:"tema8"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0b10f9b9":"e71cb334","chunk-0d02006a":"2d5ae54d","chunk-10d7dd5c":"e71cb334","chunk-13a6037e":"31d6cfe0","chunk-205221e7":"e71cb334","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d4cff20":"e71cb334","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-4ef72cd9":"e71cb334","chunk-515a8379":"5747a622","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"b2c19097","chunk-60a150e8":"e71cb334","chunk-69444b4c":"31d6cfe0","chunk-6e1e538a":"d2f45819","chunk-7d598149":"e71cb334","chunk-a71bdd78":"e71cb334","chunk-c796899c":"31d6cfe0","chunk-cda87f0a":"5d24a906","chunk-e8a7823a":"31d6cfe0",comple:"64ff4184",creditos:"b8c268a1",glosario:"6de419a1",intro:"31d6cfe0",referencias:"a2fc87db",sintesis:"31d6cfe0",tema1:"df7ed454",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0",tema7:"31d6cfe0",tema8:"31d6cfe0"}[e]+".css",i=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===i))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete t[e],m.parentNode.removeChild(m),n(r)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){t[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",u.name="ChunkLoadError",u.type=o,u.request=t,n[1](u)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"1e70":function(e,a,n){"use strict";n("c5df")},"294d":function(e,a,n){"use strict";n("9ea8")},"2a6c":function(e,a,n){"use strict";n("3483")},3483:function(e,a,n){},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,t,i,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("section",{staticClass:"inicio"},[o("BannerPrincipalC",{staticClass:"mb-5"}),o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5 mb-5",attrs:{id:"contenidos"}},[e._m(0),o("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[o("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(a){return o("router-link",{key:"desarrollo-"+a.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:a.nombreRuta}}},[o("div",{staticClass:"desarrollo-contenidos__item__texto"},[a.hasOwnProperty("numero")?o("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(a.numero))]):o("i",{staticClass:"desarrollo-contenidos__item__icono",class:a.icono}),o("span",{domProps:{innerHTML:e._s(a.titulo)}})]),o("a",{staticClass:"boton--sm"},[o("span",{staticClass:"d-none d-md-block"},[e._v("Ver contenido")]),o("span",{staticClass:"d-md-none"},[e._v("Ver")])])])})),1)])]),o("div",{staticClass:"container tarjeta tarjeta__template--azul-claro creditos-inicio px-3 py-4 px-sm-5"},[e.creditosInicio?o("div",{staticClass:"creditos-inicio__container"},e._l(e.creditosInicio,(function(a,n){return o("div",{staticClass:"creditos-inicio__item"},[o("div",{staticClass:"row"},[o("div",{staticClass:"creditos-inicio__titulo col-md-3 col-lg-2 mb-3 mb-md-0"},[o("h5",{staticClass:"mb-0",domProps:{innerHTML:e._s(a.titulo)}})]),o("div",{staticClass:"creditos-inicio__imagenes col"},e._l(a.contenido,(function(e){return o("img",{attrs:{src:e}})})),0)]),n!=e.creditosInicio.length-1?o("hr"):e._e()])})),0):o("div",{staticClass:"text-center"},[o("img",{staticClass:"d-inline-block mb-2",staticStyle:{width:"100px"},attrs:{src:n("9eb5")}}),o("h5",{staticClass:"mb-0"},[e._v("Ecosistema de recursos educativos digitales")])])]),o("Footer")],1)},f=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"titulo__template--a mb-4"},[n("h3",[e._v("Desarrollo"),n("br"),e._v("de contenidos")])])}],b=n("2909"),g=(n("99af"),n("4de4"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"banner-principal"},[n("div",{staticClass:"container degrade tarjeta"},[n("div",{staticClass:"row banner-principal__row",style:{"background-image":e.globalData.fondoBannerPrincipal?"url("+e.globalData.fondoBannerPrincipal+")":"none"}},[n("div",{staticClass:"col-lg-7 col-xxl-5 ps-4 ps-sm-5 py-4 py-sm-5 banner-principal__info"},[n("div",{staticClass:"banner-principal__componente"},[n("h1",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.componenteFormativo)}})]),n("div",{staticClass:"banner-principal__descripcion"},[n("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})]),n("div",{staticClass:"banner-principal__accion"},[n("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[n("span",{staticClass:"me-1"},[e._v("Ver más")]),n("i",{staticClass:"fas fa-angle-right"})])],1)]),n("div",{staticClass:"d-none d-lg-block col-lg-5 px-0 banner-principal__img"},[n("div",{staticClass:"contenedor-imagenes"},[n("img",{attrs:{src:e.globalData.imagenBannerPrincipal}}),e._m(0),e._m(1)])])])])])}),v=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"flotante_2"},[o("img",{attrs:{src:n("ad66")}})])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"flotante_3"},[o("img",{attrs:{src:n("9188")}})])}],h=(n("7db0"),n("25f0"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),{computed:{menuData:function(){return this.$config.menuPrincipal.menu},iniciarLnk:function(){var e=this.menuData.find((function(e){return"introduccion"===e.nombreRuta})),a=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return e||a}},methods:{quitarAcentos:function(e){var a={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return e.split("").map((function(e){return a[e]||e})).join("").toString()}}}),y={name:"BannerPrincipal",mixins:[h],computed:{globalData:function(){return this.$config.global}}},C=y,k=(n("2a6c"),Object(s["a"])(C,g,v,!1,null,null,null)),_=k.exports,w=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[e._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[e._v(" Base v"+e._s(e.versiones.base)+" - Paquete v"+e._s(e.versiones.pkg))])])])])},R=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"col-auto mb-2 mb-sm-0"},[o("img",{attrs:{src:n("52e5")}})])}],P={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},x=P,D=(n("294d"),Object(s["a"])(x,w,R,!1,null,null,null)),M=D.exports,S={name:"Inicio",components:{BannerPrincipalC:_,Footer:M},computed:{menuPrincipalData:function(){return this.$config.menuPrincipal},creditosInicio:function(){return this.$config.creditosInicio},desarrolloContenidosData:function(){var e=[].concat(Object(b["a"])(this.menuPrincipalData.menu),Object(b["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},E=S,j=(n("1e70"),Object(s["a"])(E,p,f,!1,null,null,null)),A=j.exports,z=n("7e58");u["a"].use(m["a"]);var I=new m["a"]({routes:[{path:"/",name:"inicio",component:A},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:z["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}},{path:"tema7",name:"tema7",component:function(){return n.e("tema7").then(n.bind(null,"a2b2"))}},{path:"tema8",name:"tema8",component:function(){return n.e("tema8").then(n.bind(null,"f96f"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),L=I,O=n("1c2c"),T=(n("a3a0"),{global:{componenteFormativo:"Aspectos legales y presupuestos",descripcionCurso:"El mercado exige una gran especialización e invita a ser experto en todas las áreas comprometidas de una labor. En un mundo en el que constantemente suceden cambios, es necesario estar preparado para afrontar la vida laboral desde la independencia y saber cómo conseguir, gestionar y comercializar proyectos a través de conocimientos financieros para definir si “cuadran las cuentas”.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Legislación para industrias creativas y culturales ",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Formulación de proyectos ",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"¿Cómo realizar proyectos? ",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Presentar proyectos a convocatorias y concursos",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Fuentes de financiación para proyectos de animación digital",desarrolloContenidos:!0},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Seguimiento o monitoreo de proyectos",desarrolloContenidos:!0},{nombreRuta:"tema7",icono:"far fa-file-alt",numero:"7",titulo:"Modelo de negocio, costeo y presupuesto",desarrolloContenidos:!0},{nombreRuta:"tema8",icono:"far fa-file-alt",numero:"8",titulo:"Marketing digital",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Departamento Administrativo de la Función Pública (2012). Guía para la construcción de indicadores de gestión. ",link:"https://www.funcionpublica.gov.co/documents/418537/506911/1595.pdf/6c897f03-9b26-4e10-85a7-789c9e54f5a3 "},{referencia:"Fuentes Rueda, P (2020). Claves fundamentales para hacer un buen pitching audiovisual | UNIR. ",link:"https://www.unir.net/humanidades/revista/claves-fundamentales-para-hacer-un-buen-pitching-audiovisual "},{referencia:"Lasala, C (2009) Formulación de proyectos audiovisuales. Mediax, gente de medios. ",link:"https://www.mediax.online/"},{referencia:"Mendezu, J. (2020). Plantilla de presupuesto para animación 2D. Crehana. ",link:"https://www.crehana.com/recursos/herramientas/presupuesto-animacion-2d"},{referencia:"Orlando, M; Ozollo, MF, (2005). Formulación de proyectos culturales. Universidad Nacional de Cuyo. Departamento de Educación a Distancia; Ediciones Biblioteca Digital UNCuyo. ",link:"https://bdigital.uncu.edu.ar/1098"},{referencia:"Ortegon, E, Pacheco J. F. y Roura Horacio (2005). Metodología general de identificación, preparación y evaluación de proyectos de inversión pública. Instituto Latinoamericano de Planificación Económica y Social (ILPES). ",link:"https://www.cepal.org/es/publicaciones/5608-metodologia-general-identificacion-preparacion-evaluacion-proyectos-inversion"},{referencia:"Roselló, D. (2018). Diseño y evaluación de proyectos culturales. Ariel."},{referencia:"Secretaría de cultura, recreación y deporte de la Alcaldía Mayor de Bogotá (2020). Curso de formulación de proyectos culturales 2020. ",link:"https://formacion.scrd.gov.co/ "}],glosario:[{termino:"Crowfunding",significado:"cooperación colectiva para recaudar dinero por medio de las redes, con la finalidad de financiar un proyecto a personas como a colectivos."},{termino:"Convocatoria",significado:"es un llamado a concursar en un evento que puede ser público o privado y que ofrece algún beneficio para quien resulte favorecido. El beneficio puede ser de tipo económico, de tipo formativo (becas de estudio), consultoría (mentoring), participación, etc."},{termino:"Formulacion de proyectos",significado:"tiene que ver con las herramientas (metodologías, formatos) con los que se definen las acciones que se van a realizar. Es la manera como se interlocuta con el financiador/inversor."},{termino:"Indicadores",significado:"permiten evidenciar el nivel de cumplimiento acerca de lo que está haciendo la organización y sobre los efectos de sus actividades a través de la medición y seguimiento de aspectos definidos previamente."},{termino:"Marketing digital",significado:"se refiere a las acciones que una organización realiza para alcanzar unos objetivos determinados, que siempre están relacionados con el mejoramiento de los ingresos."},{termino:"Metodología",significado:"se refiere al método que se utiliza para estructurar la manera de formular el proyecto, (por ejemplo, a partir de los objetivos, línea base) y también a la manera como se gestionan los proyectos."},{termino:"Presupuesto",significado:"se trata de la organización y estimación de los recursos necesarios en cada una de las etapas y actividades del proyecto, divididos en tipos de gastos o rubros."},{termino:"Proyecto",significado:"se trata de una planificación que contempla un conjunto de actividades a realizar de manera articulada entre sí, con el fin de producir determinados bienes o servicios capaces de satisfacer necesidades o resolver problemas, dentro de los límites de un presupuesto y de un periodo de tiempo dados."},{termino:"Social media",significado:"son herramientas que se ponen en marcha para abrir diversos canales de comunicación en el mundo digital, que a la vez se constituyen como un canal de comunicación con una audiencia completamente digital."}],complementario:[{texto:"Ley 814 de 2003 - EVA - Función Pública. (2021, Nov. 26). ",tipo:"Ley",link:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8796 "},{texto:"Avance Jurídico Casa Editorial Ltda. (2021, Oct. 21). Leyes desde 1992 - Vigencia expresa y control de constitucionalidad [LEY_1556_2012]. Senado de la República de Colombia. ",tipo:"Ley",descarga:"/downloads/ley_1556_de_2012.pdf"},{texto:"Economía Naranja. (2020). Decreto 474 de 2020. ",tipo:"Artículo Web",link:"https://economianaranja.gov.co/beneficios-sector-audiovisual"},{texto:"Institución educativa de postgrado en administración ESAN (2018). Métodos de investigación en proyectos sociales: ¿cuáles se usan? ",tipo:"Artículo Web",link:"https://www.esan.edu.pe/apuntes-empresariales/2018/05/metodos-de-investigacion-en-proyectos-sociales-cuales-se-usan/ "},{texto:"Wrike. (s.f). Metodologías de gestión de proyectos. ",tipo:"Artículo Web",link:"https://www.wrike.com/es/project-management-guide/metodologias-de-gestion-de-proyectos/  "},{texto:"Fuentes, P. (2018). Claves fundamentales para hacer un buen pitching audiovisual. ",tipo:"Artículo Web",link:"https://www.unir.net/humanidades/revista/claves-fundamentales-para-hacer-un-buen-pitching-audiovisual/"},{texto:"RTVE. (2020). TINET RUBIRA – Pitching: cómo vender nuestro proyecto – Creación Audiovisual [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=fQPPpvuNzxk"},{texto:"UOC. (s.f.). Cómo realizar el seguimiento de un proyecto – Metodologías de seguimiento y control. ",tipo:"Artículo Web",link:"http://cv.uoc.edu/UOC/a/moduls/90/90_574b/web/main/m4/c6/1.html "},{texto:"Rivera, S. (2015). Diagrama de Gantt – Administración de Proyectos [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=HMQEKGHhVxI"},{texto:"Londoño, P. (s.f.). 31 herramientas de gestión de proyectos destacadas para 2022. ",tipo:"Artículo web",link:"https://blog.hubspot.es/marketing/herramientas-gestion-proyectos "},{texto:"Trabajar Desde Casa. (2014). Modelo Canvas – Cómo aplicar el modelo Canvas en el lienzo – Ejemplo práctico. [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=i1Le5GYkBT8 "}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Paulo César Hernandez",cargo:"Experto temático ",centro:"Centro de Servicios y Gestión Empresarial - Regional Medellín"},{nombre:"Oscar Absalón Guevara",cargo:"Diseñador Instruccional",centro:"Centro de Gestión Industrial – Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora metodológica y pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Oscar Ivan Uirbe Ortiz",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo López ",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ricardo Vásquez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nelson Iván Vera",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Edward Leonardo Pico Cabra",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=T;var q=n("9224");o["a"].prototype.$package=q,new o["a"]({router:L,store:O["a"],render:function(e){return e(d)}}).$mount("#app")},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.972ee363.png"},9188:function(e,a,n){e.exports=n.p+"img/flotante3.7dbe9a03.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"5.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"4.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9ea8":function(e,a,n){},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ad66:function(e,a,n){e.exports=n.p+"img/flotante2.0fe0afce.png"},c5df:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.fa791b00.png"}});
//# sourceMappingURL=app.4ec3ca02.js.map