export default {
  header: {
    name: "Gabriel Lambert de la Rosa",
    title: "Software developer",
    description: `<p class="mb-6">
      <strong>.NET Backend Developer</strong><br>
      With <strong>3 years of experience</strong> in <strong>web services, REST APIs, and microservices</strong>, specializing in modernizing legacy systems in the <strong>banking sector</strong>.<br>
      - Full-cycle development roles: <strong>developer, tester, and DevOps</strong> (end-to-end solution delivery).<br>
      - Passionate about <strong>clean code, design patterns, and scalable architecture</strong>.<br>
      - Daily tasks: <strong>supporting critical systems, developing microservices, and containerizing applications (Docker)</strong>.
    </p>`
  },
  navigation: {
    about: "about",
    experience: "experience",
    education: "education",
    skills: "skills",
    print: "print",
    name: "Gabriel Lambert"
  },
  education: {
    title: "Education",
    degree: "Ing. Informatic Sciences",
    university: "Universidad de las Ciencias Informáticas",
    date: "Sept. 2016 - Dec 2021"
  },
  experience: {
    title: "Professional Experience",
    sections: [
      {
        company: "Banco Central de Cuba | Software Development Specialist",
        date: "Jan. 2022 - Present",
        description: "Develop and deployed microservices in .Net projects. Maintenance of in-production web services and SQL Databases using SQL statements and ORMs.",
        achievements: {
          "Key Achievements": [
            "Led the design and implementation of 15+ microservices in .NET Core, reducing response times by 40% and improving scalability for 3 critical of Core Bancario project.",
            {
              main: "Modernized 5 legacy systems, migrating from obsolete frameworks to modern microservices-based architectures with:",
              details: [
                "Docker for containerization",
                "CI/CD (Azure DevOps) for automated deployments",
                "RESTful APIs"
              ]
            }
          ],
          "Infrastructure Management": [
            {
              main: "Implemented a standardized development environment using:",
              details: [
                "Git Flow for version control",
                "Docker Compose for local environments",
                "Gitea Workflows for automated deployments in isolated environments"
              ]
            },
            `<strong>Result:</strong> 60% reduction in environment errors`
          ],
          "Database Optimization": [
            {
              main: "Redesigned 20+ stored procedures in SQL Server achieving:",
              details: [
                "Performance improvements even for critical queries",
                "Reduced locks in concurrent transactions"
              ]
            }
          ],
          "Featured Project": [
            {
              main: "Developed a custom Identity Provider based on Keycloak that:",
              details: [
                "Centralized authentication for 12 internal applications",
                "Currently handles 5M+ authentications/month"
              ]
            }
          ],
          "Automations": [
            {
              main: "Implemented scripts for:",
              details: [
                "Automated builds",
                "Unit/integration testing",
                "Zero-downtime deployments"
              ]
            },
            `<strong>Result:</strong> 80% reduction in manual deployments`
          ],
          "Technical Skills": [
            `<strong>Backend:</strong> .NET Core, C#, Microservices, REST APIs`,
            `<strong>DevOps:</strong> Docker, Azure DevOps, CI/CD`,
            `<strong>Databases:</strong> SQL Server, PostgreSQL, SQLite, MySQL, Redis, RabbitMQ, ORMs (Entity Framework)`,
            `<strong>Security:</strong> OAuth2, JWT, Keycloak`
          ]
        }
      },
      {
        company: "Banco Metropolitano | Software Development Specialist",
        date: "Mar. 2023 - Present",
        description: "Legacy System Maintenance and Modernization (Part-time)",
        achievements: {
          "": [
            "Developed and implemented 12+ new functionalities in legacy banking systems to meet emerging business requirements",
            {
              main: "Designed and implemented a real-time monitoring solution that:",
              details: [
                "Reduced system downtime by 40% through proactive fault detection",
                "Tracked key performance metrics (average response time <500ms, 850K+ daily requests)"
              ]
            },
            "Automated manual processes using PowerShell scripts, saving 15+ hours/month"
          ]
        }
      }
    ]
  },
  languages: {
    list: [
      { name: "English", level: "Intermediate" },
      { name: "Spanish", level: "Native" }
    ]
  },
  skills: {
    items: [
      "Develop",
      "Play guitar",
      "Innovate",
      "Cook"
    ]
  },
  contact: {
    phone: "+53 52004038",
    email: "glambert590@gmail.com",
    address: "Havana, Cuba"
  }
};