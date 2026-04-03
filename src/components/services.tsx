"use client";

import { motion } from "framer-motion";
import { Dumbbell, Heart, Users } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "一對一健身",
    description:
      "依據你的目標與體能狀況，量身定制專屬訓練計畫。涵蓋重量訓練、健力週期化訓練、舉重專項，搭配矯正性運動與運動按摩，全方位提升你的表現。",
    features: ["客製化訓練計畫", "健力 / 舉重專項指導", "矯正性運動", "運動按摩放鬆"],
  },
  {
    icon: Heart,
    title: "孕婦健身",
    description:
      "持有 MedEx 懷孕及產後訓練專家認證（PPES），並完成烏烏醫師孕產肌力培訓。安全專業地陪伴準媽媽維持體能、減緩不適，產後順利恢復。",
    features: ["MedEx PPES 認證", "孕期安全運動", "核心與骨盆底肌強化", "產後恢復訓練"],
  },
  {
    icon: Users,
    title: "團體課",
    description:
      "小班制互動教學，在團體的氛圍中一起突破極限。結合有氧、肌力與柔軟度的全方位課程。",
    features: ["小班制教學", "多元課程內容", "互動式訓練", "團體動力激勵"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">SERVICES</p>
          <h2 className="font-display text-2xl md:text-5xl font-bold tracking-wide">
            服務項目
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            無論你是健身新手、孕期媽媽，或想和朋友一起運動，牧牧教練都有適合你的方案。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
