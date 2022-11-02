<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-down") El Sistema de Gestión de Seguridad y Salud en el Trabajo, dispone sobre las necesidades de creación, diseño e implementación de los Programas de Seguridad y Salud en el Trabajo dentro de todas las empresas, cuyo objetivo es velar por la integridad de sus trabajadores, proponiendo actividades que les permita prevenir, informar, capacitar y asesorar a toda la planta de personal desarrollando un nivel de conciencia sobre el autocuidado y el ambiente laboral seguro.

    p(data-aos="fade-down").mb-5 Además, el implementar unos comités técnicos de seguridad, quienes velarán por la correcta ejecución e implementación de este programa dentro de la organización. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
