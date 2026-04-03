"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  BookOpen,
  Dumbbell,
  Heart,
  Users,
  Home,
  ExternalLink,
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
};

export default function LinksClient({
  socialLinks,
  mainLinks,
}: {
  socialLinks: SocialLink[];
  mainLinks: MainLink[];
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-background to-amber-50 flex flex-col items-center px-4 py-12">
      {/* Avatar & Name */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8"
      >
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg mb-4">
          <span className="font-display text-3xl font-bold text-white">MM</span>
        </div>
        <h1 className="font-display text-2xl font-bold tracking-wide">
          MUMU<span className="text-primary">COACH</span>
        </h1>
        <p className="text-muted text-sm mt-1">
          專業健身教練 · 一對一 · 孕婦健身 · 團體課
        </p>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex gap-3 mb-8"
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className={`w-11 h-11 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 cursor-pointer`}
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

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-xs text-muted"
      >
        &copy; {new Date().getFullYear()} 牧牧教練 Mumu Coach
      </motion.p>
    </div>
  );
}
