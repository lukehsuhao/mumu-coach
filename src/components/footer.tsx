import Link from "next/link";
import { InstagramIcon } from "./icons";

const footerLinks = [
  { href: "/#services", label: "服務項目" },
  { href: "/#about", label: "關於教練" },
  { href: "/#testimonials", label: "學員見證" },
  { href: "/#pricing", label: "課程方案" },
  { href: "/#contact", label: "聯絡預約" },
  { href: "/blog", label: "部落格" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-2xl font-bold tracking-wide inline-block">
              MUMU<span className="text-primary">COACH</span>
            </Link>
            <p className="text-white/50 text-sm mt-2">
              專業 · 溫暖 · 為你量身打造的健身旅程
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/mumu.coach/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-200 cursor-pointer"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} 牧牧教練 Mumu Coach. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
