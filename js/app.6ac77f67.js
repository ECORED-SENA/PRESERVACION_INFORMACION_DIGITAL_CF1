(function(e){function a(a){for(var i,o,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,o=1;o<n.length;o++){var c=n[o];0!==t[c]&&(i=!1)}i&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"41cd3a9d","chunk-0206bfa0":"f09f309e","chunk-0c047e41":"b9614aa6","chunk-13a6037e":"ead39d34","chunk-25b302c8":"e6e9cd3d","chunk-26fc7596":"094fe604","chunk-2c06842c":"c6a8376d","chunk-2d0e96ec":"06584c22","chunk-2d208d90":"13161f9f","chunk-2d21d0e2":"2408b59f","chunk-2d22c123":"749928d6","chunk-2d2747e2":"21d2a82e","chunk-2e80bb9a":"911f9162","chunk-319206de":"e9ab1a52","chunk-32334cb6":"a5618e96","chunk-3c57cd7b":"a0f41f4c","chunk-4cdd78c0":"d8697ebc","chunk-4f2d402a":"1914ab4b","chunk-4fde0a08":"ec46401f","chunk-515a8379":"21a3a6de","chunk-53ccb27e":"0f555779","chunk-59974754":"5262e012","chunk-6e1e538a":"48122d8f","chunk-766a929b":"26c112cd","chunk-c796899c":"9f94f8db","chunk-e8a7823a":"df1da7a2","chunk-f2df7d2c":"2dfaf32b","chunk-fde47172":"0d70e4cb",comple:"68dd7d39",creditos:"411897e9",glosario:"39fd0aa0",intro:"8a7f7b3c",referencias:"0348799f",tema1:"234934ba",tema2:"b22994ca",tema3:"82071d9d"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1,tema3:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"e71cb334","chunk-13a6037e":"31d6cfe0","chunk-25b302c8":"e71cb334","chunk-26fc7596":"e71cb334","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"e71cb334","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"e71cb334","chunk-3c57cd7b":"e71cb334","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"e71cb334","chunk-4fde0a08":"5d24a906","chunk-515a8379":"44d7f273","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"09e1f206","chunk-6e1e538a":"d2f45819","chunk-766a929b":"b94fc780","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"e71cb334","chunk-fde47172":"31d6cfe0",comple:"737250c7",creditos:"3b5a2621",glosario:"a4c08c8e",intro:"10bdcd09",referencias:"b783bbb5",tema1:"23931958",tema2:"c9af24f2",tema3:"10bdcd09"}[e]+".css",t=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===i||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[e],m.parentNode.removeChild(m),n(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var i=t[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,n){i=t[e]=[a,n]}));a.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},1633:function(e,a,n){e.exports=n.p+"img/float2.76d1157a.png"},"1e70":function(e,a,n){"use strict";n("c5df")},"230f":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.bc764955.svg"},2896:function(e,a,n){e.exports=n.p+"img/0.2795d457.svg"},"4e7e":function(e,a,n){},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,o,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("section",{staticClass:"inicio"},[i("BannerPrincipal",{staticClass:"mb-5"}),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5 mb-5",attrs:{id:"contenidos"}},[e._m(0),i("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[i("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(a){return i("router-link",{key:"desarrollo-"+a.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:a.nombreRuta}}},[i("div",{staticClass:"desarrollo-contenidos__item__texto"},[a.hasOwnProperty("numero")?i("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(a.numero))]):i("i",{staticClass:"desarrollo-contenidos__item__icono",class:a.icono}),i("span",{domProps:{innerHTML:e._s(a.titulo)}})]),i("a",{staticClass:"boton--sm"},[i("span",{staticClass:"d-none d-md-block"},[e._v("Ver contenido")]),i("span",{staticClass:"d-md-none"},[e._v("Ver")])])])})),1)])]),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro creditos-inicio px-3 py-4 px-sm-5"},[e.creditosInicio?i("div",{staticClass:"creditos-inicio__container"},e._l(e.creditosInicio,(function(a,n){return i("div",{staticClass:"creditos-inicio__item"},[i("div",{staticClass:"row"},[i("div",{staticClass:"creditos-inicio__titulo col-md-3 col-lg-2 mb-3 mb-md-0"},[i("h5",{staticClass:"mb-0",domProps:{innerHTML:e._s(a.titulo)}})]),i("div",{staticClass:"creditos-inicio__imagenes col"},e._l(a.contenido,(function(e){return i("img",{attrs:{src:e}})})),0)]),n!=e.creditosInicio.length-1?i("hr"):e._e()])})),0):i("div",{staticClass:"text-center"},[i("img",{staticClass:"d-inline-block mb-2",staticStyle:{width:"100px"},attrs:{src:n("9eb5")}}),i("h5",{staticClass:"mb-0"},[e._v("Ecosistema de recursos educativos digitales")])])]),i("Footer")],1)},f=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"titulo__template--a mb-4"},[n("h3",[e._v("Desarrollo"),n("br"),e._v("de contenidos")])])}],b=n("2909"),g=(n("99af"),n("4de4"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"banner-principal"},[n("div",{staticClass:"container tarjeta p-0",style:{"background-image":e.globalData.fondoBannerPrincipal?"url("+e.globalData.fondoBannerPrincipal+")":"none"}},[n("div",{staticClass:"row banner-principal__row g-0"},[n("img",{staticClass:"fondo-contenido d-none d-xl-block",attrs:{src:e.globalData.fondoContenido}}),n("div",{staticClass:"col-xl-6 col-xl-7 ps-4 ps-sm-5 py-2 py-sm-5 banner-principal__info"},[n("div",{staticClass:"banner-principal__componente"},[n("h1",{staticClass:"mb-0 px-5",domProps:{innerHTML:e._s(e.globalData.componenteFormativo)}})]),n("div",{staticClass:"col-xl-9"},[n("div",{staticClass:"banner-principal__descripcion"},[n("p",{staticClass:"mb-0 px-5",domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})])]),n("div",{staticClass:"banner-principal__accion"},[n("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[n("span",{staticClass:"me-1"},[e._v("Ver más")]),n("i",{staticClass:"fas fa-angle-right"})])],1)]),e._m(0)])])])}),h=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"col-lg-5 px-5 position-relative d-none d-xl-block"},[i("div",{staticClass:"contenedor-imagenes position-relative h-100"},[i("div",{staticClass:"imagen_flotante_5 d-none d-xl-block"},[i("img",{staticStyle:{width:"800px"},attrs:{src:n("9af0")}})]),i("div",{staticClass:"imagen_flotante_2"},[i("img",{attrs:{src:n("1633")}})]),i("div",{staticClass:"imagen_flotante_3"},[i("img",{attrs:{src:n("fc4f")}})]),i("div",{staticClass:"imagen_flotante_4"},[i("img",{attrs:{src:n("aa55")}})]),i("div",{staticClass:"imagen_flotante_1"},[i("img",{attrs:{src:n("b6aa")}})])])])}],v=n("ecc5"),C={name:"BannerPrincipal",mixins:[v["a"]],computed:{globalData:function(){return this.$config.global}}},y=C,k=(n("a12e"),Object(s["a"])(y,g,h,!1,null,null,null)),_=k.exports,w=n("e9c6"),x={name:"Inicio",components:{BannerPrincipal:_,Footer:w["a"]},computed:{menuPrincipalData:function(){return this.$config.menuPrincipal},creditosInicio:function(){return this.$config.creditosInicio},desarrolloContenidosData:function(){var e=[].concat(Object(b["a"])(this.menuPrincipalData.menu),Object(b["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},S=x,R=(n("1e70"),Object(s["a"])(S,p,f,!1,null,null,null)),j=R.exports,D=n("7e58");u["a"].use(m["a"]);var P=new m["a"]({routes:[{path:"/",name:"inicio",component:j},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:D["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),E=P,M=n("1c2c"),I=(n("a3a0"),{global:{componenteFormativo:"Generalidades información digital",descripcionCurso:"La información por ser un activo primordial en las organizaciones tiene gran importancia en el manejo del archivo y su digitalización, ayuda a mejorar los procesos, procedimientos internos y externos en cada una de las empresas y entidades. Es así como la información digital se convierte no solo en escanear y almacenar información, sino en aplicar procesos con técnicas según normativa que contribuya a mantener la información preservada y disponible para sus usuarios.",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("230f"),fondoBannerInterno:n("2896")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Generalidades",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Conceptos básicos",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Bibliotecas digitales",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Repositorios digitales",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Objetos digitales",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Técnicas de preservación",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Barrueco, M. (s.f). Preservación y conservación de documentos digitales. ",link:"http://www.edaddeplata.org/docactos/pdf/educativa/manual/CAPITULO7.pdf "},{referencia:"Bloguer.com. (2017). Herramientas tecnológicas para Historia. ",link:"http://herramientasparahistoria.blogspot.com/2017/01/repositorios-digitales.html "},{referencia:"Candas, J. (2006). El papel de los metadatos en la preservación digital. ",link:"http://eprints.rclis.org/8359/1/final.pdf "},{referencia:"Colonna, M. (2019). Repositorios digitales. Prezi.",link:"https://prezi.com/p/2wncxn_eaqmv/repositorios-digitales/ "},{referencia:"Escobar, C. (2020). Preservación digital. Uah.",link:"https://fen.uahurtado.cl/2020/articulos/preservacion-digital/ "},{referencia:"Evies, Y. (2017). Biblioteca digital. Issuu",link:"https://issuu.com/yadirievies/docs/bibliotecas_digitales"},{referencia:"González, L. (2014). Técnicas de preservación digital. Biblipos.",link:"https://www.bibliopos.es/tecnicas-de-preservacion-digital/"},{referencia:"López, C. (2021). Objetos de aprendizaje.",link:"http://www.biblioweb.tic.unam.mx/libros/repositorios/objetos_aprendizaje.htm"},{referencia:"Lowerison, G. y Boyd, G. (2003). Learning objects in distance education: addressing issues of quality, learner control and accessibility. CADEACED Conference. ",link:""},{referencia:"Villegas, A. (2021). Los objetos digitales de aprendizaje. E-historia. ",link:"http://www.e-historia.cl/e-historia/los-objetos-digitales-de-aprendizaje-odas-2/ "}],glosario:[{termino:"Autenticidad",significado:"Es un adjetivo que califica a aquello que está documentado o certificado como verdadero o seguro."},{termino:"Consumidor",significado:"Es la etapa última del proceso productivo. Es un actor vital para el desarrollo de la economía o proceso mercantil. Es el que adquiere el producto o servicio."},{termino:"Derechos de autor",significado:"Se utiliza para describir los derechos de los creadores sobre sus obras literarias y artísticas. "},{termino:"Estrategias",significado:"Son procedimientos dispuestos para la toma de decisiones y/o para accionar frente a un determinado escenario. "},{termino:"Evidencias",significado:"Son una muestra verificada y certera, obtenida en una investigación."},{termino:"Legibilidad",significado:"Es la facilidad con que se puede leer y comprender un texto. En un sentido más amplio es la aptitud de un texto de ser leído fácil y cómodamente, y esta aptitud hace referencia a elementos tipográficos, de presentación del escrito en la página, y también al estilo, a la claridad de la exposición, a la manera de escribir, al lenguaje."},{termino:"<i>Marketing </i> digital",significado:"Es la aplicación de las estrategias de comercialización llevadas a cabo en los medios digitales."},{termino:"Modelo OASIS",significado:"Sistema de información de archivo abierto es una Norma ISO, desarrollada originalmente por el Consultative Committee for Space Data Systems (ccsds), que define los procesos necesarios para preservar y acceder a los objetos de información de forma efectiva y a largo plazo, y establece un lenguaje común que los describe."},{termino:"<i>Open Source</i>",significado:"La expresión <i>Open Source</i> (o código abierto) hace referencia al <i>software</i> (OSS) que es un código diseñado de manera que sea accesible al público, en el que todos pueden ver, modificar y distribuir el código de la forma que consideren conveniente."},{termino:"Preservación",significado:"Es cuidar, amparar o defender algo con anticipación, con el objetivo de evitar un eventual perjuicio o deterioro. "},{termino:"Productor",significado:"Los productores son el sistema de apoyo para los artistas, las personas que conectan a los clientes con la visión, que ofrecen estructura al caos de la producción cinematográfica, los que mantienen toda la máquina funcionando sin problemas para que los conductores puedan conducir la película desde la imaginación hasta la realidad tangible."},{termino:"Registro",significado:"Es el espacio físico o virtual donde se deja constancia de un hecho o el acto de hacer lo mismo. Esto, con el fin de que terceras personas y las autoridades competentes estén informadas al respecto."},{termino:"Sistemas informáticos",significado:"Es un sistema que permite almacenar y procesar información; es el conjunto de partes interrelacionadas: <i>hardware, software</i> y personal informático."},{termino:"Técnicas",significado:"Se define la manera en que un conjunto de procedimientos, materiales o intelectuales es aplicado en una tarea específica, con base en el conocimiento de una ciencia o arte, para obtener un resultado determinado."}],complementario:[{texto:"Astrid, B. (2020). Bibliotecas virtuales y digitales [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=NgJ6Gb79PxI"},{texto:"Botel, J. (2017). ¿Qué es un repositorio digital? [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=u9lyFwpDTb0"},{texto:"Dina, I. (2014). Fundamentos de la preservación digital. [video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=D8mEBZAg_7s"},{texto:"Dina, I. (2014). Estrategias técnicas de preservación digital. [video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=o3znbolaYeQ&t=4s"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Jhon Jairo Villamizar Mora",cargo:"Experto temático ",centro:"Centro de la Industria, la Empresa y los Servicios - CIES - Regional Norte de Santander"},{nombre:"Claudia Milena Hernández Naranjo",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora metodológica y pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:["Yuly Andrea Rey Quiñonez"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Andres Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Ernesto Navarro Jaimes",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Víctor Raúl Cárdenas Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});i["a"].prototype.$config=I;var z=n("9224");i["a"].prototype.$package=z,new i["a"]({router:E,store:M["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"5.0.1","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"4.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9af0":function(e,a,n){e.exports=n.p+"img/float5.17cbb55c.png"},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a12e:function(e,a,n){"use strict";n("4e7e")},a3a0:function(e,a,n){},aa55:function(e,a,n){e.exports=n.p+"img/float4.bb1493ec.png"},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.e105168f.svg"},b6aa:function(e,a,n){e.exports=n.p+"img/float1.5afa3185.png"},c5df:function(e,a,n){},fc4f:function(e,a,n){e.exports=n.p+"img/float3.05166abf.png"}});
//# sourceMappingURL=app.6ac77f67.js.map