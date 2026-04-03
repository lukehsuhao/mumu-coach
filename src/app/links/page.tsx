import type { Metadata } from "next";
import { MessageCircle, BookOpen, Dumbbell, Heart, Users } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import LinksClient from "@/components/links-client";

export const metadata: Metadata = {
  title: "牧牧教練 Mumu Coach | 連結",
  description: "牧牧教練的所有連結，一站搞定。",
};

const socialLinks = [
  {
    icon: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/mumu.coach/",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "line",
    label: "LINE",
    href: "#",
    color: "from-[#06C755] to-[#05b34d]",
  },
];

const mainLinks = [
  {
    icon: "dumbbell",
    title: "一對一健身",
    description: "量身定制專屬訓練計畫",
    href: "/#services",
  },
  {
    icon: "heart",
    title: "孕婦健身",
    description: "安全溫和的孕期運動指導",
    href: "/#services",
  },
  {
    icon: "users",
    title: "團體課",
    description: "小班制互動教學",
    href: "/#services",
  },
  {
    icon: "line-cta",
    title: "LINE 立即諮詢",
    description: "免費諮詢，無壓力溝通",
    href: "#",
    highlight: true,
  },
  {
    icon: "blog",
    title: "健身部落格",
    description: "訓練知識、飲食建議",
    href: "/blog",
  },
  {
    icon: "home",
    title: "官方網站",
    description: "了解更多關於牧牧教練",
    href: "/",
  },
];

export default function LinksPage() {
  return <LinksClient socialLinks={socialLinks} mainLinks={mainLinks} />;
}
