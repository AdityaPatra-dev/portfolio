import { EngineeringNote } from '../types';

export const engineeringNotesData: EngineeringNote[] = [
  {
    id: "cloudflare-bypass-ja3-tls-sidecars",
    slug: "bypassing-cloudflare-anti-bot-ja3-tls-sidecars",
    title: "Bypassing Cloudflare Anti-Bot Defenses: JA3 TLS Fingerprinting, HTTP/2 Framing, and Sidecar Automation",
    date: "April 2026",
    category: "Networking",
    readTime: "7 min read",
    summary: "Engineering lessons from Novels-World and Manhua-extractor: why standard HTTP clients fail against Cloudflare Turnstile, how curl_cffi mimics Chrome 124 TLS handshakes, and automating headless sidecar clearance.",
    content: [
      "Modern anti-bot web protection suites like Cloudflare Bot Management and Turnstile rarely rely on IP reputation alone. Long before application-level HTTP headers or user-agent strings are evaluated, Cloudflare analyzes the transport layer: the initial TLS ClientHello packet.",
      "Every TLS client implementation (Python Requests, Go net/http, Chromium) produces a unique cryptographic footprint called a JA3/JA4 fingerprint. This fingerprint encodes the exact set and ordering of supported cipher suites, TLS extensions, elliptic curve algorithms (ECDH), and ALPN (Application-Layer Protocol Negotiation) parameters. Because standard Python Requests uses OpenSSL bindings that differ wildly from real web browsers, Cloudflare flags and drops the TCP connection immediately with a 403 Forbidden or Turnstile challenge.",
      "While building Manhua-extractor and Novels-World, we solved this with a two-tier bypass pipeline. In Tier 1, we employ curl_cffi to achieve byte-accurate TLS fingerprint impersonation of Google Chrome 124. This mimics Chrome's exact ClientHello extension layout, GREASE (Generate Random Extensions And Sustain Extensibility) values, and HTTP/2 pseudo-header serialization (:method, :authority, :scheme, :path). Over 85% of protected endpoints clear instantly without spawning a browser.",
      "For Tier 2 (interactive Turnstile checkboxes or proof-of-work challenges), the application container communicates over an internal Docker network with a headless FlareSolverr sidecar. The sidecar solves the challenge once, and our engine caches the resulting 'cf_clearance' session cookies and User-Agent headers, persisting them to disk for subsequent zero-overhead requests."
    ],
    keyTakeaways: [
      "Cloudflare blocks scrapers at the TLS handshake level based on JA3/JA4 fingerprints before HTTP headers are even inspected.",
      "curl_cffi provides native C-level Chrome TLS and HTTP/2 framing impersonation, clearing anti-bot systems with zero browser overhead.",
      "Docker Compose sidecars (FlareSolverr) act as an automated fallback bridge, persisting cf_clearance session tokens across requests."
    ],
    tags: ["Networking", "Cloudflare", "TLS Fingerprinting", "JA3", "Docker", "Reverse Engineering"]
  },
  {
    id: "containerizing-offline-media-extractors",
    slug: "containerizing-offline-media-extractors-docker-compose-opds",
    title: "Containerizing Offline-First Media Systems: Multi-Service Docker Compose, Sidecars, and Local OPDS Servers",
    date: "April 2026",
    category: "DevOps",
    readTime: "6 min read",
    summary: "Architecting self-hosted container deployments for offline readers: persistent storage mapping, FlareSolverr sidecars, health checks, and embedded OPDS catalog streaming.",
    content: [
      "Building offline-first applications that pull content from dozens of web endpoints requires careful packaging. Users expect to deploy the entire toolchain on their home server or Raspberry Pi with a single command, without compiling native media libraries or fighting Python virtual environments.",
      "For Manhua-extractor and Novels-World, we published production-ready multi-arch images directly to Docker Hub (adityapatra/manhua-extractor and adityapatra/novels-world). A core architectural focus was creating a seamless multi-service Docker Compose blueprint.",
      "The setup orchestrates the extractor container alongside a FlareSolverr sidecar. Both services run in a private container network with explicit Docker healthcheck probes (/api/health) to ensure the extractor doesn't accept incoming user requests until the challenge solver is healthy.",
      "To enable zero-cloud offline reading on mobile devices (Mihon, Tachiyomi, and Kindle/E-Ink), the container embeds an OPDS (Open Publication Distribution System) v1.2 streaming server on port 8080. When connected to the home Wi-Fi, mobile reading clients discover the catalog automatically, streaming WebP CBZ archives and offline chapters with zero cloud exposure."
    ],
    keyTakeaways: [
      "Multi-service Docker Compose architectures cleanly isolate heavy challenge-solving sidecars from lightweight web extractors.",
      "Docker healthcheck probes with start_period prevent race conditions during startup in multi-container dependencies.",
      "Embedded OPDS servers enable direct local-network synchronization between home servers and mobile e-readers."
    ],
    tags: ["DevOps", "Docker", "Docker Compose", "OPDS", "Self-Hosted", "Networking"]
  },
  {
    id: "high-throughput-scraping-evasion",
    slug: "high-throughput-scraping-anti-hotlinking-astro-hydration",
    title: "High-Throughput Scraping & Content Hydration: Defeating Anti-Hotlinking, Astro Islands, and 429 Bans",
    date: "March 2026",
    category: "Networking",
    readTime: "6 min read",
    summary: "How modern web aggregators protect digital assets via Sec-Fetch headers and client-side hydration, and how to extract complete streams without triggering rate limits.",
    content: [
      "Modern web publishing platforms employ sophisticated techniques to prevent media leeching: dynamic JavaScript hydration, Sec-Fetch request header inspection, anti-hotlink CDN referer gates, and aggressive 429 rate limits.",
      "During the development of Manhua-extractor and Novels-World across 31+ catalog sources, standard HTML parsing frequently yielded empty containers or low-resolution thumbnail placeholders. Scanlators built on Next.js and Astro v7/v8 avoid server-rendering media panels; instead, they embed obfuscated JSON state inside script tags or Astro island components.",
      "Rather than running heavy headless browsers that eat gigabytes of RAM, we built targeted AST and JSON crawlers that extract raw data directly from '__NEXT_DATA__' and 'window.__INITIAL_STATE__'. This recovers the complete panel list in milliseconds without rendering a single DOM element.",
      "To defeat CDN anti-hotlinking protections (which return 403 Forbidden when images are fetched outside the parent site), our network layer dynamically injects contextual 'Referer', 'Origin', and 'Sec-Fetch-Site: same-site' headers on every panel download stream. A worker pool with exponential jitter backoff ensures we stay strictly under server rate-limiting thresholds."
    ],
    keyTakeaways: [
      "Extracting raw JSON state from Next.js and Astro islands is orders of magnitude faster than headless browser DOM automation.",
      "Anti-hotlink CDN barriers require synthesizing precise Sec-Fetch and Referer headers matching the target origin.",
      "Asynchronous worker pools with randomized jitter backoff eliminate IP throttling and HTTP 429 penalties."
    ],
    tags: ["Networking", "Web Scraping", "Concurrency", "HTTP/2", "Python", "Automation"]
  },
  {
    id: "gapless-neural-audio-ring-buffers",
    slug: "0ms-gapless-neural-audio-ring-buffers-mpeg-trimming",
    title: "0ms Gapless Neural Audiobooks: Ring Buffer Scheduling and MPEG Silence Trimming",
    date: "March 2026",
    category: "Architecture",
    readTime: "6 min read",
    summary: "Eliminating the 1.5s playback lag between spoken sentences in mobile reader apps via native ExoPlayer AudioTrack queues and 144-byte MPEG silence frame stripping.",
    content: [
      "Most mobile novel reading apps with text-to-speech functionality feel disjointed: every sentence transition suffers an awkward 1.5-second silence while the app waits for platform-channel callbacks and native audio decoders re-initialize.",
      "In Novels-World, we engineered a sample-accurate, 0ms gapless streaming audio architecture. The system uses a monotonic FIFO ring buffer that pre-synthesizes paragraph N+1 in the background while paragraph N is playing.",
      "A hidden challenge with neural TTS engines (like Microsoft Edge Neural) is that they bake 30 to 40 silent MPEG frames (approx. 900ms of dead air) onto the tail end of every audio clip. Even with seamless queuing, this creates an unnatural pause after every spoken phrase.",
      "We solved this by implementing a real-time MPEG silence trimmer (_trimTrailingSilence) that scans the raw audio byte buffer backwards, identifies 144-byte MPEG frame sync markers, and slices away silent frames in microseconds. When passed into ExoPlayer's native AudioTrack queue, audio transitions feel like a human voice actor with authentic pacing and zero pauses."
    ],
    keyTakeaways: [
      "Monotonic FIFO ring buffers allow continuous pre-fetching of neural audio clips without UI thread stutter.",
      "Neural TTS APIs frequently inject hundreds of milliseconds of silent MPEG padding that must be stripped at the byte level.",
      "Native ExoPlayer AudioTrack queuing eliminates decoder teardown overhead between continuous speech segments."
    ],
    tags: ["Architecture", "Flutter", "Audio Engineering", "ExoPlayer", "MPEG", "TTS"]
  },
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
      "When a developer pushes to 'main', GitHub sends an HMAC-SHA256 signed POST webhook. DeployHub verifies the signature to prevent payload spoofing, clones the specific commit SHA, and inspects the repository for Dockerfiles or language runtimes.",
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
      "Namespaces isolate process trees (PID namespace), network interfaces and routing tables (NET namespace), filesystem mount points (MNT namespace), inter-process communication (IPC namespace), and user/group ID mappings (USER namespace). When you run ps aux inside a container, you only see PID 1 because the kernel filters processes outside that PID namespace.",
      "Meanwhile, cgroups v2 enforce hard memory limits (memory.max), CPU quotas (cpu.max), and I/O bandwidth. If a container exceeds its memory quota, the kernel OOM killer terminates the process directly, producing the familiar Kubernetes OOMKilled status code 137. Understanding this relationship makes diagnosing cluster failures straightforward."
    ],
    keyTakeaways: [
      "Containers share the host kernel; isolation is enforced via kernel namespaces and cgroups v2.",
      "The USER namespace allows running containers with root inside the container while mapping to an unprivileged UID on the host.",
      "Kubernetes exit code 137 indicates the Linux kernel OOM killer terminated the process due to cgroup limits."
    ],
    tags: ["Linux", "Kernel", "cgroups", "Namespaces", "Docker", "Systems"]
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
      "Instead of invoking shell commands synchronously, the Python backend executes worker processes using asynchronous pipes (asyncio.subprocess). For FFmpeg, stdout is piped to a progress parser that extracts timestamps, calculates percentage completion, and broadcasts live telemetry over WebSockets to the web interface.",
      "To prevent malformed inputs (such as corrupted PDF zip bombs or infinite loop SVGs) from freezing system resources, every subprocess is executed inside an isolated sandbox with memory ceiling clamps and strict timeout watchers."
    ],
    keyTakeaways: [
      "Local-first architecture guarantees zero privacy leakage and removes artificial cloud upload limits.",
      "Never invoke external binary tools with shell=True; use isolated argument arrays and asynchronous process pipes.",
      "WebSocket progress streaming provides high-responsiveness feedback during heavy video transcode operations."
    ],
    tags: ["Architecture", "Python", "FFmpeg", "FastAPI", "WebSockets", "Sandboxing"]
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
  }
];
