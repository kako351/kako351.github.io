import SectionHeading from "./SectionHeading";

const careers = [
  {
    company: "ZOZO",
    role: "Android エンジニア",
    period: "2年",
    start: "2024",
    end: null,
    description: "ファッションECプラットフォームのAndroidアプリ開発",
    bullets: [
      "Kotlin / Jetpack Compose を使ったUI実装・機能開発",
      "大規模ECアプリの設計・改善・コードレビュー",
      "高頻度リリース環境での品質維持とチーム開発",
    ],
  },
  {
    company: "おいしい健康",
    role: "Android エンジニア",
    period: "5年",
    start: "2018",
    end: "2024",
    description: "ヘルスケア・レシピサービスのAndroidアプリ開発",
    bullets: [
      "Kotlin移行・Jetpack Compose導入など技術的負債の解消を推進",
      "レシピ検索・食事記録など主要機能の設計・実装を主導",
      "CircleCI整備によるCI/CD改善でリリースフロー効率化",
    ],
  },
  {
    company: "受託開発会社",
    role: "Web・アプリ開発",
    period: "4年",
    start: "2014",
    end: "2018",
    description: "多業種クライアントのWebサイト・アプリ企画・開発",
    bullets: [
      "医療・小売・ECなど幅広い業種の要件定義〜リリースまで担当",
      "Android / Webの両方を並行して習得",
      "プロダクト全体を見渡すフルスタックな視点を身につける",
    ],
  },
];

export default function Career() {
  return (
    <section id="career" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Career" subtitle="略歴" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-card-border sm:-translate-x-px" />

          <div className="space-y-12">
            {careers.map((career, index) => (
              <div
                key={career.company}
                className={`relative flex flex-col sm:flex-row gap-4 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot + year label */}
                <div className="absolute left-4 sm:left-1/2 flex flex-col items-center -translate-x-1/2 mt-2">
                  <div className="w-3 h-3 bg-accent rounded-full ring-4 ring-primary" />
                  <span className="mt-1 text-xs text-text-secondary whitespace-nowrap">
                    {career.end ?? "現在"}
                  </span>
                </div>

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="bg-card-bg border border-card-border rounded-xl p-6 card-hover">
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "sm:justify-end" : ""}`}>
                      <span className="text-sm font-medium text-text-secondary">
                        {career.start} – {career.end ?? "現在"}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                        {career.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{career.company}</h3>
                    <p className="text-accent text-sm mb-2">{career.role}</p>
                    <p className="text-text-secondary text-sm mb-3">{career.description}</p>
                    <ul className={`space-y-1 ${index % 2 === 0 ? "sm:text-right" : ""}`}>
                      {career.bullets.map((bullet) => (
                        <li key={bullet} className="text-xs text-text-secondary flex items-start gap-1.5">
                          <span className="text-accent mt-0.5 shrink-0">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 過去ラベル */}
        <div className="flex items-center justify-center mt-8">
          <span className="px-3 py-1 text-xs font-medium border border-card-border text-text-secondary rounded-full">2014〜</span>
        </div>
      </div>
    </section>
  );
}
