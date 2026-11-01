export const profile = {
  name: "Madeiha Arshad",
  role: "Software Developer | Backend & Full-Stack",
  summary:
    "Final-year Software Engineering student at Bahria University Islamabad with backend internship experience in NestJS, TypeORM and PostgreSQL. I build full-stack (MERN) and AI/computer-vision products and deploy them to production, including SafeCity AI.",
  photo: "/photo.jpeg",
  linkedin: "https://www.linkedin.com/in/madeiha-arshad",
  github: "https://github.com/madeihaarshad",
  email: "madeihasatti08@gmail.com",
  resume: "/resume.pdf",
  availability:
    "Open to remote or part-time software developer roles where I can contribute to real-world products while completing my degree (graduating June 2027).",
};

export const projects = [
  {
    name: "SafeCity AI",
    description:
      "Real-time traffic violation detection with YOLOv8, risk scoring and Dijkstra safe-route planning, plus a live WebSocket dashboard. Includes 2FA, JWT and role-based access, Selenium QA, and a production deployment.",
    tech: ["React", "Node.js", "Express", "MongoDB Atlas", "Flask", "YOLOv8", "Socket.io", "Docker"],
    live: "", // paste your Vercel link here
    github: "https://github.com/madeihaarshad/safecity-ai",
  },
  {
    name: "FoodieExpress",
    description:
      "Full-stack MERN food delivery app with JWT auth, protected routes, restaurant browsing, cart persistence and an admin dashboard. Role-based access for customers and restaurant admins.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    live: "", // paste your live link here
    github: "https://github.com/madeihaarshad/FoodieExpress-MERN",
  },
  {
    name: "MindMate",
    description:
      "AI-powered learning platform with automated quiz generation and document feedback via Hugging Face APIs, built on MVC architecture with RESTful APIs.",
    tech: ["React", "Node.js", "Hugging Face APIs", "MVC"],
    live: "", // paste your live link here, or leave empty
    github: "https://github.com/madeihaarshad/MindMate",
  },
  {
    name: "Firooz / Lumière",
    description:
      "Polished e-commerce frontend with product catalog, cart/checkout flow and smooth Framer Motion animations. Responsive and built with HCI best practices.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    live: "", // paste your live link here
    github: "https://github.com/madeihaarshad/Firooz-Ecommerce-Web-App",
  },
  {
    name: "SADSS",
    description:
      "Agriculture decision support system that recommends crops using Decision Tree, KNN and Linear Regression, with data preprocessing, model training and comparative accuracy analysis.",
    tech: ["Python", "Decision Tree", "KNN", "Linear Regression", "Tkinter"],
    live: "",
    github: "https://github.com/madeihaarshad/AgriIntelligence-MultiModel-System",
  },
  {
    name: "Wonderland ToyStore",
    description:
      "Secure REST API backend for an e-commerce toy store with Stripe payment integration, inventory management and full cart operations.",
    tech: ["Spring Boot", "MySQL", "Stripe API", "MVC"],
    live: "",
    github: "",
  },
  {
    name: "ZipGo",
    description:
      "Ride-sharing desktop application with booking management, fare calculation, real-time chat and user feedback.",
    tech: ["JavaFX", "MySQL", "Scene Builder"],
    live: "",
    github: "",
  },
];

export const techStack = [
  { title: "Languages", items: ["Python", "JavaScript", "Java", "C++", "C#"] },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "Spring Boot", "Flask", "TypeORM", "REST APIs", "JWT", "WebSockets"],
  },
  { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"] },
  { title: "AI / ML / CV", items: ["YOLOv8", "MediaPipe", "OpenCV", "TensorFlow", "Hugging Face APIs"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB Atlas", "MySQL", "Supabase", "Oracle DB"] },
  { title: "Cloud & DevOps", items: ["Docker", "Railway", "Vercel", "GitHub Actions", "CI/CD", "Terraform (basics)"] },
  { title: "Testing & Tools", items: ["Selenium", "JUnit", "Jira AIO", "Postman", "Git/GitHub", "Figma"] },
];

export const experience = [
  {
    role: "Backend Developer Intern",
    employer: "Sybrid Pvt. Ltd., Islamabad",
    duration: "Jul – Aug 2026",
    points: [
      "Developed backend modules for a Hospital Management System using NestJS, TypeORM and PostgreSQL.",
      "Built a real-time chat system with NestJS WebSocket gateways and PostgreSQL message persistence.",
      "Implemented transactional operations with TypeORM QueryRunner to keep data consistent across multi-step operations.",
      "Implemented JWT authentication and role-based access control to secure sensitive medical data.",
      "Designed and optimized database schemas, and tested APIs with Postman.",
    ],
    tags: ["NestJS", "TypeORM", "PostgreSQL", "WebSockets", "JWT"],
  },
];