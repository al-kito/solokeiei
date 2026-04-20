export const metadata = {
  title: "なぜ一人で働くのか",
  description:
    "フリーランスや一人社長という働き方を選んだ理由は、安定よりも選択肢を持つためです。",
};

export default function WhyPage() {
  return (
    <article className="space-y-10">

      {/* Hero */}
      <section className="relative overflow-hidden rounded-lg bg-amber-600 px-8 py-12 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0">
          <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            {/* Large light blob — top right */}
            <path
              d="M620 -40 C740 -70 860 30 850 140 C842 230 760 280 650 260 C540 240 470 170 500 90 C526 20 500 -10 620 -40 Z"
              fill="white" opacity="0.1"
            />
            {/* Medium blob — bottom left */}
            <path
              d="M -40 280 C 30 220 150 240 170 320 C 188 390 100 440 0 432 C -90 424 -120 360 -100 310 C -82 265 -110 340 -40 280 Z"
              fill="white" opacity="0.08"
            />
            {/* Branching arrows — choice motif */}
            <path d="M 680 340 L 720 300 L 760 260" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"/>
            <path d="M 720 300 L 770 320" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
            <path d="M 660 370 L 720 300" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
            {/* Small circles */}
            <circle cx="760" cy="260" r="6" fill="white" opacity="0.4"/>
            <circle cx="770" cy="320" r="5" fill="white" opacity="0.35"/>
            <circle cx="660" cy="370" r="4" fill="white" opacity="0.3"/>
            {/* Dot grid */}
            <circle cx="100" cy="60" r="2" fill="white" opacity="0.2"/>
            <circle cx="130" cy="60" r="2" fill="white" opacity="0.2"/>
            <circle cx="160" cy="60" r="2" fill="white" opacity="0.2"/>
            <circle cx="100" cy="90" r="2" fill="white" opacity="0.2"/>
            <circle cx="130" cy="90" r="2" fill="white" opacity="0.2"/>
            <circle cx="160" cy="90" r="2" fill="white" opacity="0.2"/>
            <circle cx="100" cy="120" r="2" fill="white" opacity="0.2"/>
            <circle cx="130" cy="120" r="2" fill="white" opacity="0.2"/>
            <circle cx="160" cy="120" r="2" fill="white" opacity="0.2"/>
            {/* Abstract arc */}
            <path d="M 400 380 Q 480 300 560 280" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.25"/>
            <path d="M 380 380 Q 470 280 560 250" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.15"/>
          </svg>
        </div>

        <div className="relative space-y-5">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            なぜ一人で働くのか？
          </h1>
          <p className="text-base leading-8 text-amber-100 sm:text-lg">
            私が一人社長という働き方を選んだ理由は、雇用の安定よりも状況に応じて方向転換できる選択肢や自由が本当の意味で心身の安定となり、更には自己成長に繋がるためです。
          </p>
        </div>
      </section>

      {/* Opening */}
      <section className="rounded-lg border border-zinc-200 bg-white px-8 py-8 space-y-5">
        <p className="text-base leading-8 text-zinc-700">
          フリーランスや一人社長という働き方には「不安定」というイメージがあります。
          副業だけであれば本業もあるため安心や安定もありますが、フリーランスや一人社長は会社員と違って収入が保証されているわけではなく、自分で仕事を作らなければならないからです。
        </p>
        <p className="text-base leading-8 text-zinc-700">
          私は、企業に属したまま副業を始めて5年目、会社を創業してちょうど3期目に入っています。
          フリーランス（個人事業主）も社長まだ数年の経験しかありませんが、フリーランスや一人社長という働き方を「不安定」とはあまり感じておらず、むしろ逆に会社員時代よりも大きな安心感を感じています。
        </p>

        <div className="border-l-4 border-amber-500 bg-white pl-5 py-4">
          <p className="text-xs font-semibold text-amber-600">その理由は</p>
          <p className="mt-1 text-2xl font-bold text-zinc-900">いつでも方向転換できる選択肢や自由があるから</p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            いつでも方向転換できる自由がフリーランスや一人社長の最大のメリットであり、それが安心感の理由だと考えています（方向転換できるように常に準備は必要です）。
          </p>
        </div>
      </section>

      {/* Section 1 — 結論 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">1</span>
          <h2 className="text-xl font-bold text-zinc-900">フリーランス・一人社長は「選択肢」を持てる働き方</h2>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white px-6 py-6 space-y-3">
          <p className="text-base leading-8 text-zinc-700">
            毎週、毎月のように方向転換している様ではまずいですが、数年単位で見たときに必要に応じて働き方や仕事の内容を変えていけることは大きな安心感になります。
            職種や業界など仕事の内容だけでなく、働き方や収入の作り方などを自分で選び続けることができますし、必要に応じて会社員に戻ることもできます。
        </p>
        <p className="text-base leading-8 text-zinc-700">
            これだけ見ると難しかったり大変そうに思う方もいると思いますが、昨今のAI産業革命期では大手企業に居ても安定は安心は約束されていませんし、会社員を長く続けるといつの間にか選択肢が狭まっていることが多いです。そういった事を踏まえると、状況に応じた選択肢を持ち続けることが今後の安心感につながると私は感じています。
          </p>
        </div>
      </section>

      {/* Section 2 — 比較 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">2</span>
          <h2 className="text-xl font-bold text-zinc-900">会社員 vs フリーランス・一人社長</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* 会社員 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 space-y-4">
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              会社員
            </span>
            <p className="text-base leading-8 text-zinc-600">
              毎月決まった収入（給料）が入り、安定しています。また、社会保険や福利厚生など日々の生活を支える保証も整っています。
              ただ、自分で選べる範囲はどうしても限定されます。
            </p>
            <div>
              <p className="mb-2 text-xs font-medium text-zinc-500">選べる範囲が限られるもの</p>
              <div className="flex flex-wrap gap-2">
                {["給料（収入金額）", "働く場所", "仕事の内容", "収入の上げ方", "将来の方向性"].map((item) => (
                  <span key={item} className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* フリーランス */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 space-y-4">
            <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              フリーランス・一人社長
            </span>
            <p className="text-base leading-8 text-zinc-600">
              収入の保証はないため、日々の生活は不安定になる可能性がありますが、その代わりにほぼすべてのことをいつでも自分で決めることができます。
            </p>
            <div>
              <p className="mb-2 text-xs font-medium text-amber-600">自分で選び続けられること</p>
              <div className="flex flex-wrap gap-2">
                {["どんな仕事をするか","手取りをいくらにするか", "どの顧客と働くか", "どのくらい働くか", "事業の方向性"].map((item) => (
                  <span key={item} className="rounded-full border border-amber-200 bg-white px-3 py-1 text-xs text-amber-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — 方向転換 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">3</span>
          <h2 className="text-xl font-bold text-zinc-900">方向転換できることが最大の安心になる</h2>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white px-6 py-6 space-y-3">
          <p className="text-base leading-8 text-zinc-700">
            今の仕事がうまくいかなくなったとしても、別の仕事に挑戦することができます。
          </p>
          <p className="text-base leading-8 text-zinc-700">
            新しい事業を始めることも、働き方そのものを変えることもできます。
          </p>
        </div>
      </section>

      {/* Section 4 — このメディアで伝えたいこと */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">4</span>
          <h2 className="text-xl font-bold text-zinc-900">このメディアで伝えたいこと</h2>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white px-6 py-6 space-y-3">
          <p className="text-base leading-8 text-zinc-700">
            このメディアでは、一人社長やフリーランスという働き方について発信していきます。
            ただし、単に独立を勧めるわけではありません。
          </p>
          <p className="text-base leading-8 text-zinc-700">
            会社員、副業、フリーランス、法人化など、それぞれの働き方にはメリットとデメリットがあります。
            大切なのは、自分にとって納得できる選択肢を持つことです。
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["会社員", "副業", "フリーランス", "法人化", "一人社長"].map((item) => (
              <span key={item} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="rounded-lg bg-zinc-900 px-8 py-8 space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-amber-400">まとめ</p>
        <p className="text-base leading-8 text-zinc-300">
          フリーランスや一人社長は、不安定な働き方だと言われることがあります。
        </p>
        <p className="text-xl font-semibold leading-snug text-white">
          しかし、見方を変えれば「選択肢を持てる働き方」でもあります。
        </p>
        <p className="text-base leading-8 text-zinc-300">
          働き方を自分で決められること、そして必要に応じて方向転換できること。
          この自由度こそが、一人で事業を続ける大きな魅力だと思います。
        </p>
      </section>

    </article>
  );
}
