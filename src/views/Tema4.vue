<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo6        
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Gestión documental
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.up(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/102.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 La gestión documental es un conjunto de actividades administrativas, que permiten organizar, recibir y archivar información. Esta información es revisada y evaluada por las áreas encargadas, las cuales evalúan el nivel de importancia y trascendencia para la empresa y proceden a definir el manejo que se dará a dichos documentos, si requieren ser archivados o evaluados por otras áreas o el tiempo de vigencia que pueden tener y, por último, especificar el destino final que tendrá.

    .row.justify-content-start.align-items-center.mb-5           
      .col-auto.up
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Técnicas de gestión documental

    .row.justify-content-center.align-items-start.mb-5 
      .col-lg-2.up
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/103.svg', alt='')       
      .col-lg-10.up
        p(data-aos="fade-down") Dada la importancia sobre el manejo de documentos, a continuación, se plantea el proceso para el manejo de la documentación recibida, debido a que es importante que el personal a cargo, pueda evaluar la relevancia de la información que se recibe.
    p(data-aos="fade-down").mb-5 Los siguientes son los pasos a seguir:        
    .bg10 
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-8    
          LineaTiempoD.color-primario
            .row.justify-content-center.align-items-start(numero="A" titulo="Planeación")
              .col-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/105.svg', alt='') 
              .col.my-3
                p Proceso donde se revisa, analiza e interpreta la información, partiendo del carácter legal, técnico y funcional de la empresa. 
            .row.justify-content-center.align-items-start(numero="B" titulo="Producción")
              .col-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/106.svg', alt='') 
              .col.my-3
                p Los documentos se valoran de acuerdo con el proceso que se aplica, estudiando desde cómo es creado, su categorización, su importancia y su función.
            .row.justify-content-center.align-items-start(numero="C" titulo="Gestión y trámite")
              .col-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/107.svg', alt='') 
              .col.my-3
                p Se realiza un análisis sobre el propósito del documento y la forma como impacta los procesos administrativos. 
            .row.justify-content-center.align-items-start(numero="D" titulo="Organizar")
              .col-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/108.svg', alt='') 
              .col.my-3 
                p Se establece lo que se hará con el documento, a qué departamento se dirige, su categoría, el tiempo que se va a almacenar.
            .row.justify-content-center.align-items-start(numero="E" titulo="Transferencia")
              .col-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/109.svg', alt='') 
              .col.my-3
                p Se administra el formato, la forma como migra la información, la estructura que se va a manejar, la forma como se mantiene, o si requiere ser convertido.
            .row.justify-content-center.align-items-start(numero="F" titulo="Ciclo de vida del documento")
              .col-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/110.svg', alt='') 
              .col.my-3
                p Se decide el ciclo de vida que tendrá el documento, saber si se conservará o eliminará. 
            .row.justify-content-center.align-items-start(numero="G" titulo="Mantenimiento a largo plazo")
              .col-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/111.svg', alt='') 
              .col.my-3
                p Al cumplir con los diferentes requerimientos, se determina la forma como se preservará. 
            .row.justify-content-center.align-items-start(numero="H" titulo="Evaluación")
              .col-auto.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/112.svg', alt='') 
              .col.my-3
                p Este proceso se hace continuamente para identificar el orden de prioridad de la información para la empresa. Se decide si continúa su preservación o será eliminado.
      .row.justify-content-start.align-items-center.mb-5           
        .col-auto
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Reporte de novedades

      .row.justify-content-center.align-items-start.mb-5 
        .col-lg-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/113.svg', alt='')       
        .col-lg-10
          p(data-aos="fade-down") Como su nombre lo dice, el reporte de novedades, permite contextualizar e informar a la empresa sobre situaciones atípicas que pueden presentarse durante el desarrollo de un proceso. Dicho reporte es diseñado por la empresa y cada departamento lo adecúa de acuerdo con sus necesidades. 

      .row.justify-content-start.align-items-center.mb-5           
        .col-auto
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Formatos  

      .row.justify-content-center.align-items-start.mb-5 
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/114.png', alt='')        
        .col-lg-8
          p(data-aos="fade-down") Después de pensar y observar asuntos como las campañas de seguridad y salud, sus tipos, la forma conceptual del tema del componente, las brigadas, los comités, las carteleras informativas, la gestión documental, entre otros temas y, por último, se analiza el formato que está estructurado y diseñado para cumplir con características técnicas de recolección de información específica, que permita verificar la aplicación adecuada de los procesos.
          .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Generalmente, las empresas desarrollan los formatos cumpliendo con normas establecidas para cada actividad; estos formatos ya vienen estructurados, sobre datos específicos, información clave que permita conocer el proceso paso a paso, es decir, se diligencian en cada fase en la que se encuentren, mostrando los objetivos y los avances alcanzados.
          p(data-aos="fade-down") #[b Ejemplos:] formato para el reporte de condiciones inseguras, formato de seguimiento de acciones correctivas, preventivas y de mejora, etc.
    .row.justify-content-center.align-items-center        
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis y material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.
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
