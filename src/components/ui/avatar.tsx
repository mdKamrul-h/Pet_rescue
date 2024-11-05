import { ImgHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg';
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, size = 'md', alt = '', ...props }, ref) => {
    return (
      <div
        className={cn(
          'relative inline-block rounded-full overflow-hidden bg-gray-200',
          {
            'w-8 h-8': size === 'sm',
            'w-12 h-12': size === 'md',
            'w-16 h-16': size === 'lg',
          },
          className
        )}
      >
        <img
          ref={ref}
          alt={alt}
          className="w-full h-full object-cover"
          {...props}
        />
        <div className="absolute inset-0 rounded-full border border-black/5" />
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
