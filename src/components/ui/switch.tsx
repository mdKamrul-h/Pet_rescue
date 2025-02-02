import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, checked, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          ref={ref}
          checked={checked}
          {...props}
        />
        <div
          className={cn(
            'relative w-11 h-6 bg-gray-200 rounded-full peer',
            'peer-focus:ring-4 peer-focus:ring-blue-300',
            'peer-checked:after:translate-x-full peer-checked:after:border-white',
            'peer-checked:bg-blue-500',
            'after:content-[""]',
            'after:absolute after:top-0.5 after:left-[2px]',
            'after:bg-white after:border-gray-300 after:border',
            'after:rounded-full after:h-5 after:w-5',
            'after:transition-all',
            className
          )}
        />
        {label && (
          <span className="ml-3 text-sm font-medium text-gray-900">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };
