"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BackgroundGradient({
  children,
  className,
  ...props
}: BackgroundGradientProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative bg-gradient-to-br from-blue-100/20 via-transparent to-blue-100/20 rounded-xl",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-transparent to-blue-100/10 blur-xl" />
      {children}
    </motion.div>
  );
}

