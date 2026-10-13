export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  status: string;
  institution: string;
  academicStage: string;
  cgpa: string;
  expectedGraduation: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  githubUsername: string;
  linkedinUrl: string;
  dockerHubUrl: string;
  huggingFaceUrl: string;
  twitterUrl: string;
  youtubeUrl: string;
  resumePdfUrl: string;
  mantra: string;
  shortBio: string;
  fullBio: string[];
  principles: string[];
  currentFocus: {
    learning: string[];
    building: string[];
  };
}

export const profileData: ProfileData = {
  name: "Aditya Patra",
  role: "B.Tech CSE Student · Cloud, DevOps & ML/MLOps",
  tagline: "code → containers → infrastructure → deployment → observability → ML systems",
  status: "2nd Year, 3rd Semester B.Tech CSE Student",
  institution: "Kalinga Institute of Industrial Technology (KIIT)",
  academicStage: "Undergraduate (B.Tech in Computer Science and Engineering)",
  cgpa: "8.05 / 10.0",
  expectedGraduation: "Expected 2029",
  location: "Bhubaneswar, Odisha, India",
  email: "adityapatraraj@gmail.com",
  phone: "+91 9437234075",
  githubUrl: "https://github.com/AdityaPatra-dev",
  githubUsername: "AdityaPatra-dev",
  linkedinUrl: "https://www.linkedin.com/in/aditya-patra-0a6530289/",
  dockerHubUrl: "https://hub.docker.com/u/adityapatra",
  huggingFaceUrl: "https://huggingface.co/Aditya9438",
  twitterUrl: "https://x.com/Aditya_patra943",
  youtubeUrl: "https://youtube.com/@Aditya_Learns_tech",
  resumePdfUrl: "/AdityaPatra_CV.pdf",
  mantra: "Build → Break → Learn → Automate → Ship → Repeat",
  shortBio: "2nd-year B.Tech CSE student at KIIT specializing in Cloud Infrastructure, DevOps, and Machine Learning Systems (MLOps). Passionate about container orchestration, Linux internals, resilient system architectures, and practical ML pipelines.",
  fullBio: [
    "I am currently in my 2nd year (3rd semester) of Computer Science & Engineering at KIIT in Bhubaneswar, India. Rather than learning tools in isolation, I engineer end-to-end systems that solve tangible problems across infrastructure and machine learning.",
    "My technical focus bridges cloud infrastructure engineering (Linux, Docker, Kubernetes, CI/CD pipelines, and networking) with practical machine learning (Transformers, RAG pipelines, parameter-efficient fine-tuning with LoRA/QLoRA, and local quantized inference).",
    "I believe good engineering comes from understanding systems from first principles: what happens when network partitions hit, pods crash, or memory pressure peaks. Whether building local Kubernetes chaos sandboxes like CloudArena or offline-first disaster response platforms like TAARAK (440 passing tests), I prioritize clean design, reproducible code, and verified results."
  ],
  principles: [
    "Build → Break → Learn → Automate → Ship → Repeat — real engineering competence comes from hands-on debugging, root-cause diagnosis, and automated workflows.",
    "Respect system abstractions — understanding Linux system calls, container runtimes, networking, and vector mathematics makes higher-level tools vastly easier to master.",
    "Authenticity and verification — only claim what has actually been architected, deployed, and tested."
  ],
  currentFocus: {
    learning: [
      "Certified Kubernetes Administrator (CKA) practical lab mastery",
      "Cloud-Native Resilience: Advanced K8s networking, Helm charts, and GitOps workflows",
      "PyTorch, Hugging Face Transformers & LoRA/PEFT fine-tuning",
      "Production MLOps: Model registries, distributed tracing & telemetry"
    ],
    building: [
      "CloudArena — AI-powered local Kubernetes chaos simulator & incident mentor",
      "TAARAK — Offline-first disaster response platform (SIH 2026, 440 tests)",
      "DeployHub — Automated self-service Kubernetes application deployment platform",
      "universal-file-studio — Local-first 9-engine universal media and document conversion studio"
    ]
  }
};
