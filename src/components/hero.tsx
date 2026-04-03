"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-background to-amber-50" />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold text-lg mb-4"
          >
            PERSONAL TRAINING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-wide text-foreground"
          >
            TRANSFORM
            <br />
            YOUR BODY
            <br />
            WITH <span className="text-primary">MUMU</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted leading-relaxed max-w-md"
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
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            >
              立即預約體驗課
              <ArrowRight size={20} />
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
          className="relative hidden md:block"
        >
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-primary/30">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-display text-4xl font-bold text-primary/40">MM</span>
                </div>
                <p className="text-sm text-muted">教練形象照</p>
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-border">
            <p className="font-display text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted">學員見證</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
