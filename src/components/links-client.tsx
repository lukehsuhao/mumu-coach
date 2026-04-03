"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  BookOpen,
  Dumbbell,
  Heart,
  Users,
  Home,
  ExternalLink,
  MapPin,
  Award,
} from "lucide-react";
import { InstagramIcon } from "./icons";

interface SocialLink {
  icon: string;
  label: string;
  href: string;
  color: string;
}

interface MainLink {
  icon: string;
  title: string;
  description: string;
  href: string;
  highlight?: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon size={20} className="text-white" />,
  line: <MessageCircle size={20} className="text-white" />,
  dumbbell: <Dumbbell size={20} className="text-primary" />,
  heart: <Heart size={20} className="text-primary" />,
  users: <Users size={20} className="text-primary" />,
  "line-cta": <MessageCircle size={20} className="text-white" />,
  blog: <BookOpen size={20} className="text-primary" />,
  home: <Home size={20} className="text-primary" />,
  map: <MapPin size={20} className="text-primary" />,
};

export default function LinksClient({
  socialLinks,
  mainLinks,
}: {
  socialLinks: SocialLink[];
  mainLinks: MainLink[];
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-background to-amber-50 flex flex-col items-center px-4 py-10">
      {/* Avatar & Name */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-6"
      >
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg mb-4">
          <Image
            src="/coach-lifestyle.jpg"
            alt="牧牧教練"
            width={400}
            height={400}
            className="w-full h-full object-cover object-top"
            quality={95}
            priority
          />
        </div>
        <h1 className="font-display text-2xl font-bold tracking-wide">
          牧牧教練
        </h1>
        <p className="text-muted text-sm mt-1">
          ACE-CPT 認證私人教練
        </p>
      </motion.div>

      {/* Bio card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="w-full max-w-md bg-card rounded-2xl border border-border p-5 mb-6"
      >
        <p className="text-sm text-foreground/80 leading-relaxed mb-3">
          專攻重量訓練、健力、舉重，也是 MedEx 孕產訓練專家。不管你是新手想入門，還是想突破訓練瓶頸，都歡迎找我聊聊 💪
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">重量訓練</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">健力</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">舉重</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">孕婦健身</span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">運動按摩</span>
        </div>
        <a
          href="https://maps.app.goo.gl/pqsfagWokeWkRxd49"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
        >
          <MapPin size={13} />
          台北市松山區南京東路四段130號 B1・Fitness Hub
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex gap-3 mb-6"
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 cursor-pointer`}
          >
            {iconMap[link.icon]}
          </a>
        ))}
      </motion.div>

      {/* Main links */}
      <div className="w-full max-w-md space-y-3">
        {mainLinks.map((link, i) => (
          <motion.a
            key={link.title}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${
              link.highlight
                ? "bg-[#06C755] border-[#06C755] text-white hover:bg-[#05b34d]"
                : "bg-card border-border hover:border-primary"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                link.highlight ? "bg-white/20" : "bg-primary/10"
              }`}
            >
              {iconMap[link.icon]}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`font-semibold ${
                  link.highlight ? "text-white" : "text-foreground"
                }`}
              >
                {link.title}
              </p>
              <p
                className={`text-sm ${
                  link.highlight ? "text-white/70" : "text-muted"
                }`}
              >
                {link.description}
              </p>
            </div>
            <ExternalLink
              size={16}
              className={link.highlight ? "text-white/50" : "text-muted"}
            />
          </motion.a>
        ))}
      </div>

      {/* Credentials mini */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-md mt-6 bg-card rounded-2xl border border-border p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <Award size={16} className="text-primary" />
          <p className="font-display font-bold text-sm">證照與經歷</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted">
          <span>ACE-CPT 認證教練</span>
          <span>MedEx 孕產訓練專家</span>
          <span>World Gym 教練經歷</span>
          <span>整復推拿技術士</span>
          <span>舉重錦標賽選手</span>
          <span>筋膜刀技術員</span>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-xs text-muted"
      >
        &copy; {new Date().getFullYear()} 牧牧教練 Mumu Coach
      </motion.p>
    </div>
  );
}
