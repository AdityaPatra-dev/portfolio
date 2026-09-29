# Aditya Patra — Personal Portfolio Website

A fast, modern, authentic developer portfolio and engineering showcase built for **Aditya Patra** (2nd Year, 3rd Semester B.Tech CSE student at KIIT).

Designed with a developer-first aesthetic, strict multi-page navigation, and zero AI fluff: no fake percentages, no fabricated metrics, no endless single-page scrolling, and full defensibility for technical interviews and recruiter reviews.

---

## 🌟 Key Architectural Highlights

1. **Multi-Page Information Architecture**:
   - `/` — **Home**: Concise entry point, hero, live terminal diagnostic widget, current focus (learning vs building), featured projects preview.
   - `/about` — **About**: Academic stage (KIIT B.Tech CSE, Expected 2029, CGPA 8.05), engineering philosophy, technical directions, and collaborative communities (GFG KIIT, GDG KIIT).
   - `/projects` — **Projects**: Categorized project directory (Cloud & DevOps, ML/AI, Software) with domain filter tabs.
   - `/projects/:id` — **Project Detail Pages**: In-depth breakdowns for CloudArena, TAARAK, LLM/RAG Knowledge System, Text-to-Video, and the upcoming Cloud/DevOps Foundation track with architecture flows, engineering decisions, and break-fix challenges.
   - `/skills` — **Skills**: Categorized competencies with transparent "Used in Projects" vs "Active Learning / Exploring" badges—absolutely no arbitrary percentage bars.
   - `/experience` — **Experience & Certifications**: Academic coursework, Certified Kubernetes Administrator (CKA - KodeKloud), Oracle AI Foundations, SIH 2025 (440 passing tests), and communities.
   - `/notes` & `/notes/:slug` — **Engineering Notes**: Authentic technical writeups on Kubernetes failure simulations, offline-first SQLite synchronization, and LoRA/QLoRA quantization.
   - `/contact` — **Contact**: Verified contact details (Email, Phone, LinkedIn, GitHub) and a functional direct email message drafter (no fake form submissions).

2. **Extensible for Cloud & DevOps Probation Project**:
   - Designed to cleanly highlight the 7-stage containerized foundation project using Floci / AWS without prematurely claiming unverified cloud resources or executing cloud deployments.

3. **CV & Resume Integration**:
   - Direct downloads and views pointing to `/AdityaPatra_CV.pdf` and `/resume.pdf` located in the `public/` directory.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── AdityaPatra_CV.pdf     # Real CV file for viewing/download
│   ├── resume.pdf             # Mirror CV file for convenience
│   ├── favicon.svg            # Minimalist developer SVG favicon
│   └── info.json              # Developer JSON endpoint for curl requests
├── src/
│   ├── components/            # Reusable UI elements
│   │   ├── Footer.tsx         # Verified contact footer & deployment badge
│   │   ├── icons.tsx          # Clean SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx         # Accessible navigation & mobile drawer
│   │   ├── PageHeader.tsx     # Standardized page headers
│   │   ├── ProjectCard.tsx    # Responsive project cards
│   │   ├── ScrollToTop.tsx    # Route transition scroll reset
│   │   └── TerminalStatus.tsx # Developer terminal status widget
│   ├── data/                  # Decoupled data models
│   │   ├── experience.ts      # Education, CKA & OCI certifications, communities
│   │   ├── notes.ts           # Engineering notes & learning logs
│   │   ├── profile.ts         # Verified profile information & trajectory
│   │   ├── projects.ts        # CloudArena, TAARAK, LLM/RAG, Text-to-Video, Foundation
│   │   └── skills.ts          # Transparent categorized skill matrices
│   ├── pages/                 # Multi-page views
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NoteDetailPage.tsx
│   │   ├── NotesPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── SkillsPage.tsx
│   ├── styles/
│   │   └── index.css          # Tailwind CSS directives & scrollbar styles
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces for data structures
│   ├── App.tsx                # Client-side router configuration
│   └── main.tsx               # Application entry point
├── .firebaserc                # Firebase project identifier
├── firebase.json              # Firebase Hosting configuration with SPA rewrites
├── package.json               # Scripts and dependencies
├── tailwind.config.js         # Custom developer color palette
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration with path aliases
```

---

## 🛠️ Local Development Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
This runs the TypeScript compiler (`tsc`) and Vite production bundler, producing optimized static assets in the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🚀 Firebase Hosting Setup & Deployment

The repository includes `firebase.json` preconfigured for Single Page Application (SPA) routing, automatically rewriting all requests to `/index.html` so that deep links (such as `/projects/cloudarena` or `/notes/simulating-k8s-incident-response-k3d`) load smoothly.

### 1. Install Firebase CLI (if not already installed)
```bash
npm install -g firebase-tools
```

### 2. Authenticate with Firebase
```bash
firebase login
```

### 3. Associate with your Firebase Project
If you have created a project in the Firebase Console (e.g. `aditya-patra`):
```bash
firebase use --add
```
Or verify the `.firebaserc` file matches your Firebase Project ID.

### 4. Deploy to Firebase Hosting
```bash
# Build the production bundle
npm run build

# Deploy only hosting
firebase deploy --only hosting
```
Once deployed, your website will be live at `https://<your-project-id>.web.app`.

---

## 📄 Managing Your Resume

- Place any updated resume PDF into the `public/` directory named:
  - `public/AdityaPatra_CV.pdf`
  - `public/resume.pdf`
- Both paths are pre-linked across the navigation, hero, experience section, and footer.

---

## 🔧 Updating Projects & Content

All content is cleanly separated from UI components in `src/data/`:
- **New Projects**: Add entries to `src/data/projects.ts`. They will automatically appear on the Home page, Projects directory, and receive a dedicated `/projects/:id` detail page.
- **New Skills**: Edit `src/data/skills.ts` and set the status to `'used_in_projects'` or `'learning_exploring'`.
- **New Certifications or Communities**: Update `src/data/experience.ts`.
- **Engineering Notes**: Add articles to `src/data/notes.ts`.
