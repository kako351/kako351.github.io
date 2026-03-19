import SectionHeading from "./SectionHeading";

const careers = [
  {
    company: "ZOZO",
    role: "Android エンジニア",
    period: "5年",
    description: "ファッションECプラットフォームのAndroidアプリ開発",
  },
  {
    company: "おいしい健康",
    role: "Android エンジニア",
    period: "5年",
    description: "ヘルスケア・レシピサービスのAndroidアプリ開発",
  },
  {
    company: "受託開発会社",
    role: "Web・アプリ開発",
    period: "5年",
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
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 mt-2 ring-4 ring-primary" />

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="bg-card-bg border border-card-border rounded-xl p-6 card-hover">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3">
                      {career.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{career.company}</h3>
                    <p className="text-accent text-sm mb-2">{career.role}</p>
                    <p className="text-text-secondary text-sm">{career.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
