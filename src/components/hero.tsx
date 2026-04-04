"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-background to-amber-50" />

      {/* Decorative shapes — radial gradient for max browser compat */}
      <div
        className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold text-sm md:text-lg mb-4"
          >
            PERSONAL TRAINING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-7xl font-bold leading-tight tracking-wide text-foreground"
          >
            用科學訓練
            <br />
            打造你的
            <br />
            <span className="text-primary">理想體態</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-sm md:text-lg text-muted leading-relaxed max-w-md"
          >
            專業 · 溫暖 · 為你量身打造的健身旅程
            <br />
            一對一訓練 / 孕婦健身 / 團體課
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#contact" className="cta-expand">
              <span className="cta-label">立即預約體驗課</span>
              <span className="cta-icon"><ArrowRight size={20} /></span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-foreground/20 hover:border-primary text-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 cursor-pointer"
            >
              了解更多
            </a>
          </motion.div>
        </div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/coach-portrait.png"
              alt="牧牧教練形象照"
              width={1080}
              height={744}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-border">
            <p className="font-display text-2xl font-bold text-primary">ACE-CPT</p>
            <p className="text-sm text-muted">認證教練</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
