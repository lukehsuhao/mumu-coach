import { newPosts } from "./blog-new-posts";
import { batchA } from "./blog-batch2-a";
import { batchB } from "./blog-batch2-b";
import { batchC } from "./blog-batch2-c";
import { batchD } from "./blog-batch2-d";
import { batch3 } from "./blog-batch3";

export interface BlogCta {
  headline: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant: "line" | "instagram";
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string; // HTML content
  headings: { id: string; text: string; level: number }[];
  cta: BlogCta;
}

// Articles to exclude (duplicates)
const excludeSlugs = new Set([
  "beginner-workout-guide",
]);

const allRawPosts: BlogPost[] = [
  ...newPosts,
  ...batchA,
  ...batchB,
  ...batchC,
  ...batchD,
  ...batch3,
  {
    slug: "beginner-workout-guide",
    title: "健身新手必看：入門訓練完整指南",
    description:
      "剛開始健身不知道從哪裡開始？這篇文章帶你了解基本觀念、訓練動作與常見錯誤。",
    date: "2026-03-28",
    readTime: "8 min read",
    tags: ["健身入門", "訓練技巧", "新手指南"],
    headings: [
      { id: "why-start", text: "為什麼你應該開始健身？", level: 2 },
      { id: "basic-concepts", text: "基本觀念建立", level: 2 },
      { id: "progressive-overload", text: "漸進式超負荷", level: 3 },
      { id: "rest-recovery", text: "休息與恢復", level: 3 },
      { id: "beginner-exercises", text: "新手推薦動作", level: 2 },
      { id: "upper-body", text: "上半身動作", level: 3 },
      { id: "lower-body", text: "下半身動作", level: 3 },
      { id: "common-mistakes", text: "常見錯誤", level: 2 },
      { id: "summary", text: "總結", level: 2 },
    ],
    cta: {
      headline: "不確定從哪裡開始？讓教練帶你入門",
      description: "新手最怕練錯方向。私訊牧牧教練，免費幫你評估體能狀況，規劃適合你的第一份訓練計畫。",
      buttonText: "LINE 免費諮詢",
      buttonHref: "https://lin.ee/wCbemYz",
      variant: "line",
    },
    content: `
      <p>剛踏入健身房，看著滿滿的器材是不是有點不知所措？別擔心，每個人都是從這一步開始的。這篇文章會帶你建立正確的健身觀念，讓你的訓練之路走得更穩更遠。</p>

      <h2 id="why-start">為什麼你應該開始健身？</h2>
      <p>健身不只是為了好看的身材，更是一種投資自己健康的方式。規律的運動能幫助你：</p>
      <ul>
        <li>增強肌肉力量，改善日常生活品質</li>
        <li>提升基礎代謝率，更有效管理<a href="/blog/fitness-fat-loss-complete-guide">體重</a></li>
        <li>改善心理健康，減緩壓力與焦慮</li>
        <li>增加骨密度，預防骨質疏鬆</li>
      </ul>

      <h2 id="basic-concepts">基本觀念建立</h2>
      <p>在開始訓練之前，有幾個重要觀念需要先理解。</p>

      <h3 id="progressive-overload">漸進式超負荷</h3>
      <p>這是健身訓練最重要的原則。簡單來說，就是隨著時間逐漸增加訓練的強度、重量或次數，讓身體持續適應新的刺激。不需要每次都大幅增加，穩定成長才是關鍵。</p>

      <h3 id="rest-recovery">休息與恢復</h3>
      <p>肌肉不是在訓練時生長的，而是在休息時。確保每個肌群訓練後有 48-72 小時的恢復時間，同時保持充足的睡眠（7-9 小時）。</p>

      <h2 id="beginner-exercises">新手推薦動作</h2>
      <p>以下是幾個適合新手的基本動作，建議先從這些開始建立基礎。</p>

      <h3 id="upper-body">上半身動作</h3>
      <ul>
        <li><strong>伏地挺身</strong>：鍛鍊胸肌、三頭肌、前三角肌</li>
        <li><strong>啞鈴划船</strong>：鍛鍊背部肌群</li>
        <li><strong>肩推</strong>：鍛鍊三角肌</li>
      </ul>

      <h3 id="lower-body">下半身動作</h3>
      <ul>
        <li><strong><a href="/blog/squat-correct-form-complete-guide">深蹲</a></strong>：腿部訓練之王，鍛鍊股四頭肌、臀部</li>
        <li><strong>弓步蹲</strong>：訓練單腳穩定性與腿部肌力</li>
        <li><strong>臀橋</strong>：啟動臀部肌群的最佳動作</li>
      </ul>

      <h2 id="common-mistakes">常見錯誤</h2>
      <p>新手常犯的幾個錯誤：</p>
      <ol>
        <li><strong>重量太重</strong>：先掌握正確姿勢，再逐步加重</li>
        <li><strong>忽略熱身</strong>：每次訓練前至少 5-10 分鐘的動態暖身</li>
        <li><strong>不記錄訓練</strong>：記錄每次的重量與次數，才能追蹤進步</li>
        <li><strong>只練喜歡的部位</strong>：均衡訓練才能避免肌肉不平衡</li>
      </ol>

      <h2 id="summary">總結</h2>
      <p>健身是一場馬拉松，不是短跑。保持耐心、維持一致性，你一定會看到改變。如果不確定動作是否正確，建議找一位專業教練指導，避免受傷。</p>
      <p>想要開始你的健身旅程嗎？歡迎聯繫牧牧教練，為你量身打造訓練計畫！</p>
    `,
  },
  {
    slug: "prenatal-exercise-guide",
    title: "孕期運動安全指南：孕婦健身你需要知道的一切",
    description:
      "懷孕可以運動嗎？當然可以！了解孕期各階段適合的運動方式，安全又有效地維持體能。",
    date: "2026-03-20",
    readTime: "10 min read",
    tags: ["孕婦健身", "孕期運動", "健康生活"],
    headings: [
      { id: "can-exercise", text: "孕期可以運動嗎？", level: 2 },
      { id: "benefits", text: "孕期運動的好處", level: 2 },
      { id: "first-trimester", text: "第一孕期（1-12 週）", level: 2 },
      { id: "second-trimester", text: "第二孕期（13-27 週）", level: 2 },
      { id: "third-trimester", text: "第三孕期（28-40 週）", level: 2 },
      { id: "precautions", text: "注意事項與禁忌", level: 2 },
      { id: "postpartum", text: "產後恢復", level: 2 },
    ],
    cta: {
      headline: "孕期運動不知道怎麼開始？牧牧教練陪你",
      description: "每個孕期階段適合的運動都不一樣。私訊我，根據你的週數和身體狀況，幫你安排安全又有效的孕期訓練。",
      buttonText: "IG 私訊諮詢",
      buttonHref: "https://www.instagram.com/mumu.coach/",
      variant: "instagram",
    },
    content: `
      <p>很多準媽媽在懷孕後都會擔心：「我還能運動嗎？」答案是肯定的！適當的<a href="/blog/pregnancy-weight-training-safety">孕期運動</a>不僅安全，還對媽媽和寶寶都有許多好處。</p>

      <h2 id="can-exercise">孕期可以運動嗎？</h2>
      <p>根據美國婦產科學會（ACOG）的建議，在沒有醫療禁忌的情況下，孕婦應該每週進行至少 150 分鐘的中等強度有氧運動。當然，開始任何運動計畫前，請先諮詢你的產科醫師。</p>

      <h2 id="benefits">孕期運動的好處</h2>
      <ul>
        <li>減緩孕期不適（腰痠、水腫、便秘）</li>
        <li>控制體重增長在健康範圍內</li>
        <li>降低妊娠糖尿病風險</li>
        <li>改善睡眠品質</li>
        <li>為生產儲備體力</li>
        <li>加速<a href="/blog/postpartum-recovery-training-guide">產後恢復</a></li>
      </ul>

      <h2 id="first-trimester">第一孕期（1-12 週）</h2>
      <p>這個階段可能會有孕吐和疲倦，以輕度運動為主：</p>
      <ul>
        <li>散步：每天 20-30 分鐘</li>
        <li>游泳：水的浮力減輕關節負擔</li>
        <li>瑜伽：修復式瑜伽，避免高溫瑜伽</li>
      </ul>

      <h2 id="second-trimester">第二孕期（13-27 週）</h2>
      <p>通常是孕期中最舒適的階段，可以適度增加運動強度：</p>
      <ul>
        <li><a href="/blog/advanced-core-training-guide">肌力訓練</a>：使用適當重量，避免仰臥姿勢</li>
        <li>骨盆底肌運動：為生產做準備</li>
        <li>低衝擊有氧：飛輪、橢圓機</li>
      </ul>

      <h2 id="third-trimester">第三孕期（28-40 週）</h2>
      <p>隨著肚子越來越大，以舒適安全為優先：</p>
      <ul>
        <li>散步與水中運動為主</li>
        <li>呼吸練習與放鬆技巧</li>
        <li>溫和的伸展運動</li>
      </ul>

      <h2 id="precautions">注意事項與禁忌</h2>
      <ol>
        <li>避免仰臥姿勢（16 週後）</li>
        <li>避免跳躍、碰撞性運動</li>
        <li>運動時保持可以正常說話的強度</li>
        <li>充分補充水分</li>
        <li>如有出血、頭暈、胸痛等症狀立即停止</li>
      </ol>

      <h2 id="postpartum">產後恢復</h2>
      <p>產後恢復運動同樣重要。一般自然產後 4-6 週、剖腹產後 6-8 週可以開始輕度運動，但務必先獲得醫師許可。</p>
      <p>牧牧教練擁有豐富的孕婦健身指導經驗，從孕期到產後都能給你最專業的陪伴。歡迎私訊預約諮詢！</p>
    `,
  },
  {
    slug: "nutrition-basics",
    title: "健身飲食基礎：吃對了，訓練才有效",
    description:
      "七分吃三分練？了解蛋白質、碳水、脂肪的角色與大方向飲食建議，讓訓練效果最大化。",
    date: "2026-03-15",
    readTime: "7 min read",
    tags: ["飲食建議", "健身入門", "健康生活"],
    headings: [
      { id: "importance", text: "飲食為什麼重要？", level: 2 },
      { id: "macros", text: "三大營養素", level: 2 },
      { id: "protein", text: "蛋白質", level: 3 },
      { id: "carbs", text: "碳水化合物", level: 3 },
      { id: "fats", text: "脂肪", level: 3 },
      { id: "meal-timing", text: "進食時機", level: 2 },
      { id: "tips", text: "實用飲食建議", level: 2 },
    ],
    cta: {
      headline: "想要專屬你的飲食規劃？",
      description: "每個人的身體狀況和目標不同，飲食建議也不一樣。私訊牧牧教練，幫你量身打造吃得飽又能瘦的飲食方案。",
      buttonText: "LINE 免費諮詢",
      buttonHref: "https://lin.ee/wCbemYz",
      variant: "line",
    },
    content: `
      <p>常聽人說「七分吃三分練」，這句話雖然不完全精確，但足以說明飲食在健身中的重要性。再好的訓練計畫，如果沒有正確的飲食搭配，效果也會大打折扣。</p>

      <h2 id="importance">飲食為什麼重要？</h2>
      <p>食物是身體的燃料。訓練提供刺激，而營養提供修復和生長的原料。無論你的目標是<a href="/blog/muscle-building-diet-guide">增肌</a>、<a href="/blog/fitness-fat-loss-complete-guide">減脂</a>，還是提升體能，飲食都扮演關鍵角色。</p>

      <h2 id="macros">三大營養素</h2>
      <p>了解三大營養素的功能，是建立正確飲食習慣的第一步。</p>

      <h3 id="protein">蛋白質</h3>
      <p>肌肉修復和生長的關鍵。訓練的人需要比一般人更多的蛋白質，可以從肉類、魚類、蛋、豆製品、乳製品等食物中攝取。</p>

      <h3 id="carbs">碳水化合物</h3>
      <p>身體的主要能量來源，尤其在訓練前後特別重要。盡量選擇原型碳水（如糙米、地瓜、燕麥），少吃精製糖和加工食品。</p>

      <h3 id="fats">脂肪</h3>
      <p>荷爾蒙合成和營養吸收所必需，不能完全不吃。盡量選擇好的脂肪來源，如堅果、橄欖油、魚類，減少油炸食物。</p>

      <h2 id="meal-timing">進食時機</h2>
      <p>雖然每天吃的總量最重要，但進食時機也能幫助優化表現。大方向是：訓練前適當補充能量，訓練後記得吃含蛋白質和碳水的食物來幫助恢復。</p>

      <h2 id="tips">實用飲食建議</h2>
      <ol>
        <li>不需要完美，80% 的一致性就夠了</li>
        <li>多喝水，每天至少 2000ml</li>
        <li>別害怕碳水化合物，它是訓練的好朋友</li>
        <li>學會看營養標示</li>
        <li>準備便當，減少外食的不確定性</li>
      </ol>
      <p>飲食調整是一個漸進的過程，不需要一次到位。想要更個人化的飲食建議，歡迎聯繫牧牧教練！</p>
    `,
  },
  {
    slug: "fitness-fat-loss-complete-guide",
    title: "健身減脂完整指南：教練教你科學瘦身不復胖【2026】",
    description:
      "健身教練用最新研究整理的減脂完整指南。涵蓋有氧 vs 重訓比較、減脂飲食大方向、停滯期突破法、一週訓練課表，從科學原理到實戰方法一次掌握。",
    date: "2026-04-03",
    readTime: "25 min read",
    tags: ["健身減脂", "減脂飲食", "訓練技巧", "健康生活"],
    headings: [
      { id: "what-is-fat-loss", text: "什麼是減脂？減脂和減重有什麼不同？", level: 2 },
      { id: "calorie-deficit", text: "減脂的科學原理：熱量赤字怎麼運作？", level: 2 },
      { id: "tdee-bmr", text: "TDEE 與基礎代謝率是什麼？", level: 3 },
      { id: "why-diet-only-fails", text: "為什麼只靠少吃瘦不下來？", level: 3 },
      { id: "cardio-vs-weights", text: "減脂運動怎麼選？有氧 vs 重訓完整比較", level: 2 },
      { id: "cardio-effect", text: "有氧運動的燃脂效果如何？", level: 3 },
      { id: "weight-training", text: "重訓為什麼是減脂神器？", level: 3 },
      { id: "hiit-vs-steady", text: "HIIT vs 一般有氧哪個好？", level: 3 },
      { id: "weekly-plan", text: "一週減脂訓練課表範例", level: 3 },
      { id: "diet-strategy", text: "減脂飲食怎麼吃？不用水煮餐也能瘦", level: 2 },
      { id: "protein-intake", text: "蛋白質攝取量應該是多少？", level: 3 },
      { id: "carbs-not-enemy", text: "碳水化合物不是減脂的敵人", level: 3 },
      { id: "eating-out", text: "外食族的減脂飲食策略", level: 3 },
      { id: "plateau", text: "減脂停滯期怎麼突破？", level: 2 },
      { id: "plateau-science", text: "停滯期的科學原因", level: 3 },
      { id: "plateau-solutions", text: "3 個突破停滯期的實戰方法", level: 3 },
      { id: "sleep-stress", text: "睡眠與壓力如何影響減脂成果？", level: 2 },
      { id: "sleep-deficit", text: "睡眠不足讓你更容易囤脂", level: 3 },
      { id: "cortisol", text: "壓力荷爾蒙（皮質醇）如何影響減脂？", level: 3 },
      { id: "myths", text: "7 個常見減脂迷思破解", level: 2 },
      { id: "maintenance", text: "如何維持減脂成果不復胖？", level: 2 },
      { id: "faq", text: "常見問題 FAQ", level: 2 },
      { id: "conclusion", text: "結論：開始你的科學減脂之路", level: 2 },
    ],
    cta: {
      headline: "準備好開始科學減脂了嗎？",
      description: "看完原理，下一步就是行動。私訊牧牧教練，幫你規劃訓練課表和飲食方向，不用自己摸索。",
      buttonText: "LINE 立即諮詢",
      buttonHref: "https://lin.ee/wCbemYz",
      variant: "line",
    },
    content: `
      <div style="background:#FFF7ED;border-left:4px solid #F97316;padding:16px 20px;margin:20px 0;border-radius:4px;">
        <strong>減脂（Fat Loss）</strong>：透過熱量赤字和訓練，在保住肌肉的前提下把體脂肪降下來。跟單純「減重」不一樣——減脂追求的是身體組成的改變，不是體重計上的數字。
      </div>

      <p>我當教練這幾年，每週都在回答差不多的問題：「教練，我已經少吃很久了，為什麼體重就是不動？」「到底要做有氧還是重訓才能瘦？」</p>
      <p>國健署 2024 年的數據很嚇人——台灣成人過重及肥胖率 51.3%，兩個人裡面就有一個。但更可怕的是，多數人用的方法根本是錯的。</p>
      <p>這篇是多年教學的經驗，加上這兩年最新研究的整理。不需要水煮餐，不需要每天跑一小時。搞懂原理，用對方法就好。</p>

      <h2 id="what-is-fat-loss">什麼是減脂？減脂和減重有什麼不同？</h2>
      <p>很多人搞不清楚這兩件事。減重只看體重計數字，水分掉了、肌肉掉了都算；減脂看的是體脂率，目標是在體重不一定大幅變動的情況下，讓身體線條出來。</p>
      <p>有個女生，三個月體重幾乎沒什麼變，但體脂明顯下降，褲子小了兩號。她朋友用極低熱量節食瘦了不少，但其中一部分是肌肉——代謝率一降，恢復正常吃就全部胖回去。這差別很大。</p>
      <p>減脂的目標有三個：</p>
      <ul>
        <li><strong>把體脂率降下來</strong>：男性大概 15% 以下，女性 22% 以下（因人而異）</li>
        <li><strong>保住肌肉量</strong>：甚至在減脂的同時增加一點肌肉</li>
        <li><strong>養成能維持的習慣</strong>：不是衝刺兩個月然後打回原形</li>
      </ul>
      <p>WHO 數據顯示，全球過重和肥胖人口從 2020 年的 26 億，預計 2035 年會衝到 40 億以上。搞清楚減脂到底在幹嘛，比急著開始重要得多。</p>

      <h2 id="calorie-deficit">減脂的科學原理：熱量赤字怎麼運作？</h2>
      <p>原理其實很單純：吃進去的熱量比消耗的少，身體就會拿脂肪來補差額。聽起來簡單，實際操作有不少眉角。</p>

      <h3 id="tdee-bmr">TDEE 與基礎代謝率是什麼？</h3>
      <p>TDEE（每日總熱量消耗）就是你一整天燒掉的所有熱量，包括基礎代謝、日常活動、食物消化和運動。基礎代謝率（BMR）佔了最大比例，是你躺著不動、光呼吸就消耗的熱量。</p>
      <p>減脂的關鍵是製造溫和的熱量赤字——吃進去的比消耗的少一點，讓身體慢慢用脂肪補差額。赤字不要開太大，速度太快代表你在掉肌肉，得不償失。具體的數字因人而異，建議找專業教練或營養師協助評估。</p>

      <h3 id="why-diet-only-fails">為什麼只靠少吃瘦不下來？</h3>
      <p>光靠餓肚子，短期會瘦，長期一定撞牆。</p>
      <p>撞的第一面牆是代謝適應：身體發現你長期吃不夠，就開始省電——BMR 可能下調 15-25%。同樣的飲食量，本來能瘦，現在瘦不了了。</p>
      <p>第二面牆是掉肌肉。沒有足夠蛋白質和重訓的情況下，<strong>減掉的體重裡大約有 25% 是肌肉</strong>。肌肉少了，代謝更低，更難瘦。</p>
      <p>第三面牆是荷爾蒙亂掉。長期極低熱量會讓瘦素（Leptin）下降、飢餓素（Ghrelin）飆高，你會越來越控制不住食慾。這就是為什麼極端節食永遠不是好策略。</p>

      <h2 id="cardio-vs-weights">減脂運動怎麼選？有氧 vs 重訓完整比較</h2>
      <p>有氧跟重訓都有用，但用法不同。ACSM 2024 年的共識講得很直接：沒有哪種運動在減脂上獨佔鰲頭，但兩個搭起來效果最好。</p>

      <h3 id="cardio-effect">有氧運動的燃脂效果如何？</h3>
      <p>有氧就是在運動當下直接燒熱量，拿來增加赤字很有效。2024 年 <em>JAMA Network Open</em> 一篇大型統合分析，整理了 116 項隨機對照試驗、6,880 個人的數據：<strong>每週做 150 分鐘有氧，體重平均少 2.79 公斤；做到 300 分鐘，少 4.19 公斤</strong>。</p>
      <p>WHO 建議成人每週 150-300 分鐘中等強度有氧，跟這個數據剛好對得上。有氧的好處是門檻低——快走、騎車、游泳、跳繩都行。但停下來之後，額外燃燒的熱量很有限，大概只有運動時消耗的 7%。</p>

      <h3 id="weight-training">重訓為什麼是減脂神器？</h3>
      <p>很多人不知道重訓對減脂有多重要。2025 年 <em>BMJ</em> 的統合分析（25 項 RCT、1,608 人）結論寫得很清楚：<strong>重訓搭配飲食控制，脂肪掉得多、肌肉留得住</strong>。</p>
      <p>同年 <em>Frontiers in Endocrinology</em> 的數據更誇張：<strong>重訓組每減 1 公斤體重，裡面有 1.1 公斤是脂肪</strong>——超過 100% 代表他們同時還<a href="/blog/muscle-building-diet-guide">增肌</a>了。對比純節食組，每減 1 公斤就有 0.25 公斤是肌肉，差很多。</p>
      <p>重訓還有個有氧比不上的東西：<strong>EPOC 效應</strong>。高強度重訓做完，代謝率可以升高 9%，而且持續 72 小時。等於你練完之後三天，身體都在多燒熱量。我帶課時觀察到，學員做完重訓隔天，不用特別少吃，體重通常也會往下掉一點。</p>

      <h3 id="hiit-vs-steady">HIIT vs 一般有氧哪個好？</h3>
      <p>這個吵了很多年。2023 年 <em>Frontiers in Physiology</em> 的統合分析給了答案（29 項 RCT、807 人）：<strong>兩個減重效果差不多，但 HIIT 多減了 0.48% 體脂率</strong>，而且時間效率高很多，20-30 分鐘就夠了。</p>
      <p>怎麼選？看你的狀況：</p>
      <ul>
        <li><strong>剛開始練或關節不好</strong>：先從一般有氧入手，快走、騎車就行，別急著上強度</li>
        <li><strong>有底子但時間有限</strong>：HIIT 每週 2-3 次，配上重訓效果很好</li>
        <li><strong>練一陣子的人</strong>：兩種交替排，避免身體習慣</li>
      </ul>
      <p>一個提醒：HIIT 很操神經系統，一週別超過 3 次，睡眠也要跟上。</p>

      <h3 id="weekly-plan">一週減脂訓練課表範例是什麼樣子？</h3>
      <p>這是我給中階學員排的課表，有氧加起來超過 WHO 建議的 150 分鐘：</p>
      <ul>
        <li><strong>週一</strong>：上肢重訓（胸、肩、三頭）45-60 分鐘</li>
        <li><strong>週二</strong>：有氧訓練（快走或騎單車）40 分鐘 + 核心 15 分鐘</li>
        <li><strong>週三</strong>：下肢重訓（<a href="/blog/squat-correct-form-complete-guide">深蹲</a>、<a href="/blog/deadlift-complete-guide">硬舉</a>、腿推）45-60 分鐘</li>
        <li><strong>週四</strong>：恢復日——散步 30 分鐘、拉筋或瑜伽</li>
        <li><strong>週五</strong>：全身重訓或 HIIT（20 分鐘循環訓練）</li>
        <li><strong>週六</strong>：有氧訓練 45-60 分鐘（爬山、游泳、騎車）</li>
        <li><strong>週日</strong>：休息</li>
      </ul>
      <p>一週有氧大約 150-175 分鐘，重訓 3 次。新手可以先從每週 2 次重訓 + 2 次有氧開始，慢慢加。</p>

      <h2 id="diet-strategy">減脂飲食怎麼吃？不用水煮餐也能瘦</h2>
      <p>減脂飲食重點不是吃得多可憐，是吃得夠聰明。在赤字的前提下，你吃什麼、怎麼分配，決定掉的是脂肪還是肌肉。</p>

      <h3 id="protein-intake">蛋白質攝取量應該是多少？</h3>
      <p>蛋白質是減脂期最重��的東西，沒有之一。為什麼？消化蛋白質本身就會燒掉比較多熱量，蛋白質也是肌肉修復的原料，吃不夠就會掉肌肉。還有一點——高蛋白飲食很容易有飽足感，自然而然就吃得少。</p>
      <p>減脂期的蛋白質需求比平常更高，具體要吃多少因人而異，建議諮詢營養師或教練。大方向是：每餐都要有足量的蛋白質來源，例如肉類、魚類、蛋、豆製品、乳製品。</p>

      <h3 id="carbs-not-enemy">碳水化合物不是減脂的敵人</h3>
      <p>碳水在減脂圈被黑很久了，但這真的是誤解。碳水是高強度訓練的燃料，砍太多會導致訓練品質下降，反而燒不了多少熱量。</p>
      <p>真正要避開的是精製碳水：白糖、含糖飲料、白麵包、餅乾。這些東西血糖指數高，吃完血糖衝上去又掉下來，只會更餓。</p>
      <p>地瓜、燕麥、糙米、全麥麵包、蔬菜、水果——這些才是好的碳水來源，纖維多、消化慢、飽足感持久。能長期維持減脂成果的人，幾乎沒有人是靠完全斷碳的，因為根本撐不久。</p>

      <h3 id="eating-out">外食族的減脂飲食策略有哪些？</h3>
      <p>台灣外食族超多。每天水煮餐？不現實。大方向很簡單：</p>
      <ul>
        <li><strong>蛋白質優先</strong>：每餐先確保有足夠的蛋白質來源</li>
        <li><strong>多吃蔬���</strong>：蔬菜量盡量多，增加飽足感</li>
        <li><strong>減少油炸和加工食品</strong>：選蒸、滷、燙的烹調方式</li>
        <li><strong>含糖飲料換掉</strong>：改喝無糖茶、黑咖啡、白開水</li>
        <li><strong>吃的順序</strong>：��菜、再蛋白質、最後澱粉，血糖比較穩，也比較不會吃太多</li>
      </ul>

      <h2 id="plateau">減脂停滯期怎麼突破？</h2>
      <p>減脂開始後 4-8 週，幾乎每個人都會遇到停滯期。體重不動了，但你明明還在照計畫執行。這不是你偷懶，是身體的生理反應。</p>

      <h3 id="plateau-science">停滯期的科學原因是什麼？</h3>
      <p>主因是代謝適應。你長期吃得少，身體就開始省電：BMR 降低、日常小動作變少（NEAT 下降）、腸道吸收效率反而提高。三個一起來，原本的赤字就不夠了。</p>
      <p>體重本身也是因素——80 公斤的人跑 30 分鐘燒的熱量，比瘦到 68 公斤之後跑同樣 30 分鐘要多。所以 TDEE 得定期重算。</p>

      <h3 id="plateau-solutions">3 個突破停滯期的實戰方法</h3>
      <p><strong>重新評估飲食</strong>。很多時候停滯只是因為你瘦了，消耗變少了，但吃的量沒跟著調整。讓教練或營養師幫你重新評估。</p>
      <p><strong>安排 Diet Break</strong>。連續減脂一段時間後，花一到兩週恢復正常飲食量，讓身體重新校正。我的經驗是，學員在這段時間「正常吃」之後，心態也會好很多，回到減脂時動力反而更強。</p>
      <p><strong>換訓練方式</strong>。同一份課表做了三個月，身體早就適應了。換個方向——加重量、改組數次數、試沒做過的動作。給身體新的刺激，它才會有反應。</p>

      <h2 id="sleep-stress">睡眠與壓力如何影響你的減脂成果？</h2>
      <p>飲食運動之外，睡眠跟壓力管理才是很多人卡關的真正原因。我觀察到，同樣課表和飲食，長期睡不夠或壓力很大的學員，減脂速度比睡好的人慢 30-50%。這不是感覺，有很扎實的生理機制。</p>

      <h3 id="sleep-deficit">睡眠不足讓你更容易囤脂</h3>
      <p>每晚睡不到 7 小時，<strong>飢餓素會升高 15-28%、瘦素下降 15-18%</strong>。白話講就是你會更餓，而且特別想吃甜的、油的。有研究算過，睡不夠的人平均一天多吃 300-500 大卡。</p>
      <p>睡眠也是肌肉修復的關鍵時段。深度睡眠時，生長激素分泌量佔全天的 70-80%，這個激素對保肌肉、分解脂肪都很重要。睡不夠等於在跟自己的訓練成效打架。</p>
      <p>怎麼做：每晚 7-9 小時、固定時間上床起床、睡前一小時別看螢幕、房間保持暗和涼（18-20°C）。</p>

      <h3 id="cortisol">壓力荷爾蒙（皮質醇）如何影響減脂？</h3>
      <p>長期壓力大會讓皮質醇一直偏高。高皮質醇的身體會傾向囤脂肪（尤其是肚子）、分解肌肉、壓住生長激素分泌。<strong>高皮質醇也跟情緒性暴食高度相關</strong>——壓力大的時候不自覺就吃過頭，很多人都有這個經驗。</p>
      <p>降皮質醇的幾個方法：</p>
      <ul>
        <li>別練太多。一週超過 6 次、每次超過 90 分鐘，皮質醇反而慢性升高</li>
        <li>每天花 10-15 分鐘做冥想或腹式呼吸，真的有效</li>
        <li>練完記得吃蛋白質和碳水，有助於壓低皮質醇峰值</li>
        <li>跟朋友聚聚、做點喜歡的事，對荷爾蒙調節幫助不小</li>
      </ul>

      <h2 id="myths">7 個常見減脂迷思破解</h2>
      <p>網路上關於減脂的錯誤資訊太多了。這幾個是我最常被問到的。</p>
      <ul>
        <li><strong>局部瘦身可以做到？</strong> 不行。脂肪消耗是全身性的，基因決定你先瘦哪裡。狂做捲腹不會讓你瘦肚子，只會讓腹肌變強壯——上面那層脂肪還在。</li>
        <li><strong>流汗越多燃脂越多？</strong> 流汗是散熱，跟燃脂無關。穿塑身衣或去蒸氣室掉的是水分，喝個水就回來了。</li>
        <li><strong>不吃晚餐可以加速減脂？</strong> 重點是一天總熱量，不是哪一餐不吃。不吃晚餐結果睡前餓到不行，影響睡眠品質，反而更糟。</li>
        <li><strong>少量多餐可以提升代謝？</strong> 已經被推翻了。總熱量一樣的話，一天吃 3 餐跟 6 餐，代謝率沒有顯著差異。怎麼分比較方便就怎麼吃。</li>
        <li><strong>只做有氧會掉肌肉？</strong> 如果蛋白質不夠又沒重訓，確實會。所以減脂計畫裡重訓不是加分項，是必要的。</li>
        <li><strong>斷碳是最有效的減脂方式？</strong> 生酮飲食前期掉很快，但大部分是肝醣和水分。長期來看，同樣赤字的均衡飲食效果差不多，而且斷碳社交上很難維持。</li>
        <li><strong>體重機數字就是進步的指標？</strong> 體重一天之內可以波動 1-3 公斤，看了只會焦慮。真正該看的是體脂率、腰圍、訓練重量有沒有進步、衣服有沒有變鬆。</li>
      </ul>

      <h2 id="maintenance">如何維持減脂成果不復胖？</h2>
      <p>瘦下來是一回事，維持住是另一回事。數據很殘酷：多數減重成功的人在 5 年內會胖回 80% 以上。</p>
      <p>ACSM 的建議是，維持成果要<strong>每週至少 250 分鐘中等強度運動</strong>——比減重階段的 150 分鐘還多。聽起來不太公平，但事實就是：維持比達標更費力。所以減脂的目標不該是「瘦完就恢復原本的生活」，而是讓比較健康的生活方式變成日常。</p>
      <p>幾個實際做法：</p>
      <ul>
        <li><strong>設一條警戒線</strong>：目標體重 + 2-3 公斤。一超過就回到赤字模式，別等到胖回 5 公斤才急</li>
        <li><strong>固定量體重</strong>：每週 2-3 天早上起床後量，取平均值。別被單日數字影響心情</li>
        <li><strong>重訓不能停</strong>：每週至少 2 次，這是維持代謝率的底線</li>
        <li><strong>彈性但有底線</strong>：偶爾吃大餐沒問題，隔天少吃一點或多動一下就好。別讓例外變常態</li>
      </ul>

      <h2 id="faq">常見問題 FAQ</h2>

      <h3>減脂一定要做有氧嗎？</h3>
      <p>不一定。飲食控制製造赤字、重訓保肌肉，一樣能減脂。但有氧對心臟好，建議還是排進去，不要只為了燃脂才做。</p>

      <h3>減脂期可以吃澱粉嗎？</h3>
      <p>可以，建議要吃。碳水��高強度訓練的燃料，不吃會影響訓練品質。重點是選好的原型碳水（地瓜、燕麥、���米），控制總量就好。</p>

      <h3>一週可以安全減掉多少脂肪？</h3>
      <p>速度不要太快，穩穩來比較好。減太快代表你��掉肌肉，代謝會跟著降低。具體速度因人而異，建議和教練或營養師討論適合你的步調。</p>

      <h3>減脂期力量會下降嗎？</h3>
      <p>赤字比較大的時候，前幾週力量可能會微掉。但只要蛋白質攝取充足、熱量赤字不要開太大、持續重訓，大部分人的力量都能維持，有些人甚至還會慢慢進步。</p>

      <h3>局部瘦身真的可行嗎？</h3>
      <p>不行。科學早就說清楚了，脂肪消耗是全身性的。你可以練特定部位讓肌肉更大、看起來更緊實，但那個部位的脂肪不會因為你多練就優先消失。</p>

      <h3>減脂需要完全戒酒嗎？</h3>
      <p>不用完全戒，但得減很多。酒精每公克 7 大卡，營養價值是零。更麻煩的是，喝酒後身體會優先代謝酒精，<strong>脂肪氧化被抑制 30-36%</strong>，等於脂肪燃燒直接暫停好幾個小時。建議減脂期每週喝不超過 1-2 次，每次 1-2 杯。</p>

      <h3>在家不去健身房可以減脂嗎？</h3>
      <p>當然可以。伏地挺身、深蹲、弓箭步、棒式、波比跳，配上飲食控制就有效果。想再進一步，買一對可調啞鈴或彈力帶就夠了。台灣健身中心五年成長率 11.4%，去健身房的人越來越多，但這不是減脂的必要條件。</p>

      <h3>減脂期需要吃蛋白粉嗎？</h3>
      <p>不是必要的。如果正餐能攝取足夠的蛋白質，就不需要額外補充。但外食族、素食者、練完不方便馬上吃東西的人，蛋白粉是補蛋白質缺口最方便的方式之一。</p>

      <h2 id="conclusion">結論：開始你的科學減脂之路</h2>
      <p>這篇講了很多，濃縮成五句話：</p>
      <ul>
        <li>製造溫和的熱量赤字，穩穩來</li>
        <li>每週重訓至少 2-3 次，肌肉留住代謝才不會掉</li>
        <li>蛋白質攝取要充足，每餐都要有</li>
        <li>睡好 7-9 小時</li>
        <li>做得到 80% 就贏了，不需要 100%</li>
      </ul>
      <p>能成功維持的人有個共同點：他們不是靠意志力硬撐，而是真的理解為什麼要這樣做，然後把它變成習慣。</p>
      <p>不用想太多。今天就選一件事開始：多吃一份蛋白質、去快走 30 分鐘、或是今晚早點睡。</p>
    `,
  },
];

const posts = allRawPosts.filter((p) => !excludeSlugs.has(p.slug));

export function getAllPosts(): BlogPost[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export const POSTS_PER_PAGE = 12;

export function getPaginatedPosts(page: number): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
} {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  return {
    posts: allPosts.slice(start, start + POSTS_PER_PAGE),
    totalPages,
    currentPage: page,
  };
}
