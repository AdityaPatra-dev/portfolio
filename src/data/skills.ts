import { SkillGroup } from '../types';

export const skillGroupsData: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for systems, infrastructure automation, application development, and scientific computing.",
    skills: [
      { name: "Python", status: "used_in_projects", note: "Primary language for ML, RAG pipelines, scripting, and automation" },
      { name: "C", status: "used_in_projects", note: "Academic systems programming, data structures, and memory fundamentals" },
      { name: "C++", status: "used_in_projects", note: "Object-oriented programming, algorithms, and performance" },
      { name: "Java", status: "used_in_projects", note: "Core CS curriculum, OOP concepts, and design patterns" },
      { name: "Dart", status: "used_in_projects", note: "Used in TAARAK mobile app (Riverpod, Drift SQLite, SIH)" },
      { name: "SQL", status: "used_in_projects", note: "Relational queries, schema design, indexes, and transactions" },
      { name: "Bash / Shell", status: "used_in_projects", note: "Linux scripting, environment configuration, and task automation" },
      { name: "JavaScript / TypeScript", status: "used_in_projects", note: "Frontend interfaces, web tooling, and React components" }
    ]
  },
  {
    id: "cloud_devops",
    title: "Cloud & DevOps Infrastructure",
    description: "Containerization, cluster orchestration, networking, and deployment pipelines.",
    skills: [
      { name: "Docker", status: "used_in_projects", note: "Multi-stage builds, non-root users, container networking, volumes" },
      { name: "Kubernetes", status: "used_in_projects", note: "Deployments, Services, ConfigMaps, Secrets, Probes, Ingress" },
      { name: "k3d / k3s", status: "used_in_projects", note: "Lightweight local multi-node cluster virtualization for testing" },
      { name: "Linux Server Administration", status: "used_in_projects", note: "Headless Ubuntu, systemd, SSH hardening, user permissions, UFW" },
      { name: "Nginx", status: "used_in_projects", note: "Reverse proxy, rate limiting, and request header verification" },
      { name: "Git & GitHub", status: "used_in_projects", note: "Version control, branching, PR workflows, and automated checks" },
      { name: "CI/CD (GitHub Actions)", status: "learning_exploring", note: "Automated test runs, container image builds, and deployments" },
      { name: "AWS Fundamentals", status: "learning_exploring", note: "Core VPC concepts, EC2, IAM policies, and cloud billing safeguards" },
      { name: "Floci (Local AWS)", status: "learning_exploring", note: "Offline local AWS emulation environment for zero-cost cloud testing" }
    ]
  },
  {
    id: "ml_ai",
    title: "Machine Learning & AI",
    description: "Deep learning frameworks, model inference, retrieval systems, and parameter-efficient fine-tuning.",
    skills: [
      { name: "PyTorch", status: "used_in_projects", note: "Tensors, autograd, model execution, and dataset loaders" },
      { name: "Hugging Face Transformers", status: "used_in_projects", note: "Tokenization, pipeline abstractions, and causal language models" },
      { name: "RAG (Retrieval-Augmented Generation)", status: "used_in_projects", note: "Chunking, semantic vector indexing, and context injection" },
      { name: "Vector Databases & Embeddings", status: "used_in_projects", note: "Cosine similarity search and vector storage" },
      { name: "LoRA / PEFT", status: "learning_exploring", note: "Parameter-efficient fine-tuning via low-rank adapter matrices" },
      { name: "QLoRA & 4-bit Quantization", status: "learning_exploring", note: "Running and adapting larger models within constrained GPU VRAM" },
      { name: "Model Inference Optimization", status: "used_in_projects", note: "Local execution with memory-conscious batching and KV caching" }
    ]
  },
  {
    id: "databases_storage",
    title: "Databases & Storage Systems",
    description: "Relational, document, embedded, and in-memory data storage solutions.",
    skills: [
      { name: "PostgreSQL", status: "used_in_projects", note: "Relational data integrity, indexing, and foreign key relations" },
      { name: "SQLite / Drift", status: "used_in_projects", note: "Embedded reactive database for offline-first mobile sync" },
      { name: "Redis", status: "used_in_projects", note: "In-memory caching and real-time state pub/sub in CloudArena" },
      { name: "Firebase Firestore", status: "used_in_projects", note: "Cloud document storage and real-time synchronization" }
    ]
  },
  {
    id: "software_tools",
    title: "Software Engineering & Tools",
    description: "Development patterns, frameworks, and developer productivity tooling.",
    skills: [
      { name: "Flutter & Riverpod", status: "used_in_projects", note: "State-managed reactive cross-platform mobile architecture" },
      { name: "Automated Testing", status: "used_in_projects", note: "Unit and integration test suites (440 passing tests in TAARAK)" },
      { name: "REST API Design", status: "used_in_projects", note: "Clean endpoint contracts, status codes, and error serialization" },
      { name: "HMAC-SHA256 Security", status: "used_in_projects", note: "Cryptographic signature verification for API requests in CloudArena" },
      { name: "Firebase Auth", status: "used_in_projects", note: "Secure token-based user authentication and session management" }
    ]
  }
];
