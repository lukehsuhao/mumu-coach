"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { InstagramIcon } from "./icons";
import type { BlogCta } from "@/lib/blog";

export default function BlogCtaSection({ cta }: { cta: BlogCta }) {
  const isLine = cta.variant === "line";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`my-12 rounded-2xl p-8 md:p-10 ${
        isLine
          ? "bg-gradient-to-br from-[#06C755]/5 to-[#06C755]/10 border border-[#06C755]/20"
          : "bg-gradient-to-br from-purple-500/5 to-pink-500/10 border border-purple-500/20"
      }`}
    >
      {/* Coach profile */}
      <div className="flex flex-col items-center gap-3 mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20">
          <Image
            src="/coach-portrait.png"
            alt="牧牧教練"
            width={224}
            height={224}
            className="w-full h-full object-cover"
            quality={95}
          />
        </div>
        <div className="text-center">
          <p className="font-display font-bold text-lg">牧牧教練</p>
          <p className="text-sm text-muted">ACE-CPT 認證教練</p>
          <p className="text-xs text-muted/70 mt-0.5">📍 台北市松山區南京東路四段130號 B1・Fitness Hub</p>
        </div>
      </div>

      <div className="text-center">
        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-wide mb-3">
          {cta.headline}
        </h3>
        <p className="text-muted max-w-md mx-auto leading-relaxed mb-6">
          {cta.description}
        </p>
        <a
          href={cta.buttonHref}
          target={cta.buttonHref.startsWith("http") ? "_blank" : undefined}
          rel={cta.buttonHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-lg font-bold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg shadow-md cursor-pointer ${
            isLine
              ? "bg-[#06C755] hover:bg-[#05b34d] text-white"
              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          }`}
        >
          {isLine ? <MessageCircle size={22} /> : <InstagramIcon size={22} className="text-white" />}
          {cta.buttonText}
          <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>
  );
}
