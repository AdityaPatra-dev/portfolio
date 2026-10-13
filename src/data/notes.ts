import { EngineeringNote } from '../types';

export const engineeringNotesData: EngineeringNote[] = [
  {
    id: "k8s-local-incident-response",
    slug: "simulating-k8s-incident-response-k3d",
    title: "Simulating Kubernetes Incident Response Locally with k3d and Chaos Injections",
    date: "March 2026",
    category: "Kubernetes",
    readTime: "5 min read",
    summary: "Why testing infrastructure failure scenarios on a local k3d cluster saves hours of cloud debugging, and how to structure automated remediation without breaking host state.",
    content: [
      "When studying for the CKA or building resilient cloud systems, the biggest blind spot is that happy-path tutorials rarely prepare you for real cluster disasters: evicted pods, node pressure, broken CoreDNS configurations, and network partition deadlocks.",
      "While building CloudArena, I wanted a fast, deterministic environment where I could trigger failures programmatically and test automated fix routines. Running full virtual machines with Minikube was too heavy for rapid feedback loops, and running test workloads on AWS directly would lead to unnecessary billing.",
      "The solution was k3d, which wraps lightweight k3s instances inside Docker containers. With k3d, spinning up a 3-node cluster takes under 15 seconds. You can programmatically inspect kubelet health, test PodDisruptionBudgets, and simulate pod restarts safely.",
      "One key lesson was decoupling the incident reporting layer from the cluster's internal state using an external Redis instance. If your monitoring pod crashes along with the target workload, you lose visibility into whether the remediation succeeded. Keeping an independent event queue proved vital."
    ],
    keyTakeaways: [
      "k3d enables multi-node Kubernetes cluster topologies directly on a laptop with minimal RAM overhead.",
      "Automated remediation logic must verify pod readiness probes rather than relying on naive sleep timers.",
      "Always isolate your telemetry and incident logging from the workloads being disrupted."
    ],
    tags: ["Kubernetes", "k3d", "Docker", "Chaos Engineering", "Resilience"]
  },
  {
    id: "offline-first-drift-sqlite",
    slug: "offline-first-architecture-drift-sqlite",
    title: "Architecting Offline-First Mobile Apps with Drift SQLite and Riverpod",
    date: "January 2026",
    category: "Architecture",
    readTime: "6 min read",
    summary: "Engineering lessons from building TAARAK for SIH 2026: reactive local SQLite stores, conflict-free synchronization, and scaling an automated test suite to 440 passing tests.",
    content: [
      "In mobile applications meant for emergency or low-connectivity environments, assuming that a network connection is always available is a recipe for broken user experiences. When a user submits critical field data, the application must immediately commit the write locally without displaying a spinner.",
      "During the development of TAARAK, I selected Drift (formerly Moor), a reactive persistence library for Dart and SQLite. Drift generates type-safe Dart classes directly from SQL schema definitions or Dart DSLs, catching column mismatch bugs at compile-time rather than during runtime crashes.",
      "The architectural backbone was separating UI widgets from database mutations using Riverpod providers. Instead of widgets subscribing directly to network REST calls, they observe local reactive Drift streams. When the background sync worker pushes new records to Firebase Firestore or receives cloud updates, the local SQLite database updates, which immediately triggers the UI stream automatically.",
      "To verify that edge cases (like app kills midway through an offline write or network reconnect races) were handled cleanly, we built a comprehensive test suite. By isolating business logic into pure Dart test targets, the repository reached 440 passing unit and integration tests."
    ],
    keyTakeaways: [
      "In offline-first systems, the local embedded database is the single source of truth for the UI, not the remote API.",
      "Monotonically increasing version timestamps simplify record reconciliation after long network dropouts.",
      "Pure architecture layers allow running hundreds of fast automated tests without needing device emulators."
    ],
    tags: ["Flutter", "Dart", "SQLite", "Offline-First", "Riverpod", "Testing"]
  },
  {
    id: "deployhub-git-to-k8s",
    slug: "automating-git-to-kubernetes-rollouts-deployhub",
    title: "Building DeployHub: Intercepting Webhooks to Automate Git-to-Kubernetes Rollouts",
    date: "February 2026",
    category: "DevOps",
    readTime: "5 min read",
    summary: "How modern PaaS platforms automate container builds, dynamic manifest generation, and zero-downtime rolling updates directly from GitHub push events.",
    content: [
      "Self-service platforms like Render, Railway, and Fly.io feel like magic until you unpack the underlying mechanics: webhook ingestion, container build isolation, manifest templating, and rollout observation.",
      "While developing DeployHub, the goal was building an open, reproducible GitOps bridge that containerizes any repository and deploys it onto a Kubernetes cluster without manual YAML tweaking.",
      "When a developer pushes to `main`, GitHub sends an HMAC-SHA256 signed POST webhook. DeployHub verifies the signature to prevent payload spoofing, clones the specific commit SHA, and inspects the repository for Dockerfiles or language runtimes.",
      "Instead of writing static YAML files to disk, DeployHub dynamically generates Kubernetes Deployment and Service specs with injected environment variables, CPU/memory limits, and rolling-update strategies. Using the Kubernetes Python client, it applies manifests and polls rollout status until pods report healthy readiness checks."
    ],
    keyTakeaways: [
      "Always authenticate external webhook payloads with HMAC-SHA256 secret tokens.",
      "Dynamic manifest generation prevents configuration drift between staging and production environments.",
      "Rolling updates must configure explicit maxUnavailable and maxSurge thresholds to guarantee zero downtime."
    ],
    tags: ["DevOps", "Kubernetes", "FastAPI", "CI/CD", "Docker", "GitOps"]
  },
  {
    id: "linux-namespaces-cgroups",
    slug: "linux-internals-namespaces-cgroups-container-boundaries",
    title: "Linux System Internals: Process Namespaces, cgroups v2, and Container Boundaries",
    date: "January 2026",
    category: "Linux",
    readTime: "7 min read",
    summary: "Containers are not lightweight virtual machines—they are ordinary Linux processes isolated by kernel namespaces and governed by control groups.",
    content: [
      "One of the most persistent misconceptions in cloud engineering is treating containers as mini virtual machines. In reality, there is no guest kernel running inside a Docker container. Every container shares the host Linux kernel.",
      "Linux creates container isolation through two primary kernel features: namespaces (which restrict what a process can *see*) and control groups or cgroups (which restrict what a process can *use*).",
      "Namespaces isolate process trees (PID namespace), network interfaces and routing tables (NET namespace), filesystem mount points (MNT namespace), inter-process communication (IPC namespace), and user/group ID mappings (USER namespace). When you run `ps aux` inside a container, you only see PID 1 because the kernel filters processes outside that PID namespace.",
      "Meanwhile, cgroups v2 enforce hard memory limits (`memory.max`), CPU quotas (`cpu.max`), and I/O bandwidth. If a container exceeds its memory quota, the kernel OOM killer terminates the process directly, producing the familiar Kubernetes `OOMKilled` status code 137. Understanding this relationship makes diagnosing cluster failures straightforward."
    ],
    keyTakeaways: [
      "Containers share the host kernel; isolation is enforced via kernel namespaces and cgroups v2.",
      "The USER namespace allows running containers with root inside the container while mapping to an unprivileged UID on the host.",
      "Kubernetes exit code 137 indicates the Linux kernel OOM killer terminated the process due to cgroup limits."
    ],
    tags: ["Linux", "Kernel", "cgroups", "Namespaces", "Docker", "Systems"]
  },
  {
    id: "lora-qlora-quantization-vram",
    slug: "understanding-lora-qlora-quantization-vram",
    title: "Understanding LoRA, QLoRA, and Quantization for Local LLM Workflows",
    date: "February 2026",
    category: "Machine Learning",
    readTime: "6 min read",
    summary: "Breaking down how low-rank adaptation and 4-bit NormalFloat quantization make fine-tuning and inference computationally feasible on standard developer hardware.",
    content: [
      "Full parameter fine-tuning of modern transformer models requires saving gradients, optimizer states (like Adam's first and second moments), and model weights. For an 8-billion parameter model in 16-bit precision, this easily consumes over 60GB of VRAM—far beyond what most student workstations possess.",
      "Parameter-Efficient Fine-Tuning (PEFT) with LoRA (Low-Rank Adaptation) addresses this by freezing the pre-trained model weights and injecting trainable rank decomposition matrices into the transformer layers (specifically the query and value projection matrices). If a weight matrix is d × k, LoRA represents the weight update ΔW as B × A, where B is d × r and A is r × k, with rank r typically between 8 and 64. This reduces trainable parameters by over 98%.",
      "QLoRA takes this a step further by quantizing the frozen base model to 4-bit NormalFloat (NF4) and introducing Double Quantization. During forward passes, 4-bit weights are dequantized to 16-bit floating point for matrix multiplication, while gradients only compute and accumulate across the small LoRA adapters.",
      "While building mastering-llms and local RAG retrieval pipelines, understanding these memory boundaries guided when to rely on context retrieval versus when fine-tuning adapters made practical sense."
    ],
    keyTakeaways: [
      "LoRA decomposes weight updates into low-rank matrices, drastically reducing gradient storage requirements.",
      "QLoRA enables training adapters on top of 4-bit quantized base models without catastrophic loss of perplexity.",
      "For domain-specific factual knowledge, RAG with dense vector retrieval is usually faster to iterate on than adapter training."
    ],
    tags: ["Machine Learning", "PyTorch", "Transformers", "LoRA", "QLoRA", "Quantization"]
  },
  {
    id: "local-first-engine-orchestration",
    slug: "local-first-media-processing-subprocess-sandboxing",
    title: "Local-First Media Processing: Orchestrating 9 CLI Engines with Subprocess Sandboxing",
    date: "March 2026",
    category: "Architecture",
    readTime: "5 min read",
    summary: "Architectural insights from Universal File Studio: managing FFmpeg pipes, real-time WebSocket progress streaming, and preventing malformed inputs from crashing local runtimes.",
    content: [
      "Online file conversion tools pose severe privacy vulnerabilities by uploading confidential documents, contracts, and audio recordings to third-party cloud infrastructure. Universal File Studio was designed to prove that workstation-class media processing can run entirely locally without third-party dependencies.",
      "The architectural challenge lies in coordinating 9 disparate command-line tools—FFmpeg, ImageMagick, Pandoc, LibreOffice, Tesseract OCR, QPDF, Ghostscript, Poppler, and 7-Zip—each with different exit codes, progress logging conventions, and error formatting.",
      "Instead of invoking shell commands synchronously, the Python backend executes worker processes using asynchronous pipes (`asyncio.subprocess`). For FFmpeg, stdout is piped to a progress parser that extracts timestamps, calculates percentage completion, and broadcasts live telemetry over WebSockets to the web interface.",
      "To prevent malformed inputs (such as corrupted PDF zip bombs or infinite loop SVGs) from freezing system resources, every subprocess is executed inside an isolated sandbox with memory ceiling clamps and strict timeout watchers."
    ],
    keyTakeaways: [
      "Local-first architecture guarantees zero privacy leakage and removes artificial cloud upload limits.",
      "Never invoke external binary tools with shell=True; use isolated argument arrays and asynchronous process pipes.",
      "WebSocket progress streaming provides high-responsiveness feedback during heavy video transcode operations."
    ],
    tags: ["Architecture", "Python", "FFmpeg", "FastAPI", "WebSockets", "Sandboxing"]
  }
];
