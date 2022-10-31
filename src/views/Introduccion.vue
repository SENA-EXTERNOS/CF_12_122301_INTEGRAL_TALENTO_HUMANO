<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')    
      .col-lg-8
        p(data-aos="fade-down") Estimado aprendiz, bienvenido a este componente formativo, que tiene como uno de sus principales objetivos demostrar que la prioridad de cualquier empleador es proteger y promover la salud de sus empleados. Para ello debe estructurar, planear e implementar planes de seguridad y salud en el trabajo, que le permita, por medio de la divulgación de la información, involucrar al personal, asegurando la participación y apropiación de la información. 
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 En la medida que el empleador tenga la posibilidad de ver e identificar los posibles riesgos existentes, se disminuirá la posibilidad de ocurrencia, ya sea de eventos contemplados con anterioridad, o eventos de ocurrencia inesperada, como accidentes o emergencias de cualquier índole. Para esto se requiere poder organizar y distribuir en equipos de trabajo como brigadistas, comités paritarios de seguridad y de convivencia, quienes de acuerdo con sus funciones podrán apoyar, respaldar, organizar y liderar las situaciones en las que se requiera. 

    p(data-aos="fade-down").mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                         
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
