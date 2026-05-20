import { BlogPost } from "@/app/utils/types";

export const heroList: BlogPost[] = [
  {
    id: "hero-1",
    title: "Microservices E-Commerce System",
    subtitle:
      "Designing a scalable, event-driven architecture for modern commerce",
    image:
      "/images/Creating a Seamless Checkout Process for Your Small Business E-commerce Site.jpg", // 👉 should be replaced with system architecture diagram
    backgroundImage: "/images/e-commerce.jpg",
    ctaText: "Explore System",

    ctaLink: "/blog/hero-1",
    tag: "Featured",

    author: {
      name: "Châu Dev",
      avatar: "https://i.pravatar.cc/150?u=chau",
    },

    createdAt: "2026-05-10",

    stats: {
      views: 1200,
      likes: 340,
    },
    content: [
      {
        type: "heading",
        value: "🚀 How I Built a Microservices E-Commerce System",
      },

      {
        type: "paragraph",
        value:
          "Instead of starting with code, I started with a question: how do real-world e-commerce systems actually work at scale?",
      },

      {
        type: "paragraph",
        value:
          "This project is my attempt to answer that question — by building a full microservices architecture from scratch.",
      },

      {
        type: "image",
        src: "",
        caption:
          "👉 Insert image: High-level system overview (everything connected)",
      },

      {
        type: "heading",
        value: "🧱 Step 1 — Breaking the Monolith",
      },

      {
        type: "paragraph",
        value:
          "At first, it was tempting to put everything into one service. But that quickly becomes hard to scale and maintain.",
      },

      {
        type: "paragraph",
        value:
          "So I split the system into independent services: product, order, user, and inventory.",
      },

      {
        type: "paragraph",
        value:
          "Each service has its own responsibility, its own database, and can evolve independently.",
      },

      {
        type: "image",
        src: "",
        caption: "👉 Insert image: Monolith vs Microservices comparison",
      },

      {
        type: "heading",
        value: "🌐 Step 2 — Introducing the API Gateway",
      },

      {
        type: "paragraph",
        value:
          "Once services were separated, the next problem appeared: how does the client talk to all of them?",
      },

      {
        type: "paragraph",
        value:
          "Instead of exposing every service directly, I introduced an API Gateway.",
      },

      {
        type: "paragraph",
        value:
          "Now, the client only talks to one entry point, and the gateway handles routing, authentication, and request control.",
      },

      {
        type: "image",
        src: "",
        caption: "👉 Insert image: Client → Gateway → Services flow",
      },

      {
        type: "heading",
        value: "⚡ Step 3 — Solving Communication with Kafka",
      },

      {
        type: "paragraph",
        value:
          "Direct service-to-service calls quickly became fragile and tightly coupled.",
      },

      {
        type: "paragraph",
        value: "So I moved to an event-driven approach using Kafka.",
      },

      {
        type: "paragraph",
        value:
          "Instead of calling each other directly, services publish and consume events.",
      },

      {
        type: "paragraph",
        value:
          "For example: when an order is created, an event is sent, and the inventory service reacts to it.",
      },

      {
        type: "image",
        src: "",
        caption:
          "👉 Insert image: Kafka event flow (Order → Kafka → Inventory)",
      },

      {
        type: "heading",
        value: "📦 Step 4 — Handling Inventory Safely",
      },

      {
        type: "paragraph",
        value: "One of the hardest problems was preventing overselling.",
      },

      {
        type: "paragraph",
        value:
          "To solve this, I introduced a reservation mechanism using Redis.",
      },

      {
        type: "paragraph",
        value:
          "When a user places an order, stock is temporarily reserved before being permanently deducted.",
      },

      {
        type: "paragraph",
        value:
          "This prevents race conditions and double orders under high traffic.",
      },

      {
        type: "image",
        src: "",
        caption: "👉 Insert image: Inventory reserve flow (Redis)",
      },

      {
        type: "heading",
        value: "🔐 Step 5 — Authentication & Roles",
      },

      {
        type: "paragraph",
        value:
          "Security is not optional. I implemented OAuth2 login using Google.",
      },

      {
        type: "paragraph",
        value: "Each user is assigned a role: USER, ADMIN, MANAGER, or OWNER.",
      },

      {
        type: "paragraph",
        value: "This allows fine-grained control over who can access what.",
      },

      {
        type: "heading",
        value: "🛑 Step 6 — Making the System Resilient",
      },

      {
        type: "paragraph",
        value: "In distributed systems, failure is inevitable.",
      },

      {
        type: "paragraph",
        value:
          "To prevent cascading failures, I added a circuit breaker pattern.",
      },

      {
        type: "paragraph",
        value:
          "If a service fails, requests are automatically stopped instead of spreading the failure across the system.",
      },

      {
        type: "heading",
        value: "🌌 Final Thoughts",
      },

      {
        type: "paragraph",
        value:
          "This project is more than just code — it's a deep dive into how real systems are designed.",
      },

      {
        type: "paragraph",
        value:
          "I didn’t just learn how to build features. I learned how to think in systems.",
      },

      {
        type: "paragraph",
        value: "And honestly… this is just the beginning.",
      },
    ],
  },
  {
    id: "hero-2",
    title: "Inside the Architecture",
    subtitle: "Breaking down the microservices design and technology choices",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000", // 👉 nên thay bằng architecture diagram
    backgroundImage:
      "https://images.unsplash.com/photo-1544441893-675973e3a985?q=80&w=1000",
    ctaText: "Read Deep Dive",
    ctaLink: "/blog/hero-2",
    tag: "Deep Dive",

    author: {
      name: "Châu Dev",
      avatar: "https://i.pravatar.cc/150?u=chau",
    },

    createdAt: "2026-05-11",

    stats: {
      views: 980,
      likes: 210,
    },

    content: [
      {
        type: "heading",
        value: "🧠 Why Microservices?",
      },
      {
        type: "paragraph",
        value:
          "When building the first version of the system, a monolithic architecture seemed simple and fast. However, as features grew — product management, ordering, inventory, authentication — the system quickly became harder to maintain and scale.",
      },
      {
        type: "paragraph",
        value:
          "Any small change required redeploying the entire application. A single failure could affect the whole system. Most importantly, different parts of the system had very different scaling needs.",
      },
      {
        type: "paragraph",
        value:
          "This led to the decision to adopt a microservices architecture, where each domain is isolated into its own service with independent deployment and scalability.",
      },

      {
        type: "image",
        src: "",
        caption:
          "👉 Insert image: Monolith vs Microservices (scaling & deployment comparison)",
      },

      {
        type: "heading",
        value: "🏗️ Service Decomposition Strategy",
      },
      {
        type: "paragraph",
        value:
          "Instead of splitting services randomly, the system is designed around business domains. Each service owns a specific responsibility and its own data.",
      },
      {
        type: "paragraph",
        value:
          "For example, the Order Service is responsible only for managing order lifecycle, while the Inventory Service handles stock consistency. This separation prevents overlapping responsibilities and reduces unintended side effects.",
      },
      {
        type: "paragraph",
        value:
          "Each service has its own database, following the 'database per service' pattern. This avoids tight coupling at the data layer and allows services to evolve independently.",
      },

      {
        type: "heading",
        value: "⚡ Communication: From REST to Event-Driven (Kafka)",
      },
      {
        type: "paragraph",
        value:
          "Initially, services communicated using synchronous REST APIs. While simple, this approach created tight coupling — if one service was slow or unavailable, it directly impacted others.",
      },
      {
        type: "paragraph",
        value:
          "To solve this, the system adopts an event-driven architecture using Kafka.",
      },
      {
        type: "paragraph",
        value:
          "Instead of directly calling another service, a service publishes an event. Other services subscribe and react to that event asynchronously.",
      },
      {
        type: "paragraph",
        value:
          "For example, when an order is created, the Order Service publishes an 'OrderCreated' event. The Inventory Service consumes this event and updates stock independently.",
      },
      {
        type: "paragraph",
        value:
          "This approach reduces coupling, improves resilience, and allows the system to handle traffic spikes more effectively.",
      },

      {
        type: "image",
        src: "",
        caption:
          "👉 Insert image: Kafka event flow (Producer → Topic → Consumer)",
      },

      {
        type: "heading",
        value: "⚙️ Data Consistency: Embracing Eventual Consistency",
      },
      {
        type: "paragraph",
        value:
          "In a distributed system, maintaining strong consistency across services is extremely complex and often not practical.",
      },
      {
        type: "paragraph",
        value:
          "Instead of using distributed transactions, the system adopts eventual consistency.",
      },
      {
        type: "paragraph",
        value:
          "Each service updates its own data and publishes events. Other services eventually synchronize their state based on these events.",
      },
      {
        type: "paragraph",
        value:
          "This introduces a small delay in data synchronization, but significantly improves scalability and fault tolerance.",
      },

      {
        type: "heading",
        value: "📦 Inventory Challenge & Redis Reservation Strategy",
      },
      {
        type: "paragraph",
        value:
          "One of the most critical problems in e-commerce systems is preventing overselling when multiple users purchase the same product simultaneously.",
      },
      {
        type: "paragraph",
        value:
          "If handled incorrectly, this can lead to inconsistent stock data and failed orders.",
      },
      {
        type: "paragraph",
        value:
          "To address this, the system uses Redis as a fast in-memory store to implement a reservation mechanism.",
      },
      {
        type: "paragraph",
        value:
          "When an order is created, stock is temporarily reserved in Redis before being permanently deducted in the database.",
      },
      {
        type: "paragraph",
        value:
          "This approach ensures that concurrent requests do not exceed available stock and helps prevent race conditions.",
      },

      {
        type: "image",
        src: "",
        caption: "👉 Insert image: Redis reservation workflow",
      },

      {
        type: "heading",
        value: "🔐 Authentication & Authorization (OAuth2)",
      },
      {
        type: "paragraph",
        value:
          "Authentication is implemented using Google OAuth2 to provide a secure and user-friendly login experience.",
      },
      {
        type: "paragraph",
        value:
          "After authentication, the system issues access tokens that are used for communication between the client and services.",
      },
      {
        type: "paragraph",
        value:
          "Authorization is handled using role-based access control (RBAC), allowing fine-grained permissions for different user roles such as USER, ADMIN, MANAGER, and OWNER.",
      },

      {
        type: "heading",
        value: "🛑 Fault Tolerance with Circuit Breaker",
      },
      {
        type: "paragraph",
        value:
          "In a microservices architecture, failures are inevitable. A single failing service can potentially cause a cascade of failures across the system.",
      },
      {
        type: "paragraph",
        value: "To mitigate this, the system uses a circuit breaker pattern.",
      },
      {
        type: "paragraph",
        value:
          "When a service becomes unavailable or slow, the circuit breaker stops further requests from reaching it, allowing the system to degrade gracefully instead of failing completely.",
      },

      {
        type: "heading",
        value: "🌐 API Gateway as the Entry Point",
      },
      {
        type: "paragraph",
        value:
          "The API Gateway acts as the single entry point for all client requests.",
      },
      {
        type: "paragraph",
        value:
          "It is responsible for routing requests to the correct services, as well as handling cross-cutting concerns such as authentication, logging, and rate limiting.",
      },
      {
        type: "paragraph",
        value:
          "This simplifies the client architecture and centralizes important system logic.",
      },

      {
        type: "image",
        src: "",
        caption: "👉 Insert image: API Gateway routing flow",
      },

      {
        type: "heading",
        value: "🌌 Final Thoughts",
      },
      {
        type: "paragraph",
        value:
          "Designing this system revealed that architecture is a series of trade-offs.",
      },
      {
        type: "paragraph",
        value:
          "Microservices introduce complexity — distributed systems, eventual consistency, asynchronous communication — but in return, they provide scalability, flexibility, and resilience.",
      },
      {
        type: "paragraph",
        value:
          "In the next part, I will walk through the order processing flow step-by-step, showing exactly how data moves across services in real time.",
      },
    ],
  },
  {
    id: "hero-3",
    title: "Streetwear Reinvented",
    subtitle: "Bold silhouettes for modern identity",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000",
    backgroundImage:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000",
    ctaText: "Discover",
    ctaLink: "/blog/hero-3",
    tag: "Trending",
    author: {
      name: "Fashion Team",
      avatar: "https://i.pravatar.cc/150?u=team",
    },
    createdAt: "2026-05-03",
    stats: {
      views: 2100,
      likes: 870,
    },
    content: [
      {
        type: "heading",
        value: "The New Wave",
      },
      {
        type: "paragraph",
        value:
          "Streetwear is no longer a subculture—it's the culture. We're exploring how traditional tailoring meets oversized silhouettes.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000",
      },
      {
        type: "paragraph",
        value:
          "Identity is fluid, and our clothing should reflect that versatility.",
      },
    ],
  },
  {
    id: "hero-4",
    title: "Everyday Excellence",
    subtitle: "Where comfort meets timeless design",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000",
    backgroundImage:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000",
    ctaText: "View Collection",
    ctaLink: "/blog/hero-4",
    tag: "Editor's Pick",
    author: {
      name: "Editor",
      avatar: "https://i.pravatar.cc/150?u=editor",
    },
    createdAt: "2026-05-02",
    stats: {
      views: 1560,
      likes: 430,
    },
    content: [
      { type: "heading", value: "Craftsmanship Matters" },
      {
        type: "paragraph",
        value:
          "Real luxury is found in the details that most people never see.",
      },
    ],
  },
  {
    id: "hero-5",
    title: "The Greatest Father of the Sea",
    subtitle: "The legacy of Edward Newgate — Whitebeard",
    image:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1000",
    backgroundImage:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1000",

    ctaText: "Read Legacy",
    ctaLink: "/blog/hero-6",

    tag: "Legend",

    author: {
      name: "Story Archive",
      avatar: "https://i.pravatar.cc/150?u=whitebeard",
    },

    createdAt: "2026-05-06",

    stats: {
      views: 9800,
      likes: 5400,
    },

    content: [
      {
        type: "heading",
        value: "A Man Who Became a Nation",
      },
      {
        type: "paragraph",
        value:
          "In a world ruled by fear and ambition, there existed a man who desired nothing but a family.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000",
        caption: "The sea that carried legends beyond time.",
      },
      {
        type: "paragraph",
        value:
          "Edward Newgate, known as Whitebeard, stood not as a conqueror — but as a father to those who had none.",
      },

      {
        type: "heading",
        value: "The Power That Shook the World",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",
        caption: "A storm that even the ocean bowed to.",
      },
      {
        type: "paragraph",
        value:
          "His strength was not just in destruction, but in protection. A single swing of his power could split the sea itself.",
      },

      {
        type: "heading",
        value: "A Father's Final Stand",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000",
        caption: "Silence before the final roar.",
      },
      {
        type: "paragraph",
        value:
          "Even in death, he stood upright — wounds on his body, but not a single mark on his pride.",
      },

      {
        type: "paragraph",
        value:
          "They say pirates chase treasure. But Whitebeard proved something greater exists — a family not bound by blood, but by will.",
      },
    ],
  },
];
