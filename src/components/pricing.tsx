"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "體驗課",
    subtitle: "單堂體驗",
    price: "體驗價",
    description: "適合第一次接觸的你",
    features: [
      "60 分鐘完整課程",
      "體態評估與目標諮詢",
      "客製化訓練體驗",
      "課後訓練建議",
    ],
    cta: "預約體驗",
    popular: false,
  },
  {
    name: "10 堂方案",
    subtitle: "最多人選擇",
    price: "優惠價",
    description: "穩定訓練，看見改變",
    features: [
      "每堂 60 分鐘",
      "專屬訓練計畫",
      "飲食建議",
      "體態追蹤紀錄",
      "LINE 隨時諮詢",
    ],
    cta: "立即報名",
    popular: true,
  },
  {
    name: "20 堂方案",
    subtitle: "最超值",
    price: "最優價",
    description: "長期投資，全面蛻變",
    features: [
      "每堂 60 分鐘",
      "進階訓練計畫",
      "完整飲食規劃",
      "每月體態評估",
      "LINE 隨時諮詢",
      "優先預約時段",
    ],
    cta: "立即報名",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">PRICING</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
            課程方案
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            選擇最適合你的方案，開始你的健身旅程
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular
                  ? "bg-card border-primary shadow-md scale-[1.02]"
                  : "bg-card border-border shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  最多人選擇
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted mt-1">{plan.subtitle}</p>
                <p className="font-display text-4xl font-bold text-primary mt-4">
                  {plan.price}
                </p>
                <p className="text-sm text-muted mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-hover text-white"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted mt-8"
        >
          孕婦健身方案歡迎私訊詢問，將依需求提供專屬報價
        </motion.p>
      </div>
    </section>
  );
}
