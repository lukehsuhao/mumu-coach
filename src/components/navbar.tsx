"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "./icons";

const navLinks = [
  { href: "/#services", label: "服務項目" },
  { href: "/#about", label: "關於教練" },
  { href: "/#testimonials", label: "學員見證" },
  { href: "/#pricing", label: "課程方案" },
  { href: "/blog", label: "部落格" },
  { href: "/#contact", label: "聯絡預約" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-border px-6 py-3 flex items-center justify-between">
        <a href="/" className="font-display text-2xl font-bold text-foreground tracking-wide">
          MUMU<span className="text-primary">COACH</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/mumu.coach/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer"
          >
            立即預約
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "關閉選單" : "開啟選單"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-border p-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-foreground font-medium hover:bg-background rounded-lg transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-border flex items-center gap-4 px-4">
              <a
                href="https://www.instagram.com/mumu.coach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold cursor-pointer"
              >
                立即預約
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
