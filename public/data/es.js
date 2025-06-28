export default {
  header: {
    name: "Gabriel Lambert de la Rosa",
    title: "Desarrollador de Software",
    description: `
      <p class="mb-6">
        <strong>Desarrollador Backend .NET</strong><br>
        Con <strong>3 años de experiencia</strong> en <strong>servicios web, APIs REST y microservicios</strong>, especializado en modernizar sistemas legacy en el <strong>sector bancario</strong>.<br>
        - Roles de desarrollo integral: <strong>desarrollador, tester y DevOps</strong> (entrega de soluciones end-to-end).<br>
        - Apasionado por el <strong>código limpio, patrones de diseño y arquitectura escalable</strong>.<br>
        - Tareas diarias: <strong>soporte a sistemas críticos, desarrollo de microservicios y containerización con Docker</strong>.
      </p>
    `
  },
  navigation: {
    about: "sobre",
    experience: "experiencia",
    education: "educación",
    skills: "habilidades",
    print: "imprimir"
  },
  education: {
    title: "Educación",
    degree: "Ing. Ciencias Informaticas",
    university: "Universidad de las Ciencias Informáticas",
    date: "Sept. 2016 - Dec 2021"
  },
  experience: {
    title: "Experiencia profesional",
    sections: [
      {
        company: "Banco Central de Cuba | Specialist on software development",
        date: "Jan. 2022 - Present",
        description: "Develop and deployed microservices in .Net projects. Maintenance of in-production web services and Sql Databases using sql statements and ORM’s.",
        achievements: {
          "Logros Claves": [
            "Lideré el diseño e implementación de 15+ microservicios en .NET Core, reduciendo tiempos de respuesta en 40% y mejorando la escalabilidad para 3 servicios críticos del core bancario.",
            {
              main: "Modernicé 5 sistemas legacy, migrando de frameworks obsoletos a arquitecturas modernas basadas en microservicios con:",
              details: [
                "Docker para containerización",
                "CI/CD (Azure DevOps) para despliegues automatizados",
                "APIs RESTful bien documentadas"
              ]
            }
          ],
          "Gestión de Infraestructura:": [
            {
              main: "Implementé un entorno de desarrollo estandarizado usando:",
              details: [
                "Git Flow para control de versiones",
                "Docker Compose para entornos locales",
                "APIs RESTful bien documentadas",

              ]
            },
            `<strong>Resultado:</strong> Reducción del 60% en errores de entorno y aumento del 35% en velocidad de onboarding`
          ],
          "Optimización de Bases de Datos:": [
            {
              main: "Rediseñé 20+ procedimientos almacenados en SQL Server logrando:",
              details: [
                "Mejoras de performance hasta en 300% para consultas críticas",
                "Reducción de bloqueos en transacciones concurrentes",
              ]
            }
          ],
          "Proyecto Destacado:": [
            {
              main: "Desarrollé un Proveedor de Identidad personalizado basado en Keycloak que:",
              details: [
                "Centralizó la autenticación para 12 aplicaciones internas",
                "Redujo tiempos de login en 25%",
                "Actualmente maneja 5M+ autenticaciones/mes"
              ]
            }
          ],
          "Automatizaciones:": [
            {
              main: "Implementé scripts para:",
              details: [
                "Builds automatizados",
                "Pruebas unitarias/integración",
                "Despliegues zero-downtime"
              ]
            },
            `<strong>Resultado:</strong> Reducción del 80% en despliegues manuales`
          ],
          "Habilidades Técnicas:": [

            `<strong>Backend:</strong> .NET Core, C#, Microservicios, APIs REST`,
            `<strong>DevOps:</strong> Docker, Azure DevOps, CI/CD`,
            `<strong>Bases de Datos:</strong> SQL Server, PostgreSQL, SQLite, MySql, Redis, RabbitMQ, ORMs (Entity Framework)`,
            `<strong>Seguridad:</strong> OAuth2, JWT, Keycloak`
          ],

        }
      },
      {
        company: "Banco Metropolitano | Especialista en Desarrollo de Software",
        date: "Mar. 2023 - Present",
        description: "Mantenimiento y Modernización de Sistemas Legacy (Medio tiempo)",
        achievements: {
          "": [
            "Desarrollé e implementé 12+ funcionalidades nuevas en sistemas bancarios heredados para cumplir con requisitos comerciales emergentes",
            {
              main: "Diseñé e implementé una solución de monitoreo en tiempo real que:",
              details: [
                "Redujo el tiempo de inactividad del sistema en 40% mediante detección proactiva de fallos",
                "Monitoreó métricas clave de rendimiento (tiempo de respuesta promedio <500ms, 850K+ solicitudes diarias)"
              ]
            },
            "Automaticé procesos manuales usando scripts en PowerShell, ahorrando 15+ horas/mes"
          ]

        }
      }
    ]
  },
  languages: {
    title: "Idiomas",
    list: [
      { name: "Ingles", level: "Intermedio" },
      { name: "Español", level: "Nativo" }
    ]
  },
  skills: {
    title: "Habilidades",
    items: [
      "Desarrollar",
      "Tocar guitarra",
      "Innovar",
      "Cocinar"
    ]
  },
  contact: {
    title: "Contacto",
    phone: "+53 52004038",
    email: "glambert590@gmail.com",
    address: "Havana, Cuba"
  }
};