window.portfolioProjects = [
  {
    title: "Java Backend Application",
    slug: "java-backend-application",
    description: "Java backend application connected to PostgreSQL supporting a client-side property management system.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    repo: "https://github.com/smozer20-web/java-backend-application",
    ccarr: {
      challenge: "The challenge of this project was creating a backend system that could act as the connection point between a client-side property management application and a PostgreSQL database. The backend needed to handle data storage and retrieval reliably while supporting the needs of the frontend application.",
      action: "I built the backend using Java and PostgreSQL, designing the application logic to manage property-related data and process requests coming from the client-side application. I focused on organizing data flow and maintaining clear separation between the frontend and database layers.",
      result: "The completed backend provided a stable data layer that allowed the client-side application to interact with stored property management information. The project successfully connected all three layers of the application, frontend, backend, and database.",
      reflection: "This project strengthened my understanding of backend architecture and database integration. It showed me how important it is to design backend systems that are predictable, organized, and capable of supporting user-facing applications efficiently."
    }
  },
  {
    title: "Equipment Rental System",
    slug: "equipment-rental-system",
    description: ".NET MVC application for managing rental inventory, customer rentals, returns, and equipment tracking.",
    tech: ["C#", ".NET MVC", "Entity Framework"],
    repo: "https://github.com/smozer20-web/equipment-rental-system",
    ccarr: {
      challenge: "The challenge of this project was building a complete rental management system that could accurately track inventory, customer rentals, returns, and equipment availability while enforcing real business rules. The system needed to support both customer-facing rental requests and employee-side rental processing.",
      action: "I built the application using C#, .NET MVC, and Entity Framework, creating separate workflows for customers and employees. I implemented inventory quantity tracking, rental request conversion, return processing, overdue rental indicators, and category-based filtering to improve usability and accuracy.",
      result: "The finished system provided a complete workflow for managing rental inventory from request to return. Equipment availability updated dynamically, overdue rentals were clearly identified, and employee tools allowed efficient processing of customer rental activity.",
      reflection: "This project strengthened my understanding of business logic implementation, database relationships, and the importance of keeping inventory systems accurate. It also gave me experience building software around real operational workflows rather than simple CRUD functionality."
    }
  },
  {
    title: "Tenant AI System",
    slug: "tenant-ai-system",
    description: "Python-based AI system for tenant communication, lease parsing, memory, and database-backed context.",
    tech: ["Python", "PostgreSQL", "Prompt Engineering"],
    repo: "https://github.com/smozer20-web/tenant-ai-system",
    ccarr: {
      challenge: "The challenge of this independent study project was building an AI-assisted property management system that could respond to tenant questions in a natural and useful way while retaining relevant context from leases and previous interactions. The goal was to make AI responses more practical and grounded in real property management operations.",
      action: "I built the system in Python from the ground up, creating a tenant communication model with a custom-written prompt structure designed to reflect my own communication style and property management approach. I also developed a lease parsing system that reads lease documents, extracts relevant information, and stores it in a database for future AI reference and tenant support.",
      result: "The finished system produced a working AI-driven tenant response model capable of handling tenant communication while using stored lease data as a knowledge source. This created a more context-aware and operationally useful assistant than a standard prompt-response AI model.",
      reflection: "This project strengthened my understanding of AI integration, prompt engineering, data persistence, and domain-specific automation. It showed me that AI systems become significantly more valuable when paired with structured data and designed around real-world workflows."
    }
  },
  {
    title: "Skihi Trailhead and Campground Project Management Plan",
    slug: "skihi-trailhead-and-campground-project-management-plan",
    description: "Large-scale project planning documentation for a multi-year trailhead and campground development project.",
    tech: ["ProjectLibre", "Microsoft Word", "Excel", "Project Planning"],
    repo: "https://github.com/smozer20-web/skihi-project-management-plan",
    ccarr: {
      challenge: "The challenge of this project was creating a complete project management plan for a large-scale trailhead and campground development project that would realistically span multiple years. The project required balancing scope, budget, scheduling, risks, quality planning, and long-term deliverables while maintaining realistic project structure.",
      action: "I developed a full project documentation package including the business case, project charter, scope statement, requirements planning, scheduling, budgeting, communication plans, risk management, quality management, status reporting, and project closure documentation. I used real-world planning practices and research-based references to make the documentation as realistic and technically grounded as possible.",
      result: "The completed project created a full lifecycle management plan that mapped the project from initial justification through final closure. The documentation provided a structured and professional framework for how a real trailhead and campground development project could be planned and executed.",
      reflection: "This project strengthened my understanding of large-scale planning, documentation quality, project sequencing, and risk management. It showed me that successful technical projects depend heavily on planning, organization, and clear documentation long before implementation begins."
    }
  },
  {
    title: "Trailhead and Campground Web Services Application",
    slug: "trailhead-and-campground-web-services-application",
    description: ".NET Web API and MVC client application for trailhead and campground management.",
    tech: ["C#", ".NET Web API", "Entity Framework"],
    repo: "https://github.com/smozer20-web/trailhead-web-services",
    ccarr: {
      challenge: "The challenge of this project was designing a web service system that could manage trailhead and campground data while keeping the API and client application separated. The system needed to provide clean data access, filtering options, administrative controls, and responsive user interaction without relying on full page reloads.",
      action: "I built the backend using C# and .NET Web API with Entity Framework for data persistence, creating endpoints for trailhead and campground records, filtering by status, and availability tracking. I also developed a separate MVC client application that used JavaScript fetch requests to communicate with the API dynamically, along with admin authentication and session-based management features.",
      result: "The finished application created a full web services architecture where users could browse trailhead and campground information while administrators could manage records through protected workflows. The API and client worked together cleanly while maintaining clear separation of responsibilities.",
      reflection: "This project strengthened my understanding of API design, client-server architecture, authentication workflows, and dynamic frontend integration. It reinforced how important separation of concerns is when building maintainable service-based applications."
    }
  },
  {
    title: "Client-Side Property Management Web Application",
    slug: "client-side-property-management-web-application",
    description: "Frontend property management website connected to backend maintenance and tenant workflows.",
    tech: ["HTML", "CSS", "JavaScript", "Vite"],
    repo: "https://github.com/smozer20-web/property-management-web-application",
    ccarr: {
      challenge: "The challenge of this project was creating a practical and user-friendly property management website that could present rental information clearly while supporting tenant interactions and operational workflows. The goal was to build something useful beyond a simple static website.",
      action: "I developed the frontend using HTML, CSS, and JavaScript, creating multiple pages for property listings, rental information, contact forms, and rental affordability tools. As the project evolved, I integrated it with my Java backend and PostgreSQL database to support maintenance ticket submissions, allowing tenant requests to connect directly into backend workflows and later integrate with my AI tenant communication model.",
      result: "The completed application provided a functional property management website that evolved into an operational tool, connecting tenant interactions, maintenance requests, backend processing, and AI-assisted communication into a larger connected system.",
      reflection: "This project strengthened my frontend development skills and showed me how much user experience affects the usefulness of software. It also helped me understand how frontend systems can grow from informational websites into integrated business tools when connected to backend services and databases."
    }
  },
  {
    title: "GemEconomy Minecraft Plugin",
    slug: "gemeconomy-minecraft-plugin",
    description: "Custom Minecraft plugin with economy systems, job progression, vendors, commands, and player data.",
    tech: ["Java", "Paper API", "Maven", "YAML"],
    repo: "https://github.com/smozer20-web/gemeconomy-plugin",
    ccarr: {
      challenge: "The challenge of this project was creating a large-scale Minecraft server plugin that could introduce a custom economy system, job progression, and vendor interactions while integrating cleanly into the Minecraft server environment. The project required learning how Minecraft server APIs work, designing balanced gameplay systems, and creating an expandable structure for future updates.",
      action: "I built the GemEconomy plugin in Java as a Maven project using the Spigot/Paper API, implementing event listeners, custom commands, YAML-based configuration systems, player data persistence, and multiple gameplay systems including jobs, vendors, and reward mechanics. I spent several months researching server behavior, plugin architecture, and balancing game systems to create a functional and engaging player experience.",
      result: "The finished plugin added an entirely new gameplay layer to the Minecraft server by rewarding player activities, creating job-based progression systems, and introducing vendor-driven economies. The plugin changed the normal gameplay loop into a more dynamic and interactive experience while remaining flexible for future feature additions.",
      reflection: "This project strengthened my understanding of event-driven programming, persistent player data systems, command handling, and scalable software design. It also showed me how long-term iterative development and user-focused design can transform a simple idea into a large, expandable software system."
    }
  },
  {
    title: "Ticketing System Feature Development",
    slug: "ticketing-system-feature-development",
    description: "Spring Boot feature development for user application roles and ticket attachment workflows.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf"],
    repo: "https://github.com/smozer20-web/ticketing-system-feature-development",
    ccarr: {
      challenge: "The challenge of this capstone project was extending an existing multi-semester ticketing system without disrupting its current workflows. The project required implementing new user application role management features and early ticket attachment functionality while maintaining compatibility with an established codebase and database structure.",
      action: "I completed four development sprints focused on user role assignment, role deactivation workflows, and preliminary ticket attachment mechanics using Java, Spring Boot, PostgreSQL, and Thymeleaf. The work required integrating new features into an existing architecture while preserving application stability and following the established project structure.",
      result: "The completed sprint work expanded the ticketing system’s user management capabilities and laid the groundwork for attachment handling, improving the system’s overall flexibility and administrative control.",
      reflection: "This project strengthened my ability to work inside an existing shared codebase, implement targeted features, and maintain system stability while extending functionality. It reinforced the importance of understanding existing architecture before introducing new features."
    }
  }
];