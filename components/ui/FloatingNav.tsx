"use client";

import React, { useState } from "react";
import {
  motion,                // Motion component from Framer Motion for animiations
  AnimatePresence,       // Component for handling presence of animations
  useScroll,             // Hook for scroll events
  useMotionValueEvent,   // Hook for listening to motion value events
} from "framer-motion";
import { cn } from "@/utils/cn"; // Utility function for conditional classNames
import Link from "next/link";    // Link component from Next.js for navigation

{/* Floating Navigation Bar */}
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll(); // scroll progress value

  const [visible, setVisible] = useState(false); // state for handling nav bar visibiity

  // Listen to scrollYProgress changes
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!; // Calculate scroll direction

      if (scrollYProgress.get() < 0.05) {                        // Hide nav bar if scroll is at the top
        setVisible(false);
      } else {
        if (direction < 0) {  // Show nav bar if scrolling up
          setVisible(true);
        } else {              // Hide nav bar if scrolling down
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4 border-white/[0.2] bg-black-100",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`} // Unique key for each nav item
            href={navItem.link} // Link URL
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>         {/* Icon for small screens */}
            <span className="text-sm !cursor-pointer">{navItem.name}</span> {/* Name for large screens */}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
