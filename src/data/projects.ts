import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "cloudarena",
    title: "CloudArena",
    tagline: "Local Kubernetes incident-response environment with simulated infrastructure failures and automated remediation.",
    category: "cloud_devops",
    featured: true,
    status: "completed",
    statusLabel: "Completed / Active",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/CloudArena",
    technologies: ["Kubernetes", "Docker", "k3d", "Python", "Redis", "Nginx", "React", "HMAC-SHA256"],
    summary: "CloudArena is a local Kubernetes-based incident-response sandbox designed to safely simulate real-world infrastructure failures (pod crashes, node pressure, network latency) and evaluate automated remediation workflows without cloud billing risks.",
    problem: "Learning Kubernetes failure recovery usually requires risking live production clusters or paying cloud bills for managed Kubernetes nodes. There was a clear need for a reproducible local testing ground where failure scenarios can be triggered programmatically and remediated.",
    solution: "Built a k3d-backed multi-node simulation environment orchestrating microservices, Redis caching, and an Nginx reverse proxy. Integrated an incident-response engine that injects controlled failures and evaluates whether remediation scripts or an AI-assisted mentor correctly identify and fix root causes.",
    myRole: "Designed the cluster topology, containerized microservices, wrote the automated chaos injection & remediation logic, and implemented request authentication.",
    architectureFlow: [
      { title: "Operator / Client", description: "Sends simulated requests & chaos commands via UI or CLI", badge: "React / CLI" },
      { title: "Nginx Gateway", description: "Enforces HMAC-SHA256 signature verification & routes traffic", badge: "Reverse Proxy" },
      { title: "k3d Cluster", description: "Multi-node local Kubernetes runtime hosting containerized workloads", badge: "k3d / K8s" },
      { title: "State & Cache", description: "Redis in-memory store tracking cluster health & incident states", badge: "Redis" },
      { title: "Incident Engine", description: "Injects pod failures, probes readiness, and triggers automated remediation", badge: "Python" }
    ],
    engineeringDecisions: [
      {
        title: "Why k3d instead of Minikube or full cloud Kubernetes?",
        description: "k3d runs lightweight k3s nodes inside Docker containers. This enables spinning up multi-node cluster topologies on a local laptop in seconds with negligible memory footprint compared to virtualized Minikube instances."
      },
      {
        title: "Cryptographic HMAC-SHA256 request verification",
        description: "To prevent unauthorized or rogue automated triggers from injecting incidents into the cluster, all control-plane dispatch commands require HMAC-SHA256 signed tokens."
      },
      {
        title: "Decoupled Redis incident event store",
        description: "Separated incident reporting from the application state so that when individual application microservices fail or crash, the monitoring and remediation stream remains intact."
      }
    ],
    challenges: [
      {
        challenge: "Handling flaky pod restart conditions during cascading simulated failures.",
        resolution: "Implemented exponential backoff checks and custom Kubernetes readiness and liveness probes to distinguish between intentional node drain tests and actual controller deadlocks."
      },
      {
        challenge: "Maintaining reliable inter-pod network connectivity across custom container bridge networks.",
        resolution: "Configured explicit CoreDNS upstream forwarders and service CIDR mappings within the k3d cluster creation manifest."
      }
    ],
    whatILearned: [
      "Deepened hands-on understanding of Kubernetes controllers, probes, namespaces, and node lifecycle events.",
      "How to write deterministic failure injection scripts that test resilience without corrupting host state.",
      "Practical experience integrating Nginx reverse proxy routing with containerized Python backends."
    ],
    verifiedFacts: [
      "Built with k3d, Docker, Python, Redis, React, and Nginx",
      "Features HMAC-SHA256 request verification",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "taarak",
    title: "TAARAK",
    tagline: "Offline-first mobile application with local SQLite synchronization, Firebase Auth, and routing workflows.",
    category: "software",
    featured: true,
    status: "completed",
    statusLabel: "Completed · SIH Project",
    period: "2025",
    githubUrl: "https://github.com/AdityaPatra-dev",
    technologies: ["Flutter", "Dart", "Riverpod", "go_router", "Drift / SQLite", "Firebase Auth", "Firestore", "OSRM"],
    summary: "TAARAK was developed as part of a Smart India Hackathon (SIH) team, where I independently engineered the core application architecture and feature set in Flutter and Dart, focusing on reliable offline data capture, cryptographic state sync, and road network routing.",
    problem: "Users operating in remote areas or disaster response scenarios often face complete loss of internet connectivity. Standard mobile applications freeze or lose unsynced user submissions when connections drop.",
    solution: "Architected an offline-first data layer using Drift (a reactive SQLite library for Dart) coupled with Riverpod state management. All writes occur locally with zero latency, queued with deterministic sync timestamps, and reconcile with Firebase Firestore once network connectivity is re-established.",
    myRole: "Independently implemented the primary Flutter/Dart application functionality, the offline-first database layer, OSRM route calculations, and wrote the automated test suite.",
    architectureFlow: [
      { title: "Flutter UI", description: "Reactive mobile screens driven by Riverpod state providers and go_router", badge: "Flutter / Dart" },
      { title: "Local Drift Store", description: "SQLite embedded database storing records, offline mutations, and cache", badge: "Drift / SQLite" },
      { title: "Sync Engine", description: "Background queue listening for network state changes and pushing pending syncs", badge: "Dart Stream" },
      { title: "Firebase Services", description: "Cloud authentication and Firestore database for verified cloud backup", badge: "Firebase" },
      { title: "Routing Engine", description: "OSRM (Open Source Routing Machine) integration for map and turn-by-turn logic", badge: "OSRM API" }
    ],
    engineeringDecisions: [
      {
        title: "Why Drift (SQLite) instead of pure key-value storage?",
        description: "Drift provides compile-time query verification, typed table definitions, and reactive streaming queries. Complex filtering and transactional updates operate reliably even during abrupt app terminations."
      },
      {
        title: "State isolation with Riverpod",
        description: "Separated UI widgets from network logic and database handlers. This allowed complete unit and integration testing without spinning up Flutter UI rendering engines."
      },
      {
        title: "OSRM for route optimization",
        description: "Integrated Open Source Routing Machine endpoints to compute navigational paths and travel times without requiring expensive proprietary mapping SDKs."
      }
    ],
    challenges: [
      {
        challenge: "Preventing race conditions and conflicting record updates during background synchronization after reconnection.",
        resolution: "Designed a conflict-resolution model based on monotonic version timestamps and idempotent database upserts."
      },
      {
        challenge: "Ensuring broad test coverage across offline state transitions.",
        resolution: "Authored 440 comprehensive automated unit and widget tests validating database migrations, route parsing, and authentication states."
      }
    ],
    whatILearned: [
      "Mastered reactive state management with Riverpod and decoupled application layering in Flutter.",
      "Learned the subtleties of offline-first databases, SQLite schemas, and distributed conflict resolution.",
      "Built rigorous habits around automated testing, achieving 440 passing tests across the test suite."
    ],
    verifiedFacts: [
      "Developed for Smart India Hackathon (SIH) team",
      "440 passing automated tests documented in repository",
      "Offline-first architecture powered by Drift / SQLite and Firebase"
    ]
  },
  {
    id: "llm-rag-system",
    title: "LLM / RAG Knowledge System",
    tagline: "Retrieval-augmented generation pipeline over technical programming literature with vector search & local inference.",
    category: "ml_ai",
    featured: true,
    status: "completed",
    statusLabel: "Completed / Learning Focus",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "Vector Database", "Embeddings", "LoRA/PEFT", "QLoRA", "Quantization"],
    summary: "A practical retrieval-augmented generation (RAG) system built over a curated collection of programming and computer systems literature, pairing dense vector retrieval with local quantized LLM inference.",
    problem: "General-purpose LLMs frequently hallucinate obscure API signatures or specific compiler behaviors. Querying massive raw PDF textbooks directly is computationally impractical and exceeds standard context windows.",
    solution: "Engineered an end-to-end Python pipeline that chunks technical texts, computes semantic embeddings via Hugging Face models, indexes them into a vector database, and dynamically injects high-similarity context snippets into local LLM generation prompts.",
    myRole: "Implemented document ingestion, semantic chunking, vector indexing, retrieval scoring, and local model inference workflows.",
    architectureFlow: [
      { title: "Document Chunker", description: "Parses technical textbooks and markdown into overlapping semantic chunks", badge: "Python" },
      { title: "Embedding Model", description: "Encodes text passages into dense multidimensional vector embeddings", badge: "Hugging Face" },
      { title: "Vector Store", description: "Indexes embeddings using cosine similarity search for fast nearest-neighbor retrieval", badge: "Vector DB" },
      { title: "Context Assembler", description: "Reranks retrieved passages and formats structured grounding prompts", badge: "Prompt Engine" },
      { title: "Quantized LLM", description: "Performs local inference using 4-bit / 8-bit quantized weights to fit VRAM", badge: "PyTorch / Transformers" }
    ],
    engineeringDecisions: [
      {
        title: "Quantization (4-bit / 8-bit) for local inference",
        description: "Standard 16-bit float model weights require more VRAM than available on typical development workstations. Employing quantization allows running capable causal language models locally."
      },
      {
        title: "Semantic chunking with overlapping windows",
        description: "Instead of naive fixed-character splits that sever code blocks in half, chunking boundaries respect markdown headers and code blocks with 15% sliding overlap."
      },
      {
        title: "Exploration of PEFT and LoRA / QLoRA parameter-efficient tuning",
        description: "Studied how low-rank adaptation matrices allow updating model representations without touching frozen base parameters, drastically reducing memory overhead during adaptation."
      }
    ],
    challenges: [
      {
        challenge: "Retrieval noise when queries use general terminology that matches irrelevant chapters.",
        resolution: "Introduced keyword-guided metadata filtering and top-k reranking based on document structure rather than raw vector similarity alone."
      },
      {
        challenge: "Managing CUDA out-of-memory errors during long context inference runs.",
        resolution: "Applied strict maximum context truncation and tuned batch inference sizes for GPU memory constraints."
      }
    ],
    whatILearned: [
      "Solidified understanding of attention mechanisms, tokenizers, causal language modeling, and KV-caching.",
      "Gained hands-on proficiency in Hugging Face Transformers, PyTorch tensors, and vector similarity algorithms.",
      "Understood the trade-offs between zero-shot RAG grounding vs fine-tuning with LoRA/QLoRA."
    ],
    verifiedFacts: [
      "Built with Python, PyTorch, Transformers, and vector database retrieval",
      "Tested on technical programming literature with local inference",
      "Covers RAG, LoRA/PEFT, QLoRA, and quantization concepts"
    ]
  },
  {
    id: "text-to-video",
    title: "Text-to-Video Generator",
    tagline: "Automated content generation pipeline synthesizing PDF documents into structured video presentations.",
    category: "ml_ai",
    featured: false,
    status: "completed",
    statusLabel: "Completed",
    period: "2025",
    githubUrl: "https://github.com/AdityaPatra-dev",
    technologies: ["Python", "PDF Processing", "TTS (Text-to-Speech)", "Generative AI", "Media Processing"],
    summary: "An automated Python pipeline that extracts text from structured PDF documents, summarizes key conceptual points, synthesizes natural audio narration via TTS, generates matching visual slides, and stitches everything into video files.",
    problem: "Converting technical documents, lecture slides, and notes into digestible video format is repetitive, labor-intensive, and time-consuming when done manually.",
    solution: "Integrated PDF parsing, summarization, voice synthesis, slide asset rendering, and video composition into a single automated Python workflow.",
    myRole: "Designed the end-to-end pipeline, wrote the PDF parsing logic, integrated TTS audio synthesis, and automated video clip rendering.",
    architectureFlow: [
      { title: "PDF Ingestion", description: "Extracts textual sections, headings, and outlines from PDF files", badge: "PyPDF / Parser" },
      { title: "Summarizer", description: "Generates concise script segments suitable for spoken narration", badge: "GenAI Engine" },
      { title: "TTS Engine", description: "Synthesizes timed voiceover audio tracks from generated script", badge: "TTS" },
      { title: "Visual Composer", description: "Generates slide frames, title cards, and key takeaway overlays", badge: "Image Engine" },
      { title: "Video Assembler", description: "Synchronizes audio tracks with visual frames into MP4 output", badge: "Media Processor" }
    ],
    engineeringDecisions: [
      {
        title: "Modular multi-stage architecture",
        description: "Structured each stage (parsing, scripting, audio, video) as independent CLI modules so failures in video stitching don't require re-running audio synthesis."
      },
      {
        title: "Timestamp-based audio-visual alignment",
        description: "Extracted precise audio duration metadata from TTS outputs to dynamically calibrate the frame duration of corresponding slides."
      }
    ],
    challenges: [
      {
        challenge: "Extracting clean semantic text from multi-column PDFs without capturing page numbers and running headers as speech.",
        resolution: "Applied regex heuristic filtering and bounding-box margin trimming during PDF extraction."
      }
    ],
    whatILearned: [
      "Practical experience chaining diverse AI APIs and media processing tools into a coherent automated batch pipeline.",
      "Handling audio/video synchronization and media codec constraints in Python."
    ],
    verifiedFacts: [
      "Built with Python, PDF processing tools, and TTS synthesis",
      "Automates end-to-end slide and narration assembly into video"
    ]
  },
  {
    id: "cloud-devops-foundation",
    title: "Cloud & DevOps Foundation Project",
    tagline: "7-Stage containerized infrastructure deployment from bare-metal Linux to automated cloud CI/CD.",
    category: "cloud_devops",
    featured: true,
    status: "in_progress",
    statusLabel: "In Progress · 7-Stage Track",
    period: "Active",
    githubUrl: "https://github.com/AdityaPatra-dev",
    technologies: ["Linux (Ubuntu)", "Systemd", "UFW Firewall", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "Floci (Local AWS)", "AWS"],
    summary: "A rigorous solo infrastructure project following a strict 7-stage engineering trajectory: creating and hardening a headless Ubuntu VM, configuring network security, authoring production-grade multi-stage Dockerfiles, building a multi-service Compose stack, emulating AWS resources locally using Floci, and deploying through an automated CI/CD pipeline.",
    problem: "Most developers learn DevOps superficially through cloud console click-ops without understanding Linux system administration, networking fundamentals, firewalls, or container boundaries. This project is specifically structured to prove verifiable systems competence from the ground up.",
    solution: "Executing a disciplined 7-stage roadmap: (1) Headless Linux server setup & non-root SSH hardening; (2) Port, firewall, and DNS networking validation; (3) Clean multi-stage Docker containerization; (4) Multi-service Compose architecture with reverse proxy; (5) Local cloud testing using Floci (an AWS-compatible offline emulator) to prevent surprise cloud bills; (6) Automated CI/CD deployment pipeline on push; (7) Incident documentation of every breakage and root cause.",
    myRole: "Engineer executing solo track — responsible for complete Linux configuration, Docker manifests, CI/CD pipeline, and technical break-fix logs.",
    architectureFlow: [
      { title: "Stage 1-2: Hardened Linux VM", description: "Headless Ubuntu server, non-root user, SSH keys only, UFW firewall", badge: "Linux / UFW" },
      { title: "Stage 3: Multi-Stage Dockerfile", description: "Minimal, secure container image built without extraneous build tools", badge: "Docker" },
      { title: "Stage 4: Compose Stack", description: "Multi-service architecture behind an Nginx reverse proxy with healthchecks", badge: "Compose" },
      { title: "Stage 5: Floci AWS Emulation", description: "Local AWS-compatible API layer for deterministic infrastructure testing", badge: "Floci / AWS" },
      { title: "Stage 6-7: CI/CD & Verification", description: "Automated GitHub Actions pipeline with break-fix incident documentation", badge: "GitHub Actions" }
    ],
    engineeringDecisions: [
      {
        title: "Floci for local AWS emulation",
        description: "Per project design, using Floci (https://floci.io/) provides an AWS-compatible local execution environment. This enables validating cloud deployment workflows and API calls locally without incurring unintended AWS billing."
      },
      {
        title: "Documenting breakages before fixes",
        description: "The project strictly enforces logging symptoms and hypotheses before applying fixes, prioritizing genuine engineering troubleshooting over quick paste-and-pray commands."
      }
    ],
    challenges: [
      {
        challenge: "Strict requirement against committing any secrets or credentials to Git history across at least 15 meaningful commits.",
        resolution: "Enforcing pre-commit secret scanning hooks and strict .env.example separation."
      }
    ],
    whatILearned: [
      "Currently solidifying deep familiarity with Linux systemd service units, IP routing tables, and non-root container permissions.",
      "Understanding the exact gap between running containers on localhost vs running automated production deployments."
    ],
    verifiedFacts: [
      "Solo 7-stage infrastructure and containerization track",
      "Strict solo track following a 7-stage infrastructure roadmap",
      "Architecture incorporates Floci local AWS emulation per build brief"
    ]
  }
];
