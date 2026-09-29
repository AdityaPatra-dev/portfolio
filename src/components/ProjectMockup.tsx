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
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Window Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-zinc-400 text-[10px]">cloudarena // k3d-cluster-prod</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              HEALTHY
            </span>
          </div>

          {/* Cluster Status & Chaos Remediation visual */}
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

          {/* Terminal Event Log preview */}
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
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          {/* Window Header - Updated to SIH 2026 */}
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

          {/* Sync Engine Status */}
          <div className="grid grid-cols-2 gap-2 my-auto z-10 pt-2">
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded space-y-1">
              <div className="text-slate-400 text-[9px] flex items-center justify-between">
                <span>SQLITE + DRIFT ENGINE</span>
                <span className="text-emerald-400 font-bold">AES-256-GCM</span>
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

          {/* Sync Progress Indicator */}
          <div className="bg-slate-900/60 border border-slate-800/60 rounded px-2.5 py-1.5 flex items-center justify-between text-[10px] z-10">
            <span className="text-slate-400">Sync Status: Real-time Peer-to-Peer</span>
            <span className="text-emerald-400">Bi-directional Synchronized</span>
          </div>
        </div>
      );

    case 'llm-rag-system':
    case 'llm-rag-pipeline':
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-[#0d1117] text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          {/* Window Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">rag-pipeline // LoRA + FAISS</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-indigo-950/80 text-indigo-400 border border-indigo-800/50">
              QLoRA 4-BIT
            </span>
          </div>

          {/* Pipeline Vector Search Flow */}
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
                <span className="text-zinc-500">VRAM Footprint:</span> <span className="text-emerald-400">5.8 GB (NF4)</span>
              </div>
            </div>
          </div>

          {/* Bottom tag */}
          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Framework: PyTorch · HuggingFace</span>
            <span className="text-zinc-400">Domain-Adapted Context</span>
          </div>
        </div>
      );

    case 'cloud-devops-foundation':
    default:
      return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-t bg-zinc-950 text-zinc-300 font-mono text-[11px] p-3.5 border-b border-zinc-800 flex flex-col justify-between select-none ${className}`}>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

          {/* Window Header - Clean DevOps pipeline header without GFG */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-400 text-[10px]">devops-pipeline // Cloud & DevOps Foundation</span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
              PIPELINE PASSED
            </span>
          </div>

          {/* Visual Stages */}
          <div className="my-auto z-10 pt-2 space-y-2">
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
              <div className="bg-zinc-900/90 border border-emerald-800/60 p-2 rounded">
                <div className="text-emerald-400 font-bold">✓ Lint</div>
                <div className="text-[8px] text-zinc-500 mt-0.5">SonarQube</div>
              </div>
              <div className="bg-zinc-900/90 border border-emerald-800/60 p-2 rounded">
                <div className="text-emerald-400 font-bold">✓ Build</div>
                <div className="text-[8px] text-zinc-500 mt-0.5">Docker Multi</div>
              </div>
              <div className="bg-zinc-900/90 border border-emerald-800/60 p-2 rounded">
                <div className="text-emerald-400 font-bold">✓ Test</div>
                <div className="text-[8px] text-zinc-500 mt-0.5">Unit & Reg</div>
              </div>
              <div className="bg-zinc-900/90 border border-emerald-800/60 p-2 rounded">
                <div className="text-emerald-400 font-bold">✓ Deploy</div>
                <div className="text-[8px] text-zinc-500 mt-0.5">k3d Cluster</div>
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 p-2 rounded text-[10px] flex items-center justify-between">
              <span className="text-zinc-400">Metrics: Prometheus + Grafana</span>
              <span className="text-emerald-400">Zero Vulnerabilities</span>
            </div>
          </div>

          {/* Bottom tag */}
          <div className="flex items-center justify-between text-[10px] text-zinc-500 z-10 pt-1 border-t border-zinc-900">
            <span>Infrastructure Track</span>
            <span className="text-zinc-400">Production Validated</span>
          </div>
        </div>
      );
  }
};
