import { Certification, ExperienceCommunity } from '../types';

export interface EducationData {
  institution: string;
  degree: string;
  period: string;
  stage: string;
  cgpa: string;
  location: string;
  coursework: string[];
}

export const educationData: EducationData = {
  institution: "Kalinga Institute of Industrial Technology (KIIT)",
  degree: "Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)",
  period: "2025 – 2029",
  stage: "2nd Year · 3rd Semester",
  cgpa: "8.05 / 10.0",
  location: "Bhubaneswar, Odisha, India",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (C++ / Java)",
    "Computer Organization & Architecture",
    "Discrete Mathematics",
    "Database Management Systems",
    "Operating Systems Concepts"
  ]
};

export const certificationsData: Certification[] = [
  {
    id: "cka",
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "KodeKloud",
    issueDate: "February 2026",
    credentialId: "c082c8c6-664d-4da3-96ac-5606ed66c498",
    verified: true,
    skillsCovered: [
      "Cluster Architecture & Installation",
      "Workload Scheduling & Deployments",
      "Services, Networking & Ingress",
      "Storage, Volumes & PersistentVolumeClaims",
      "Troubleshooting Control Plane & Worker Nodes",
      "Security & RBAC Configuration"
    ],
    description: "Completed intensive, hands-on Kubernetes administration labs covering real-time cluster troubleshooting, multi-node configuration, network policies, persistent storage, and Linux container debugging."
  },
  {
    id: "oci-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issueDate: "October 2025",
    verified: true,
    skillsCovered: [
      "Cloud AI Foundations",
      "Machine Learning Workflows",
      "OCI Generative AI Services",
      "Infrastructure Scaling Fundamentals"
    ],
    description: "Certified in core cloud artificial intelligence architectures, machine learning pipeline design, model training paradigms, and Oracle Cloud Infrastructure service management."
  }
];

export const communitiesData: ExperienceCommunity[] = [
  {
    id: "gfg-kiit",
    organization: "GeeksforGeeks (GFG) KIIT Student Chapter",
    role: "Cloud & DevOps Domain Member",
    period: "2025 – Present",
    location: "Bhubaneswar, Odisha",
    description: "Active member in the technical Cloud & DevOps domain, engaging in peer code reviews, hands-on Linux system administration, and infrastructure automation.",
    highlights: [
      "Assigned solo 7-stage Cloud/DevOps Foundation Project spanning headless Linux VM setup, SSH/firewall hardening, multi-stage Docker containerization, and automated CI/CD.",
      "Adopting Floci for offline AWS emulation to test cloud-native deployment patterns safely without accidental billing overhead.",
      "Participating in regular architectural discussions covering container orchestration and DevOps best practices."
    ]
  },
  {
    id: "gdg-kiit",
    organization: "Google Developer Group (GDG) @ KIIT",
    role: "Student Member",
    period: "2025 – Present",
    location: "Bhubaneswar, Odisha",
    description: "Member of the GDG campus community, attending developer meetups, workshops on cloud services and machine learning, and collaborative hackathons.",
    highlights: [
      "Attended technical sessions on Google Cloud, web technologies, and AI developer tooling.",
      "Collaborated with fellow student builders on exploratory software experiments."
    ]
  },
  {
    id: "sih-2025",
    organization: "Smart India Hackathon (SIH 2025)",
    role: "Core Application Developer (Internal Round)",
    period: "2025",
    description: "Engineered TAARAK, a resilient offline-first application created to maintain reliable operational records and turn-by-turn routing during network outages.",
    highlights: [
      "Independently wrote the Flutter frontend and Drift/SQLite offline-first persistence layer.",
      "Achieved a verified test suite of 440 passing automated unit and integration tests."
    ]
  },
  {
    id: "hackathons-gemini",
    organization: "Build with Gemini & HackDay Hackathons",
    role: "Participant & Builder",
    period: "2025 – Present",
    description: "Competed in developer hackathons focusing on LLM integrations, document retrieval, and multimodal applications.",
    highlights: [
      "Experimented with multimodal prompt pipelines and generative audio/video assembly workflows.",
      "Participated in Dark Route: Trail of Secrets and campus competitive technical challenges."
    ]
  }
];
