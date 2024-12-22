"use client";

import { motion } from "framer-motion";
import { FileText } from 'lucide-react';

export function AttributionDocument() {
  return (
    <div className="w-full h-full relative bg-blue-50/30 rounded-xl p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-4 left-4"
      >
        <FileText className="w-6 h-6 text-blue-500" />
      </motion.div>
      
      <div className="mt-12 space-y-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="space-y-2"
          >
            <div className="h-2 bg-blue-500 rounded-full w-16" />
            <div className="h-2 bg-blue-100 rounded-full w-full" />
            <div className="h-2 bg-blue-100 rounded-full" style={{ width: '85%' }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

