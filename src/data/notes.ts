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
    summary: "Engineering lessons from building TAARAK for SIH 2025: reactive local SQLite stores, conflict-free synchronization, and scaling an automated test suite to 440 passing tests.",
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
      "While building local RAG pipelines, understanding these memory boundaries guided when to rely on context retrieval versus when fine-tuning adapters made practical sense."
    ],
    keyTakeaways: [
      "LoRA decomposes weight updates into low-rank matrices, drastically reducing gradient storage requirements.",
      "QLoRA enables training adapters on top of 4-bit quantized base models without catastrophic loss of perplexity.",
      "For domain-specific factual knowledge, RAG with dense vector retrieval is usually faster to iterate on than adapter training."
    ],
    tags: ["Machine Learning", "PyTorch", "Transformers", "LoRA", "QLoRA", "Quantization"]
  }
];
