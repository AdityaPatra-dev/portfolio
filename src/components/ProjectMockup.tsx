import React from 'react';

interface ProjectMockupProps {
  projectId: string;
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId, className = '' }) => {
  switch (projectId) {
    case 'cloudarena':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-zinc-400 text-[10px]">cloudarena // k3d-cluster-prod</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              HEALTHY · GEMINI AI
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto z-10 pt-2">
            <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
              <div className="text-zinc-500 text-[9px]">NODES</div>
              <div className="text-zinc-100 font-semibold text-xs mt-0.5">3/3 Ready</div>
              <div className="w-full bg-zinc-800 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-blue-500 h-full w-[100%]" />
              </div>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
              <div className="text-zinc-500 text-[9px]">ACTIVE PODS</div>
              <div className="text-zinc-100 font-semibold text-xs mt-0.5">14 Running</div>
              <div className="w-full bg-zinc-800 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[92%]" />
              </div>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
              <div className="text-zinc-500 text-[9px]">CHAOS REMEDY</div>
              <div className="text-emerald-400 font-semibold text-xs mt-0.5">4.2s Recovery</div>
              <div className="w-full bg-zinc-800 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-cyan-400 h-full w-[100%]" />
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800/70 rounded p-2 text-[10px] space-y-1 z-10">
            <div className="flex items-center justify-between text-zinc-400">
              <span>[HMAC-SHA256] Webhook validation</span>
              <span className="text-emerald-400">VERIFIED ✓</span>
            </div>
            <div className="text-zinc-500 truncate">
              [AutoRemedy] Re-spawned failed replica pod 'api-service-7f8d9' (k3d-node-2)
            </div>
          </div>
        </div>
      );

    case 'taarak':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-slate-950 text-slate-300 font-mono text-[11px] p-3.5 border-b border-slate-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="ml-2 text-slate-400 text-[10px]">taarak-core // SIH 2026</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-950/80 text-blue-400 border border-blue-800/50">
              OFFLINE-FIRST
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto z-10 pt-2">
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded space-y-1">
              <div className="text-slate-400 text-[9px] flex items-center justify-between">
                <span>SQLITE + DRIFT ENGINE</span>
                <span className="text-emerald-400 font-bold">AES-256</span>
              </div>
              <div className="text-slate-100 font-semibold text-xs">
                Zero-Latency Offline Store
              </div>
              <div className="text-[10px] text-slate-400">
                1,420 transactions queued & synced
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded space-y-1">
              <div className="text-slate-400 text-[9px] flex items-center justify-between">
                <span>TEST AUTOMATION</span>
                <span className="text-blue-400">CI GATE</span>
              </div>
              <div className="text-emerald-400 font-semibold text-xs flex items-center gap-1">
                <span>✓ 440 Passing Tests</span>
              </div>
              <div className="text-[10px] text-slate-400">
                Unit, regression & sync tests verified
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/60 rounded px-2.5 py-1.5 flex items-center justify-between text-[10px] z-10">
            <span className="text-slate-400">Sync Status: Real-time Peer-to-Peer</span>
            <span className="text-emerald-400">Bi-directional Synchronized</span>
          </div>
        </div>
      );

    case 'subtitle-generator':
    case 'subtitle_generator':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-[#0c0d14] text-zinc-300 font-mono text-[11px] p-3.5 border-b border-indigo-950/80 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-indigo-400 font-semibold text-[10px]">subtitlegen // ffmpeg-vad-edge-asr</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-indigo-950/90 text-indigo-300 border border-indigo-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              NETFLIX / BBC · BYOK
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto z-10 pt-1.5">
            <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded space-y-1">
              <div className="text-zinc-500 text-[9px] flex items-center justify-between">
                <span>VAD AUDIO SLICER</span>
                <span className="text-emerald-400 font-semibold">16kHz mono</span>
              </div>
              <div className="text-zinc-100 font-semibold text-xs">
                Silence-Aware Splitter
              </div>
              <div className="text-[10px] text-zinc-400 truncate">
                Midpoint silence cap ≤20MB
              </div>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded space-y-1">
              <div className="text-zinc-500 text-[9px] flex items-center justify-between">
                <span>ASR ENGINES</span>
                <span className="text-indigo-400 font-semibold">Tri-Provider</span>
              </div>
              <div className="text-zinc-100 font-semibold text-xs">
                Deepgram · Groq · Gemini
              </div>
              <div className="text-[10px] text-emerald-400">
                ⚡ 196s full-ep runtime
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/80 border border-indigo-900/40 rounded p-2 text-[10px] space-y-1 z-10">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-indigo-300 font-medium">00:00:19,465 ➔ 00:00:22,025</span>
              <span className="text-emerald-400">✓ 0ms Time Drift</span>
            </div>
            <div className="text-zinc-200 truncate font-sans text-xs">
              "Xiao Yan will restore the Xiao clan's glory."
            </div>
            <div className="text-[9px] text-zinc-500 flex items-center justify-between">
              <span>Standard line length: 41/42 chars</span>
              <span className="text-zinc-400">Reading rate: 15.2 CPS</span>
            </div>
          </div>
        </div>
      );

    case 'deployhub':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">deployhub // git-to-k8s</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
              SELF-SERVICE PAAS
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">GIT COMMIT</div>
                <div className="text-zinc-200 font-semibold text-xs mt-0.5">main: 8a4c19f</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">CONTAINER BUILD</div>
                <div className="text-emerald-400 font-semibold text-xs mt-0.5">Success (28s)</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">ROLLOUT</div>
                <div className="text-cyan-400 font-semibold text-xs mt-0.5">3/3 Replicas Live</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Ingress: https://app.deployhub.local</span>
              <span className="text-emerald-400">TLS ACTIVE ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>FastAPI Webhook Dispatcher</span>
            <span className="text-zinc-400">Zero-Downtime Rolling Update</span>
          </div>
        </div>
      );

    case 'mastering-llms':
    case 'llm-rag-system':
    case 'llm-rag-pipeline':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-[#0d1117] text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">mastering-llms // RAG & LoRA</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-indigo-950/80 text-indigo-400 border border-indigo-800/50">
              QLoRA 4-BIT NF4
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="flex items-center justify-between bg-zinc-900/90 border border-zinc-800 p-2 rounded">
              <div className="space-y-0.5">
                <div className="text-[9px] text-zinc-500 uppercase">Vector Index</div>
                <div className="text-xs font-semibold text-zinc-200">FAISS Dense Retrieval (k=5)</div>
              </div>
              <div className="text-right">
                <div className="text-[9px] text-zinc-500 uppercase">Cosine Similarity</div>
                <div className="text-xs font-semibold text-indigo-400">0.892 avg</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-zinc-900/60 border border-zinc-800/70 p-2 rounded">
                <span className="text-zinc-500">LoRA Rank:</span> <span className="text-zinc-200">r=16, α=32</span>
              </div>
              <div className="bg-zinc-900/60 border border-zinc-800/70 p-2 rounded">
                <span className="text-zinc-500">VRAM Footprint:</span> <span className="text-emerald-400">5.8 GB</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Framework: PyTorch · Transformers</span>
            <span className="text-zinc-400">Grounding Context Active</span>
          </div>
        </div>
      );

    case 'universal-file-studio':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">universal-file-studio // 9-engines</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-amber-950/80 text-amber-400 border border-amber-800/50">
              LOCAL SANDBOX
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
              <div className="bg-zinc-900/90 border border-zinc-800 p-1.5 rounded">
                <div className="text-amber-400 font-bold">FFmpeg</div>
                <div className="text-[8px] text-zinc-500 mt-0.5">AV1 / H.265</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-1.5 rounded">
                <div className="text-amber-400 font-bold">Pandoc</div>
                <div className="text-[8px] text-zinc-500 mt-0.5">MD → PDF</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-1.5 rounded">
                <div className="text-amber-400 font-bold">Tesseract</div>
                <div className="text-[8px] text-zinc-500 mt-0.5">OCR v5</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-1.5 rounded">
                <div className="text-amber-400 font-bold">ImageMagick</div>
                <div className="text-[8px] text-zinc-500 mt-0.5">Batch Vector</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">WebSocket Progress: Transcoding 4K Stream</span>
              <span className="text-emerald-400">100% Local Privacy</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>FastAPI + 3D Visual Graph</span>
            <span className="text-zinc-400">Zero Cloud Uploads</span>
          </div>
        </div>
      );

    case 'beat_wave':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">beat_wave // full-stack audio</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-pink-950/80 text-pink-400 border border-pink-800/50">
              DOCKER + K8S
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded flex items-center justify-between">
              <div>
                <div className="text-[9px] text-zinc-500">STREAMING ENGINE</div>
                <div className="text-xs font-semibold text-zinc-200">HTTP 206 Partial Range Audio</div>
              </div>
              <div className="text-right">
                <div className="text-[9px] text-zinc-500">DATABASE</div>
                <div className="text-xs font-semibold text-pink-400">PostgreSQL StatefulSet</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-zinc-900/60 border border-zinc-800/70 p-2 rounded">
                <span className="text-zinc-500">Persistent Volumes:</span> <span className="text-emerald-400">PVC Bound</span>
              </div>
              <div className="bg-zinc-900/60 border border-zinc-800/70 p-2 rounded">
                <span className="text-zinc-500">Express API:</span> <span className="text-zinc-200">Containerized</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Node.js · Express · PostgreSQL</span>
            <span className="text-zinc-400">DevOps Blueprint</span>
          </div>
        </div>
      );

    case 'novels-world':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">novels-world // aggregator</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
              31+ SOURCES
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">OFFLINE TTS</div>
                <div className="text-xs font-semibold text-emerald-400">Kokoro / Piper Neural</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">CHALLENGE BYPASS</div>
                <div className="text-xs font-semibold text-zinc-200">Automated CF Token</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Offline Chapter Storage: SQLite</span>
              <span className="text-emerald-400">Synchronized ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Flutter & Dart Client</span>
            <span className="text-zinc-400">Smart Cache Hierarchy</span>
          </div>
        </div>
      );

    case 'dsa-vault':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">dsa-vault // algorithms</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-950/80 text-blue-400 border border-blue-800/50">
              C++ & C
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded text-center">
                <div className="text-[9px] text-zinc-500">LEETCODE</div>
                <div className="text-blue-400 font-bold text-xs mt-0.5">Live Sync</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded text-center">
                <div className="text-[9px] text-zinc-500">CODEFORCES</div>
                <div className="text-cyan-400 font-bold text-xs mt-0.5">Rating Track</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded text-center">
                <div className="text-[9px] text-zinc-500">CODECHEF</div>
                <div className="text-emerald-400 font-bold text-xs mt-0.5">Telemetry</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">CI Pipeline: Dynamic Heatmap Generation</span>
              <span className="text-emerald-400">Automated Daily</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Competitive Programming Vault</span>
            <span className="text-zinc-400">DP · Graphs · Trees</span>
          </div>
        </div>
      );

    case 'manhua-extractor':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">manhua-extractor // webp-compiler</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-purple-950/80 text-purple-400 border border-purple-800/50">
              CBZ / PDF & OPDS
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">WEBP COMPRESSION</div>
                <div className="text-xs font-semibold text-purple-400">-52% File Size</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">OPDS SERVER</div>
                <div className="text-xs font-semibold text-zinc-200">Port 8080 Active</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Target: Tachiyomi / Mihon & Android</span>
              <span className="text-emerald-400">E-Ink Slicer Ready</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Python · Chaquopy · Multi-Threading</span>
            <span className="text-zinc-400">Zero Artifacts</span>
          </div>
        </div>
      );

    case 'gemeni-smart-note':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">gemini-smart-note // study-ai</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-sky-950/80 text-sky-400 border border-sky-800/50">
              GEMINI FLASH
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
              <div className="text-[9px] text-zinc-500">NOTE SYNTHESIZER</div>
              <div className="text-xs font-semibold text-zinc-200">Automated Concept Outlining & Flashcards</div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Contextual Q&A: Active Memory</span>
              <span className="text-emerald-400">Streaming Response ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Google Gemini REST API</span>
            <span className="text-zinc-400">Markdown & LaTeX</span>
          </div>
        </div>
      );

    case 'portfolio-site':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">portfolio // adityapatradev.web.app</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-950/80 text-blue-400 border border-blue-800/50">
              FIREBASE HOSTING
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">FRAMEWORK</div>
                <div className="text-zinc-200 font-semibold text-xs mt-0.5">React + Vite</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">STYLING</div>
                <div className="text-zinc-200 font-semibold text-xs mt-0.5">Tailwind CSS</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">PERFORMANCE</div>
                <div className="text-emerald-400 font-semibold text-xs mt-0.5">60 FPS Canvas</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Live Telemetry: Dynamic GitHub API Sync</span>
              <span className="text-emerald-400">Online ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>TypeScript · React 18 · Tailwind</span>
            <span className="text-zinc-400">adityapatradev.web.app</span>
          </div>
        </div>
      );

    case 'adityapatra-dev-engine':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">profile-engine // telemetry-ci</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
              CI/CD CRON
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">3D MATRIX</div>
                <div className="text-emerald-400 font-semibold text-xs mt-0.5">Automated SVG</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">SNAKE GRAPH</div>
                <div className="text-emerald-400 font-semibold text-xs mt-0.5">Daily Render</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">TELEMETRY</div>
                <div className="text-cyan-400 font-semibold text-xs mt-0.5">Multi-Cloud</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Workflow: profile-telemetry.yml</span>
              <span className="text-emerald-400">Scheduled Daily ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Python · GitHub Actions · SVG</span>
            <span className="text-zinc-400">Self-Updating Engine</span>
          </div>
        </div>
      );

    case 'devpulse':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">devpulse // cloud-status</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-orange-950/80 text-orange-400 border border-orange-800/50">
              STATUS TRACKER
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">AWS HEALTH</div>
                <div className="text-emerald-400 font-semibold text-xs mt-0.5">Operational</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">GCP CLOUD</div>
                <div className="text-emerald-400 font-semibold text-xs mt-0.5">Operational</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">GITHUB STATUS</div>
                <div className="text-emerald-400 font-semibold text-xs mt-0.5">Operational</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Incident Poller: Adaptive Normalizer</span>
              <span className="text-emerald-400">All Systems Normal ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>FastAPI · Status Polling</span>
            <span className="text-zinc-400">Multi-Cloud Telemetry</span>
          </div>
        </div>
      );

    case 'youtube-download':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">youtube-download // media-extractor</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-red-950/80 text-red-400 border border-red-800/50">
              YT-DLP + FFMPEG
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">PLAYLIST EXTRACTOR</div>
                <div className="text-xs font-semibold text-red-400">Parallel Batch Queue</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">AUDIO ENCODER</div>
                <div className="text-xs font-semibold text-zinc-200">FFmpeg 320kbps MP3</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Metadata: Auto ID3 Tagging & Album Art</span>
              <span className="text-emerald-400">Complete ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>PowerShell · Python · yt-dlp</span>
            <span className="text-zinc-400">High-Throughput Extraction</span>
          </div>
        </div>
      );

    case 'text-to-video':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">text-to-video // genai-pipeline</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-pink-950/80 text-pink-400 border border-pink-800/50">
              GPT-3.5 + OPENCV
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">PDF PARSER</div>
                <div className="text-xs font-semibold text-zinc-200">PyPDF Extractor</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">VOICE SYNTHESIS</div>
                <div className="text-xs font-semibold text-pink-400">Neural TTS</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">VIDEO STITCHER</div>
                <div className="text-xs font-semibold text-zinc-200">OpenCV MP4</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Synchronization: Audio-Duration Visual Alignment</span>
              <span className="text-emerald-400">Rendered ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Python · OpenAI API · OpenCV</span>
            <span className="text-zinc-400">Automated Slide Narrator</span>
          </div>
        </div>
      );

    case 'web-scrapper-wikipedia':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">wiki-scraper // dom-parser</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-teal-950/80 text-teal-400 border border-teal-800/50">
              BEAUTIFULSOUP4
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">INFOBOX PARSER</div>
                <div className="text-xs font-semibold text-teal-400">Structured Key-Value</div>
              </div>
              <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500">QUERY ENGINE</div>
                <div className="text-xs font-semibold text-zinc-200">Terminal CLI Mode</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Extraction: Summary, Disambiguation & Tables</span>
              <span className="text-emerald-400">Clean JSON Output ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Python · BeautifulSoup · Requests</span>
            <span className="text-zinc-400">Zero External API Fees</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">telemetry // engineering-service</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-950/80 text-blue-400 border border-blue-800/50">
              OPERATIONAL
            </span>
          </div>

          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="bg-zinc-900/90 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Repository Architecture</span>
              <span className="text-emerald-400">Verified ✓</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Aditya Patra Engineering Lab</span>
            <span className="text-zinc-400">Production Ready</span>
          </div>
        </div>
      );
  }
};
