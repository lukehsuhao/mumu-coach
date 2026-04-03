"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { InstagramIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background to-orange-50/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-primary font-semibold mb-2">CONTACT</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold tracking-wide">
            開始你的健身旅程
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto text-lg leading-relaxed">
            不確定適合哪個方案？沒關係！先加我的 LINE 聊聊，我會根據你的狀況給予建議，完全沒有壓力。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-12"
        >
          {/* Main LINE CTA */}
          <a
            href="https://lin.ee/wCbemYz"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-expand [--cta-color:#06C755] text-xl"
          >
            <span className="cta-label flex items-center gap-2"><MessageCircle size={24} />加入 LINE 立即諮詢</span>
            <span className="cta-icon"><ArrowRight size={22} /></span>
          </a>

          <p className="mt-4 text-sm text-muted">
            點擊上方按鈕，加入牧牧教練 LINE 官方帳號
          </p>
          <p className="mt-3 text-sm text-foreground/70">
            📍 台北市松山區南京東路四段130號 B1・Fitness Hub
          </p>
        </motion.div>

        {/* Secondary options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.instagram.com/mumu.coach/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-border hover:border-primary text-foreground hover:text-primary transition-all duration-200 cursor-pointer"
          >
            <InstagramIcon size={20} />
            <span className="font-medium">Instagram 私訊</span>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            免費諮詢
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            客製化方案
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            無壓力溝通
          </div>
        </motion.div>
      </div>
    </section>
  );
}
