import type { BlogPost } from "./blog";

export const batchA: BlogPost[] = [
  {
    slug: "deadlift-complete-guide",
    title: "硬舉完整教學：正確動作、常見錯誤與訓練菜單【2026】",
    description:
      "ACE 認證教練詳解硬舉正確姿勢、五大常見錯誤修正、傳統硬舉與羅馬尼亞硬舉差異，附 8 週漸進式訓練菜單，從新手到進階一篇搞定。",
    date: "2026-04-03",
    readTime: "12 min read",
    tags: ["硬舉", "硬舉教學", "傳統硬舉", "羅馬尼亞硬舉", "重量訓練", "背部訓練", "健力"],
    headings: [
      { id: "why-deadlift", text: "為什麼硬舉是訓練之王？", level: 2 },
      { id: "muscles-worked", text: "硬舉練到哪些肌群？", level: 2 },
      { id: "conventional-setup", text: "傳統硬舉：五步驟起槓", level: 2 },
      { id: "step-1-stance", text: "第一步：站距與腳掌位置", level: 3 },
      { id: "step-2-grip", text: "第二步：握槓方式", level: 3 },
      { id: "step-3-hip-hinge", text: "第三步：髖絞鏈啟動", level: 3 },
      { id: "step-4-brace", text: "第四步：核心繃緊與呼吸", level: 3 },
      { id: "step-5-pull", text: "第五步：拉起與鎖死", level: 3 },
      { id: "common-mistakes", text: "五大常見錯誤與修正", level: 2 },
      { id: "mistake-round-back", text: "圓背拉起", level: 3 },
      { id: "mistake-bar-drift", text: "槓鈴遠離身體", level: 3 },
      { id: "mistake-squat-deadlift", text: "把硬舉做成深蹲", level: 3 },
      { id: "mistake-hyperextend", text: "鎖死時過度後仰", level: 3 },
      { id: "mistake-jerk", text: "用手臂猛拉", level: 3 },
      { id: "deadlift-variations", text: "硬舉變化式比較", level: 2 },
      { id: "sumo-deadlift", text: "相撲硬舉", level: 3 },
      { id: "romanian-deadlift", text: "羅馬尼亞硬舉（RDL）", level: 3 },
      { id: "trap-bar-deadlift", text: "六角槓硬舉", level: 3 },
      { id: "training-program", text: "8 週硬舉訓練菜單", level: 2 },
      { id: "warm-up-routine", text: "硬舉前的暖身流程", level: 2 },
      { id: "faq", text: "學員常問的問題", level: 2 },
      { id: "further-reading", text: "延伸閱讀", level: 2 },
    ],
    cta: {
      headline: "想把硬舉練好但怕受傷？",
      description:
        "硬舉是最需要專人指導的動作之一。牧牧教練提供一對一硬舉技術矯正，用影像分析幫你找出問題，快速突破重量瓶頸。",
      buttonText: "LINE 免費諮詢",
      buttonHref: "https://lin.ee/wCbemYz",
      variant: "line",
    },
    content: `
      <p>我在健身房最常被問的問題大概就是：「教練，硬舉到底要怎麼拉才不會傷腰？」老實說，硬舉確實是所有大重量動作裡最容易做錯的一個，但它也是回報最高的動作——沒有之一。</p>
      <p>一個動作就能練到全身超過 70% 的肌群，不管你的目標是增肌、減脂、還是提升運動表現，硬舉都應該出現在你的課表裡。這篇文章我會把硬舉拆解成五個步驟教你，再幫你避開最常犯的錯誤。</p>

      <h2 id="why-deadlift">為什麼硬舉是訓練之王？</h2>
      <p>你去問任何一個教練「如果只能選一個動作做一輩子」，有八成的人會選硬舉。原因很簡單：</p>
      <ul>
        <li><strong>全身性複合動作</strong>：同時訓練臀大肌、腿後肌群、豎脊肌、核心、前臂、斜方肌</li>
        <li><strong>功能性極高</strong>：搬東西、抱小孩、撿地上的東西——這些日常動作的模式就是硬舉</li>
        <li><strong>荷爾蒙反應強烈</strong>：根據 NSCA 的研究，大重量多關節動作能有效刺激睪固酮與生長激素分泌</li>
        <li><strong>骨密度提升</strong>：2020 年發表於《Journal of Bone and Mineral Research》的統合分析指出，抗阻力訓練對骨密度有顯著正面效果</li>
      </ul>

      <h2 id="muscles-worked">硬舉練到哪些肌群？</h2>
      <p>很多人以為硬舉只練背，這是天大的誤解。硬舉是髖關節主導的動作，主要發力的其實是下半身。</p>
      <table>
        <thead>
          <tr><th>角色</th><th>肌群</th><th>功能</th></tr>
        </thead>
        <tbody>
          <tr><td>主動肌</td><td>臀大肌、腿後肌群</td><td>髖伸展（把身體拉直）</td></tr>
          <tr><td>主動肌</td><td>股四頭肌</td><td>膝伸展（離地階段）</td></tr>
          <tr><td>穩定肌</td><td>豎脊肌群</td><td>維持脊椎中立</td></tr>
          <tr><td>穩定肌</td><td>核心肌群</td><td>腹內壓穩定軀幹</td></tr>
          <tr><td>協同肌</td><td>斜方肌、菱形肌</td><td>穩定肩胛</td></tr>
          <tr><td>協同肌</td><td>前臂屈肌</td><td>握住槓鈴</td></tr>
        </tbody>
      </table>

      <h2 id="conventional-setup">傳統硬舉：五步驟起槓</h2>
      <p>傳統硬舉的技術看起來簡單——就是把槓從地上拉起來嘛。但越簡單的動作，細節越多。我把它拆成五個步驟，照著做就對了。</p>

      <h3 id="step-1-stance">第一步：站距與腳掌位置</h3>
      <p>雙腳站大約與髖同寬（不是肩寬，比肩窄一點點），腳尖微微外轉 15-30 度。槓鈴要放在腳掌中心正上方，大概距離脛骨 2-3 公分。一個簡單的檢查法：從上往下看，槓鈴應該切過你鞋帶的位置。</p>

      <h3 id="step-2-grip">第二步：握槓方式</h3>
      <p>雙手握在小腿外側，握距大約比肩略寬。新手建議用<strong>正反握</strong>（一手正握一手反握）來增加握力穩定性。如果你追求對稱發展，可以每組換手。進階者可以練<strong>勾握（hook grip）</strong>，拇指會比較痛，但兩邊出力更均勻。</p>

      <h3 id="step-3-hip-hinge">第三步：髖絞鏈啟動</h3>
      <p>這是整個硬舉最關鍵的環節。你要做的不是「蹲下去拿槓」，而是「屁股往後推，讓手自然碰到槓」。想像你的身體是一把折疊刀，髖關節是折疊的軸心。膝蓋微彎就好，不要蹲太深。正確的髖絞鏈動作，你會感覺到腿後側有明顯的拉伸感。</p>

      <h3 id="step-4-brace">第四步：核心繃緊與呼吸</h3>
      <p>握好槓之後，先做一個大口吸氣，把空氣吸到肚子裡（不是胸腔），然後像要被人揍肚子一樣，把核心整圈繃緊。這叫做 <strong>Valsalva 呼吸法</strong>，能幫你建立腹內壓，保護脊椎。記住：拉起之前，先收背——想像你的腋下各夾一顆橘子，把胸口挺出來，肩胛骨收緊。</p>

      <h3 id="step-5-pull">第五步：拉起與鎖死</h3>
      <p>起槓不是「用手拉起來」，而是「用腳把地板推開」。想像你的腳在踩碎地板，同時臀部往前推。槓鈴要沿著身體向上走，全程貼著小腿和大腿。到頂端時，臀部用力夾緊，肩膀往後收——但不要過度後仰，身體打直就好。放下的時候，先推屁股，再彎膝蓋，沿著原路徑下去。</p>

      <h2 id="common-mistakes">五大常見錯誤與修正</h2>
      <p>我教過上百個學員硬舉，這五個錯誤幾乎人人都犯過，不用覺得丟臉。</p>

      <h3 id="mistake-round-back">圓背拉起</h3>
      <p>這是最危險的錯誤。脊椎在彎曲的狀態下承受大重量，椎間盤壓力會暴增。修正方式：拉起前先「收背」，想像有人在你背上放一根棍子，從頭到尾股要一直碰到那根棍子。如果你怎麼做都會圓背，代表重量太重了，先降載。</p>

      <h3 id="mistake-bar-drift">槓鈴遠離身體</h3>
      <p>槓鈴一旦飄離身體，你的下背就要花更多力氣來穩定，腰痠就是這樣來的。修正方式：想像你在「刮腿毛」，槓鈴全程貼著身體走。穿長褲或護膝套可以減少摩擦。</p>

      <h3 id="mistake-squat-deadlift">把硬舉做成深蹲</h3>
      <p>臀部蹲太低、膝蓋往前推太多——這不是硬舉，是深蹲拿著槓。硬舉是<strong>髖主導</strong>，不是膝主導。正確的起始位置，肩膀應該在槓鈴正上方或略前方，髖部高於膝蓋。</p>

      <h3 id="mistake-hyperextend">鎖死時過度後仰</h3>
      <p>很多人拉到頂端時會刻意把腰往後彎，覺得這樣才算完成動作。其實這樣做對腰椎壓力很大。正確的鎖死：臀部夾緊、身體打直就夠了，像立正站好一樣。</p>

      <h3 id="mistake-jerk">用手臂猛拉</h3>
      <p>起槓瞬間用手臂猛扯，二頭肌肌腱拉傷就是這樣來的。硬舉時手臂只是「繩子」，負責掛住槓鈴，真正發力的是腿和臀。起槓前先把手臂拉直、消除槓鈴與槓片之間的間隙（這叫 take the slack out），然後才開始用腳推地。</p>

      <h2 id="deadlift-variations">硬舉變化式比較</h2>
      <p>不同的硬舉變化式，針對不同的需求。你不一定要全部都練，但了解差異可以幫你選出最適合自己的版本。</p>

      <h3 id="sumo-deadlift">相撲硬舉</h3>
      <p>站距比肩寬很多，手在雙腿之間握槓。這個變化式對<strong>髖關節活動度</strong>要求較高，但對下背的壓力比傳統硬舉小。如果你身體比例是長軀幹短手臂，相撲硬舉可能更適合你。股四頭肌和內收肌群會吃到更多刺激。</p>

      <h3 id="romanian-deadlift">羅馬尼亞硬舉（RDL）</h3>
      <p>從站姿開始，槓不落地，屁股往後推到感覺腿後拉緊，再站起來。這是練腿後肌群和臀肌最好的動作之一，離心控制的成分很重，非常適合當作硬舉的輔助訓練。建議用比傳統硬舉輕 30-40% 的重量操作。</p>

      <h3 id="trap-bar-deadlift">六角槓硬舉</h3>
      <p>站在六角槓中間，握把在身體兩側。這個版本對技術要求最低，脊椎壓力也最小，很適合新手或有下背問題的人。根據 2011 年《Journal of Strength and Conditioning Research》的研究，六角槓硬舉產生的峰值力量和峰值功率都高於傳統硬舉。</p>

      <h2 id="training-program">8 週硬舉訓練菜單</h2>
      <p>這份菜單適合已經掌握基本動作的訓練者，採用線性漸進的方式。1RM 是指你一次能拉起的最大重量。</p>
      <table>
        <thead>
          <tr><th>週次</th><th>主項（傳統硬舉）</th><th>輔助項</th><th>備註</th></tr>
        </thead>
        <tbody>
          <tr><td>Week 1-2</td><td>4 組 x 6 下 @ 65% 1RM</td><td>RDL 3x10</td><td>建立動作模式</td></tr>
          <tr><td>Week 3-4</td><td>4 組 x 5 下 @ 72.5% 1RM</td><td>RDL 3x8</td><td>漸進加重</td></tr>
          <tr><td>Week 5-6</td><td>5 組 x 4 下 @ 80% 1RM</td><td>暫停硬舉 3x4</td><td>強調離地力量</td></tr>
          <tr><td>Week 7</td><td>5 組 x 3 下 @ 85% 1RM</td><td>寬握硬舉 3x5</td><td>接近峰值</td></tr>
          <tr><td>Week 8</td><td>測試新 1RM 或 3RM</td><td>—</td><td>減量測試週</td></tr>
        </tbody>
      </table>
      <p><strong>訓練頻率</strong>：每週硬舉 1-2 次，至少間隔 72 小時。初學者一週一次就夠了。</p>

      <h2 id="warm-up-routine">硬舉前的暖身流程</h2>
      <p>不要走進健身房就直接上重量。我通常會帶學員做這套暖身，大概 10 分鐘：</p>
      <ul>
        <li><strong>泡棉滾筒放鬆</strong>：臀部、腿後肌群、上背各 30 秒</li>
        <li><strong>90/90 髖關節活動</strong>：每邊 8 下</li>
        <li><strong>貓牛式</strong>：10 下，喚醒脊椎活動度</li>
        <li><strong>徒手髖絞鏈</strong>：背對牆壁站一步，屁股往後碰牆，做 10 下</li>
        <li><strong>彈力帶啟動</strong>：怪獸走路（Monster Walk）每邊 10 步</li>
        <li><strong>漸進加重</strong>：空槓 x 10 → 40% x 5 → 60% x 3 → 工作重量</li>
      </ul>

      <h2 id="faq">學員常問的問題</h2>
      <p><strong>Q：硬舉隔天腰很痠，是不是姿勢錯了？</strong></p>
      <p>不一定。豎脊肌本來就是硬舉的穩定肌群，輕微痠痛是正常的。但如果是「痛」而不是「痠」，或者集中在脊椎某個點上，那就要檢查動作了。建議用手機錄側面角度，自己看看下背有沒有彎曲。</p>
      <p><strong>Q：腰不好可以硬舉嗎？</strong></p>
      <p>很多人因為腰痛就不敢硬舉，但其實正確的硬舉反而能<strong>強化下背的穩定性</strong>。關鍵是從輕重量開始，確保動作品質。如果有椎間盤問題，建議先諮詢物理治療師，並考慮用六角槓代替直槓。</p>
      <p><strong>Q：要用護腰帶嗎？</strong></p>
      <p>護腰帶不是拿來「保護腰」的，它的功能是讓你的腹內壓更有效率。我建議在重量超過 80% 1RM 時再使用，平常的訓練盡量靠自己的核心穩定。長期依賴護腰帶反而會讓核心變弱。</p>
      <p><strong>Q：硬舉完臀部沒感覺，都是腰在出力？</strong></p>
      <p>這代表你的臀部啟動有問題。在硬舉之前先做 2-3 組的臀橋或彈力帶蚌殼式，讓臀肌「醒過來」再開始拉。另外注意鎖死的時候要主動用力夾臀，不是靠腰把身體往後推。</p>

      <h2 id="further-reading">延伸閱讀</h2>
      <ul>
        <li><a href="/blog/squat-correct-form-complete-guide">深蹲做對了嗎？教練的正確姿勢完整教學</a></li>
        <li><a href="/blog/bench-press-form-guide">臥推正確姿勢全解析</a></li>
        <li><a href="/blog/powerlifting-beginner-guide">健力三項入門指南</a></li>
      </ul>
    `,
  },
  {
    slug: "bench-press-form-guide",
    title: "臥推正確姿勢全解析：5 個常見錯誤讓你白練還受傷【教練實戰經驗】",
    description:
      "教練親自示範臥推正確姿勢：起槓設定、肩胛收緊、槓鈴路徑、呼吸節奏全拆解。附 5 大常見錯誤修正，告別肩膀痛、胸沒感覺的困擾。",
    date: "2026-04-03",
    readTime: "11 min read",
    tags: ["臥推", "臥推教學", "臥推姿勢", "胸肌訓練", "肩膀痛", "重量訓練", "健力"],
    headings: [
      { id: "bench-press-intro", text: "臥推到底難在哪？", level: 2 },
      { id: "setup-checklist", text: "上推架前的設定清單", level: 2 },
      { id: "foot-position", text: "腳的位置：地基決定一切", level: 3 },
      { id: "back-arch", text: "背部拱起：不是作弊，是保護肩膀", level: 3 },
      { id: "shoulder-blade", text: "肩胛骨收緊下壓", level: 3 },
      { id: "grip-width", text: "握距怎麼選", level: 3 },
      { id: "bar-path", text: "槓鈴路徑不是直線", level: 2 },
      { id: "breathing-technique", text: "臥推的呼吸節奏", level: 2 },
      { id: "five-mistakes", text: "5 個最常見的臥推錯誤", level: 2 },
      { id: "mistake-flat-back", text: "平躺推：肩膀的噩夢", level: 3 },
      { id: "mistake-elbow-flare", text: "手肘外開 90 度", level: 3 },
      { id: "mistake-bounce", text: "彈胸借力", level: 3 },
      { id: "mistake-butt-off", text: "屁股離開椅面", level: 3 },
      { id: "mistake-uneven", text: "左右不平衡", level: 3 },
      { id: "bench-variations", text: "臥推變化式與適用時機", level: 2 },
      { id: "bench-program", text: "臥推進步的訓練安排", level: 2 },
      { id: "shoulder-pain-fix", text: "臥推肩膀痛怎麼辦？", level: 2 },
      { id: "further-reading", text: "延伸閱讀", level: 2 },
    ],
    cta: {
      headline: "臥推卡關或肩膀不舒服？",
      description:
        "臥推的問題很難靠文字完全解決。牧牧教練擅長用動作評估找出你的弱點，搭配運動按摩放鬆緊繃肌群，讓你推得更重也更安全。",
      buttonText: "LINE 免費諮詢",
      buttonHref: "https://lin.ee/wCbemYz",
      variant: "line",
    },
    content: `
      <p>你有沒有這種經驗：臥推做完，肩膀痛得要命，胸肌卻一點感覺都沒有？或是重量卡在某個數字，怎麼練都上不去？我帶學員臥推的時候，十個裡面有九個的設定是需要調整的。問題不在你不夠努力，而在一些很基礎的東西沒做對。</p>

      <h2 id="bench-press-intro">臥推到底難在哪？</h2>
      <p>臥推看起來就是躺著把槓推上去，但它其實是一個<strong>全身性的動作</strong>。你的腳要踩穩、臀部要用力、核心要繃緊、肩胛要鎖好——這些東西只要有一個環節鬆掉，不是受傷就是卡關。</p>
      <p>根據 NSCA 的教學影片系列「Foundations of Coaching Lifts」，臥推最常出錯的環節就在起始設定。設定做好了，後面的動作自然流暢；設定沒做好，後面怎麼補都來不及。</p>

      <h2 id="setup-checklist">上推架前的設定清單</h2>
      <p>我每次帶學員臥推，光設定就會花 3-5 分鐘。別嫌煩，這些時間花下去，你的臥推會脫胎換骨。</p>

      <h3 id="foot-position">腳的位置：地基決定一切</h3>
      <p>雙腳要踩實地面，腳掌完全貼地（健力規則要求腳掌著地）。腳的位置有兩種流派：一種是腳往後收到臀部下方，這樣背弓會比較大；另一種是腳放比較前面，穩定性較高。新手我建議先用後者，等熟悉了再嘗試收腳。重點是<strong>雙腳要有往外推地板的張力</strong>，不是只是放在地上。</p>

      <h3 id="back-arch">背部拱起：不是作弊，是保護肩膀</h3>
      <p>很多人看到健力選手的大背弓就說「這是作弊」。錯了。背弓有兩個重要功能：</p>
      <ul>
        <li><strong>縮短行程</strong>：沒錯，但這是合法的技術，讓你能推更重</li>
        <li><strong>保護肩關節</strong>：當你的胸椎有適度的伸展，肩膀會處在一個更安全的位置，肩峰夾擠的風險大幅降低</li>
      </ul>
      <p>你不需要做到競技選手那種誇張的背弓，但至少要有一個自然的胸椎伸展。具體做法：先躺下來，雙腳踩地把臀部頂起來，趁這個時候把肩胛骨往後下方收緊，然後再把屁股放下來——背弓就自然出來了。</p>

      <h3 id="shoulder-blade">肩胛骨收緊下壓</h3>
      <p>這是臥推設定裡最重要的一步。想像你要用肩胛骨夾住一支筆。肩胛骨要<strong>後收 + 下壓</strong>，整個推的過程都不能鬆掉。一旦肩胛鬆了，肩膀就會往前滾，壓力全部跑到前三角肌和肩關節上，肩膀痛就是這樣來的。</p>
      <p>BarBend 的技術分析指出，肩胛骨沒有穩定是臥推最常見的錯誤之一，也是導致肩膀傷害的首要原因。</p>

      <h3 id="grip-width">握距怎麼選</h3>
      <p>標準握距：當槓鈴下放到胸口時，你的前臂應該是垂直地面的。這個位置因人而異，跟你的肩寬、手長有關。大部分人的握距會在肩寬的 1.5 倍左右。</p>
      <p>太窄的握距會讓三頭肌負擔過重，太寬則增加肩膀壓力。如果你不確定，就從食指對齊槓鈴刻度的 81 公分線開始測試。</p>

      <h2 id="bar-path">槓鈴路徑不是直線</h2>
      <p>這一點很多人不知道：<strong>正確的臥推槓鈴路徑是一條斜線，不是直上直下。</strong></p>
      <p>槓鈴下放時碰到大約是乳頭到胸骨劍突的位置（根據你背弓大小和手臂長度會有差異），推起來時要微微往頭的方向走，最終停在肩膀正上方。這條路徑像一個很平的 J 字型。</p>
      <p>為什麼不是直線？因為肩關節的結構決定了在鎖死位置時，槓鈴要在肩膀正上方才最穩定。如果你強迫直線推，肩膀要承受額外的剪力。</p>

      <h2 id="breathing-technique">臥推的呼吸節奏</h2>
      <p>跟硬舉一樣，臥推也要用 <strong>Valsalva 呼吸法</strong>：</p>
      <ul>
        <li>起槓前：深吸一口氣到腹腔</li>
        <li>下放過程：憋住氣，核心保持繃緊</li>
        <li>推起通過最困難的點之後：慢慢吐氣</li>
        <li>回到頂端：重新吸氣，準備下一下</li>
      </ul>
      <p>重量越重，呼吸管理越重要。不要在槓鈴還在胸口的時候換氣，那是最危險的位置。</p>

      <h2 id="five-mistakes">5 個最常見的臥推錯誤</h2>
      <p>我在健身房幫人看動作的時候，這五個錯誤出現頻率最高。</p>

      <h3 id="mistake-flat-back">平躺推：肩膀的噩夢</h3>
      <p>完全平躺在椅子上，沒有任何背弓，肩胛骨也沒收——這是多數人學臥推的方式，也是最傷肩膀的方式。當你平躺時，肩關節前側的空間被壓縮，肩峰下的組織容易被反覆夾擠。修正方式就是前面說的設定流程，把背弓做出來。</p>

      <h3 id="mistake-elbow-flare">手肘外開 90 度</h3>
      <p>手肘完全打開跟肩膀成 90 度——這個姿勢看起來很「標準」，但對肩關節的壓力極大。理想的手肘角度大約在 45-75 度之間，取決於你的握距和肩膀狀況。一個好的視覺提示：從上往下看，你的手臂應該像箭頭「→」，不是一字「—」。</p>

      <h3 id="mistake-bounce">彈胸借力</h3>
      <p>讓槓鈴砸到胸口再彈起來——不只作弊，還可能傷到肋骨和胸骨。正確的做法是槓鈴<strong>輕碰胸口</strong>或在胸口上方暫停一秒（稱為暫停臥推，pause bench）。健力比賽規則要求槓鈴在胸口要有明顯靜止，這就是為了確保動作品質。</p>

      <h3 id="mistake-butt-off">屁股離開椅面</h3>
      <p>推到最難的地方，屁股自動翹起來——這代表你的腿驅動力量太大，或者重量對你來說太重了。屁股離開椅面會讓你的下背弓變成一個危險的超伸展角度，長期下來對腰椎不好。修正方式：減重、或者專注在把臀部往椅子上壓。</p>

      <h3 id="mistake-uneven">左右不平衡</h3>
      <p>很多人推到重量比較重的時候會出現一邊先鎖死的情況。這通常跟慣用手的力量差異有關。解決方式：加入<strong>啞鈴臥推</strong>作為輔助訓練，因為啞鈴每隻手要各自出力，能有效修正不平衡。另外也可以錄影檢查槓鈴是否有歪斜。</p>

      <h2 id="bench-variations">臥推變化式與適用時機</h2>
      <table>
        <thead>
          <tr><th>變化式</th><th>主要目標</th><th>適用情境</th></tr>
        </thead>
        <tbody>
          <tr><td>暫停臥推（Pause Bench）</td><td>胸口離地力量</td><td>底端卡關、健力備賽</td></tr>
          <tr><td>窄握臥推（Close Grip）</td><td>三頭肌發力</td><td>鎖定卡關、三頭肌弱</td></tr>
          <tr><td>上斜臥推（Incline）</td><td>上胸與前三角</td><td>上胸缺乏飽滿度</td></tr>
          <tr><td>啞鈴臥推（Dumbbell）</td><td>胸肌伸展感、左右平衡</td><td>輔助訓練、傷後復健</td></tr>
          <tr><td>彈力帶/鐵鏈臥推</td><td>鎖定階段加速</td><td>進階訓練、克服頂端卡關</td></tr>
        </tbody>
      </table>

      <h2 id="bench-program">臥推進步的訓練安排</h2>
      <p>臥推進步的關鍵不是每次都拼命推大重量，而是有計畫地安排不同強度。以下是一個簡單的每週安排建議：</p>
      <ul>
        <li><strong>第一天（大重量日）</strong>：臥推 5x3 @ 82-87% 1RM + 暫停臥推 3x3</li>
        <li><strong>第二天（輔助日，間隔 3-4 天）</strong>：上斜啞鈴臥推 4x8 + 窄握臥推 3x8 + 三頭肌下壓 3x12</li>
      </ul>
      <p>對大部分的中級訓練者來說，臥推一週兩次是進步最快的頻率。根據 2015 年發表在《Journal of Strength and Conditioning Research》的研究，一週兩次的訓練頻率在力量增長方面顯著優於一週一次。</p>

      <h2 id="shoulder-pain-fix">臥推肩膀痛怎麼辦？</h2>
      <p>如果你已經有肩膀不適，先別急著繼續推。以下是我處理的 SOP：</p>
      <ul>
        <li><strong>停止會痛的角度</strong>：不是完全不練，而是避開會引發疼痛的動作幅度</li>
        <li><strong>用地板臥推（Floor Press）替代</strong>：動作範圍較小，減少肩膀壓力</li>
        <li><strong>加強肩外旋</strong>：每次訓練前做 2 組面拉（Face Pull）和肩外旋</li>
        <li><strong>放鬆胸小肌</strong>：用按摩球或請人做運動按摩，放鬆過度緊繃的胸小肌</li>
        <li><strong>檢查設定</strong>：九成的臥推肩痛來自於肩胛骨沒收好或手肘太開</li>
      </ul>
      <p>如果疼痛持續超過兩週沒有改善，建議去看運動醫學科或物理治療師，排除結構性的問題。</p>

      <h2 id="further-reading">延伸閱讀</h2>
      <ul>
        <li><a href="/blog/deadlift-complete-guide">硬舉完整教學</a></li>
        <li><a href="/blog/shoulder-pain-corrective-exercise-guide">肩膀痛還能練嗎？常見肩關節問題與矯正運動</a></li>
        <li><a href="/blog/powerlifting-beginner-guide">健力三項入門指南</a></li>
      </ul>
    `,
  },
  {
    slug: "powerlifting-beginner-guide",
    title: "健力三項入門指南：深蹲、臥推、硬舉的訓練與比賽全攻略",
    description:
      "想挑戰健力比賽？教練帶你從零開始：三項動作技術要點、訓練課表安排、比賽規則與裝備需求，附新手友善的 12 週備賽計畫。",
    date: "2026-04-03",
    readTime: "13 min read",
    tags: ["健力", "健力三項", "深蹲", "臥推", "硬舉", "力量訓練", "健力比賽", "新手入門"],
    headings: [
      { id: "what-is-powerlifting", text: "健力是什麼？跟健美差在哪？", level: 2 },
      { id: "three-lifts", text: "健力三項動作重點", level: 2 },
      { id: "squat-key-points", text: "深蹲（Squat）", level: 3 },
      { id: "bench-key-points", text: "臥推（Bench Press）", level: 3 },
      { id: "deadlift-key-points", text: "硬舉（Deadlift）", level: 3 },
      { id: "competition-rules", text: "比賽規則與流程", level: 2 },
      { id: "attempt-strategy", text: "試舉策略", level: 3 },
      { id: "red-lights", text: "常見紅燈原因", level: 3 },
      { id: "weight-class", text: "量級與報名", level: 2 },
      { id: "gear-guide", text: "裝備指南：你需要什麼？", level: 2 },
      { id: "training-split", text: "新手健力訓練課表", level: 2 },
      { id: "twelve-week-plan", text: "12 週備賽計畫概覽", level: 3 },
      { id: "recovery-nutrition", text: "恢復與營養基礎", level: 2 },
      { id: "first-meet-tips", text: "第一場比賽的實用建議", level: 2 },
      { id: "taiwan-powerlifting", text: "台灣健力資源", level: 2 },
      { id: "further-reading", text: "延伸閱讀", level: 2 },
    ],
    cta: {
      headline: "想踏進健力但不知道從何練起？",
      description:
        "牧牧教練本身就是健力愛好者，能帶你從動作技術打底到備賽規劃。不管你是想變強還是想上場比賽，都可以聊聊。",
      buttonText: "LINE 免費諮詢",
      buttonHref: "https://lin.ee/wCbemYz",
      variant: "line",
    },
    content: `
      <p>第一次聽到「健力」這個詞的時候，我朋友問我：「那是不是就是大力士比賽？搬石頭那種？」不是喔。健力是一個非常純粹的運動：深蹲、臥推、硬舉，三個動作，比誰舉得重。就這麼簡單，但也就這麼上癮。</p>
      <p>如果你已經在健身房練了一段時間，開始覺得光是練好看不夠、想追求「真正的強」，那健力可能就是你的下一步。這篇會把你需要知道的東西一次講清楚。</p>

      <h2 id="what-is-powerlifting">健力是什麼？跟健美差在哪？</h2>
      <p>最簡單的區分方式：</p>
      <table>
        <thead>
          <tr><th>項目</th><th>健力（Powerlifting）</th><th>健美（Bodybuilding）</th></tr>
        </thead>
        <tbody>
          <tr><td>比的是</td><td>三項動作的最大重量總和</td><td>身材的肌肉量、線條、比例</td></tr>
          <tr><td>訓練重點</td><td>最大肌力、神經適應</td><td>肌肥大、肌肉分離度</td></tr>
          <tr><td>反覆次數</td><td>通常 1-5 下</td><td>通常 8-15 下</td></tr>
          <tr><td>飲食策略</td><td>吃夠就好、維持量級</td><td>備賽期嚴格控制體脂</td></tr>
          <tr><td>比賽穿著</td><td>單薄的力量衣</td><td>比基尼或短褲</td></tr>
        </tbody>
      </table>
      <p>健力運動有兩大國際聯盟：IPF（International Powerlifting Federation）是最大的聯盟，藥檢嚴格，台灣的中華民國健力協會就隸屬於 IPF。另外也有許多其他聯盟提供不同的規則。</p>

      <h2 id="three-lifts">健力三項動作重點</h2>
      <p>三個動作各有各的技術重點，這邊講的是比賽標準下需要注意的事項。</p>

      <h3 id="squat-key-points">深蹲（Squat）</h3>
      <p>健力深蹲跟一般在健身房做的深蹲有一個關鍵差異：<strong>髖關節的皺褶處必須低於膝蓋頂端</strong>，也就是你要蹲到一定深度，裁判才會給你白燈。</p>
      <ul>
        <li><strong>槓位選擇</strong>：高槓（放在斜方肌上）或低槓（放在後三角肌上）。低槓可以蹲更重但對肩膀活動度要求高</li>
        <li><strong>站距</strong>：比肩略寬到很寬都有人用，取決於你的髖關節結構</li>
        <li><strong>口令</strong>：起槓後等裁判喊「Squat」才能蹲，蹲到底站起來鎖死後等「Rack」才回架</li>
      </ul>

      <h3 id="bench-key-points">臥推（Bench Press）</h3>
      <p>健力臥推最大的特色就是<strong>暫停</strong>。槓鈴下放到胸口之後要完全靜止，等裁判喊「Press」才能推起來。</p>
      <ul>
        <li><strong>腳掌必須完全著地</strong>（IPF 規則）</li>
        <li><strong>臀部不能離開椅面</strong></li>
        <li><strong>握距不能超過 81 公分</strong>（食指在 81 公分刻度線以內）</li>
        <li><strong>雙手鎖死且槓鈴靜止</strong>後才算完成</li>
      </ul>

      <h3 id="deadlift-key-points">硬舉（Deadlift）</h3>
      <p>硬舉是最後一項，也是逆轉勝的關鍵。可以選傳統硬舉或相撲硬舉，兩者都合法。</p>
      <ul>
        <li><strong>不能用助握帶</strong>（比賽規定），所以握力訓練很重要</li>
        <li><strong>不能有向下的動作</strong>：槓鈴一旦離地就只能往上，不能有明顯的回落再拉</li>
        <li><strong>鎖死要站直</strong>：肩膀後收、膝蓋打直、身體完全直立</li>
        <li><strong>口令</strong>：裁判喊「Down」之後才能放下槓鈴</li>
      </ul>

      <h2 id="competition-rules">比賽規則與流程</h2>
      <p>一場標準的健力比賽，三個項目依序進行：深蹲 → 臥推 → 硬舉。每個項目你有<strong>三次試舉</strong>的機會。</p>
      <p>三位裁判各自給白燈或紅燈。兩白一紅 = 成功，兩紅一白 = 失敗。你最終的成績（Total）就是三個項目各自的最佳成功試舉相加。</p>

      <h3 id="attempt-strategy">試舉策略</h3>
      <p>這是比賽裡最有學問的部分。通用的策略是：</p>
      <ul>
        <li><strong>第一把（Opener）</strong>：選一個你百分之百有信心的重量，大約是你訓練中能做 3 下的重量。目的是建立信心、確保有成績</li>
        <li><strong>第二把</strong>：根據第一把的感覺加重，通常加 5-10 公斤</li>
        <li><strong>第三把</strong>：拼 PR 或保守收尾，看場上狀況決定</li>
      </ul>
      <p>新手最常犯的錯誤就是第一把開太重。比賽環境跟你平常在健身房練是不一樣的——有裁判口令、時間壓力、場地陌生感。第一把開保守一點，後面才有調整空間。</p>

      <h3 id="red-lights">常見紅燈原因</h3>
      <ul>
        <li>深蹲沒蹲到足夠深度</li>
        <li>臥推屁股離開椅面</li>
        <li>臥推沒有在胸口暫停就推起</li>
        <li>硬舉有向下又向上的動作（hitching/ramping）</li>
        <li>沒有等裁判口令就開始動作</li>
      </ul>

      <h2 id="weight-class">量級與報名</h2>
      <p>健力按體重分量級比賽。以 IPF 男子組為例，常見量級有：59kg、66kg、74kg、83kg、93kg、105kg、120kg、120+kg。女子組有：47kg、52kg、57kg、63kg、69kg、76kg、84kg、84+kg。</p>
      <p>新手不需要刻意減重切量級。先選一個你自然體重落在的量級報名就好。等你比了幾場，對自己的實力有概念了，再考慮要不要調整體重。</p>

      <h2 id="gear-guide">裝備指南：你需要什麼？</h2>
      <p>健力的裝備相對簡單，不用花大錢。以下是你需要的基本裝備：</p>
      <ul>
        <li><strong>健力腰帶</strong>（10-13mm，寬度統一的四方帶）：大概 NT$2,000-5,000</li>
        <li><strong>平底硬鞋</strong>：舉重鞋（深蹲用）+ 薄底鞋或赤腳（硬舉用）。不要穿氣墊鞋</li>
        <li><strong>護膝套</strong>：SBD 或 Rehband 是常見品牌，比賽用的厚度有規定（7mm）</li>
        <li><strong>力量衣</strong>（Singlet）：比賽穿的連身緊身衣，規則要求款式</li>
        <li><strong>止滑粉</strong>：鎂粉，改善握力。大部分比賽場地會提供</li>
      </ul>
      <p>護腕和護膝不是必需的，但對有關節不適的人很有幫助。記得確認你的裝備是否符合你要參加的聯盟規定。</p>

      <h2 id="training-split">新手健力訓練課表</h2>
      <p>剛接觸健力的人，我建議一週練 3-4 天，每天都包含至少一項主項。以下是一個基本的四天課表：</p>
      <table>
        <thead>
          <tr><th>日</th><th>主項</th><th>輔助訓練</th></tr>
        </thead>
        <tbody>
          <tr><td>Day 1</td><td>深蹲 4x5</td><td>腿推 3x10、腿彎舉 3x12、腹部 3x15</td></tr>
          <tr><td>Day 2</td><td>臥推 4x5</td><td>啞鈴肩推 3x10、三頭下壓 3x12、面拉 3x15</td></tr>
          <tr><td>Day 3</td><td>硬舉 4x5</td><td>RDL 3x8、划船 3x10、二頭彎舉 3x12</td></tr>
          <tr><td>Day 4</td><td>臥推變化 4x6</td><td>上斜啞鈴推 3x10、側平舉 3x15、核心 3x12</td></tr>
        </tbody>
      </table>
      <p>主項的重量從 60-70% 1RM 開始，每週加 2.5 公斤（上肢）或 5 公斤（下肢）。當你連續兩週無法完成預定的組數和次數，就該進入減量週。</p>

      <h3 id="twelve-week-plan">12 週備賽計畫概覽</h3>
      <ul>
        <li><strong>Week 1-4（積累期）</strong>：中等重量、較高反覆次數（5-8 下），建立肌肉量和動作品質</li>
        <li><strong>Week 5-8（強化期）</strong>：增加重量、降低次數（3-5 下），提升最大力量</li>
        <li><strong>Week 9-10（巔峰期）</strong>：接近比賽重量（1-3 下），練習比賽口令和暫停</li>
        <li><strong>Week 11-12（減量期）</strong>：降低訓練量但維持強度，讓身體充分恢復。比賽前一週只做輕鬆的暖身組就好</li>
      </ul>

      <h2 id="recovery-nutrition">恢復與營養基礎</h2>
      <p>健力訓練對身體的壓力很大，恢復不夠會直接影響成績：</p>
      <ul>
        <li><strong>蛋白質</strong>：每公斤體重 1.6-2.2 克，分散在每餐攝取。根據 ISSN（國際運動營養學會）的立場聲明，這個範圍對力量型運動員最為適當</li>
        <li><strong>碳水化合物</strong>：不要低碳！健力需要大量肝醣來維持高強度訓練，每公斤體重建議 4-7 克</li>
        <li><strong>睡眠</strong>：7-9 小時。ACSM 的指引指出，睡眠不足會顯著降低力量表現和恢復速度</li>
        <li><strong>補充品</strong>：肌酸（每天 3-5 克）是目前研究證據最充分的力量型補充品</li>
      </ul>

      <h2 id="first-meet-tips">第一場比賽的實用建議</h2>
      <p>你的第一場比賽，目標不是破紀錄，而是<strong>完賽、拿到 Total</strong>。以下是幾個我自己和學員比賽的經驗：</p>
      <ul>
        <li><strong>比賽前去觀摩一場</strong>：了解流程、熱身區配置、口令節奏</li>
        <li><strong>提前到場</strong>：至少在你預定出場前 1 小時開始暖身</li>
        <li><strong>帶齊裝備</strong>：腰帶、護膝、平底鞋、力量衣、止滑粉、水、簡單的食物（香蕉、飯糰）</li>
        <li><strong>不要減重</strong>：第一場不需要切體重，自然體重上場就好</li>
        <li><strong>Opener 要保守</strong>：你在訓練裡能做 3 下的重量就是好的第一把</li>
        <li><strong>享受過程</strong>：會緊張是正常的，但上場之後你會發現全場觀眾都在幫你加油</li>
      </ul>

      <h2 id="taiwan-powerlifting">台灣健力資源</h2>
      <p>台灣的健力環境這幾年進步很多，不管是比賽機會還是訓練資源都越來越豐富：</p>
      <ul>
        <li><strong>中華民國健力協會</strong>：IPF 台灣分支，官方比賽和選手註冊都在這裡</li>
        <li><strong>各地健力友善的健身房</strong>：找有健力槓（calibrated bar）、比賽規格深蹲架的場地</li>
        <li><strong>線上社群</strong>：Facebook 有好幾個健力交流社團，可以找到訓練夥伴和比賽資訊</li>
        <li><strong>教練資源</strong>：找有健力比賽經驗的教練帶你比較有效率，因為比賽的細節光靠網路很難學完</li>
      </ul>

      <h2 id="further-reading">延伸閱讀</h2>
      <ul>
        <li><a href="/blog/squat-correct-form-complete-guide">深蹲做對了嗎？教練的正確姿勢完整教學</a></li>
        <li><a href="/blog/deadlift-complete-guide">硬舉完整教學</a></li>
        <li><a href="/blog/periodization-training-guide">週期化訓練課表怎麼排？</a></li>
      </ul>
    `,
  },
  {
    slug: "periodization-training-guide",
    title: "週期化訓練課表怎麼排？線性、波動、區塊三種模型完整解析",
    description:
      "訓練卡關了嗎？教練詳解三種週期化訓練模型：線性週期、波動週期、區塊週期的差異與適用對象，附實際課表範例讓你直接套用。",
    date: "2026-04-03",
    readTime: "11 min read",
    tags: ["週期化訓練", "訓練課表", "課表安排", "線性週期", "波動週期", "區塊週期", "訓練計畫"],
    headings: [
      { id: "why-periodization", text: "為什麼你需要週期化？", level: 2 },
      { id: "basic-concepts", text: "週期化的基本概念", level: 2 },
      { id: "macrocycle", text: "大週期、中週期、小週期", level: 3 },
      { id: "training-variables", text: "訓練變數：強度、量、頻率", level: 3 },
      { id: "linear-periodization", text: "線性週期化（LP）", level: 2 },
      { id: "lp-how-it-works", text: "怎麼操作", level: 3 },
      { id: "lp-example", text: "課表範例", level: 3 },
      { id: "lp-pros-cons", text: "優缺點", level: 3 },
      { id: "undulating-periodization", text: "波動週期化（DUP / WUP）", level: 2 },
      { id: "dup-how-it-works", text: "怎麼操作", level: 3 },
      { id: "dup-example", text: "課表範例", level: 3 },
      { id: "dup-pros-cons", text: "優缺點", level: 3 },
      { id: "block-periodization", text: "區塊週期化（Block）", level: 2 },
      { id: "block-how-it-works", text: "怎麼操作", level: 3 },
      { id: "block-example", text: "課表範例", level: 3 },
      { id: "block-pros-cons", text: "優缺點", level: 3 },
      { id: "which-model", text: "哪種模型適合你？", level: 2 },
      { id: "deload-week", text: "減量週怎麼安排", level: 2 },
      { id: "common-mistakes-programming", text: "課表安排的常見地雷", level: 2 },
      { id: "further-reading", text: "延伸閱讀", level: 2 },
    ],
    cta: {
      headline: "不知道怎麼安排自己的課表？",
      description:
        "週期化訓練需要根據你的目標、時間和訓練經驗量身打造。牧牧教練提供客製化課表設計，讓你的每一次訓練都有方向。",
      buttonText: "LINE 免費諮詢",
      buttonHref: "https://lin.ee/wCbemYz",
      variant: "line",
    },
    content: `
      <p>你是不是也有過這種情況：剛開始健身的時候進步超快，三個月過去深蹲從空槓練到 80 公斤，結果再過三個月⋯⋯還是 80 公斤？甚至開始倒退？</p>
      <p>這不是你偷懶，也不是你天分不夠。問題出在你的課表。或者更精確地說，你可能根本沒有「課表」——只是每天去健身房隨性練。週期化訓練就是解決這個問題的方法。</p>

      <h2 id="why-periodization">為什麼你需要週期化？</h2>
      <p>人體有一個機制叫做<strong>一般適應症候群（General Adaptation Syndrome，GAS）</strong>，是由 Hans Selye 在 1950 年代提出的。簡單說就是：身體接收到刺激 → 疲勞 → 適應 → 刺激不再有效。</p>
      <p>如果你每次都做一樣的重量、一樣的次數、一樣的動作，身體就不會再進步了。週期化的核心概念就是<strong>有計畫地改變訓練刺激</strong>，讓身體持續處於「超補償」的狀態。</p>
      <p>2017 年發表在《Sports Medicine》的一篇統合分析（Williams et al.）指出，有週期化的訓練計畫在力量增長方面顯著優於非週期化的訓練。這不是理論，是數據。</p>

      <h2 id="basic-concepts">週期化的基本概念</h2>

      <h3 id="macrocycle">大週期、中週期、小週期</h3>
      <p>週期化就像俄羅斯娃娃，一層套一層：</p>
      <ul>
        <li><strong>大週期（Macrocycle）</strong>：整個訓練計畫的最大架構，可能是一年、半年或一個備賽週期</li>
        <li><strong>中週期（Mesocycle）</strong>：通常 3-6 週一個區間，有特定的訓練目標（例如肌肥大、最大肌力）</li>
        <li><strong>小週期（Microcycle）</strong>：通常就是一週，也就是你每週的訓練安排</li>
      </ul>

      <h3 id="training-variables">訓練變數：強度、量、頻率</h3>
      <p>週期化在操弄的就是這三個變數：</p>
      <table>
        <thead>
          <tr><th>變數</th><th>定義</th><th>例子</th></tr>
        </thead>
        <tbody>
          <tr><td>強度（Intensity）</td><td>相對於 1RM 的百分比</td><td>80% 1RM = 高強度</td></tr>
          <tr><td>訓練量（Volume）</td><td>組數 x 次數 x 重量</td><td>4x8x60kg = 1920kg</td></tr>
          <tr><td>頻率（Frequency）</td><td>一週練同一動作幾次</td><td>深蹲一週兩次</td></tr>
        </tbody>
      </table>
      <p>這三個變數不可能同時都拉到最高——如果你用 95% 1RM 的強度，你不可能做 4 組 10 下。週期化就是在不同的階段，調整這三者的比重。</p>

      <h2 id="linear-periodization">線性週期化（LP）</h2>
      <p>這是最經典、最直覺的模型，由蘇聯運動科學家 Matveyev 在 1960 年代提出。概念很單純：<strong>隨著時間推移，重量越來越重，次數越來越少。</strong></p>

      <h3 id="lp-how-it-works">怎麼操作</h3>
      <p>整個訓練週期分成幾個階段，每個階段 3-4 週：</p>
      <ul>
        <li><strong>肌耐力期</strong>：高次數低重量（12-15 下 @ 60-65%）</li>
        <li><strong>肌肥大期</strong>：中次數中重量（8-10 下 @ 70-75%）</li>
        <li><strong>肌力期</strong>：低次數高重量（3-5 下 @ 80-87%）</li>
        <li><strong>巔峰/測試期</strong>：極低次數極高重量（1-3 下 @ 90%+）</li>
      </ul>

      <h3 id="lp-example">課表範例</h3>
      <p>以深蹲為例（假設 1RM = 100kg）：</p>
      <table>
        <thead>
          <tr><th>週次</th><th>組數 x 次數</th><th>重量</th></tr>
        </thead>
        <tbody>
          <tr><td>Week 1-3</td><td>3 x 12</td><td>60kg</td></tr>
          <tr><td>Week 4-6</td><td>4 x 8</td><td>72.5kg</td></tr>
          <tr><td>Week 7-9</td><td>4 x 5</td><td>82.5kg</td></tr>
          <tr><td>Week 10-11</td><td>5 x 3</td><td>90kg</td></tr>
          <tr><td>Week 12</td><td>測試 1RM</td><td>—</td></tr>
        </tbody>
      </table>

      <h3 id="lp-pros-cons">優缺點</h3>
      <p><strong>優點</strong>：簡單好懂、新手友善、進步軌跡清楚。</p>
      <p><strong>缺點</strong>：前面練高次數的時候離力量巔峰很遠，等到後面練大重量的時候，肌耐力和肌肥大的效果可能已經退訓了。而且中高級訓練者用線性模型，進步幅度會越來越小。</p>

      <h2 id="undulating-periodization">波動週期化（DUP / WUP）</h2>
      <p>波動週期化的核心概念是<strong>在每一週（甚至每一天）都改變訓練刺激</strong>，不像線性週期那樣要等好幾週才換。</p>

      <h3 id="dup-how-it-works">怎麼操作</h3>
      <p>有兩種常見做法：</p>
      <ul>
        <li><strong>每日波動（DUP, Daily Undulating Periodization）</strong>：同一週裡，每次練同一個動作都用不同的強度和次數。例如週一練深蹲 5x5（力量），週四練深蹲 3x10（肌肥大）</li>
        <li><strong>每週波動（WUP, Weekly Undulating Periodization）</strong>：每週的訓練重點不同。第一週主打肌肥大，第二週主打力量，第三週主打爆發力，然後循環</li>
      </ul>

      <h3 id="dup-example">課表範例</h3>
      <p>以 DUP 深蹲為例（假設 1RM = 100kg）：</p>
      <table>
        <thead>
          <tr><th>訓練日</th><th>目標</th><th>組數 x 次數</th><th>重量</th></tr>
        </thead>
        <tbody>
          <tr><td>週一</td><td>力量</td><td>5 x 3</td><td>85kg</td></tr>
          <tr><td>週三</td><td>肌肥大</td><td>3 x 10</td><td>67.5kg</td></tr>
          <tr><td>週五</td><td>爆發力/速度</td><td>6 x 2</td><td>72.5kg（快速）</td></tr>
        </tbody>
      </table>
      <p>每週的重量可以微幅遞增（例如每週加 2.5kg），但波動的結構保持不變。</p>

      <h3 id="dup-pros-cons">優缺點</h3>
      <p><strong>優點</strong>：同時維持多種體能特質（力量 + 肌肥大 + 爆發力），不容易退訓。2015 年 Zourdos 等人發表於《Journal of Strength and Conditioning Research》的研究指出，DUP 在訓練有素的個體身上可能比線性週期產生更好的力量增長。</p>
      <p><strong>缺點</strong>：安排比較複雜，需要對自己的能力有較好的認知。每次練的感覺都不太一樣，有些人會覺得比較沒有「節奏感」。</p>

      <h2 id="block-periodization">區塊週期化（Block）</h2>
      <p>區塊週期化由 Issurin 在 2000 年代提出，是近年比較受歡迎的模型，特別是在進階訓練者和競技運動員之間。概念是<strong>每個區塊只專注練一兩種體能特質</strong>，把精力集中。</p>

      <h3 id="block-how-it-works">怎麼操作</h3>
      <p>典型的三區塊結構：</p>
      <ul>
        <li><strong>積累區塊（Accumulation）</strong>：3-4 週，高訓練量、中等強度。目標是建立肌肉量和工作能力</li>
        <li><strong>轉化區塊（Transmutation）</strong>：3-4 週，中等訓練量、高強度。把積累期建立的肌肉量轉化成力量</li>
        <li><strong>實現區塊（Realization）</strong>：1-2 週，低訓練量、極高強度。讓疲勞消散，力量表現達到巔峰</li>
      </ul>

      <h3 id="block-example">課表範例</h3>
      <p>以深蹲為例（假設 1RM = 100kg）：</p>
      <table>
        <thead>
          <tr><th>區塊</th><th>週數</th><th>組數 x 次數</th><th>重量</th></tr>
        </thead>
        <tbody>
          <tr><td>積累</td><td>Week 1-4</td><td>4 x 8-10</td><td>65-72.5kg</td></tr>
          <tr><td>轉化</td><td>Week 5-8</td><td>5 x 3-5</td><td>80-87.5kg</td></tr>
          <tr><td>實現</td><td>Week 9-10</td><td>3 x 1-2</td><td>92.5-100+kg</td></tr>
        </tbody>
      </table>

      <h3 id="block-pros-cons">優缺點</h3>
      <p><strong>優點</strong>：每個階段目標明確、容易專注。適合有比賽日期的運動員，可以精準地讓巔峰出現在比賽日。</p>
      <p><strong>缺點</strong>：每個區塊只練一兩種特質，其他特質可能會稍微退步。例如在轉化區塊練大重量的時候，肌肥大的效果可能會減少。不適合什麼都想同時練的人。</p>

      <h2 id="which-model">哪種模型適合你？</h2>
      <table>
        <thead>
          <tr><th>你的狀況</th><th>建議模型</th><th>原因</th></tr>
        </thead>
        <tbody>
          <tr><td>訓練年資 < 1 年</td><td>線性週期</td><td>新手紅利期，簡單漸進就能快速進步</td></tr>
          <tr><td>1-3 年經驗，追求全面發展</td><td>波動週期（DUP）</td><td>同時維持多種體能，適合沒有特定比賽的人</td></tr>
          <tr><td>3 年以上或有比賽目標</td><td>區塊週期</td><td>可以精準控制巔峰，最適合備賽</td></tr>
          <tr><td>時間不穩定、不確定性高</td><td>每週波動（WUP）</td><td>即使某週少練一天，影響也不大</td></tr>
        </tbody>
      </table>
      <p>這只是大方向的建議。實際上很多教練會把不同模型的元素混合使用。例如在區塊週期的積累期裡面，用波動的方式安排每週的訓練內容——沒有一定要照某個教科書的框架走。</p>

      <h2 id="deload-week">減量週怎麼安排</h2>
      <p>減量週是週期化裡面不可或缺的一環，但很多人會忽略它，覺得休息就是偷懶。實際上，減量週的功能是<strong>讓累積的疲勞消散，讓身體完成超補償</strong>。</p>
      <p>兩種常見做法：</p>
      <ul>
        <li><strong>減量（Reduce Volume）</strong>：維持原本的重量，但組數砍一半。例如平常做 4 組，減量週做 2 組。這是我最推薦的方式，因為你的身體不會忘記怎麼處理那個重量</li>
        <li><strong>減強度（Reduce Intensity）</strong>：維持原本的組數和次數，但重量降 10-15%。適合關節有點不舒服的時候</li>
      </ul>
      <p>頻率：每 3-5 週安排一個減量週。新手可以每 4-5 週一次，進階者可能每 3 週就需要。用<strong>RPE（主觀用力程度）</strong>來判斷也很好——如果你每組都要拼命才做完、睡眠品質下降、動機減退，就是該減量的信號。</p>

      <h2 id="common-mistakes-programming">課表安排的常見地雷</h2>
      <p>最後提醒幾個我常看到的課表問題：</p>
      <ul>
        <li><strong>永遠在練 3x10</strong>：這不是週期化，這是原地踏步。你的身體已經完全適應了這個刺激</li>
        <li><strong>太頻繁換動作</strong>：每週都換不同的動作，身體來不及適應任何一個動作。主項動作至少要維持 4-6 週以上才能看到進步</li>
        <li><strong>忽略恢復能力</strong>：課表寫得很漂亮但身體受不了，那就是過度訓練。訓練量要跟你的恢復能力匹配——睡眠、營養、壓力都會影響你能承受多少訓練量</li>
        <li><strong>只看數字不看品質</strong>：重量加上去了但動作走樣了，那不叫進步。在加重之前，確保你的技術是穩定的</li>
        <li><strong>沒有記錄</strong>：不做訓練紀錄就不可能做好週期化。每次練完花 2 分鐘記下重量、組數、次數、RPE，這些數據是你未來安排課表的基礎</li>
      </ul>

      <h2 id="further-reading">延伸閱讀</h2>
      <ul>
        <li><a href="/blog/powerlifting-beginner-guide">健力三項入門指南</a></li>
        <li><a href="/blog/beginner-weight-training-guide">新手重訓入門指南</a></li>
        <li><a href="/blog/muscle-soreness-training-effectiveness-truth">肌肉痠痛代表有練到嗎？</a></li>
      </ul>
    `,
  },
  {
    slug: "home-dumbbell-workout-guide",
    title: "居家啞鈴訓練全攻略：不去健身房也能練出好體態【附完整課表】",
    description:
      "只有啞鈴也能有效訓練！教練設計的居家啞鈴課表，涵蓋全身肌群，附三種程度（入門/中階/進階）的訓練菜單和動作圖解說明。",
    date: "2026-04-03",
    readTime: "12 min read",
    tags: ["居家訓練", "啞鈴訓練", "居家健身", "啞鈴課表", "在家練", "不用器材", "全身訓練", "居家運動"],
    headings: [
      { id: "why-dumbbell", text: "為什麼啞鈴是居家訓練的最佳選擇？", level: 2 },
      { id: "equipment-guide", text: "啞鈴怎麼選？重量建議", level: 2 },
      { id: "adjustable-vs-fixed", text: "可調式 vs 固定式", level: 3 },
      { id: "weight-recommendation", text: "買多重才夠？", level: 3 },
      { id: "upper-body-exercises", text: "上半身動作清單", level: 2 },
      { id: "db-bench-press", text: "啞鈴臥推（胸）", level: 3 },
      { id: "db-row", text: "啞鈴划船（背）", level: 3 },
      { id: "db-shoulder-press", text: "啞鈴肩推（肩）", level: 3 },
      { id: "db-curl-extension", text: "二頭彎舉與三頭伸展（手臂）", level: 3 },
      { id: "lower-body-exercises", text: "下半身動作清單", level: 2 },
      { id: "db-goblet-squat", text: "高腳杯深蹲", level: 3 },
      { id: "db-rdl", text: "啞鈴 RDL", level: 3 },
      { id: "db-lunge", text: "啞鈴弓步蹲", level: 3 },
      { id: "db-hip-thrust", text: "啞鈴臀推", level: 3 },
      { id: "core-exercises", text: "核心動作", level: 2 },
      { id: "three-level-programs", text: "三種程度的課表安排", level: 2 },
      { id: "beginner-program", text: "入門版（一週 3 天）", level: 3 },
      { id: "intermediate-program", text: "中階版（一週 4 天）", level: 3 },
      { id: "advanced-program", text: "進階版（一週 5 天）", level: 3 },
      { id: "progression-tips", text: "居家訓練怎麼漸進？", level: 2 },
      { id: "common-questions", text: "居家啞鈴訓練 Q&A", level: 2 },
      { id: "further-reading", text: "延伸閱讀", level: 2 },
    ],
    cta: {
      headline: "居家訓練也想有教練帶？",
      description:
        "牧牧教練提供線上一對一指導，幫你規劃居家啞鈴課表、即時修正動作。不管你在家裡還是出差旅館，都能維持訓練品質。",
      buttonText: "LINE 免費諮詢",
      buttonHref: "https://lin.ee/wCbemYz",
      variant: "line",
    },
    content: `
      <p>不是每個人都有時間去健身房，也不是每個人都喜歡健身房的環境。但你知道嗎？一對可調式啞鈴加上一張椅子，就足以練到全身的肌群。我有不少學員是純在家裡練的，體態一樣可以練得很好。</p>
      <p>這篇文章我會把居家啞鈴訓練能做的動作全部列出來，再給你三種不同程度的課表。不管你是剛開始運動的新手，還是健身房的常客但偶爾需要在家練，都能用得上。</p>

      <h2 id="why-dumbbell">為什麼啞鈴是居家訓練的最佳選擇？</h2>
      <p>居家訓練器材很多——彈力帶、壺鈴、TRX、槓鈴⋯⋯但如果只能選一樣，我一定選啞鈴。原因有三個：</p>
      <ul>
        <li><strong>動作覆蓋率最高</strong>：推、拉、蹲、舉、彎——幾乎所有訓練模式都能用啞鈴完成</li>
        <li><strong>單側訓練優勢</strong>：每隻手各拿一個，左右兩邊必須各自出力，能有效修正左右不平衡的問題</li>
        <li><strong>關節友善</strong>：相比槓鈴，啞鈴允許更自然的手腕和手肘角度，對關節的壓力較小</li>
        <li><strong>空間需求小</strong>：一對啞鈴加上 2 平方公尺的空間就能練</li>
      </ul>
      <p>根據 ACSM（美國運動醫學會）的運動指引，使用啞鈴進行的自由重量訓練，在肌肉活化和功能性方面並不亞於機械式器材。</p>

      <h2 id="equipment-guide">啞鈴怎麼選？重量建議</h2>

      <h3 id="adjustable-vs-fixed">可調式 vs 固定式</h3>
      <table>
        <thead>
          <tr><th>類型</th><th>優點</th><th>缺點</th><th>價格參考</th></tr>
        </thead>
        <tbody>
          <tr><td>可調式啞鈴</td><td>一組抵多組、省空間</td><td>換重量較慢、手感不同</td><td>NT$3,000-15,000</td></tr>
          <tr><td>固定式啞鈴</td><td>拿了就練、手感扎實</td><td>需要多組、占空間</td><td>每對 NT$500-2,000</td></tr>
          <tr><td>快調式（如 Bowflex）</td><td>轉一下就換重量</td><td>價格較高、不耐摔</td><td>NT$8,000-25,000</td></tr>
        </tbody>
      </table>
      <p>我個人最推薦<strong>可調式啞鈴</strong>，CP 值最高。選購時注意槓桿直徑要握得舒服、槓片要鎖得穩。</p>

      <h3 id="weight-recommendation">買多重才夠？</h3>
      <ul>
        <li><strong>女生入門</strong>：2-12 公斤的範圍就很夠用。大部分上半身動作用 3-5 公斤，下半身用 8-12 公斤</li>
        <li><strong>男生入門</strong>：5-20 公斤。上半身動作用 7-12 公斤，下半身用 12-20 公斤</li>
        <li><strong>有訓練經驗的人</strong>：建議買到 25-30 公斤以上的可調式啞鈴，否則很快就不夠用</li>
      </ul>
      <p>寧可買重一點的。太輕很快就會不夠用，太重你可以調低，但太輕就只能再花一次錢。</p>

      <h2 id="upper-body-exercises">上半身動作清單</h2>

      <h3 id="db-bench-press">啞鈴臥推（胸）</h3>
      <p>在家沒有臥推椅？地板臥推（Floor Press）也行，動作幅度小一點但對肩膀更安全。如果有一張穩固的椅子或板凳，可以當作臥推椅使用。</p>
      <p><strong>動作要點</strong>：啞鈴下放到上臂碰到地面（地板臥推）或胸口旁邊（有椅子），手肘角度 45-60 度，推起來的時候啞鈴微微靠攏。做 3-4 組、8-12 下。</p>

      <h3 id="db-row">啞鈴划船（背）</h3>
      <p>單臂啞鈴划船是居家練背的王牌動作。一隻手和同側的膝蓋撐在椅子上，另一隻手拿啞鈴從自然垂放拉到腰際。</p>
      <p><strong>動作要點</strong>：想像你的手肘在畫一條弧線、往後口袋的方向拉。身體不要旋轉，核心保持穩定。背部發力的感覺會比較明顯。3-4 組、每邊 10-12 下。</p>

      <h3 id="db-shoulder-press">啞鈴肩推（肩）</h3>
      <p>可以站著做也可以坐著做。站著做的核心參與更多，坐著做可以推更重。</p>
      <p><strong>動作要點</strong>：起始位置啞鈴在耳朵兩側，手肘約 90 度。往上推的時候啞鈴微微靠攏（不要敲到），到頂端時手臂接近伸直但不鎖死。下放控制好速度，不要自由落體。3 組、8-10 下。</p>

      <h3 id="db-curl-extension">二頭彎舉與三頭伸展（手臂）</h3>
      <p>二頭和三頭是小肌群，不需要花太多時間，但練了手臂線條會好看很多。</p>
      <ul>
        <li><strong>啞鈴彎舉</strong>：手肘固定在身體兩側不動，只有前臂在動。不要甩，不要聳肩。2-3 組、10-12 下</li>
        <li><strong>過頭三頭伸展</strong>：雙手握住一個啞鈴舉過頭，手肘朝天花板，只彎曲手肘讓啞鈴到頭後面再推回去。2-3 組、10-12 下</li>
      </ul>

      <h2 id="lower-body-exercises">下半身動作清單</h2>

      <h3 id="db-goblet-squat">高腳杯深蹲</h3>
      <p>雙手捧著啞鈴的一端，靠在胸前，然後正常做深蹲。這是居家深蹲的最佳選擇，因為前負荷的位置會自然幫你維持軀幹直立、不容易前傾。</p>
      <p><strong>動作要點</strong>：腳站略比肩寬，腳尖微外轉。蹲到大腿至少平行地面，膝蓋對齊腳尖方向。手肘在底端可以輕碰膝蓋內側，幫助打開髖關節。3-4 組、10-15 下。</p>

      <h3 id="db-rdl">啞鈴 RDL</h3>
      <p>雙手各拿一個啞鈴，站直後屁股往後推、膝蓋微彎，啞鈴沿著大腿前側下滑到膝蓋下方，感覺腿後拉緊就站起來。</p>
      <p><strong>動作要點</strong>：背要打直！不是彎腰去碰地板，是屁股往後推讓上半身前傾。啞鈴不需要碰到地板，碰到小腿中段就差不多了。3-4 組、8-12 下。</p>

      <h3 id="db-lunge">啞鈴弓步蹲</h3>
      <p>可以做前弓步、後弓步、或行走弓步。我比較推薦<strong>後弓步</strong>，因為對膝蓋的壓力比前弓步小。</p>
      <p><strong>動作要點</strong>：一腳往後踩，前腳膝蓋彎 90 度，後腳膝蓋快碰到地板。軀幹保持直立，雙手各握啞鈴垂在身體兩側。3 組、每邊 10-12 下。</p>

      <h3 id="db-hip-thrust">啞鈴臀推</h3>
      <p>背靠在沙發或穩固的椅子邊緣，啞鈴放在髖關節上（墊毛巾避免壓到骨頭），然後用臀部把髖部頂上去。</p>
      <p><strong>動作要點</strong>：到頂端的時候用力夾臀，停留 1-2 秒。腳的位置大概是膝蓋彎 90 度時脛骨垂直地面。下來的時候控制速度。3-4 組、12-15 下。</p>

      <h2 id="core-exercises">核心動作</h2>
      <p>核心不是只有棒式。以下幾個動作搭配啞鈴效果很好：</p>
      <ul>
        <li><strong>啞鈴農夫走路</strong>：雙手各提一個重啞鈴，挺胸縮腹走路。看起來簡單，走 30 秒你就知道厲害了。3 組、30-45 秒</li>
        <li><strong>單手農夫走路</strong>：只提一邊，身體要對抗側彎的力量，核心側面會很有感。每邊 3 組、20-30 秒</li>
        <li><strong>啞鈴捲腹</strong>：把啞鈴抱在胸前增加負重，做捲腹。3 組、12-15 下</li>
        <li><strong>土耳其起立（Turkish Get Up）</strong>：一個動作練全身的穩定性。技術要求高，建議先用輕重量或徒手學會動作模式</li>
      </ul>

      <h2 id="three-level-programs">三種程度的課表安排</h2>

      <h3 id="beginner-program">入門版（一週 3 天）</h3>
      <p>適合剛接觸重量訓練的人，全身性課表，每次 40-50 分鐘。</p>
      <table>
        <thead>
          <tr><th>動作</th><th>組數 x 次數</th><th>休息</th></tr>
        </thead>
        <tbody>
          <tr><td>高腳杯深蹲</td><td>3 x 12</td><td>90 秒</td></tr>
          <tr><td>啞鈴地板臥推</td><td>3 x 12</td><td>90 秒</td></tr>
          <tr><td>啞鈴划船（每邊）</td><td>3 x 10</td><td>60 秒</td></tr>
          <tr><td>啞鈴 RDL</td><td>3 x 10</td><td>90 秒</td></tr>
          <tr><td>啞鈴肩推</td><td>3 x 10</td><td>60 秒</td></tr>
          <tr><td>棒式</td><td>3 x 30 秒</td><td>45 秒</td></tr>
        </tbody>
      </table>
      <p><strong>進步方式</strong>：每次成功完成所有組數的目標次數，下次加 1-2 下。當你能做到 3x15，就增加啞鈴重量然後回到 3x10 重新開始。</p>

      <h3 id="intermediate-program">中階版（一週 4 天）</h3>
      <p>上下半身分開練，適合有半年以上訓練經驗的人。每次 45-55 分鐘。</p>
      <p><strong>Day 1 & 3 — 上半身</strong></p>
      <table>
        <thead>
          <tr><th>動作</th><th>組數 x 次數</th><th>休息</th></tr>
        </thead>
        <tbody>
          <tr><td>啞鈴臥推</td><td>4 x 8</td><td>90 秒</td></tr>
          <tr><td>啞鈴划船</td><td>4 x 8</td><td>90 秒</td></tr>
          <tr><td>啞鈴肩推</td><td>3 x 10</td><td>60 秒</td></tr>
          <tr><td>啞鈴飛鳥</td><td>3 x 12</td><td>60 秒</td></tr>
          <tr><td>啞鈴彎舉 + 三頭伸展（超級組）</td><td>3 x 12</td><td>60 秒</td></tr>
        </tbody>
      </table>
      <p><strong>Day 2 & 4 — 下半身 + 核心</strong></p>
      <table>
        <thead>
          <tr><th>動作</th><th>組數 x 次數</th><th>休息</th></tr>
        </thead>
        <tbody>
          <tr><td>高腳杯深蹲</td><td>4 x 10</td><td>90 秒</td></tr>
          <tr><td>啞鈴 RDL</td><td>4 x 10</td><td>90 秒</td></tr>
          <tr><td>後弓步蹲</td><td>3 x 10（每邊）</td><td>60 秒</td></tr>
          <tr><td>啞鈴臀推</td><td>3 x 15</td><td>60 秒</td></tr>
          <tr><td>農夫走路</td><td>3 x 40 秒</td><td>60 秒</td></tr>
        </tbody>
      </table>

      <h3 id="advanced-program">進階版（一週 5 天）</h3>
      <p>推/拉/腿的分法，適合訓練一年以上、啞鈴重量足夠的人。</p>
      <p><strong>Day 1 — 推（胸/肩/三頭）</strong></p>
      <table>
        <thead>
          <tr><th>動作</th><th>組數 x 次數</th></tr>
        </thead>
        <tbody>
          <tr><td>啞鈴臥推</td><td>4 x 8</td></tr>
          <tr><td>上斜啞鈴推（用枕頭墊高背部）</td><td>3 x 10</td></tr>
          <tr><td>啞鈴肩推</td><td>4 x 8</td></tr>
          <tr><td>啞鈴側平舉</td><td>3 x 15</td></tr>
          <tr><td>過頭三頭伸展</td><td>3 x 12</td></tr>
        </tbody>
      </table>
      <p><strong>Day 2 — 拉（背/二頭）</strong></p>
      <table>
        <thead>
          <tr><th>動作</th><th>組數 x 次數</th></tr>
        </thead>
        <tbody>
          <tr><td>啞鈴划船</td><td>4 x 8</td></tr>
          <tr><td>啞鈴俯身反向飛鳥</td><td>3 x 12</td></tr>
          <tr><td>啞鈴聳肩</td><td>3 x 15</td></tr>
          <tr><td>啞鈴彎舉</td><td>3 x 10</td></tr>
          <tr><td>鎚式彎舉</td><td>3 x 10</td></tr>
        </tbody>
      </table>
      <p><strong>Day 3 — 腿（股四/股二/臀）</strong></p>
      <table>
        <thead>
          <tr><th>動作</th><th>組數 x 次數</th></tr>
        </thead>
        <tbody>
          <tr><td>高腳杯深蹲</td><td>4 x 10</td></tr>
          <tr><td>啞鈴 RDL</td><td>4 x 10</td></tr>
          <tr><td>保加利亞分腿蹲</td><td>3 x 10（每邊）</td></tr>
          <tr><td>啞鈴臀推</td><td>4 x 12</td></tr>
          <tr><td>啞鈴小腿上提</td><td>3 x 20</td></tr>
        </tbody>
      </table>
      <p>Day 4 重複推日、Day 5 重複拉日，但可以換一些動作變化式來增加多樣性。</p>

      <h2 id="progression-tips">居家訓練怎麼漸進？</h2>
      <p>在健身房你有從 1 公斤到 50 公斤的啞鈴可以慢慢加，但在家裡啞鈴重量有限，怎麼辦？有幾個策略：</p>
      <ul>
        <li><strong>增加反覆次數</strong>：從 8 下練到 15 下，再加重量回到 8 下</li>
        <li><strong>增加組數</strong>：從 3 組加到 4 組，甚至 5 組</li>
        <li><strong>放慢離心速度</strong>：下放的時候數 3-4 秒，肌肉在離心階段的張力更大</li>
        <li><strong>加入暫停</strong>：在動作最低點暫停 2 秒再起來，消除慣性讓肌肉做更多功</li>
        <li><strong>減少休息時間</strong>：從 90 秒縮短到 60 秒，增加代謝壓力</li>
        <li><strong>超級組</strong>：兩個動作之間不休息，例如啞鈴推完直接做划船。省時間又增加訓練密度</li>
        <li><strong>1.5 次技術</strong>：蹲到底 → 起來一半 → 再蹲下去 → 完全站起來，算一下。腿會非常有感</li>
      </ul>
      <p>這些技巧讓你在同樣的重量下製造更多的訓練刺激，不一定要一直加重才能進步。</p>

      <h2 id="common-questions">居家啞鈴訓練 Q&A</h2>
      <p><strong>Q：啞鈴練得出大肌肉嗎？</strong></p>
      <p>練得出來。肌肉只認張力，不認器材。只要你能給肌肉足夠的刺激（接近力竭的訓練）並且漸進增加負荷，用啞鈴一樣能長肌肉。不過如果你要練到非常壯碩的程度，最終還是需要更大的負重——這時候可能要考慮加入槓鈴或去健身房。</p>
      <p><strong>Q：沒有椅子可以做臥推嗎？</strong></p>
      <p>可以。地板臥推是很好的替代動作，而且對肩膀更友善。你也可以用啞鈴做伏地挺身的加強版——雙手撐在啞鈴上做伏地挺身，動作幅度更大。</p>
      <p><strong>Q：一次練 20 分鐘有效嗎？</strong></p>
      <p>有效。根據 2019 年發表在《Medicine & Science in Sports & Exercise》的研究，即使是低訓練量（每週每個肌群 5 組），也能產生顯著的肌肥大效果。重點是強度要夠——每組要練到接近力竭（RPE 7-9），而不是輕鬆做完。20 分鐘全力以赴的訓練，比 60 分鐘滑手機穿插練的效果好得多。</p>
      <p><strong>Q：在家練需要暖身嗎？</strong></p>
      <p>一定要。不管在哪裡練都要暖身。在家的暖身可以簡單一點：3-5 分鐘的關節繞環 + 輕重量或徒手做第一個動作的模式就夠了。千萬不要冷啟動就開始做大重量。</p>
      <p><strong>Q：住公寓怕吵到鄰居怎麼辦？</strong></p>
      <p>這是很實際的問題。啞鈴不要放地上摔，放下的時候控制好速度。在地板上鋪一塊厚的瑜伽墊或健身地墊可以有效減少噪音和震動。避免做跳躍類的動作，用靜態的動作替代就好。</p>

      <h2 id="further-reading">延伸閱讀</h2>
      <ul>
        <li><a href="/blog/beginner-weight-training-guide">新手重訓入門指南</a></li>
        <li><a href="/blog/office-worker-exercise-plan">久坐上班族的運動計畫</a></li>
        <li><a href="/blog/advanced-core-training-guide">核心訓練不只是棒式</a></li>
      </ul>
    `,
  },
];
