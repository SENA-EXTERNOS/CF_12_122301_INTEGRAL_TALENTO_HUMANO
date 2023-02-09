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
        p(data-aos="fade-down") Para saber qué es un estilo de vida saludable, vamos a entender lo que es y por qué se hace necesario contar con un programa de seguridad y salud en el trabajo en las organizaciones y contextualizar uno de los principales factores por los cuales se implementan estos programas.      
        p(data-aos="fade-down").mb-5 Mantener un estilo de vida saludable y conservar hábitos que aseguren a los empleados y colaboradores de una empresa, una vida saludable, con aptitud y actitud para realizar sus labores de manera eficiente y productiva cobra, cada vez, más relevancia en el tema organizacional. El empleado es uno de los componentes más importantes de una empresa y, por este motivo, la prioridad es promover su bienestar integral, es decir, a nivel físico, psicológico, mental y social. A partir de este razonamiento, surgen las razones por las cuales las organizaciones estructuran programas de seguridad y salud en el trabajo, donde se engloba, como temática principal, que sus empleados implementen y desarrollen hábitos saludables en su diario vivir.

    .bg1
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10.bg2.p-5(data-aos="zoom-in")
          .row.justify-content-center.align-items-center.mb-3           
            .col-lg-6
              img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='') 
            .col-lg-6
              img.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')
              
          p(data-aos="fade-down") Un estilo de vida saludable ayuda a prevenir y disminuir los riesgos de enfermedades crónicas o de muerte. Desarrollar buenos hábitos alimenticios, rutinas de actividad física, hábitos de higiene, de sueño y alejarse de una vida de excesos, le permite a una persona reconectarse con su entorno, disfrutar de sus seres queridos, ser más productiva en su trabajo, promover la autoestima y permitirse explorar sobre sus gustos e intereses.

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
                    p.mb-0 Para complementar el concepto de vida saludable, lo invitamos a ver el video.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://youtu.be/bZb3VYvBHFA" target="_blank")
                      span.ts Ver video
                      i.ts.fas.fa-play-circle

      .row.justify-content-start.align-items-center.mb-5           
        .col-auto
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Tipos 

      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-2
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')    
        .col-lg-10
          p(data-aos="fade-down") Para adoptar un estilo de vida saludable, existen diversas técnicas, actividades o acciones, que posibilitan eliminar hábitos dañinos para la salud y mejorar la calidad de vida, tanto física como emocional de los individuos. Realizar un cambio hacia un estado de vida saludable debe hacerse pausadamente, para que el cuerpo pueda ir adaptándose a los cambios lentamente y pueda asimilarlos mejor.  

    p(data-aos="fade-down").mb-5 A continuación, encontrará los tipos de acciones que llevan a un estilo de vida saludable:
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
            p El objeto de una buena higiene es el de conservar la salud y prevenir enfermedades; por eso se deben cumplir ciertas normas o hábitos de limpieza, ya sea en la vida personal de cada individuo, en la vida familiar, en el trabajo, o en la sociedad.
            p Al conjunto de acciones que se realizan para sentirse en equilibrio con los sentimientos, con las personas y el entorno, se le conoce como higiene emocional.
            p Al estar complacido con los sentimientos, se acepta y se respeta a quienes nos rodean y disfrutamos de una buena salud mental.


        .row.justify-content-center.align-items-start(titulo="B")
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')          
          .col-lg-7.my-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black B
                h5.mb-0 Actividades físicas      
            p Mantener una vida activa, hacer ejercicio con frecuencia, caminar, reduce el padecimiento de enfermedades como diabetes, hipertensión arterial, sobrepeso, etc. 
            p Practicar algún deporte, bailar, hacer aeróbicos, son acciones estratégicas que ayudan a tener un peso correcto, mayor vitalidad, posibilidad de ampliar el círculo social y disfrutar de la salud.


        .row.justify-content-center.align-items-start(titulo="C")
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/11.png', alt='')          
          .col-lg-7.my-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black C
                h5.mb-0 Descanso idóneo     
            p Descanso laboral se refiere al reposo, la quietud o la pausa que se realiza en medio del trabajo o de otra actividad empresarial.
            p Al descansar, el cuerpo se recobra y se retoma; mejora la memoria, se fortalece el sistema inmune, baja la presión sanguínea, se reduce la inflamación, mejoran la concentración y la capacidad mental y la energía es recuperada.
            p La ley laboral establece tres diferentes clases de descansos: descanso semanal, descanso obligatorio y vacaciones.


        .row.justify-content-center.align-items-start(titulo="D")
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/12.png', alt='')          
          .col-lg-7.my-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black D
                h5.mb-0 Hábitos alimenticios  
            p El hábito o régimen alimentario, se refiere a la agrupación de alimentos que se ingieren creando hábitos o conductas nutricionales en los seres humanos y que forman parte de su estilo de vida.
            p Se refiere a la acción de mantener una alimentación completa y suficiente, que contenga todos los grupos de alimentos y favorezca el consumo de frutas, verduras, carnes y lácteos bajos en grasa, leguminosas y cereales.
 

        .row.justify-content-center.align-items-start(titulo="E")
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/13.png', alt='')          
          .col-lg-7.my-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black E
                h5.mb-0 Salud mental      
            p Realizar actividades que permitan tener el cerebro activo, llevando a cabo ejercicios como la lectura, crucigramas, permite distraerse de las responsabilidades, problemas o situaciones estresantes del día, oxigena el cerebro y le da la posibilidad de retomar las tareas con una postura y percepción diferentes.
            p Cuidar la salud mental es importante como parte de las acciones que se deben realizar para tener una buena salud general. Ejercicios recomendables para mejorar y cuidar la salud mental pueden ser: tener la mente ocupada, proyectar pensamientos positivos, mantener la comunicación con los demás, relajarse y ponerse objetivos o metas.
    

    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Hábitos 

    p(data-aos="fade-down").mb-5 Es importante entender que cada acción que se hace de forma repetitiva, de manera consciente, se va a transformar en un hábito en el comportamiento de las personas; es preciso entonces mencionar, cuáles son los hábitos que se deben mantener y fortalecer, con el objetivo de cultivar un estilo de vida saludable:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/c1.svg' alt='AvatarTop' style='width: 94px').m-auto
          .tarjeta.color-primario.w-100(style="background-color:#fef7dc ")
            .text-center.p-4(style='margin-top: -3rem')
              h4.text-center Dieta balanceada
              p Poder comer de todo, pero de una forma equilibrada, con proteína, frutas y verduras, y distribuirlas diariamente en un menú.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/c2.svg' alt='AvatarTop' style='width: 94px').m-auto
          .tarjeta.color-primario.w-100(style="background-color:#f7f4ff")
            .text-center.p-4(style='margin-top: -3rem')
              h4.text-center Rutina física
              p Hacer ejercicios cotidianamente, al menos por treinta minutos. (Montar en bicicleta, hacer algún tipo de deporte, caminar, etc.).
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/c3.svg' alt='AvatarTop' style='width: 94px').m-auto
          .tarjeta.color-primario.w-100(style="background-color:#fef7dc ")
            .text-center.p-4(style='margin-top: -3rem')
              h4.text-center Descanso
              p Procurar descansar ocho horas para que el cuerpo recupere su energía.
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/c4.svg' alt='AvatarTop' style='width: 94px').m-auto
          .tarjeta.color-primario.w-100(style="background-color:#f7f4ff")
            .text-center.p-4(style='margin-top: -3rem')
              h4.text-center Implementar la vida saludable en el ámbito laboral
              p Realizar las pausas activas mínimas, diariamente.
    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Autocuidado

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/18.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 El primer elemento que posibilita el autocuidado es la autoestima, entendida como la percepción que se tiene de sí mismo, involucra emociones, pensamientos, sentimientos, experiencias y actitudes que la persona reúne durante su vida (Estrada, et al, 2011), este término también incluye el respeto de cómo nos tratamos y cómo nos vemos a nosotros mismos.

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Estrechamente relacionado con la promoción de un estilo de vida saludable, tanto dentro como fuera de la organización, se encuentra la labor de la empresa para prevenir los accidentes e incidentes laborales. A continuación, se aborda la descripción y diferenciación de cada uno de estos términos.

    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Accidente e incidente laboral

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4.col-md-6.col-sm-8.bg4.p-4.my-3(data-aos="fade-left")
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')
        h4(data-aos="fade-down").mb-0.text-center Incidente    
      .col-lg-4.col-md-6.col-sm-8.bg5.p-4.my-3(data-aos="fade-right")
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')
        h4(data-aos="fade-down").mb-0.text-center Accidente                          
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Es hora de empezar a definir los conceptos dentro del presente componente formativo; temas que, por supuesto estarán relacionados con la divulgación de campañas, su estructuración, sus tipos y la legislación sobre seguridad y salud empresarial. Además, la importancia de conformar comités en casos de emergencias, y por supuesto, los aspectos que componen la elaboración de un programa para el mejoramiento de lo que podría considerarse una forma de seguridad social. 
        p(data-aos="fade-down").mb-5 Es usual que se presente confusión o se piense que los accidentes y los incidentes son lo mismo; pero, la realidad es que cada uno configura una situación totalmente diferente al interior de una organización, y por esto conlleva a diferentes acciones para mitigarlos. A continuación, se presenta una definición como aporte para su diferenciación:
      .col-lg-4: img(src='@/assets/curso/temas/c5.png', alt='')
    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Accidente")
        .row.justify-content-center.align-items-start
          .col-lg-7
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular Un accidente de trabajo se refiere a todo suceso repentino que sobrevenga por causa o con ocasión del trabajo y que produzca, en el trabajador, una lesión orgánica, una perturbación funcional o psiquiátrica, una invalidez, o la muerte (Ministerio del Trabajo y la Protección Social, 2012).
                i.fas.fa-quote-right    
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='') 
          .col-lg-12                    
            p Casos que se asumen como accidentes laborales:
            ul.lista-ul.ps-2
              li 
                i.fas.fa-angle-right.colorv
                p.mb-0 Aquel que se produce durante la ejecución de órdenes del empleador o contratante, así sea fuera del lugar de trabajo y en horas laborales.
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
                p.text-regular El accidente genera cualquier tipo de afectación, ya sea en la integridad de las personas afectadas y/o en materiales, bienes o inmuebles involucrados, y puede ser generado por la presencia de diferentes factores        
                i.fas.fa-quote-right    
              .bloque-texto-d__autor 
                h5.mb-0 Ley 1562 de 2012

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Incidente")
        .row.justify-content-center.align-items-start
          .col-lg-7
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular Suceso acaecido en el curso del trabajo o en relación con este, que tuvo el potencial de ser un accidente, en el que hubo personas involucradas sin que sufrieran lesiones o se presentaran daños a la propiedad y/o pérdida en los procesos
                i.fas.fa-quote-right    
              .bloque-texto-d__autor 
                h5.mb-0 Resolución 1401 de 2007
                    
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')                                                
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Enfermedad laboral")
        .row.justify-content-center.align-items-start
          .col-lg-7
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular Es la enfermedad contraída como resultado de las exposiciones a factores de riesgo, inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar.      
                i.fas.fa-quote-right    
              .bloque-texto-d__autor 
                h5.mb-0 <em>Ley 1562 de 2012</em>
                    
          .col-lg-5 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')      

    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Tipos de Accidente

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") El Ministerio de Protección Social (2007) en la Resolución 1401 de 2007, establece obligaciones y requisitos mínimos para realizar la investigación de incidentes y accidentes de trabajo, con el fin de identificar las causas, hechos y situaciones que los han generado, e implementar las medidas correctivas encaminadas a eliminar o minimizar condiciones de riesgo y evitar su recurrencia. 
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
              p Las afectaciones presentadas por el empleado, no son de gravedad, ni su vida se encuentra en riesgo. 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/29.svg", alt="alt").img100
            .col
              h5 Accidente grave de trabajo
              p Genera cualquier pérdida o amputación de una parte del cuerpo, fracturas de huesos largos, traumas craneoencefálicos, quemaduras de segundo y tercer grado.
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
              h5 Accidente mortal de trabajo
              p El accidente genera la muerte del trabajador.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')   
        
    p(data-aos="fade-down").mb-5 En la tabla 1 se detallan los accidentes y los incidentes laborales, ejemplificados a partir de unas situaciones específicas:

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
                td Caída desde una altura.
                td Resbalones.
              tr
                td Caída de objetos.
                td Caídas de objetos sin impactar, a trabajadores del área.
              tr
                td Caída desde distintos niveles (escaleras, sillas, etc.).
                td Tropezar en un escalón sin caída.
              tr
                td  #[b Desgaste articular por movimientos repetitivos] (repetición manual de una actividad)
                td Escribir en computador, tejer, bordar, cortar.
                td
              tr
                td.text-bold(rowspan='5') Exposición o contacto
                td A altas temperaturas.
                td
              tr
                td A electricidad.
                td Al conectar el dispositivo al tomacorriente, se presenta una descarga en el toma, sin haber  afectación para el operario.
              tr
                td A sustancias químicas.
                td Fuga de sustancia química sin afectación.
              tr
                td A radiaciones.
                td
              tr
                td A gases.
                td Fuga de gases con evacuación oportuna.
              tr
                td.text-bold(rowspan='5') Sobreesfuerzos físicos o golpes
                td Posturas forzadas.
                td(rowspan='5') Torceduras, distensiones, tronchaduras, sin afectación a la salud.
              tr
                td Movimientos bruscos o fallidos.
              tr
                td Manipulación de cargas.
              tr
                td Golpes por o contra objetos.
              tr
                td Choques o golpes.

    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Reportes

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") Cuando en una empresa se presenta, un incidente o un accidente laboral, se debe generar un reporte de la situación, de acuerdo con las particularidades del suceso presentado y teniendo en cuenta a quién va dirigido. 
    p(data-aos="fade-down").mb-5 A continuación, se especifica qué se debe hacer en cada caso, según la tipificación y afectación del empleado.
    PasosA.color-acento-contenido(tipo="l")
      .row.justify-content-center.align-items-center
        .col-lg-9.my-3
          h4(data-aos="fade-left") Reporte de accidente laboral 
          p(data-aos="fade-left") Toda organización tiene la responsabilidad de reportar e investigar los accidentes de trabajo, las enfermedades laborales y los incidentes, de acuerdo con los parámetros del SG-SST. Cuando ocurre un accidente o incidente, se debe informar al profesional de Seguridad y Salud en el Trabajo, o del área de talento humano; el mismo procedimiento para el reporte y las enfermedades laborales. El tiempo del que dispone la empresa para realizar el reporte del accidente, son dos días hábiles y, el tiempo para realizar la investigación correspondiente, son quince días siguientes a la ocurrencia del accidente. Dicha información mantiene la línea de la seguridad y la salud en el trabajo. 
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')
      .row.justify-content-center.align-items-center
        .col-lg-3.order-1.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')            
        .col-lg-9.text-start.order-lg-2.my-3
          p(data-aos="fade-right") El afectado o contratista debe describir, en detalle, lo sucedido y los testigos también.
          ul.lista-ul(data-aos="fade-right")
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Describir las consecuencias del accidente, lesiones, quemaduras, fatalidad, etc.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 El afectado o contratista informa al jefe o supervisor inmediato y él informa a seguridad y salud en el trabajo.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Realizar el reporte vía telefónica con la ARL, página web, o documento físico.
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
              p.mb-0 En caso de enfermedad, el afectado debe ir a la EPS para que definan el origen de la enfermedad.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Confirmada la enfermedad laboral, la EPS contacta a la ARL y al Ministerio de Salud y Protección Social, el origen del padecimiento.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Diligenciar la EPS, el Formulario Único de reporte de enfermedades laborales, completar con información a cargo de la entidad.              
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')           

    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Documentación

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='')    
      .col-lg-10
        p(data-aos="fade-down") De acuerdo con el Decreto 1072 de 2015, el empleador debe tener actualizados y disponibles una serie de mecanismos, estrategias y políticas, que le permitan cubrir cualquier calamidad en el orden de la salud y la protección laboral. Algunos de ellos son: 

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
        p.text-center.mb-0 Tener debidamente firmado por el empleador y el responsable del Sistema de Gestión de Seguridad y Salud en el Trabajo, el plan de trabajo anual en Seguridad y salud en el trabajo SG-SST.		
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
        p.text-center.mb-0 Realizar los reportes y las investigaciones de los incidentes, accidentes y enfermedades laborales y los formatos de registros de las inspecciones a las instalaciones, máquinas o equipos ejecutados.  
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/45.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Mantener actualizada la matriz legal con las normas del Sistema General de Riesgos Laborales que le aplican a la empresa.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Hasta ahora se ha profundizado en temas importantes que buscan el bienestar y la salud del empleado; ahora abordaremos el programa de Seguridad y Salud en el Trabajo, su estructuración e implementación dentro de la empresa.
 
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
