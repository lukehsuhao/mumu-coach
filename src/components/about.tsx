"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Dumbbell, Trophy, BookOpen } from "lucide-react";

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
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/coach-lifestyle.jpg"
              alt="牧牧教練生活照"
              width={4553}
              height={6375}
              className="w-full h-auto"
            />
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
              持有 ACE-CPT 美國運動委員會私人教練認證、MedEx 懷孕及產後訓練專家等多項國際證照，曾任 World Gym 私人教練，也是台北市舉重錦標賽選手。我擅長依據每位學員的需求與目標，設計最適合的訓練方式。
            </p>
            <p>
              無論你是想增肌減脂、改善體態，還是在孕期保持健康，我都會陪你一步步達成目標。教學風格溫暖但扎實，注重動作品質與安全。
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-10 space-y-6">
            {/* 證照 */}
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Award size={20} className="text-primary" />
                <h3 className="font-display font-bold text-lg">證照與研習</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-muted">
                <li>ACE-CPT 美國運動委員會私人教練認證</li>
                <li>MedEx 懷孕及產後訓練專家（PPES）</li>
                <li>M.E.T Level 1 動作效率訓練</li>
                <li>KAT 矯正性運動研習</li>
                <li>工具式軟組織保健技術員（筋膜刀）</li>
                <li>烏烏醫師孕期與產後肌力訓練實務培訓</li>
                <li>傳統整復推拿技術士證照</li>
                <li>CPR + AED 心肺復甦合格人員</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* 經歷 */}
              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Trophy size={20} className="text-primary" />
                  <h3 className="font-display font-bold text-lg">經歷</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted">
                  <li>雙北自由教練</li>
                  <li>World Gym 私人教練</li>
                  <li>健生活 Living Fitness 個人 / 團課教練</li>
                  <li>109 年台北市中正盃舉重錦標賽 61kg</li>
                  <li>110 年台北市青年盃舉重錦標賽 61kg 第四名</li>
                </ul>
              </div>

              {/* 專長 */}
              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell size={20} className="text-primary" />
                  <h3 className="font-display font-bold text-lg">專長</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted">
                  <li>重量訓練</li>
                  <li>健力週期化訓練</li>
                  <li>舉重專項訓練</li>
                  <li>運動按摩</li>
                  <li>攀岩抱石</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
