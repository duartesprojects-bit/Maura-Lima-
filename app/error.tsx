'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, AlertCircle } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Se for erro de chunk ou rede, recarrega a página automaticamente uma vez
    const msg = error?.message || '';
    if (
      msg.includes('Loading chunk') ||
      msg.includes('ChunkLoadError') ||
      msg.includes('Failed to fetch')
    ) {
      const alreadyReloaded = sessionStorage.getItem('chunk_boundary_reload');
      if (!alreadyReloaded) {
        sessionStorage.setItem('chunk_boundary_reload', 'true');
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#FAFAFA]">
      <div className="max-w-md w-full bg-white p-8 border border-neutral-200 shadow-sm text-center">
        <div className="w-16 h-16 bg-[#F9F5EC] text-[#C9A24B] border border-[#C9A24B]/30 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="font-heading text-xl font-bold uppercase tracking-wide text-[#0D0D0D] mb-3">
          Ops! Algo deu errado ao carregar
        </h1>

        <p className="text-sm text-neutral-600 font-light leading-relaxed mb-8">
          Uma atualização pode ter ocorrido ou houve uma instabilidade momentânea na conexão. Por favor, tente recarregar a página.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              sessionStorage.removeItem('chunk_boundary_reload');
              window.location.reload();
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D0D0D] text-white hover:bg-[#C9A24B] hover:text-[#0D0D0D] font-semibold text-xs uppercase tracking-wider transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Recarregar Página</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-700 hover:border-black font-semibold text-xs uppercase tracking-wider transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
