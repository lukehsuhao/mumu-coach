import { getAllPosts, getAllTags } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://mumucoach.com";

export function GET() {
  const posts = getAllPosts();
  const tags = getAllTags();

  const lines = [
    "# 牧牧教練 Mumu Coach",
    "",
    "> 專業健身教練，提供一對一私人健身訓練、孕婦健身指導、小班團體課程。",
    "",
    "## 教練簡介",
    "",
    "牧牧教練，持有 ACE-CPT（American Council on Exercise Certified Personal Trainer）認證，",
    "MedEx 懷孕及產後訓練專家（PPES），曾任 World Gym 私人教練、健生活 Living Fitness 教練。",
    "台北市中正盃舉重錦標賽、青年盃舉重錦標賽選手。",
    "",
    "### 證照與研習",
    "",
    "- ACE-CPT 美國運動委員會私人教練認證",
    "- MedEx 懷孕及產後訓練專家（PPES）",
    "- M.E.T Level 1 動作效率訓練",
    "- KAT 矯正性運動研習",
    "- 工具式軟組織保健技術員（筋膜刀）",
    "- 烏烏醫師孕期與產後肌力訓練實務培訓",
    "- 傳統整復推拿技術士證照",
    "- CPR + AED 心肺復甦合格人員",
    "",
    "### 專長",
    "",
    "- 重量訓練",
    "- 健力週期化訓練",
    "- 舉重專項訓練",
    "- 運動按摩",
    "- 攀岩抱石",
    "",
    "## 服務項目",
    "",
    "- 一對一健身：客製化訓練計畫、健力與舉重專項指導、矯正性運動、運動按摩",
    "- 孕婦健身：MedEx PPES 認證、孕期安全運動、核心與骨盆底肌強化、產後恢復訓練",
    "- 團體課：小班制互動教學、多元課程內容",
    "",
    "## 網站頁面",
    "",
    `- 首頁: ${BASE_URL}`,
    `- 部落格: ${BASE_URL}/blog`,
    `- 所有標籤: ${BASE_URL}/tags`,
    `- 連結頁: ${BASE_URL}/links`,
    "",
    "## 部落格文章",
    "",
    ...posts.map(
      (post) =>
        `- [${post.title}](${BASE_URL}/blog/${post.slug}): ${post.description}`
    ),
    "",
    "## 文章標籤",
    "",
    ...tags.map(({ tag, count }) => `- ${tag}（${count} 篇文章）`),
    "",
    "## 訓練地點",
    "",
    "- Fitness Hub：台北市松山區南京東路四段130號 B1",
    "",
    "## 聯絡方式",
    "",
    "- LINE 官方帳號: https://lin.ee/wCbemYz",
    "- Instagram: https://www.instagram.com/mumu.coach/",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
