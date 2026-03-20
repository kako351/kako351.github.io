import SectionHeading from "./SectionHeading";

const careers = [
  {
    company: "ZOZO",
    role: "Android エンジニア",
    period: "2年",
    start: "2024",
    end: null,
    description: "ファッションECプラットフォームのAndroidアプリ開発",
  },
  {
    company: "おいしい健康",
    role: "Android エンジニア",
    period: "5年",
    start: "2018",
    end: "2024",
    description: "ヘルスケア・レシピサービスのAndroidアプリ開発",
  },
  {
    company: "受託開発会社",
    role: "Web・アプリ開発",
    period: "5年",
    start: "2014",
    end: "2018",
    description: "様々なクライアントのWebサイト・アプリの企画・開発",
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
                    <p className="text-text-secondary text-sm">{career.description}</p>
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
