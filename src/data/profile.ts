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
  resumePdfUrl: string;
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
  role: "B.Tech CSE Student · Cloud, DevOps & ML",
  tagline: "Building software systems, exploring infrastructure automation, and experimenting with ML/AI pipelines.",
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
  resumePdfUrl: "/AdityaPatra_CV.pdf",
  shortBio: "I am a B.Tech Computer Science student at KIIT with a focus on Cloud/DevOps, software development, and Machine Learning. I prioritize hands-on experimentation, understanding systems beneath the abstractions, and building reliable technical projects.",
  fullBio: [
    "I am currently in my 2nd year (3rd semester) of Computer Science & Engineering at KIIT in Bhubaneswar. Rather than learning tools in isolation, I prefer building end-to-end projects that solve tangible technical problems.",
    "My work spans two closely connected technical areas: infrastructure engineering (Linux, Docker, Kubernetes, CI/CD, and networking) and practical machine learning (Transformers, RAG pipelines, fine-tuning with LoRA/QLoRA, and local model inference).",
    "I believe good engineering comes from understanding what happens when systems fail. Whether simulating Kubernetes incident remediations or building offline-first applications with rigorous automated test suites, I focus on clean architecture, verifiable results, and steady technical growth."
  ],
  principles: [
    "Hands-on building over passive tutorials — real comprehension comes from writing code, breaking environments, and debugging root causes.",
    "Respect the abstractions — knowing what Linux system calls, container runtimes, and vector operations do underneath makes higher-level tools vastly easier to operate.",
    "Authenticity and verification — only claim what has actually been designed, built, and tested."
  ],
  currentFocus: {
    learning: [
      "Certified Kubernetes Administrator (CKA) practical lab mastery",
      "Cloud infrastructure automation & local AWS-compatible environments (Floci)",
      "PyTorch, Hugging Face Transformers & LoRA/PEFT fine-tuning",
      "Linux server hardening, systemd, and network troubleshooting"
    ],
    building: [
      "CloudArena — incident response and automated remediation scenarios",
      "Local RAG and LLM knowledge retrieval pipelines",
      "GFG KIIT Cloud & DevOps foundation probation project (Track declaration & container stack)"
    ]
  }
};
