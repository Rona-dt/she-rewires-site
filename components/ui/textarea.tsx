import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-t-xl rounded-b-none border-0 border-b-2 border-md-outline bg-md-surfaceLow px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/80 transition-colors duration-200 focus-visible:border-md-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-md-primary/30 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
