"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "小雯",
    program: "一對一健身",
    content:
      "跟牧牧教練訓練三個月，體態變化超明顯！教練很有耐心，每個動作都會仔細調整，讓我很安心。",
    rating: 5,
  },
  {
    name: "Amy",
    program: "孕婦健身",
    content:
      "孕期找到牧牧教練真的太幸運了，整個孕期都保持運動習慣，生產也很順利！非常推薦給所有準媽媽。",
    rating: 5,
  },
  {
    name: "志偉",
    program: "一對一健身",
    content:
      "本來以為健身很無聊，結果每次上課都很期待。教練會根據我的狀態調整訓練，進步很有感！",
    rating: 5,
  },
  {
    name: "雅琪",
    program: "團體課",
    content:
      "團體課氣氛超好，大家一起運動特別有動力。教練會注意每個人的動作，小班制的品質真的不一樣。",
    rating: 5,
  },
  {
    name: "Kevin",
    program: "一對一健身",
    content:
      "從完全不會到現在可以自主訓練，牧牧教練不只教動作，更教會我正確的訓練觀念。大推！",
    rating: 5,
  },
  {
    name: "佩琪",
    program: "孕婦健身",
    content:
      "產後恢復課程讓我很快找回體態，教練很專業也很貼心，每次都會關心我的身體狀況。",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-dark-bg text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide">
            學員見證
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            聽聽他們怎麼說
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-dark-card rounded-2xl p-6 border border-white/10"
            >
              <Quote size={24} className="text-primary/60 mb-4" />
              <p className="text-white/80 leading-relaxed mb-6">{t.content}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-white/50">{t.program}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-primary fill-primary"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
