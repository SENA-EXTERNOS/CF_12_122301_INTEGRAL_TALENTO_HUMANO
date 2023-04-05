export default {
  global: {
    componenteFormativo: 'Programas de seguridad y salud en el trabajo',
    descripcionCurso:
      'Los programas de seguridad y salud en el trabajo de una institución, son un conjunto de actividades organizadas y enfocadas en minimizar riesgos del personal, requiriendo de una estructuración, diseño y planificación, con fechas específicas de realización, lo que permite que el personal se integre y apropie de la información divulgada por el área de talento humano y la de comunicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estilos de vida saludable',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Programas de Seguridad y Salud en el Trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de divulgación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gestión documental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estilos de vida saludable',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA, (2020). <em>Hábitos saludables mediante actividad física</em> [video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/bZb3VYvBHFA',
    },
    {
      tema: 'Estilos de vida saludable',
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. 11 de julio de 2012.',
      tipo: 'Documento legal',
      descarga: '/downloads/Ley_1562_de_2012.pdf',
    },
    {
      tema: 'Estilos de vida saludable',
      referencia:
        'Decreto 1072 de 2015. [Ministerio de Trabajo]. Por el cual se estructuran en el ámbito laboral, la vigilancia y control de los riesgos laborales. 26 de mayo de 2015.',
      tipo: 'Documento legal',
      descarga: '/downloads/Decreto_1072_de_2015.pdf',
    },
    {
      tema: 'Programas de Seguridad y Salud en el trabajo',
      referencia:
        'Resolución 0312 de 2019. [Ministerio de Trabajo]. Por el cual se definen los estándares mínimos del SG-SST. 13 de febrero de 2019.',
      tipo: 'Documento legal',
      descarga:
        '/downloads/Resolucion_0312_2019_Estandares_minimos_del_Sistema_de_la_Seguridad.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Campaña',
      significado:
        'estrategia de comunicación empresarial para dar a conocer información importante a sus empleados.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'estrategia para resolver problemas buscando mejora para los procesos y desarrollar los cambios necesarios.',
    },
    {
      termino: 'Comités técnicos',
      significado:
        'grupos de personas con roles específicos, encargados desde la gerencia para desarrollar funciones técnicas para prevención de emergencias, en caso de presentarse eventualidades durante las jornadas laborales.',
    },
    {
      termino: 'Convivencia',
      significado:
        'acto de convivir, referente a la parte empresarial, corresponde a la convivencia entre empleados de una organización.',
    },
    {
      termino: 'Enfermedad',
      significado:
        'alteración leve o grave del funcionamiento normal de un organismo o de alguna de sus partes, debido a una causa interna o externa.',
    },
    {
      termino: 'Lineamientos',
      significado:
        'corresponden a las fases o etapas que requieren ser ejecutadas en tareas específicas.',
    },
    {
      termino: 'Proactivo',
      significado:
        'persona que tiene la capacidad de anticipar eventualidades o inconvenientes futuros.',
    },
    {
      termino: 'Promover',
      significado:
        'fomentar la implementación y desarrollo de algo que pueden omitir o pasar por alto los empleados.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de ocurrencia de que alguien tenga un contratiempo o accidente.',
    },
    {
      termino: 'Salud',
      significado:
        'estado en que un ser u organismo vivo no tiene ninguna lesión ni padece ninguna enfermedad y ejerce con normalidad todas sus funciones.(OMS).',
    },
  ],
  referencias: [
    {
      referencia:
        'Estrada, A., Pastrana, J. & Mejía, M. (2011). La autoestima, factor fundamental para el desarrollo de la autonomía personal y profesional. Teoría de la educación, p. 1-13.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, (2021) <i>Guía para el reporte, investigación de incidentes, accidentes y enfermedades laborales Código GTHG03 V2</i>, Bogotá.',
    },
    {
      referencia:
        'Ministerio de Trabajo (2022). <em>Sistema de gestión y seguridad en el trabajo.</em>',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo',
    },
    {
      referencia:
        'Safetya. (2019) <em>Programa del SG-SST: su definición y estructura.</em> ',
      link:
        'https://safetya.co/programas-del-sg-sst-estructura/#Estructurade_un_programa_del_SG-SST',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
