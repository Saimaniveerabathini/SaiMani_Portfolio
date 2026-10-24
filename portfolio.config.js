window.portfolioConfig = {
  name: "Saimani Veerabathini",
  location: "Hyderabad, India",
  email: "veerabathinisaimani2624@gmail.com",
  phone: "+91-8341847724",
  github: "",
  linkedin: "",
  summary:
    "Software Engineer with 2.5+ years of experience in Java backend development, Spring Boot, RESTful services, microservices, application modernization, vulnerability remediation, and dependency upgrades.",
  about:
    "I’m a Java backend engineer focused on building and maintaining reliable services. My experience spans REST API development, microservices, data persistence, application modernization, dependency upgrades, and security remediation. I value clear requirements, maintainable code, thorough validation, and collaborative delivery.",
  careerGoal:
    "Interested in contributing to dependable backend systems and continuing to grow in Java, API design, and modern service architecture.",
  skills: [
    {
      category: "Programming",
      items: ["Java"]
    },
    {
      category: "Backend & architecture",
      items: ["Spring Boot", "Spring Boot 4 migration", "Spring MVC", "Spring Data JPA", "RESTful services", "Microservices"]
    },
    {
      category: "Databases",
      items: ["MySQL", "Oracle", "JPA"]
    },
    {
      category: "Tools & delivery",
      items: ["Maven", "Git", "GitHub", "Postman", "OpenShift", "WebSphere"]
    },
    {
      category: "Testing & quality",
      items: ["JUnit", "Mockito", "QTest", "SCA/Snyk remediation", "Dependency upgrades"]
    },
    {
      category: "Ways of working",
      items: ["Agile/Scrum", "Merge requests", "Change requests", "Code review"]
    }
  ],
  experience: [
    {
      company: "HCL Technologies",
      role: "Software Engineer",
      dates: "February 2025 — Present",
      context: "Project (2): USAA — Financial Services (Insurance & Banking) · Client: USAA",
      description:
        "Deliver development and modernization stories for USAA applications, owning backend changes from requirements through merge.",
      highlights: [
        "Lead Spring Boot 4 migration work, updating code and configuration while keeping business functionality intact.",
        "Fix security vulnerabilities and SCA/Snyk alerts by upgrading dependencies and validating that changes do not break existing behavior.",
        "Build, test, and raise Merge Requests; support Change Request activities through release and deployment.",
        "Maintain QTest evidence and verify REST APIs with Postman.",
        "Work in Agile/Scrum, collaborate with the team, and share progress and blockers."
      ],
      project: {
        label: "Project (1): ECT to IRIS Migration",
        context: "Client: USAA Bank",
        description:
          "Migration of the correspondence generation process from the legacy WebSphere-based ECT environment to the IRIS service on OpenShift.",
        highlights: [
          "Developed and maintained microservices supporting the migration; analyzed existing ECT service calls and identified impacted templates and integration points.",
          "Replaced legacy correspondence service calls (ECT/Hercules V1) with IRIS REST API calls; configured, validated, and tested letter generation using Postman and UI services.",
          "Collaborated with enterprise teams to verify migrated templates, enable IRIS flags in test and production, and support deployment and troubleshooting in OpenShift."
        ]
      }
    },
    {
      company: "Infosys",
      role: "Software Engineer",
      dates: "Feb 2022 — Feb 2023",
      context: "Project: Qatar Court Case Management System · Client: Mashreq Bank",
      description:
        "Developed a court case management solution for investigating fraudulent customer cases, required banking actions, and court status updates.",
      highlights: [
        "Developed and maintained microservices based on business requirements; built schedulers and configured Cron jobs for daily processing.",
        "Implemented database operations using Spring Data JPA with audit trails for database changes.",
        "Integrated with BAW for instance creation, role movement, and final submission.",
        "Implemented JWT-based authentication across microservices and wrote unit tests using JUnit and Mockito."
      ]
    }
  ],
  projects: [
    {
      title: "USAA Financial Services",
      label: "Project (2) · Client: USAA · February 2025 — Present",
      description:
        "Backend development and modernization for USAA applications in insurance, banking, and financial services.",
      highlights: [
        "Deliver development stories and lead Spring Boot 4 migration updates while preserving existing business functionality.",
        "Remediate vulnerabilities and SCA/Snyk alerts through compatible dependency upgrades and validation.",
        "Build and test changes, raise Merge Requests, and support Change Requests through release and deployment.",
        "Maintain QTest evidence, verify REST APIs with Postman, and collaborate in Agile/Scrum."
      ],
      stack: ["Java", "Spring Boot 4", "REST APIs", "SCA/Snyk", "Maven", "Postman", "QTest"]
    },
    {
      title: "ECT to IRIS Migration",
      label: "Project (1) · Client: USAA Bank",
      description:
        "Migrated the correspondence generation process from the legacy WebSphere-based ECT environment to the IRIS service running on OpenShift.",
      highlights: [
        "Developed and maintained migration microservices; analyzed existing ECT calls, impacted templates, and integration points.",
        "Replaced ECT/Hercules V1 correspondence calls with IRIS REST API calls and tested letter generation with Postman and UI services.",
        "Worked with enterprise teams on migrated templates and IRIS flags in test and production; supported OpenShift deployment and troubleshooting."
      ],
      stack: ["Java", "Microservices", "REST APIs", "Postman", "OpenShift", "WebSphere"]
    },
    {
      title: "Qatar Court Case Management System",
      label: "Client: Mashreq Bank · February 2022 — February 2023",
      description:
        "Microservices supporting investigation of fraudulent customer cases, required banking actions, and status updates to the court.",
      highlights: [
        "Developed business microservices, schedulers, and Cron jobs for daily processing.",
        "Implemented Spring Data JPA database operations with audit trails.",
        "Integrated BAW for instance creation, role movement, and final submission.",
        "Implemented JWT authentication across microservices and unit tests with JUnit and Mockito."
      ],
      stack: ["Java", "Microservices", "Spring Data JPA", "JWT", "JUnit", "Mockito"]
    }
  ],
  education: {
    degree: "B.Tech — Computer Science and Engineering",
    institution: "Indur Institute of Engineering and Technology",
    result: "73%"
  }
};
