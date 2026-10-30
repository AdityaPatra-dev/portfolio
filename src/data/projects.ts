import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "cloudarena",
    title: "CloudArena",
    tagline: "AI-powered Cloud Infrastructure Survival Arena & SRE Chaos Simulator featuring local Kubernetes clusters.",
    category: "cloud_devops",
    featured: true,
    status: "completed",
    statusLabel: "Completed · Live App",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/CloudArena",
    liveUrl: "https://gdg-cloudarena.web.app",
    technologies: ["Kubernetes", "Docker", "k3d", "Python", "Google Gemini AI", "Redis", "Nginx", "React", "HMAC-SHA256"],
    summary: "CloudArena is an AI-powered Kubernetes incident-response sandbox and SRE chaos simulator designed to safely simulate real-world infrastructure failures (pod crashes, node pressure, network latency) and evaluate automated remediation workflows with Google Gemini AI incident mentorship.",
    problem: "Learning Kubernetes failure recovery usually requires risking live production clusters or paying cloud bills for managed Kubernetes nodes. There was a clear need for a reproducible local testing ground where failure scenarios can be triggered programmatically and remediated.",
    solution: "Built a k3d-backed multi-node simulation environment orchestrating microservices, Redis caching, and an Nginx reverse proxy. Integrated an incident-response engine that injects controlled failures and evaluates whether remediation scripts or an AI mentor correctly identify and fix root causes.",
    myRole: "Designed the cluster topology, containerized microservices, wrote the automated chaos injection & remediation logic, integrated Gemini AI mentorship, and implemented HMAC-SHA256 request authentication.",
    architectureFlow: [
      { title: "Operator / Client", description: "Sends simulated requests & chaos commands via UI or CLI", badge: "React / CLI" },
      { title: "Nginx Gateway", description: "Enforces HMAC-SHA256 signature verification & routes traffic", badge: "Reverse Proxy" },
      { title: "k3d Cluster", description: "Multi-node local Kubernetes runtime hosting containerized workloads", badge: "k3d / K8s" },
      { title: "State & Cache", description: "Redis in-memory store tracking cluster health & incident states", badge: "Redis" },
      { title: "Incident Engine", description: "Injects pod failures, probes readiness, and triggers automated remediation", badge: "Python" },
      { title: "Gemini AI Mentor", description: "Diagnoses simulated incident logs and provides real-time SRE root-cause analysis", badge: "Gemini AI" }
    ],
    engineeringDecisions: [
      {
        title: "Why k3d instead of Minikube or full cloud Kubernetes?",
        description: "k3d runs lightweight k3s nodes inside Docker containers. This enables spinning up multi-node cluster topologies on a local workstation in seconds with negligible memory footprint compared to virtualized Minikube instances."
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
      "Features HMAC-SHA256 request verification and Google Gemini AI mentoring",
      "Live deployment hosted at gdg-cloudarena.web.app",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "taarak",
    title: "TAARAK",
    tagline: "Offline-first disaster preparedness & emergency response platform built for Smart India Hackathon (SIH 2026).",
    category: "software",
    featured: true,
    status: "completed",
    statusLabel: "Completed · SIH 2026 (SIH26191)",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/Taarak",
    liveUrl: "https://taakrak-d9ed0.web.app",
    technologies: ["Flutter", "Dart", "Riverpod", "go_router", "Drift / SQLite", "Firebase Auth", "Firestore", "OSRM"],
    summary: "TAARAK was developed for Smart India Hackathon 2026 (Problem Statement SIH26191). Engineered an offline-first disaster response mobile platform in Flutter and Dart, focusing on reliable offline data capture, cryptographic state sync, and road network routing.",
    problem: "Citizens and first responders operating in remote or disaster-struck areas often experience total cellular outages. Standard mobile applications freeze or lose unsynced submissions when network connectivity drops.",
    solution: "Architected an offline-first data layer using Drift (reactive SQLite for Dart) coupled with Riverpod state management. All writes occur locally with zero latency, queued with deterministic sync timestamps, and reconcile with Firebase Firestore once network connectivity is restored.",
    myRole: "Independently implemented the primary Flutter/Dart application functionality, the offline-first SQLite database layer, OSRM route calculations, and wrote the automated test suite.",
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
      "Developed for Smart India Hackathon (SIH 2026 / SIH26191)",
      "440 passing automated tests documented in repository",
      "Live deployment hosted at taakrak-d9ed0.web.app",
      "Offline-first architecture powered by Drift / SQLite and Firebase"
    ]
  },
  {
    id: "subtitle-generator",
    title: "SubtitleGen AI",
    tagline: "Ultra-fast cross-platform AI subtitle & dubbing engine with silence-aware VAD and multi-provider ASR (Deepgram, Groq, Gemini).",
    category: "software",
    featured: true,
    status: "completed",
    statusLabel: "v1.0.1 · Cross-Platform Desktop & Android",
    period: "2026",
    githubUrl: "https://github.com/AdityaPatra-dev/subtitle_generator",
    liveUrl: "https://github.com/AdityaPatra-dev/subtitle_generator/releases",
    technologies: ["Flutter", "Dart", "FFmpeg", "Deepgram Nova-3", "Groq Whisper Large-v3", "Google Gemini 2.5 Flash", "Drift / SQLite", "Riverpod", "Linux Desktop", "Android"],
    summary: "SubtitleGen AI is a production-grade, privacy-first cross-platform application (Android, Linux desktop) engineered to generate broadcast-quality subtitles (.srt / .vtt) from long-form audio and video (from 30s clips up to 3+ hour films). Integrates deterministic Edge media DSP (FFmpeg EBU R128 loudness normalization and silence-aware VAD chunking) with cloud ASR (Deepgram Nova-3, Groq Whisper Large-v3, Gemini 2.5 Flash) and contextual LLM translation.",
    problem: "Transcribing long audio/video files (>25MB) using standard speech-to-text APIs fails due to provider payload limits. Naive time-based chunking cuts words or sentences in half, causing catastrophic transcription hallucination and out-of-sync subtitle timestamps.",
    solution: "Engineered an automated Edge media processing engine using FFmpeg silence-detection filters that dynamically split audio streams strictly at natural conversational breath pauses (midpoint silence split with a 20MB hard-cap). Chunks are dispatched concurrently to Deepgram, Groq, or Gemini, re-stitched with time-offset realignment, and formatted strictly to Netflix/BBC broadcast subtitle guidelines (≤42 characters/line).",
    myRole: "Architected and built the entire application: designed the Edge FFmpeg audio DSP pipeline, implemented multi-provider ASR coordinators (Deepgram, Groq, Gemini), developed the Riverpod state management and Drift SQLite database, and configured CI/CD release builds for native Linux and Android.",
    architectureFlow: [
      { title: "Raw Video", description: "Edge Media Engine ingests MP4/MKV/MOV and extracts audio", badge: "FFmpeg DSP" },
      { title: "Loudness & VAD", description: "16kHz mono normalization (EBU R128) and silence-aware sentence boundary slicing", badge: "VAD Slicer" },
      { title: "Multi-Engine ASR", description: "Concurrent speech-to-text dispatch to Deepgram Nova-3, Groq Whisper, or Gemini Flash", badge: "BYOK ASR" },
      { title: "Chunk Stitcher", description: "Realigns millisecond cue timecodes across chunk boundaries with zero drift", badge: "Time Offset Engine" },
      { title: "Contextual Translation", description: "Sliding-window LLM translation adhering to Netflix & BBC standards (≤42 chars/line)", badge: "LLaMA 3.3 / Gemini" },
      { title: "Hardware Keystore", description: "Encrypted BYOK storage using Android Keystore and Linux Secret Service", badge: "Security" }
    ],
    engineeringDecisions: [
      {
        title: "Silence-Aware VAD vs fixed-interval chunking",
        description: "Fixed 30s chunks chop words in mid-pronunciation. Splitting at the exact midpoint of acoustic silences ensures complete phrases, preventing hallucination."
      },
      {
        title: "Multi-Provider ASR fallback (BYOK)",
        description: "Allows users to route high-speed batch files through Groq LPU Whisper, ultra-fast long-form through Deepgram Nova-3, or multi-modal directly through Gemini."
      },
      {
        title: "Broadcast standard compliance",
        description: "Enforces Netflix/BBC rules (≤42 characters/line, max 2 lines per cue, 15-17 CPS reading speed limit) through a deterministic dynamic programming line-breaker."
      }
    ],
    challenges: [
      {
        challenge: "Floating-point timestamp drift during multi-chunk stitching.",
        resolution: "Solved by tracking microsecond sample offsets directly from FFmpeg probe headers rather than relying on wall-clock durations."
      },
      {
        challenge: "Handling 3+ hour raw video files on resource-constrained mobile hardware.",
        resolution: "Streamed audio directly to 16kHz mono Vorbis/WAV in a transient temp pipeline without decoding full video into RAM."
      }
    ],
    whatILearned: [
      "Advanced digital signal processing with FFmpeg (EBU R128 loudness filtering, silencedetect parsing).",
      "Cross-platform hardware-backed keystore integration in Dart/Flutter across Linux Secret Service and Android Keystore.",
      "Multi-provider ASR and LLM sliding-window batch translation."
    ],
    verifiedFacts: [
      "Cross-platform native Linux desktop and Android APK (Flutter 3.44.8, Dart 3.12.2)",
      "Silence-aware VAD chunking and EBU R128 loudness normalization via FFmpeg",
      "Multi-provider BYOK speech-to-text: Deepgram Nova-3, Groq Whisper Large-v3, Google Gemini 2.5 Flash",
      "Broadcast-standard subtitle formatting complying with Netflix & BBC guidelines (≤42 chars/line)"
    ]
  },
  {
    id: "deployhub",
    title: "DeployHub",
    tagline: "Automated self-service application deployment platform inspired by Render & Railway for containerizing and deploying GitHub repos to Kubernetes.",
    category: "cloud_devops",
    featured: true,
    status: "completed",
    statusLabel: "Active ⚡",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/DeployHub",
    technologies: ["Python", "Kubernetes", "Docker", "FastAPI", "GitHub Webhooks", "CI/CD", "Cloud Native"],
    summary: "DeployHub is an automated self-service deployment platform designed to simplify deploying containerized applications to Kubernetes directly from GitHub repositories, handling image building, manifest generation, and rollout orchestration.",
    problem: "Managing Kubernetes YAML manifests, ingress configurations, and container builds for every internal service creates excessive friction for developers who simply want to push code to Git and see it live.",
    solution: "Engineered a platform backend that intercepts GitHub webhook events, automatically synthesizes container build configurations, generates Kubernetes Deployment and Service specs, and applies them seamlessly to the target cluster.",
    myRole: "Architected the webhook dispatcher, containerization pipeline, Kubernetes manifest generator, and deployment rollout engine.",
    architectureFlow: [
      { title: "GitHub Webhook", description: "Triggers on Git push event with repository metadata and commit hash", badge: "Git Push" },
      { title: "DeployHub Controller", description: "FastAPI engine orchestrating container build and manifest templating", badge: "FastAPI" },
      { title: "Image Builder", description: "Automated Docker daemon container image build and local registry push", badge: "Docker" },
      { title: "K8s Dispatcher", description: "Applies dynamic Deployment, Service, and Ingress manifests to cluster", badge: "Kubernetes" },
      { title: "Health Observer", description: "Monitors rollout status, pod liveness, and logs deployment telemetry", badge: "Observer" }
    ],
    engineeringDecisions: [
      {
        title: "Dynamic manifest templating over static files",
        description: "Generated Kubernetes manifests dynamically with environment variables and resource constraints to prevent configuration drift."
      },
      {
        title: "Webhook authentication and signature validation",
        description: "Implemented cryptographic HMAC verification on incoming GitHub webhook payloads to reject spoofed events."
      }
    ],
    challenges: [
      {
        challenge: "Handling concurrent deployment triggers without thrashing Kubernetes API server rate limits.",
        resolution: "Implemented an in-memory queue with debouncing so multiple rapid commits to the same branch collapse into a single build."
      }
    ],
    whatILearned: [
      "Deep understanding of how modern PaaS platforms (Railway, Render, Fly.io) orchestrate Kubernetes workloads under the hood.",
      "Direct programmatic interaction with the Kubernetes API via client libraries."
    ],
    verifiedFacts: [
      "Open source repository hosted on GitHub",
      "Full self-service Git-to-Kubernetes pipeline"
    ]
  },
  {
    id: "mastering-llms",
    title: "mastering-llms & RAG System",
    tagline: "Curated knowledge base and engineering system covering LLM architectures, LoRA/QLoRA fine-tuning, and RAG vector search.",
    category: "ml_ai",
    featured: true,
    status: "completed",
    statusLabel: "Completed ✅",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/mastering-llms",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "FAISS", "Vector DB", "Embeddings", "LoRA/PEFT", "QLoRA", "Quantization"],
    summary: "A practical engineering knowledge base and retrieval-augmented generation (RAG) system covering transformer fundamentals, dense semantic embeddings, parameter-efficient fine-tuning (PEFT/LoRA), and local quantized LLM inference.",
    problem: "Understanding modern LLM systems requires moving beyond high-level prompts into how attention mechanisms, tokenizers, quantization formats, and vector similarity behave in production environments.",
    solution: "Engineered document ingestion, semantic chunking, and FAISS vector indexing pipelines coupled with local quantized LLM inference models (4-bit NF4) to benchmark retrieval accuracy and generation quality.",
    myRole: "Implemented document ingestion, semantic chunking, vector indexing, retrieval scoring, and local model inference workflows.",
    architectureFlow: [
      { title: "Document Chunker", description: "Parses technical textbooks and markdown into overlapping semantic chunks", badge: "Python" },
      { title: "Embedding Model", description: "Encodes text passages into dense multidimensional vector embeddings", badge: "Hugging Face" },
      { title: "Vector Store", description: "Indexes embeddings using cosine similarity search for fast nearest-neighbor retrieval", badge: "FAISS" },
      { title: "Context Assembler", description: "Reranks retrieved passages and formats structured grounding prompts", badge: "Prompt Engine" },
      { title: "Quantized LLM", description: "Performs local inference using 4-bit / 8-bit quantized weights to fit workstation VRAM", badge: "PyTorch / Transformers" }
    ],
    engineeringDecisions: [
      {
        title: "Quantization (4-bit NF4) for local inference",
        description: "Standard 16-bit float weights exceed consumer GPU memory limits. Employing NormalFloat4 quantization enables running capable causal language models locally."
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
        challenge: "Retrieval noise when queries use general terminology that matches irrelevant sections.",
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
      "Curated knowledge base covering Transformers, Fine-Tuning, and RAG",
      "Tested on technical programming literature with local inference",
      "Covers RAG, LoRA/PEFT, QLoRA, and quantization concepts"
    ]
  },
  {
    id: "universal-file-studio",
    title: "Universal File Studio",
    tagline: "Local-first universal file conversion & processing studio powered by 9 CLI engines with interactive 3D visual pipelines.",
    category: "software",
    featured: false,
    status: "completed",
    statusLabel: "Active ⚡",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/universal-file-studio",
    technologies: ["Python", "FastAPI", "WebSockets", "FFmpeg", "ImageMagick", "Pandoc", "Tesseract OCR", "QPDF", "Ghostscript", "Poppler", "7-Zip"],
    summary: "Universal File Studio is a local-first, privacy-conscious file conversion and processing engine powered by 9 industry-standard CLI engines. Features real-time WebSocket progress, dark-mode GUI, standalone CLI runner, and isolated local sandboxing.",
    problem: "Most online file conversion tools compromise user privacy by uploading sensitive documents to third-party cloud servers, while imposing file size limits and slow batch speeds.",
    solution: "Built a local workstation application that orchestrates 9 native CLI tools through a unified Python/FastAPI backend, streaming conversion progress in real-time over WebSockets directly to the local interface.",
    myRole: "Designed the conversion pipeline architecture, engine dispatch layer, local security sandboxing, and real-time WebSocket progress reporting.",
    engineeringDecisions: [
      {
        title: "Subprocess sandboxing and timeout safeguards",
        description: "Wrapped all native CLI engine invocations in isolated subprocesses with explicit timeouts and resource caps to prevent malformed files from hanging system resources."
      },
      {
        title: "Unified format conversion graph",
        description: "Implemented a directed conversion graph mapping source formats to target formats via multi-step intermediate conversions when direct transforms are not natively available."
      }
    ],
    challenges: [
      {
        challenge: "Handling large media and video transcode streams without blocking the web event loop.",
        resolution: "Spawned worker threads with asynchronous pipes capturing FFmpeg progress stdout and streaming frame percentages via WebSockets."
      }
    ],
    whatILearned: [
      "Mastered low-level process orchestration and I/O streaming in Python.",
      "Deep understanding of media codecs (FFmpeg), vector/raster imaging (ImageMagick), OCR parsing (Tesseract), and PDF restructuring (QPDF/Ghostscript)."
    ],
    verifiedFacts: [
      "Powered by 9 native CLI engines running strictly on localhost",
      "Open source repository hosted on GitHub"
    ]
  },
  {
    id: "beat_wave",
    title: "beat_wave",
    tagline: "DevOps-ready full-stack music streaming web application built with Node.js, Express, and PostgreSQL for Docker & Kubernetes showcase.",
    category: "cloud_devops",
    featured: false,
    status: "completed",
    statusLabel: "Active ⚡",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/beat_wave",
    technologies: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Docker", "Kubernetes", "HTML5 Audio", "CI/CD"],
    summary: "A production-grade full-stack music streaming platform engineered specifically as an end-to-end DevOps showcase, featuring containerized services, PostgreSQL database schema with persistent volumes, and deployment manifests for Kubernetes.",
    problem: "Demonstrating DevOps competencies requires realistic stateful applications that handle streaming assets, database migrations, and persistent storage rather than trivial stateless 'Hello World' containers.",
    solution: "Developed an audio streaming web application with Node.js and PostgreSQL, wrapped in multi-stage Dockerfiles, Docker Compose orchestrations, and Kubernetes manifests with persistent volume claims (PVCs) for media storage.",
    myRole: "Built the application backend, database schema, audio streaming endpoints, Docker containerization, and Kubernetes deployment specs.",
    engineeringDecisions: [
      {
        title: "Chunked audio byte-range streaming",
        description: "Implemented HTTP 206 Partial Content range requests in Express to support seamless audio seeking and reduced bandwidth consumption."
      },
      {
        title: "PostgreSQL persistent storage on Kubernetes",
        description: "Configured StatefulSet and PersistentVolumeClaims to ensure database durability across pod restarts and cluster rescheduling."
      }
    ],
    challenges: [
      {
        challenge: "Managing static media uploads and persistence inside ephemeral container environments.",
        resolution: "Decoupled static media storage into mounted volume paths, keeping the application image lean and stateless."
      }
    ],
    whatILearned: [
      "Hands-on experience configuring stateful workloads and persistent storage in container orchestration.",
      "Writing production-ready Docker Compose and Kubernetes manifests for multi-tier applications."
    ],
    verifiedFacts: [
      "Full-stack architecture with Node.js, Express, and PostgreSQL",
      "DevOps-ready containerization for Docker and Kubernetes",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "novels-world",
    title: "Novels-World",
    tagline: "Containerized & offline web novel reader & aggregator with 31+ multi-template sources, JA3 TLS Cloudflare bypass, and 0ms gapless neural audio.",
    category: "software",
    featured: false,
    status: "completed",
    statusLabel: "Active ⚡",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/Novels-World",
    technologies: ["Flutter", "Dart", "Docker", "Docker Compose", "JA3 TLS Bypass", "ExoPlayer", "MPEG Trimming", "Offline Storage", "TTS (Kokoro/Piper/Sherpa)"],
    summary: "A modern, high-performance offline web novel reader and studio-grade AI audiobook streaming application built in Flutter and Dart. Published as a production Docker container (adityapatra/novels-world), featuring 31+ catalog sources, JA3 TLS Cloudflare clearance, and a sample-accurate 0ms gapless audio engine.",
    problem: "Web novel reading across fragmented ad-filled websites breaks during offline commutes, while conventional mobile TTS adds jarring 1.5-second pauses between every sentence due to decoder teardowns and silent MPEG frames.",
    solution: "Architected a cross-platform client with transparent JA3 TLS fingerprinting to clear Cloudflare challenges, offline chapter caching, and a monotonic FIFO ring buffer that trims trailing MPEG silence frames in real-time for zero-gap continuous audiobook narration.",
    myRole: "Engineered scraper extraction heuristics across 31+ catalogs, the real-time MPEG silence stripping algorithm, the gapless audio FIFO ring buffer, and Docker container packaging.",
    architectureFlow: [
      { title: "Flutter Presentation", description: "Interactive reader with real-time paragraph highlighting & theme palettes", badge: "Flutter / Dart" },
      { title: "Anti-Bot Bypass", description: "JA3 TLS ClientHello fingerprinting & transparent Turnstile cookie sync", badge: "JA3 / TLS" },
      { title: "Source Extractors", description: "Multi-template parsers for Madara, LightNovelWP, NovelFull, and Astro sites", badge: "31+ Sources" },
      { title: "FIFO Ring Buffer", description: "Background queue pre-synthesizing paragraph N+1 while N is actively playing", badge: "RingBuffer" },
      { title: "MPEG Silence Trimmer", description: "Analyzes 144-byte frame sync markers to strip silent padding in microseconds", badge: "MPEG Trimmer" },
      { title: "Docker Distribution", description: "Published on Docker Hub (adityapatra/novels-world) as standalone web container", badge: "Docker Hub" }
    ],
    engineeringDecisions: [
      {
        title: "Byte-level MPEG trailing silence stripping",
        description: "Neural TTS engines inject 30-40 silent frames onto every generated clip. Slicing these frames at the byte level before queuing eliminates unnatural pauses between sentences."
      },
      {
        title: "Docker containerization for self-hosted reading",
        description: "Packaged the reader as an automated NGINX web container published on Docker Hub, enabling users to host their own private web instance with Docker Compose."
      }
    ],
    challenges: [
      {
        challenge: "Maintaining reliability across 31+ dynamic web novel website structures.",
        resolution: "Designed a pluggable parser architecture with template inheritance (Madara, LightNovelWP, NovelFull) to minimize source maintenance overhead."
      }
    ],
    whatILearned: [
      "Low-level MPEG audio frame structure and native ExoPlayer AudioTrack queue scheduling.",
      "Cross-platform Flutter performance tuning for heavy text and continuous audio workloads.",
      "Containerizing Flutter web builds into hardened, lightweight Docker images."
    ],
    verifiedFacts: [
      "31+ multi-template source support with 44 passing tests",
      "Published on Docker Hub as adityapatra/novels-world",
      "Features JA3 TLS bypass and 0ms gapless neural audio",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "dsa-vault",
    title: "DSA & Competitive Programming Vault",
    tagline: "Automated DSA & Competitive Programming vault in C++ & C — Live tracking across LeetCode, Codeforces, CodeChef, HackerRank & HackerEarth with real-time dynamic heatmaps.",
    category: "software",
    featured: false,
    status: "completed",
    statusLabel: "Active ⚡",
    period: "2024 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/DSA",
    technologies: ["C++", "C", "Python", "Data Structures", "Algorithms", "GitHub Actions Automation", "Markdown"],
    summary: "An automated data structures, algorithms, and competitive programming repository in C++ and C. Integrates GitHub Actions pipelines to dynamically track and render live coding activity across LeetCode, Codeforces, CodeChef, and HackerRank with real-time heatmaps.",
    problem: "Tracking algorithmic progress across multiple competitive programming platforms often results in scattered solutions and inconsistent documentation of problem patterns.",
    solution: "Created a centralized vault organized by algorithmic paradigms (DP, Graphs, Trees, Two Pointers) paired with a Python telemetry script running in GitHub Actions that aggregates solved problem counts and updates repository documentation automatically.",
    myRole: "Implemented algorithmic solutions in C++ and C, designed the problem classification taxonomy, and authored the telemetry automation scripts.",
    engineeringDecisions: [
      {
        title: "Automated telemetry sync via GitHub Actions",
        description: "Scheduled daily CI jobs that fetch problem statistics from competitive programming profile APIs and dynamically regenerate badges and progress heatmaps in the README."
      }
    ],
    challenges: [
      {
        challenge: "Handling diverse and sometimes rate-limited platform APIs.",
        resolution: "Implemented caching and retry mechanisms with backoff in the Python synchronization script."
      }
    ],
    whatILearned: [
      "Deepened mastery of core data structures, graph traversals, and dynamic programming.",
      "Designing automated self-updating repository telemetry with GitHub Actions."
    ],
    verifiedFacts: [
      "Solutions authored in C++ and C",
      "Automated CI/CD telemetry tracking across 5 competitive platforms",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "manhua-extractor",
    title: "Manhua-extractor",
    tagline: "Universal Manga/Manhua downloader, lossless WebP CBZ compiler & containerized app with Docker Compose, FlareSolverr sidecar, and OPDS server.",
    category: "software",
    featured: false,
    status: "completed",
    statusLabel: "Active ⚡",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/Manhua-extractor",
    technologies: ["Python", "Docker", "Docker Compose", "FlareSolverr Sidecar", "curl_cffi (JA3 TLS)", "OPDS Server", "WebP", "Chaquopy", "CBZ / PDF"],
    summary: "A universal manga and manhua downloader and compiler featuring lossless WebP optimization, automatic chapter packaging into CBZ/PDF formats, an embedded OPDS library server, and official Docker Hub distribution (adityapatra/manhua-extractor) with FlareSolverr sidecar orchestration.",
    problem: "Preserving and reading web comics offline typically involves low-quality re-encodings, massive file sizes, broken image streams from aggressive anti-hotlink CDNs, and persistent Cloudflare Turnstile blocks.",
    solution: "Engineered a multithreaded extraction pipeline combining native curl_cffi Chrome 124 TLS fingerprinting, an optional FlareSolverr sidecar for automated Turnstile clearance, concurrent WebP compression, clean CBZ/PDF packaging, and an embedded OPDS catalog server.",
    myRole: "Engineered scraping and image decompression pipelines, curl_cffi TLS spoofing layer, FlareSolverr Docker integration, WebP batch encoder, and OPDS catalog server.",
    architectureFlow: [
      { title: "Presentation Layer", description: "Browser Web GUI (port 8000), interactive CLI runner, or Mihon/Tachiyomi client", badge: "Web / CLI" },
      { title: "TLS Impersonation", description: "curl_cffi mimicking Chrome 124 JA3/JA4 fingerprints and HTTP/2 framing", badge: "curl_cffi" },
      { title: "FlareSolverr Sidecar", description: "Headless container solving interactive Turnstile challenges and caching cookies", badge: "Docker Sidecar" },
      { title: "Extractor Pipeline", description: "AST AST crawler for Astro/Next.js data and dynamic anti-hotlink Referer headers", badge: "Async Engine" },
      { title: "WebP Compressor", description: "Lossless compression cutting raw chapter storage by 52% with ComicInfo XML", badge: "WebP / CBZ" },
      { title: "OPDS Catalog Server", description: "Embedded catalog server broadcasting libraries to local Wi-Fi e-readers", badge: "OPDS v1.2" }
    ],
    engineeringDecisions: [
      {
        title: "Two-tier Cloudflare clearance (Native TLS + Sidecar)",
        description: "Uses curl_cffi to match Chrome 124 TLS ClientHello handshakes for zero-overhead clearance, automatically routing to a local FlareSolverr sidecar only when interactive challenges emerge."
      },
      {
        title: "Embedded OPDS server for local offline distribution",
        description: "Exposes standard OPDS v1.2 endpoints so mobile reader apps (Mihon/Tachiyomi) and E-Ink devices sync downloads directly over home Wi-Fi with zero cloud intermediaries."
      }
    ],
    challenges: [
      {
        challenge: "Handling long vertical-scroll webtoon strips on fixed-ratio E-Ink screens.",
        resolution: "Implemented an automated smart slicer that splits tall continuous panels at whitespace boundaries."
      },
      {
        challenge: "Anti-hotlink CDN shields blocking direct panel image downloads.",
        resolution: "Synthesized host-specific Referer, Origin, and Sec-Fetch-Site headers per image chunk."
      }
    ],
    whatILearned: [
      "Transport-layer TLS ClientHello fingerprinting, cipher suite ordering, and HTTP/2 pseudo-headers.",
      "Multi-container Docker Compose architectures with healthcheck gates and sidecar proxies.",
      "OPDS streaming protocol specifications and WebP lossless packaging standards."
    ],
    verifiedFacts: [
      "57 passing automated unit tests documented in repository",
      "Published on Docker Hub as adityapatra/manhua-extractor",
      "Features curl_cffi JA3 TLS bypass, FlareSolverr sidecar, and OPDS server",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "gemeni-smart-note",
    title: "Gemini Smart Note",
    tagline: "AI-powered smart note and study assistant powered by Google Gemini for real-time document analysis and conceptual synthesis.",
    category: "ml_ai",
    featured: false,
    status: "completed",
    statusLabel: "Active ⚡",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/gemeni-smart-note",
    technologies: ["JavaScript", "HTML5", "Google Gemini API", "CSS3", "Markdown", "Prompt Engineering"],
    summary: "An interactive, AI-assisted study assistant and smart note taking application powered by Google Gemini, designed to summarize technical lectures, extract key concepts, and provide contextual Q&A directly alongside notes.",
    problem: "Synthesizing extensive academic lecture notes and technical specifications requires manual outlining and repetitive concept verification.",
    solution: "Built a responsive web workspace integrating Gemini AI models to generate structured study flashcards, identify prerequisite concepts, and explain technical terminology with grounding.",
    myRole: "Designed the client UI, integrated Google Gemini REST endpoints, and engineered prompts for technical comprehension and summarizing.",
    engineeringDecisions: [
      {
        title: "Contextual prompt chaining",
        description: "Structured multi-turn prompts to retain active note context without exceeding token window quotas."
      }
    ],
    challenges: [
      {
        challenge: "Rendering complex mathematical formulas and code blocks in real-time streaming output.",
        resolution: "Integrated markdown parsers and LaTeX math renderers to display technical syntax accurately."
      }
    ],
    whatILearned: [
      "Direct integration and prompt engineering with Google Gemini APIs.",
      "Building responsive single-page study tooling with local storage persistence."
    ],
    verifiedFacts: [
      "Integrated with Google Gemini AI",
      "Interactive note taking and concept synthesis",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "devpulse",
    title: "DevPulse",
    tagline: "Cloud Incident & Service Status Tracker monitoring multi-cloud infrastructure and outage telemetry.",
    category: "cloud_devops",
    featured: false,
    status: "completed",
    statusLabel: "Active ⚡",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/DevPulse",
    technologies: ["Python", "FastAPI", "Cloud Telemetry", "Status Monitoring", "Docker", "REST API"],
    summary: "A cloud incident and service status tracker designed to aggregate, observe, and alert on infrastructure outages and operational incidents across major cloud providers.",
    problem: "Detecting multi-cloud service disruptions often requires checking disparate vendor status dashboards independently, delaying incident response.",
    solution: "Constructed an automated aggregator in Python that queries cloud provider status feeds, normalizes incident schemas, and surfaces real-time service health via API and dashboard.",
    myRole: "Engineered status polling engine, schema normalizer, and containerized backend.",
    engineeringDecisions: [
      {
        title: "Normalized incident schema",
        description: "Standardized heterogeneous incident formats from AWS, GCP, and Azure into a consistent operational status model."
      }
    ],
    challenges: [
      {
        challenge: "Polling status feeds without triggering vendor rate limits.",
        resolution: "Employed adaptive polling intervals based on active incident states."
      }
    ],
    whatILearned: [
      "Cloud status feed protocols and operational incident management patterns.",
      "Containerized microservice monitoring architectures."
    ],
    verifiedFacts: [
      "Cloud incident tracker built in Python",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "portfolio-site",
    title: "Developer Portfolio Website",
    tagline: "Modern, responsive developer portfolio web application built with React, TypeScript, and Tailwind CSS, deployed on Firebase Hosting.",
    category: "software",
    featured: false,
    status: "completed",
    statusLabel: "Live App",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/portfolio",
    liveUrl: "https://adityapatradev.web.app",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Firebase Hosting", "Canvas API", "GitHub API"],
    summary: "A fast, minimalist portfolio website crafted with architectural restraint, Instrument Serif typography, cream/charcoal/navy color palette, dynamic GitHub contribution sync, animated snake canvas, and automated daily telemetry pipelines.",
    problem: "Generic cookie-cutter templates often feel impersonal and fail to showcase verifiable systems competence, real terminal aesthetics, and authentic engineering work.",
    solution: "Architected a custom React + TypeScript application with client-side routing, canvas mesh background animation, dynamic GitHub GraphQL/API sync with local storage caching, dark mode toggle, and Firebase deployment.",
    myRole: "Designed the UI/UX architecture, authored all frontend components, wrote the canvas animation engine, and configured automated CI/CD deployment pipelines.",
    engineeringDecisions: [
      {
        title: "Custom Canvas 60fps Mesh Animation",
        description: "Implemented an event-driven HTML5 canvas mesh with ResizeObserver and tab-visibility auto-pause to eliminate unnecessary GPU/CPU cycles when backgrounded."
      },
      {
        title: "Dynamic GitHub Contribution Cache",
        description: "Constructed a 2-tier contribution data fetcher: queries live API with 4-hour local caching and graceful fallback to bundled JSON."
      }
    ],
    challenges: [
      {
        challenge: "Rendering crisp Retina graphics and responsive SVG heatmaps across mobile and desktop screens.",
        resolution: "Scaled canvas backing store by window.devicePixelRatio and calibrated cell dimensions dynamically."
      }
    ],
    whatILearned: [
      "High-performance Canvas API math, trigonometric wave functions, and requestAnimationFrame scheduling.",
      "Automated Git history auditing and secret protection workflows."
    ],
    verifiedFacts: [
      "Built with React, TypeScript, Tailwind CSS, and Vite",
      "Deployed on Firebase Hosting at adityapatradev.web.app",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "adityapatra-dev-engine",
    title: "AdityaPatra-dev Profile Engine",
    tagline: "Personal GitHub profile configuration, automated multi-cloud telemetry engine, and CI/CD pipelines showcasing cloud & DevOps engineering.",
    category: "cloud_devops",
    featured: false,
    status: "completed",
    statusLabel: "Active ⚡",
    period: "2025 – 2026",
    githubUrl: "https://github.com/AdityaPatra-dev/AdityaPatra-dev",
    technologies: ["Python", "GitHub Actions", "CI/CD", "SVG Generation", "Multi-Cloud Telemetry", "Mermaid"],
    summary: "The automated self-updating CI/CD telemetry engine that powers Aditya Patra's personal GitHub profile, generating dynamic 3D contribution matrix calendars, animated snake graphs, and multi-cloud status telemetries on schedule.",
    problem: "Maintaining an active developer profile usually requires manual updates that quickly become stale as new repositories, contributions, and certifications are added.",
    solution: "Engineered automated GitHub Actions workflows that run cron jobs to fetch live commit telemetry, compile 3D contribution matrices, render animated SVG dashboards, and commit updates automatically.",
    myRole: "Designed profile CI/CD workflows, SVG dashboard templates, and automated telemetry collectors.",
    engineeringDecisions: [
      {
        title: "Automated profile telemetry via cron workflows",
        description: "Scheduled scheduled actions that aggregate activity metrics, generate SVG assets, and commit them cleanly back to the repository."
      }
    ],
    challenges: [
      {
        challenge: "Preventing infinite CI loop triggers when automated bots commit generated SVG assets.",
        resolution: "Added '[skip ci]' tags to automated bot commit headers."
      }
    ],
    whatILearned: [
      "Deep understanding of advanced GitHub Actions workflow scheduling, permissions, and bot token management.",
      "Programmatic SVG generation and dynamic telemetry visualization."
    ],
    verifiedFacts: [
      "Powers live profile at github.com/AdityaPatra-dev",
      "Automated CI/CD pipelines and multi-cloud telemetry",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "youtube-download",
    title: "YouTube Media Extraction Engine",
    tagline: "High-performance automated YouTube playlist downloader script leveraging PowerShell, yt-dlp, and ffmpeg for parallel media extraction.",
    category: "software",
    featured: false,
    status: "completed",
    statusLabel: "Completed ✅",
    period: "2025",
    githubUrl: "https://github.com/AdityaPatra-dev/Youtube_Download",
    technologies: ["Python", "PowerShell", "yt-dlp", "FFmpeg", "Concurrency", "Automation"],
    summary: "An automated batch media downloader script engineered in Python and PowerShell, combining yt-dlp and FFmpeg to download playlists and audio tracks with concurrency and automated metadata tagging.",
    problem: "Downloading educational playlists and conference recordings manually or with unstable web downloaders leads to broken files, missing metadata, and slow sequential downloads.",
    solution: "Scripted a robust extraction engine that validates playlist URLs, manages concurrent parallel downloads, applies audio normalization via FFmpeg, and embeds ID3 metadata tags.",
    myRole: "Authored the download management scripts, FFmpeg post-processing integration, and error recovery handling.",
    engineeringDecisions: [
      {
        title: "Parallel batch extraction",
        description: "Configured multi-threaded extraction workers to optimize throughput across high-speed connections."
      }
    ],
    challenges: [
      {
        challenge: "Handling stream throttling and interrupted network downloads gracefully.",
        resolution: "Added automatic resume flags and exponential backoff retry logic."
      }
    ],
    whatILearned: [
      "Process concurrency and stream piping between command-line media tools.",
      "Audio transcoding and metadata embedding automation."
    ],
    verifiedFacts: [
      "Combines Python, PowerShell, yt-dlp, and FFmpeg",
      "Automates batch and playlist downloads",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "text-to-video",
    title: "Text-to-Video Generator",
    tagline: "Generative AI pipeline in Python translating PDF documents into narrated video presentations with OpenAI GPT-3.5, TTS, and OpenCV.",
    category: "ml_ai",
    featured: false,
    status: "completed",
    statusLabel: "Completed ✅",
    period: "2025",
    githubUrl: "https://github.com/AdityaPatra-dev/Text-To-Video-Generator",
    technologies: ["Python", "OpenAI GPT-3.5", "TTS (Text-to-Speech)", "OpenCV", "PyPDF", "Generative AI"],
    summary: "An automated Python pipeline that extracts text from structured PDF documents, summarizes key conceptual points using OpenAI GPT-3.5, synthesizes natural audio narration via TTS, renders synchronized slide visuals with OpenCV, and stitches everything into cohesive video presentations.",
    problem: "Converting technical documents, lecture slides, and notes into digestible video format is repetitive, labor-intensive, and time-consuming when done manually.",
    solution: "Integrated PDF parsing, summarization, voice synthesis, slide asset rendering, and video composition into a single automated batch workflow.",
    myRole: "Designed the end-to-end pipeline, wrote PDF extraction logic, integrated OpenAI summarization and TTS voice synthesis, and automated video clip rendering with OpenCV.",
    engineeringDecisions: [
      {
        title: "Modular multi-stage architecture",
        description: "Structured each stage (parsing, scripting, audio, video) as independent modules so failures in video rendering don't require re-running audio synthesis or LLM calls."
      },
      {
        title: "Timestamp-based audio-visual alignment",
        description: "Extracted precise audio duration metadata from TTS outputs to dynamically calibrate the frame duration of corresponding visual slides."
      }
    ],
    challenges: [
      {
        challenge: "Extracting clean semantic text from multi-column PDFs without capturing page numbers and running headers as speech.",
        resolution: "Applied regex heuristic filtering and bounding-box margin trimming during PDF extraction."
      }
    ],
    whatILearned: [
      "Practical experience chaining generative AI APIs, TTS synthesis, and media composition tools into a coherent automated batch pipeline.",
      "Handling audio/video synchronization and media codec constraints in Python."
    ],
    verifiedFacts: [
      "Built with Python, OpenAI GPT-3.5, TTS, and OpenCV",
      "Automates end-to-end slide and narration assembly into MP4 video",
      "Public repository hosted on GitHub"
    ]
  },
  {
    id: "web-scrapper-wikipedia",
    title: "Wikipedia CLI Scraper",
    tagline: "Interactive Python CLI web scraper extracting structured infobox key-value data, suggestions, and introductory summaries from Wikipedia articles.",
    category: "software",
    featured: false,
    status: "completed",
    statusLabel: "Completed ✅",
    period: "2025",
    githubUrl: "https://github.com/AdityaPatra-dev/Web-Scrapper-Wikipedia",
    technologies: ["Python", "BeautifulSoup4", "Requests", "CLI", "HTML Parsing", "Data Extraction"],
    summary: "An interactive command-line web scraper engineered to query, extract, and format complex structured data from Wikipedia, including article summaries, infobox table parameters, and search suggestions with zero external API fees.",
    problem: "Accessing clean structured data from web encyclopedias via terminal without heavy browser overhead or complex multi-step REST queries.",
    solution: "Authored a clean, resilient Python CLI tool that parses raw HTML document structures using BeautifulSoup4, extracts infobox key-value pairs, strips navigation artifacts, and outputs clean formatted terminal views or JSON payloads.",
    myRole: "Authored the scraping logic, DOM traversal heuristics, error handling for ambiguous search queries, and CLI user interface.",
    engineeringDecisions: [
      {
        title: "Heuristic infobox DOM parsing",
        description: "Constructed targeted CSS selectors to reliably extract key-value data from diverse Wikipedia infobox templates across categories."
      }
    ],
    challenges: [
      {
        challenge: "Handling disambiguation pages and missing search terms gracefully.",
        resolution: "Parsed Wikipedia's search suggestion algorithms to offer relevant alternatives when an exact article match is not found."
      }
    ],
    whatILearned: [
      "Advanced HTML DOM traversal and data extraction using BeautifulSoup4.",
      "Designing robust command-line interfaces with defensive error handling for unpredictable web inputs."
    ],
    verifiedFacts: [
      "Built with Python, BeautifulSoup4, and Requests",
      "Extracts structured infoboxes and summary content",
      "Public repository hosted on GitHub"
    ]
  }
];
