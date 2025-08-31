"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-primary-foreground hover:bg-destructive/90",
        cool: "dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 from-primary to-primary/85 shadow-md shadow-primary/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 text-primary-foreground dark:text-primary-foreground dark:border-t-0 dark:border-primary/50 dark:ring-white/5",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

const liquidbuttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 overflow-hidden group",
  {
    variants: {
      variant: {
        default: "text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border border-white/20 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        ghost: "text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 py-3",
        xl: "h-14 px-10 py-4 text-base",
        xxl: "h-16 px-12 py-5 text-lg",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xl",
    },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean
  }) {
  if (asChild) {
    return (
      <Slot
        className={cn(
          liquidbuttonVariants({ variant, size, className })
        )}
        {...props}
      >
        {React.cloneElement(children as React.ReactElement, {
          style: {
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #9333ea 0%, #2563eb 50%, #06b6d4 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
            color: 'white',
            fontWeight: '600',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            ...(children as React.ReactElement).props.style
          },
          onMouseEnter: (e: React.MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            target.style.transform = 'scale(1.05) translateY(-2px)';
            target.style.boxShadow = '0 16px 48px rgba(147, 51, 234, 0.4), 0 8px 24px rgba(37, 99, 235, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)';
            target.style.background = 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #0891b2 100%)';
            (children as React.ReactElement).props.onMouseEnter?.(e);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            target.style.transform = 'scale(1) translateY(0)';
            target.style.boxShadow = '0 8px 32px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)';
            target.style.background = 'linear-gradient(135deg, #9333ea 0%, #2563eb 50%, #06b6d4 100%)';
            (children as React.ReactElement).props.onMouseLeave?.(e);
          }
        })}
      </Slot>
    )
  }

  return (
    <button
      className={cn(
        liquidbuttonVariants({ variant, size, className })
      )}
      {...props}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-90" />
      
      {/* Glass overlay with blur effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-white/5 to-transparent backdrop-blur-sm" />
      
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      
      {/* Border highlight */}
      <div className="absolute inset-0 rounded-full border border-white/30" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      </div>
      
      {/* Liquid ripple effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-50 transition-opacity duration-300 scale-0 group-hover:scale-100 group-active:scale-110" style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
        }} />
      </div>
      
      {/* Content */}
      <span className="relative z-10 font-semibold text-white drop-shadow-lg" style={{
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)'
      }}>
        {children}
      </span>
      
      {/* Bottom reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent rounded-b-full" />
    </button>
  )
}

export { Button, buttonVariants, liquidbuttonVariants, LiquidButton }