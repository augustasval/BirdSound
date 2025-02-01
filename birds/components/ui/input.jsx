import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ type = 'text', className, ...props }, ref) => (
  <input
    placeholder="Have a bird on your mind??"
    type={type}
    className={cn(
      "flex h-9 w-full rounded-3xl text-center border border-input bg-transparent px-3 py-1 text-base shadow-sm hover:bg-slate-100 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className
    )}
    ref={ref}
    {...props}
  />
));

Input.displayName = "Input";

export { Input };
