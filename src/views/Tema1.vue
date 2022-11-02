<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Estilos de vida saludable
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')    
      .col-lg-8
        p(data-aos="fade-down").mb-5 Antes de entrar en materia sobre lo que es y por qué se hace necesario un Programa de Seguridad y Salud en el trabajo para las organizaciones, es menester contextualizar uno de los principales factores por los cuales se implementan estos programas. Llevar un estilo de vida saludable y tener hábitos que mantengan a las personas (colaboradores de una empresa) sanas y con capacidad de realizar sus labores de manera eficiente y productiva cobra cada vez más relevancia en el tema organizacional; Se convierte, entonces el empleado en uno de los componentes más importante en una organización y por este motivo su prioridad es promover su bienestar integral, es decir, a nivel físico, psicológico, mental y social. Es de allí de donde nacen las razones por las que las organizaciones estructuran programas de seguridad y salud en el trabajo, donde se abarca como temática principal que sus empleados implementen y desarrollen hábitos saludables en su diario vivir.

    .bg1
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10.bg2.p-5(data-aos="zoom-in")
          .row.justify-content-center.align-items-center.mb-3           
            .col-lg-6
              img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='') 
            .col-lg-6
              img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')
              
          p(data-aos="fade-down") El estilo de vida saludable ayuda a prevenir y disminuir los riesgos de enfermedades crónicas o muerte. El desarrollar hábitos alimenticios, rutinas de actividad física, hábitos de higiene, de sueño y el estar alejado de una vida de excesos, le permite a la persona reconectarse con su entorno, disfrutar de sus seres queridos, ser una persona más productiva en su trabajo, promover la autoestima y permitir que la persona explore sus gustos e intereses.

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10(data-aos="zoom-in")
          .tarjeta.color-secundario.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/7.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Hábitos saludables mediante actividad física.
                    p.mb-0 Para complementar el concepto de vida saludable, explore el video Hábitos saludables mediante actividad física.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://youtu.be/bZb3VYvBHFA" target="_blank")
                      span.ts Ver video
                      i.ts.fas.fa-play-circle

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-2
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Tipos 

      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.svg', alt='')    
        .col-lg-10
          p(data-aos="fade-down") Para adoptar un estilo de vida saludable existen diversas técnicas, actividades o acciones que posibilitan transformar hábitos malignos para la salud y mejorar la calidad de vida tanto física como emocional de las personas. El salto hacia esta vida de cuidados debe ser pausado ya que el cuerpo debe ir asimilando los cambios de manera paulatina para aceptarlos mejor.    

    p(data-aos="fade-down").mb-5 A continuación, encontrará los tipos de acciones que llevan a un estilo de vida saludable.
    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-secundario(text-small)
        .row.justify-content-center.align-items-start(titulo="A")
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/9.png', alt='')          
          .col-lg-7.my-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black A 
                h5.mb-0 Salud e higiene personal          
            p El mantener rutinas de limpieza e higiene corporal, bañarse, cepillarse los dientes, utilizar agua y jabón. En esta parte el estado anímico juega un papel importante, ya que, si te gusta lo que ves en el espejo, buscarás cuidarlo, verte bien, oler bien y sentirte bien.

        .row.justify-content-center.align-items-start(titulo="B")
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')          
          .col-lg-7.my-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black B
                h5.mb-0 Actividades físicas      
            p El mantener una vida activa realizando ejercicio diariamente, reduce el padecimiento de enfermedades como diabetes, hipertensión arterial, sobrepeso, etc. Es importante dar rienda suelta a los gustos e intereses, realizar el deporte de su preferencia, realizar zumba, rutinas en gimnasios, son estrategias que ayudan a tener un adecuado peso, mayor vitalidad, posibilidad de abrir su círculo social y de entretenerse. 

        .row.justify-content-center.align-items-start(titulo="C")
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/11.png', alt='')          
          .col-lg-7.my-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black C
                h5.mb-0 Descanso suficiente     
            p El dar la oportunidad de un descanso efectivo durante las noches a nuestro cuerpo, le brinda la energía necesaria para enfrentar las exigencias del día. Trabajo, responsabilidades, esfuerzos, estrés y exigencias del medio, no serán posibles de sobrellevar, manejar, controlar y superar de manera efectiva sin un descanso al menos de ocho horas, sin esto, la concentración, capacidad de resolver problemas y el estado anímico se verán afectados. 

        .row.justify-content-center.align-items-start(titulo="D")
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/12.png', alt='')          
          .col-lg-7.my-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black D
                h5.mb-0 Hábitos alimenticios  
            p El mantener una alimentación balanceada, ingiriendo porciones adecuadas de frutas, proteínas, carbohidratos, le brindarán los nutrientes necesarios para el procesamiento mental y brindarán la energía suficiente para el día a día. 

        .row.justify-content-center.align-items-start(titulo="E")
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/13.png', alt='')          
          .col-lg-7.my-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black E
                h5.mb-0 Salud mental      
            p El realizar actividades que le permitan tener el cerebro activo, realizando ejercicios como lecturas, crucigramas, le permite distraerse de las responsabilidades, problemas o situaciones estresantes del día, oxigena el cerebro y le da la posibilidad de retomar las tareas con una postura y percepción diferente.     

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-2
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Hábitos 

    p(data-aos="fade-down").mb-5 Teniendo en cuenta que cada acción que se hace repetitiva, de manera consciente, en el comportamiento de las personas se transforma en un hábito, es preciso mencionar, entonces, cuáles son los hábitos que se deben mantener y fortalecer con el objetivo de cultivar los estilos de vida saludable:

    .row.justify-content-center.mb-5           
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w(src='@/assets/curso/temas/14.svg' alt='AvatarTop')
          div.text-center.bg2.p-4.pt-5.h-100
            h4.pt-3.mb-3 Dieta balanceada
            p.mb-0 Poder comer de todo, pero de una forma equilibrada, con proteína, frutas y verduras y distribuirlas diariamente en un menú.
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w(src='@/assets/curso/temas/15.svg' alt='AvatarTop')
          div.text-center.bg2.p-4.pt-5.h-100
            h4.pt-3.mb-3 Rutina física
            p.mb-0 Hacer ejercicios de manera diaria al menos por treinta minutos. (Montar en bicicleta, hacer algún tipo de deporte, etc.).
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w(src='@/assets/curso/temas/16.svg' alt='AvatarTop')
          div.text-center.bg2.p-4.pt-5.h-100
            h4.pt-3.mb-3 Descanso
            p.mb-0 Procurar descansar ocho horas para que el cuerpo recupere energía. 
      .col-lg-3.col-md-6.col-sm-8.my-3(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w(src='@/assets/curso/temas/17.svg' alt='AvatarTop')
          div.text-center.bg2.p-4.pt-5.h-100
            h4.pt-3.mb-3 Implementar la vida saludable en el ámbito laboral
            p.mb-0 Realizar las pausas activas mínimas de manera diaria.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-2
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Autocuidado

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/18.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 El primer elemento que posibilita el autocuidado es la autoestima, ya que esta se entiende como la percepción que se tiene de sí mismo, involucra emociones, pensamientos, sentimientos, experiencias y actitudes que la persona recoge en su vida (Estrada, et al, 2011), este término también incluye el respeto de cómo nos tratamos y cómo nos vemos. 

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Estrechamente relacionado a la promoción de un estilo de vida saludable, tanto dentro como fuera de la organización, se encuentra la labor de la empresa por prevenir la ocurrencia de accidentes e incidentes laborales. A continuación, se aborda la descripción y diferenciación de cada uno de estos términos. 

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Accidente e incidente laboral

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4.col-md-6.col-sm-8.bg4.p-4.my-3(data-aos="fade-left")
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')
        h4(data-aos="fade-down").mb-0.text-center Incidente    
      .col-lg-4.col-md-6.col-sm-8.bg5.p-4.my-3(data-aos="fade-right")
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')
        h4(data-aos="fade-down").mb-0.text-center Accidente                          

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Es hora de empezar a definir los conceptos dentro del presente componente formativo; temas que, por supuesto estarán relacionados con la divulgación de campañas, su estructuración, sus tipos y la legislación sobre seguridad y salud empresarial. Además, la importancia de conformar comités en casos de emergencias, y por supuesto, los aspectos que componen la elaboración de un programa para el mejoramiento de lo que podría considerarse una forma de seguridad social.  Estos son algunos de los más importantes:

    p(data-aos="fade-down").mb-5 Es usual que se confundan o se tenga la creencia que los accidentes y los incidentes sean una misma cosa, pero la realidad es que cada uno configura una situación totalmente diferente al interior de una organización y por ello conlleva a diferentes acciones para mitigarlos. A continuación se presentan las definiciones para estos:
    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Accidente")
        .row.justify-content-center.align-items-start
          .col-lg-7
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular El accidente de trabajo es todo suceso repentino que sobrevenga por causa o con ocasión del trabajo, y que produzca en el trabajador una lesión orgánica, una perturbación funcional o psiquiátrica, una invalidez o la muerte.           
                i.fas.fa-quote-right    
              .bloque-texto-d__autor 
                h5.mb-0 Ministerio del trabajo y la salud, (2012). Ley 1562 de 2012   
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='') 
          .col-lg-12                    
            p Casos que también se asumen como accidentes laborales:
            ul.lista-ul.ps-2
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Aquel que se produce durante la ejecución de órdenes del empleador o contratante, así sea fuera del lugar de trabajo y horas laborales. 
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 En el traslado de trabajadores desde su residencia al trabajo (o viceversa), cuando el transporte lo suministre el empleador. 
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Por ejecución de actividades recreativas, deportivas o culturales, cuando se actúe por cuenta o representación del empleador o de la empresa.
          .col-lg-10 
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular El accidente genera cualquier tipo de afectación, ya sea en la integridad de las personas afectadas y/o en materiales, bienes o inmuebles involucrados, y puede ser generado por la presencia de diferentes factores.          
                i.fas.fa-quote-right    
              .bloque-texto-d__autor 
                h5.mb-0 El Congreso de Colombia, (2012). Ley 1562 de 2012

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Incidente")
        .row.justify-content-center.align-items-start
          .col-lg-7
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular Suceso acaecido en el curso del trabajo o en relación con este, que tuvo el potencial de ser un accidente, en el que hubo personas involucradas sin que sufrieran lesiones o se presentaran daños a la propiedad y/o pérdida en los procesos.        
                i.fas.fa-quote-right    
              .bloque-texto-d__autor 
                h5.mb-0 Ministerio de salud y Protecciòn social (200/) Resolución 1401 de 2007    
                    
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')                                                
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Enfermedad laboral")
        .row.justify-content-center.align-items-start
          .col-lg-7
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular Es la enfermedad contraída como resultado de las exposiciones a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar.          
                i.fas.fa-quote-right    
              .bloque-texto-d__autor 
                h5.mb-0 Ministerio de salud y Protección social. (2012)  Ley 1562 de 2012
                    
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')      

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Tipos de Accidente

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") El Ministerio de Protección Social (2007) en la Resolución 1401 de 2007, establece obligaciones y requisitos mínimos para realizar la investigación de incidentes y accidentes de trabajo, con el fin de identificar las causas, hechos y situaciones que los han generado, e implementar las medidas correctivas encaminadas a eliminar o minimizar condiciones de riesgo y evitar su recurrencia. 14 de mayo de 2007. 
    p(data-aos="fade-down").mb-5 A continuación, se explican los tipos de accidente:         
    .row.justify-content-center.align-items-start(data-aos="fade-right").mb-5           
      .col-lg-8        
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/28.svg", alt="alt").img100
            .col
              h5 Accidente de trabajo leve
              p Las afectaciones presentadas por el empleado no son de gravedad ni se encuentra en riesgo su vida.  
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/29.svg", alt="alt").img100
            .col
              h5 Accidente grave de trabajo
              p Genera cualquier pérdida o amputación de una parte del cuerpo, fracturas de huesos largos, traumas craneoencefálicos, quemaduras de segundo y tercer grado. (Ministerio de salud y Protecciòn, (2007). Resolución 1401 de 2007).
        .crd.crd--avatarHorizontal.crd--med.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/30.svg", alt="alt").img100
            .col
              h5 Accidente de trabajo severo
              p Como consecuencia del accidente, se genera una incapacidad superior a treinta días.              
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/31.svg", alt="alt").img100
            .col
              h5 Accidente de trabajo mortal
              p El accidente genera la muerte del trabajador.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')   
        
    p(data-aos="fade-down").mb-5 En la Tabla 1 se detallan los accidentes e incidentes laborales enmarcados en la Resolución mencionada anteriormente, ejemplificados a partir de unas situaciones específicas

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
          h5 Tabla 1. 
          span Paralelo entre accidentes e incidentes partiendo de unas situaciones particulares
        .tabla-a.color-primario.mb-5(data-aos="fade-left") 
          table
            thead
              tr.bgt
                th(colspan='2') Accidente
                th Incidente
            tbody          
              tr
                td.text-bold(rowspan='3') Accidentes por cualquier tipo de caídas
                td Caídas en altura.
                td Resbalones.
              tr
                td Caída de objetos.
                td Caídas de objetos sin impactar a trabajadores del área.
              tr
                td Caída a distintos niveles (Escaleras, sillas, etc).
                td Tropezar en un escalón sin caída.
              tr
                td  #[b Desgaste articular por movimientos repetitivos] (repetición manual de una actividad)
                td
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 Escribir en computador.
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 Tejer.
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 Bordar.
                    li 
                      i.fas.fa-angle-right.colorv
                      p.mb-0 Cortar.             
                td
              tr
                td.text-bold(rowspan='5') Exposición o contacto
                td A altas temperaturas.
                td
              tr
                td A electricidad.
                td Al conectar el pc al tomacorriente, le pasó una descarga al toma sin afectación.
              tr
                td A sustancias químicas.
                td Fuga de sustancia química sin afectación.
              tr
                td A radiaciones.
                td
              tr
                td A gases.
                td Fuga de gases  con evacuación oportuna.
              tr
                td.text-bold(rowspan='5') Sobre esfuerzos físicos o golpes
                td Posturas forzadas.
                td(rowspan='5') Torceduras, tronchaduras sin afectación a la salud.
              tr
                td Movimientos bruscos o fallidos.
              tr
                td Manipulación de cargas.
              tr
                td Golpes por o contra objetos.
              tr
                td Choques o golpes.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Reportes

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Cuando en una empresa se presenta, sea un incidente o accidente laboral se debe generar un reporte de la situación de acuerdo con las particularidades del suceso presentado y teniendo en cuenta a quién va dirigido.  A continuación, se especifica qué se debe hacer en cada caso según la tipificación y afectación del empleado.

    PasosA.color-acento-contenido(tipo="l")
      .row.justify-content-center.align-items-center
        .col-lg-9.my-3
          h4(data-aos="fade-left") Reporte de accidente laboral  
          p(data-aos="fade-left") Toda organización tiene la responsabilidad de reportar e investigar los accidentes de trabajo, las enfermedades laborales y los incidentes de acuerdo con los parámetros de SG-SST. Cuando ocurre un accidente o incidente, se debe informar al profesional de Seguridad y Salud en el trabajo o del área de Talento Humano, al igual para el reporte y las enfermedades laborales. El tiempo del que dispone la empresa para realizar el reporte del accidente son dos días hábiles y el tiempo para realizar la investigación correspondiente son quince días siguientes a la ocurrencia del accidente. Dicha información mantiene la línea de la seguridad y la salud en el trabajo, tema que ha sido pilar dentro de este componente formativo.  
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')
      .row.justify-content-center.align-items-center
        .col-lg-3.order-1.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')            
        .col-lg-9.text-start.order-lg-2.my-3
          p(data-aos="fade-right") El afectado o contratista debe describir en detalle lo sucedido y de testigos.
          ul.lista-ul(data-aos="fade-right")
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Describir las consecuencias del accidente, lesiones, quemaduras, fatalidad, etc.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 El afectado o contratista informa al jefe o supervisor inmediato y él informa a seguridad y salud en el trabajo.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Realizar el reporte vía telefónica con la ARL, o página web o documento físico
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Notificar a la EPS del accidente laboral.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 En caso de incapacidad, el afectado debe informar al área de Talento Humano.                         
      .row.justify-content-center.align-items-center
        .col-lg-9.my-3
          h4(data-aos="fade-left") Reporte de enfermedad laboral 
          ul.lista-ul(data-aos="fade-left")
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 En caso de enfermedad el afectado debe ir a la EPS para que definan el origen de la enfermedad.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Confirmada la enfermedad laboral, la EPS contacta a la ARL y al Ministerio de Salud y Protección Social el origen del padecimiento.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Diligencia la EPS el Formulario Único de reporte de enfermedades laborales, completar con información a cargo de la entidad.               
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')           

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Documentación

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") De acuerdo con el <i>Decreto 1072 de 2015</i>, el empleador debe tener actualizados y disponibles una serie de mecanismos, estrategias y políticas, que le permitan cubrir cualquier calamidad en el orden de la salud y la protección laboral. Algunos de ellos son: 

    SlyderF.custom.mb-5(columnas="col-lg-4")(data-aos="fade-left")
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/37.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Tener debidamente firmada la política y objetivos de la empresa referente a Seguridad y Salud en el Trabajo. 
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/38.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Asumir las responsabilidades y mejora continua con respecto a la Seguridad y Salud en el Trabajo SG-SST.			 
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/39.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Identificar anualmente los peligros y realizar una evaluación y valoración de riesgos.			 
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/40.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Realizar un informe sobre las condiciones de salud y el perfil sociodemográfico de los empleados, de acuerdo con los lineamientos del programa de vigilancia epidemiológica y que concuerde con los riesgos existentes en la organización.			  
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/41.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Tener debidamente firmado por el empleador y el responsable del Sistema de Gestión de Seguridad y Salud en el Trabajo, el plan de trabajo anual en Seguridad y Salud en el Trabajo SG-SST.			
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/42.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Realizar el programa anual de Seguridad y Salud en el Trabajo SG-SST, con los soportes correspondientes de inducción, reinducción y capacitación de todo el personal.			 
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/43.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Realizar el registro de la entrega de los equipos de protección personal.			
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/44.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Reportes e investigaciones de los incidentes, accidentes y enfermRealizar los reportes y las investigaciones de los incidentes, accidentes y enfermedades laborales y los formatos de registros de las inspecciones a las instalaciones, máquinas o equipos ejecutados.			  
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/45.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Mantener actualizada la matriz legal con las normas del Sistema General de Riesgos Laborales que le aplican a la empresa.			

    .row.justify-content-center.align-items-center        
      .col-lg-10.up
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Hasta ahora se ha profundizado en temas importantes que buscan el bienestar y la salud del empleado, ahora abordaremos el programa de Seguridad y Salud en el Trabajo, su estructuración, implementación dentro de la empresa.       
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
