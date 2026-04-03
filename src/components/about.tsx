"use client";

import { motion } from "framer-motion";
import { Award, Clock, Shield, Sparkles } from "lucide-react";

const highlights = [
  { icon: Clock, label: "教學經驗", value: "5+" , unit: "年" },
  { icon: Award, label: "專業證照", value: "多項", unit: "" },
  { icon: Shield, label: "安全第一", value: "零", unit: "受傷" },
  { icon: Sparkles, label: "服務學員", value: "500+", unit: "位" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-orange-50/50 to-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-display text-3xl font-bold text-primary/40">MM</span>
                </div>
                <p className="text-sm text-muted">教練生活照</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-semibold mb-2">ABOUT</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-6">
            關於牧牧教練
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              嗨，我是牧牧教練！我相信健身不只是鍛鍊身體，更是一段認識自己、突破自己的旅程。
            </p>
            <p>
              擁有多年教學經驗與多項專業證照，我擅長依據每位學員的需求與目標，設計最適合的訓練方式。無論你是想增肌減脂、改善體態，還是在孕期保持健康，我都會陪你一步步達成目標。
            </p>
            <p>
              我的教學風格溫暖但扎實，注重動作品質與安全。讓我們一起開始這段改變的旅程吧！
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold">
                    {item.value}
                    <span className="text-sm font-body font-normal text-muted ml-0.5">
                      {item.unit}
                    </span>
                  </p>
                  <p className="text-xs text-muted">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
