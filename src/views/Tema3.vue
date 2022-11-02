<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo5
    .bloque-fondo4  
      .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
        .titulo-principal__numero
          span 3
        h1 Tipos de divulgación
      

      .row.justify-content-center.align-items-start.mb-5 
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/80.png', alt='')        
        .col-lg-8
          p(data-aos="fade-down") La divulgación de gestión interna permite transmitir información relevante para todo el personal, tanto administrativo, operativo, de servicio al cliente o gerencial, la cual hace posible divulgar la gestión interna, como políticas, directrices, estrategias, lineamientos, actividades, dinámicas, formatos, circulares y comunicados generales.
          .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 En la actualidad, dada la responsabilidad ambiental que se promueve, la mayoría de las empresas están reduciendo cualquier tipo de comunicado por medio de papel.                            

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-2
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Canales 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/81.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 La empresa diseña, desarrolla e implementa los medios en los cuales transmite la información. Algunos canales físicos son las circulares, los memorandos, informes escritos, certificaciones, carteleras, entre otros. Otro componente, son las tecnologías de la información y comunicación que juegan un papel importante ya que proveen herramientas como el intranet, internet, el chat, mensajería interna, correo electrónico, redes telefónicas, fax y página web.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Tipos de Carteleras 
    p(data-aos="fade-down") Teniendo en cuenta los tipos de divulgación físicos, las carteleras son canales de comunicación visuales, utilizados de manera llamativa para informar y divulgar sobre temas específicos a los empleados de una empresa. 
    p(data-aos="fade-down").mb-5 Diferentes tipos de carteleras: 
    .row.justify-content-center.mb-5           
      .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/82.svg' alt='AvatarTop')
          div.text-center.bg2.p-4.pt-5.h-100
            h4.pt-3.mb-3 Institucionales o de información general
            p.mb-0 Informar a la empresa sobre actividades, hechos representativos y situaciones actuales.
      .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/83.svg' alt='AvatarTop')
          div.text-center.bg2.p-4.pt-5.h-100
            h4.pt-3.mb-3 Administrativas
            p.mb-0 Transmite actividades o requerimientos de la administración.
      .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/84.svg' alt='AvatarTop')
          div.text-center.bg2.p-4.pt-5.h-100
            h4.pt-3.mb-3 Reglamentarias
            p.mb-0 Son las exigidas a nivel legal, como el reglamento interno del trabajo, reglamento de higiene y seguridad industrial, reglamento de seguridad, etc.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-2
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Técnicas

    p(data-aos="fade-down") Las técnicas de comunicación y divulgación en una empresa, son herramientas administrativas que buscan transmitir la información de manera clara, sencilla y específica al público objetivo. Por este motivo se requiere la identificación de necesidades sobre el tema a transmitir, donde, de acuerdo con los requerimientos, se seleccione la técnica a desarrollar; esta selección se realiza mediante los responsables del área de talento humanos y la alta gerencia, posibilitando la comunicación y las relaciones organizacionales entre los colaboradores y las directivas.  
    p(data-aos="fade-down").mb-5 Las técnicas que se deben desarrollar entre los responsables del área de recursos humanos y la alta gerencia son:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/85.svg', alt='')

          .tarjeta.color-primario.p-3(x="71%" y="48%" numero="+")
            p.mb-0 Conocer el personal al que va dirigida la información, gustos, intereses y preferencias. 
          .tarjeta.color-primario.p-3(x="60%" y="10%" numero="+")
            p.mb-0 Es importante utilizar y diversificar los canales, esto permite utilizar formatos de acuerdo a la necesidad y que se apoyen con el medio utilizado.   
          .tarjeta.color-primario.p-3(x="43%" y="32%" numero="+")
            p.mb-0 El realizar un cronograma con las actividades de manera periódica, permite que los empleados no se cansen de recibir información, esto brinda estrategias de cómo se desea impactar, la forma como se le pretende conectar y fomentar la interacción entre los colaboradores.   
          .tarjeta.color-primario.p-3(x="15%" y="60%" numero="+")
            p.mb-0 Es importante verificar los mensajes transmitidos, que sean claros, efectivos, que lleguen a toda la población y que los motive a participar, hacer o proponer, de acuerdo con la actividad ejecutada.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Elementos

    .row.justify-content-center.align-items-start.mb-5 
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/86.svg', alt='')       
      .col-lg-10
        p(data-aos="fade-down") La divulgación hace parte de todo un proceso comunicativo al interior de las organizaciones, por eso consta de canales, técnicas y mensajes. Adicional, cuenta con los elementos básicos de un sistema comunicativo que buscan plantear todo un conducto regular y efectivo para que la información no se desvíe y pueda completarse el proceso de divulgación de manera satisfactoria. 

    p(data-aos="fade-down").mb-5 A continuación, se presentan estos elementos básicos:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        PasosA.color-acento-contenido(tipo="l")
          .row.justify-content-center.align-items-center
            .col-lg-3.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/87.svg', alt='')            
            .col-lg-9.text-start.order-lg-2.my-3
              p(data-aos="fade-right") Emisor, la persona responsable de organizar la información.    
          .row.justify-content-center.align-items-center
            .col-lg-9.my-3
              p(data-aos="fade-left") Receptor, quien interpreta y aplica o no la información. 
            .col-lg-3.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/88.svg', alt='')    
          .row.justify-content-center.align-items-center
            .col-lg-3.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/89.svg', alt='')            
            .col-lg-9.text-start.order-lg-2.my-3
              p(data-aos="fade-right") Código, los signos utilizados por el emisor para codificar el mensaje.    
          .row.justify-content-center.align-items-center
            .col-lg-9.my-3
              p(data-aos="fade-left") Canal, elemento usado para que el emisor envíe el mensaje y el receptor lo reciba. 
            .col-lg-3.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/90.svg', alt='')     
          .row.justify-content-center.align-items-center
            .col-lg-3.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/91.svg', alt='')            
            .col-lg-9.text-start.order-lg-2.my-3
              p(data-aos="fade-right") Mensaje, es la información que se desea dar a conocer.    
          .row.justify-content-center.align-items-center
            .col-lg-9.my-3
              p(data-aos="fade-left") Contexto, todo lo que rodea el acto comunicativo como ambiente, el espacio, el tiempo que manejan, espacio laboral y permite que el receptor comprenda el mensaje. 
            .col-lg-3.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/92.svg', alt='')
              
    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-2
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Tipos de campañas 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/93.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 Una vez determinados los aspectos que pueden componer el cuerpo del programa de salud y seguridad dentro del trabajo, es pertinente definir la campaña, la cual es la planificación de estrategias comunicacionales para dar a conocer al personal de la empresa una información de temas en particular, utilizando los medios efectivos de la empresa por un tiempo determinado. Es importante impactar a toda la población que es de interés para la participación dentro del programa que se está diseñando.

    p(data-aos="fade-down").mb-5 Es de vital importancia que las personas responsables utilicen mecanismos efectivos de comunicación internos (correos, memorandos, carteleras, etc.) generando expectativas entre las personas participantes, verificando si la información ha sido recibida y comprendida de manera eficaz.  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="zoom-in")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Decreto 1072 de 2015 
                  p.mb-0 Para ampliar esta información se invita al aprendiz a explorar el Decreto 1072 de 2015 dispuesto en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Decreto_1072_de_2015.pdf')" target="_blank" type="application/pdf")
                    span.ts Descargar
                    i.ts.fas.fa-file-download

    p(data-aos="fade-down").mb-5 Considerando lo anterior, se puede determinar la definiciòn  de tres clases o niveles de campaña

    .row.justify-content-center.align-items-start.mb-5   
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/95.png', alt='')     
      .col-lg-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="A.	Campañas preventivas")
            .col-10
              P El objetivo principal de este tipo de campaña es promover acciones que prevengan situaciones de exposición a riesgos evaluados con anterioridad. Generando sensibilización sobre la importancia de utilizar, actuar, hacer y aplicar buenas prácticas dentro de su labor. 
          .row.justify-content-center.align-items-center(titulo="B.	Campañas informativas")
            .col-10
              P Buscan dar a conocer información importante a sus empleados sobre situaciones actuales que pueden afectar su desempeño laboral. Además de recomendar o asistir sobre procedimientos a la hora de posibles eventualidades o situaciones críticas.    
          .row.justify-content-center.align-items-center(titulo="C.	Campañas de promoción de la salud")
            .col-10
              P Para las empresas es muy importante el buen estado de salud de sus trabajadores, esto mejora la productividad de la empresa y optimiza el desempeño del empleado, es fundamental para evitar el ausentismo laboral.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Etapas

    .row.justify-content-center.align-items-start.mb-5 
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/96.svg', alt='')       
      .col-lg-10
        p(data-aos="fade-down") Ahora que se han determinado los tipos de campañas, es importante  abordar  las etapas de realización de una campaña y la manera en que se ha de proceder en la misma. De tal forma quedará en claro a qué hace alusión el concepto de campaña y de qué manera se constituye la misma. 
    p(data-aos="fade-down").mb-5 Al momento de diseñar las campañas se tienen en cuenta tres etapas:
    TabsC.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-3.py-md-4(titulo="A.	Preparación")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            ul.lista-ul.ps-2
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Determinar los objetivos. Deben ser objetivos alcanzables, que sean realistas y concretos. Se puede desarrollar un objetivo general y objetivos específicos, Algunos ejemplos son: incrementar la sensibilidad hacia algún riesgo específico, el promover acciones preventivas en el entorno laboral, etc.

              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Identificar el área o personal a impactar. El poder segmentar por grupos permite analizar con detalle las necesidades existentes.

              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Seleccionar los medios para difusión. Conocer los diferentes medios manejados dentro de la empresa y, de acuerdo con los objetivos de la temática, seleccionar los más adecuados para la difusión de la información, como correo electrónico, folletos, memorandos, etc.

              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Determinar el diseño en el que se brindará la información: educativo, llamativo, impactante, etc.
 
        
          .col-md-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/99.png', alt='') 
      .py-3.py-md-4(titulo="B.	Organización")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            ul.lista-ul.ps-2
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Duración, especificar la duración y las fechas en las cuales se brindará información sobre el desarrollo de la campaña.

              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Mensaje, brindar la información de manera sencilla, clara y comprensible sobre lo que se espera que el empleado haga y el por qué, partiendo de datos evidenciados como porcentaje de accidentalidad y número de accidentes.

              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Recursos necesarios, especificar a alta gerencia el presupuesto requerido para el desarrollo de la campaña.

              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Determinar los parámetros de seguimiento y evaluación, como entrevistas, encuestas, evaluación de riesgos, etc.
 
        
          .col-md-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/100.png', alt='') 
      .py-3.py-md-4(titulo="C.	Seguimiento")
        .row.justify-content-center.align-items-start
          .col-md-7.mb-4.mb-md-0
            ul.lista-ul.ps-2
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Indicadores, estos permiten hacer seguimiento a la campaña, los cuales son definidos en la etapa de preparación.

              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Evaluación, mediante las herramientas o instrumentos definidos dentro de etapa de organización se puede estimar la efectividad de la campaña.

              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Informar el resultado, dar a conocer a los participantes los resultados de la efectividad de la campaña y las conclusiones obtenidas. Plantear acciones de mejora para futuras campañas e involucrar a las personas impactadas a dejar opiniones al respecto. 
        
          .col-md-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/101.png', alt='') 

    .row.justify-content-center.align-items-center        
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Hacer parte del área de talento humano exige el conocimiento y manejo de la documentación y sus procesos. Se debe recordar que hasta el momento se ha puesto sobre la mesa una amplia información sobre seguridad y salud en las empresas y todo el protocolo documental también hace parte de esta temática ya que, al manejar información de todo el personal y procesos de la empresa, requiere de especial cuidado.                                                                      
</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema3',
  components: {
    ImagenInfograficaC,
  },
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
