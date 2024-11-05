import { ButtonHTMLAttributes, forwardRef, createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';

const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (id: string) => void;
}>({
  activeTab: '',
  setActiveTab: () => {},
});

export interface TabsProps {
  defaultTab: string;
  children: React.ReactNode;
  className?: string;
}

const Tabs = ({ defaultTab, children, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('w-full', className)}>{children}</div>
    </TabsContext.Provider>
  );
};

export interface TabListProps {
  children: React.ReactNode;
  className?: string;
}

const TabList = ({ children, className }: TabListProps) => {
  return (
    <div
      role="tablist"
      className={cn(
        'flex items-center border-b border-gray-200',
        className
      )}
    >
      {children}
    </div>
  );
};

export interface TabTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
}

const TabTrigger = forwardRef<HTMLButtonElement, TabTriggerProps>(
  ({ id, className, children, ...props }, ref) => {
    const { activeTab, setActiveTab } = useContext(TabsContext);

    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={activeTab === id}
        onClick={() => setActiveTab(id)}
        className={cn(
          'inline-flex items-center justify-center px-3 py-2 text-sm font-medium',
          'border-b-2 -mb-px transition-colors',
          activeTab === id
            ? 'border-primary text-primary'
            : 'border-transparent text-gray-500 hover:text-gray-700',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabTrigger.displayName = 'TabTrigger';

export interface TabContentProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const TabContent = ({ id, children, className }: TabContentProps) => {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== id) return null;

  return (
    <div
      role="tabpanel"
      className={cn('mt-4', className)}
    >
      {children}
    </div>
  );
};

export { Tabs, TabList, TabTrigger, TabContent };
