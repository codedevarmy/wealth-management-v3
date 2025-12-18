import { useEffect } from 'react';
import { toast } from 'sonner';

export function useDevtoolsBlocker() {
  useEffect(() => {
    // Block right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();

      toast.error('Whoops!', {
        description: 'Right-click is disabled on this site.',
      });

      return false;
    };

    // Block F12 and other devtools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();

        toast.error('Whoops!', {
          description: 'Opening developer tools is disabled on this site.',
        });

        return false;
      }

      // Ctrl+Shift+I (Windows/Linux Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();

        toast.error('Whoops!', {
          description: 'Opening developer tools is disabled on this site.',
        });

        return false;
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();

        toast.error('Whoops!', {
          description: 'Opening developer tools is disabled on this site.',
        });

        return false;
      }

      // Ctrl+Shift+C (Inspector/Select Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();

        toast.error('Whoops!', {
          description: 'Opening developer tools is disabled on this site.',
        });

        return false;
      }

      // Ctrl+Shift+K (Console in Firefox)
      if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();

        toast.error('Whoops!', {
          description: 'Opening developer tools is disabled on this site.',
        });

        return false;
      }

      // Cmd+Option+I (Mac Inspector)
      if (e.metaKey && e.altKey && e.key === 'i') {
        e.preventDefault();

        toast.error('Whoops!', {
          description: 'Opening developer tools is disabled on this site.',
        });

        return false;
      }

      // Cmd+Option+J (Mac Console)
      if (e.metaKey && e.altKey && e.key === 'j') {
        e.preventDefault();

        toast.error('Whoops!', {
          description: 'Opening developer tools is disabled on this site.',
        });

        return false;
      }

      // Cmd+Option+U (Mac View Source)
      if (e.metaKey && e.altKey && e.key === 'u') {
        e.preventDefault();

        toast.error('Whoops!', {
          description: 'Viewing page source is disabled on this site.',
        });

        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
