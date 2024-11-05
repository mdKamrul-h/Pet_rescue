import { createContext, useContext, useState, HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

const DialogContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

interface DialogProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Dialog = ({ children, defaultOpen = false }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

interface DialogTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { setIsOpen } = useContext(DialogContext);

    return (
      <button
        ref={ref}
        onClick={() => setIsOpen(true)}
        className={cn('', className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DialogTrigger.displayName = 'DialogTrigger';

const DialogContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const { isOpen, setIsOpen } = useContext(DialogContext);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
        <div
          ref={ref}
          className={cn(
            'relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);

DialogContent.displayName = 'DialogContent';

const DialogHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 mb-4', className)}
      {...props}
    >
      {children}
    </div>
  )
);

DialogHeader.displayName = 'DialogHeader';

const DialogFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex justify-end space-x-2 mt-4', className)}
      {...props}
    >
      {children}
    </div>
  )
);

DialogFooter.displayName = 'DialogFooter';

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter };
