'use client';

import { useEffect } from 'react';

/**
 * Captura erros de carregamento de chunks (comuns em atualizações de código ou oscilações de rede)
 * e recarrega a página automaticamente com a versão mais recente dos scripts.
 */
export default function ChunkErrorHandler() {
  useEffect(() => {
    // Limpa a flag de reload quando a página carrega com sucesso
    sessionStorage.removeItem('chunk_reload_attempted');

    const handleChunkError = (event: ErrorEvent | PromiseRejectionEvent) => {
      const errorMsg =
        'message' in event
          ? event.message
          : (event.reason?.message || String(event.reason || ''));

      const isChunkLoadError =
        errorMsg.includes('Loading chunk') ||
        errorMsg.includes('ChunkLoadError') ||
        errorMsg.includes('Failed to fetch RSC payload');

      if (isChunkLoadError) {
        const alreadyReloaded = sessionStorage.getItem('chunk_reload_attempted');
        if (!alreadyReloaded) {
          sessionStorage.setItem('chunk_reload_attempted', 'true');
          // Força recarga suave para buscar os chunks atualizados do servidor
          window.location.reload();
        }
      }
    };

    window.addEventListener('error', handleChunkError);
    window.addEventListener('unhandledrejection', handleChunkError);

    return () => {
      window.removeEventListener('error', handleChunkError);
      window.removeEventListener('unhandledrejection', handleChunkError);
    };
  }, []);

  return null;
}
