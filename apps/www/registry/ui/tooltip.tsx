import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const tooltipContentBase =
  "z-50 max-w-[258px] whitespace-normal break-words overflow-hidden rounded-md px-3 py-1.5 text-sm shadow-sm animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

const tooltipVariantClasses = {
  light: "bg-[#EEEEEE] text-popover-foreground shadow-primary-dark/20",
  dark: "bg-gray-800 text-white shadow-black/30",
};

const tooltipArrowClasses = {
  light: "fill-[#EEEEEE]",
  dark: "fill-gray-800",
};

type TooltipVariant = keyof typeof tooltipVariantClasses;

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  variant?: TooltipVariant;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, variant = "light", ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      tooltipContentBase,
      tooltipVariantClasses[variant],
      className
    )}
    {...props}
  >
    {props.children}
    <TooltipPrimitive.Arrow
      width={11}
      height={5}
      className={cn(tooltipArrowClasses[variant])}
    />
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {
  content: React.ReactNode;
  variant?: TooltipVariant;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipProps
>(
  (
    {
      children,
      content,
      variant = "light",
      side = "right",
      sideOffset = 4,
      delayDuration = 100,
      disableHoverableContent = false,
      ...props
    },
    ref
  ) => {
    return (
      <TooltipProvider
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        <TooltipPrimitive.Root {...props}>
          <TooltipPrimitive.Trigger asChild ref={ref}>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipContent variant={variant} side={side} sideOffset={sideOffset}>
            {content}
          </TooltipContent>
        </TooltipPrimitive.Root>
      </TooltipProvider>
    );
  }
);
Tooltip.displayName = "Tooltip";

export { Tooltip, TooltipProvider };
