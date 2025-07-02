"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { RefObject } from "react";

interface FloatingProps {
  ref: RefObject<HTMLElement | null>;
}

export default function Floating({ ref }: FloatingProps) {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      width: number;
      height: number;
      targetX: number;
      targetY: number;
      duration: number;
    }>
  >([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const newParticles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        width: Math.random() * 10 + 5,
        height: Math.random() * 10 + 5,
        targetX: Math.random() * window.innerWidth,
        targetY: Math.random() * window.innerHeight,
        duration: Math.random() * 20 + 10,
      }));
      setParticles(newParticles);
    }
  }, []);

  if (!isClient) return null;

  return (
    <>
      <motion.div
        dir="ltr"
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 60% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 30%)
          `,
          y: yBg,
          scale,
        }}
      />
      <div
        dir="ltr"
        className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-r from-[#2EB6EE] to-[#2EB6EE] opacity-20"
            initial={{ x: p.x, y: p.y, width: p.width, height: p.height }}
            animate={{ x: p.targetX, y: p.targetY }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>
    </>
  );
}
