import { createContext, useContext, useState, useCallback, useEffect, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  type?: 'default' | 'success' | 'error' | 'warning';
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-0 right-0 z-50 w-full md:max-w-sm p-4 md:p-6 space-y-4">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </div>
  );
};

const ToastItem = forwardRef<HTMLDivElement, Toast>(
  ({ id, title, description, type = 'default' }, ref) => {
    const { removeToast } = useToast();

    useEffect(() => {
      const timer = setTimeout(() => {
        removeToast(id);
      }, 5000);

      return () => clearTimeout(timer);
    }, [id, removeToast]);

    return (
      <div
        ref={ref}
        className={cn(
          'pointer-events-auto relative w-full rounded-lg border p-4 shadow-lg',
          'animate-in slide-in-from-right-full',
          {
            'bg-white border-gray-200': type === 'default',
            'bg-green-50 border-green-200': type === 'success',
            'bg-red-50 border-red-200': type === 'error',
            'bg-yellow-50 border-yellow-200': type === 'warning',
          }
        )}
      >
        <button
          onClick={() => removeToast(id)}
          className="absolute right-2 top-2 rounded-md p-1 text-gray-400 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {title && (
          <div className="font-medium">
            {title}
          </div>
        )}
        {description && (
          <div className="mt-1 text-sm text-gray-500">
            {description}
          </div>
        )}
      </div>
    );
  }
);

ToastItem.displayName = 'ToastItem';

export { ToastProvider, useToast };
