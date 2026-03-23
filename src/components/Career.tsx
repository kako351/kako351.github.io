"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

type CareerDetails = {
  overview: string;
  approach: string;
  achievements: string;
  techStack: string[];
};

const careers = [
  {
    company: "ZOZO",
    role: "Android エンジニア",
    period: "2年",
    start: "2024",
    end: null,
    description: "ファッションECプラットフォームのAndroidアプリ開発",
    bullets: [
      "Kotlin / Jetpack Compose を使ったUI実装・機能開発・コードレビュー",
      "AIを活用した振り返り支援ツールを導入し、チームの振り返り実施率を78%改善",
      "AIによるプランニング補助ツールを開発し、開発工数における案件割合を16%向上",
    ],
    details: {
      overview:
        "ZOZOTOWNのAndroidアプリにおける既存機能の改善・不具合修正・保守運用に従事。シニアエンジニアとして影響範囲や将来の運用を考慮した改修を担当するほか、生成AI（Claude Code）を業務に取り入れてチーム内へ展開。技術ブログを執筆しAndroidDagashiにも掲載された。",
      approach:
        "振り返りが常態化せず実施率がほぼ0%だった課題に対し、AIによるKPT自動生成を導入。開発工数の大半が保守対応に割かれていた問題にはAIプランニング補助ツールで対処した。複数仕様追加が重なった改修ではAndroid側をリードし、影響範囲の洗い出しと段階的実装で品質を担保。ロゴ表記ガイドラインの策定をPM・デザイナーに提案し合意形成を主導した。",
      achievements:
        "振り返り実施率 0% → 77.8% ／ 開発工数における案件割合 +16.7% ／ QAフェーズで不具合ゼロのリリースを実現",
      techStack: ["Kotlin", "Jetpack Compose", "Claude Code", "生成AI活用"],
    } satisfies CareerDetails,
  },
  {
    company: "おいしい健康",
    role: "Android エンジニア",
    period: "5年",
    start: "2018",
    end: "2024",
    description: "ヘルスケア・レシピサービスのAndroidアプリ開発",
    bullets: [
      "KPI改善プロジェクトに従事し、登録開始率を23.3%向上・登録完了率を16%向上",
      "Kotlin移行・Jetpack Compose導入など技術的負債の解消を推進",
      "アレルゲン除外検索・食事記録など主要機能の設計・実装を主導",
    ],
    details: {
      overview:
        "ヘルスケア・レシピサービス「おいしい健康」のAndroidアプリ立ち上げからリリース・有償化・Compose導入・KPI改善まで一貫して担当。メンバーからチームリーダーへとキャリアを積み、採用活動や開発環境整備（CI/CD整備、aab自動アップロードなど）も並走して担った。",
      approach:
        "登録フローの離脱率改善をKPIに設定し、A/BテストとFirebase Analyticsを設計段階から組み込んで施策を反復。アプリ内課金（Play Billing Library）はゼロから主担当として実装。Jetpack Composeをいち早く導入し、2022年にはDevFest & ADS JPに登壇して社外へ知見を発信した。",
      achievements:
        "登録開始率 +23.3% ／ 登録完了率 +16% ／ 採用強化によりチームメンバーを2倍に拡大",
      techStack: ["Kotlin", "Jetpack Compose", "Coroutines/Flow", "RxJava", "Dagger Hilt", "MVVM", "Play Billing Library", "Firebase", "ExoPlayer", "CircleCI", "BigQuery"],
    } satisfies CareerDetails,
  },
  {
    company: "受託開発会社",
    role: "システムエンジニア",
    period: "4年",
    start: "2014",
    end: "2018",
    description: "多業種クライアントのWebサイト・アプリ企画・開発",
    bullets: [
      "SNS・クロスメディアアプリ・BLE連携など多様な領域のアプリを要件定義〜リリースまで一貫して対応",
    ],
    details: null,
  },
];

export default function Career() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const selectedCareer = careers.find((c) => c.company === selectedCompany) ?? null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCompany(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                  <div
                    className={`bg-card-bg border border-card-border rounded-xl p-6 card-hover ${career.details ? "cursor-pointer" : ""}`}
                    onClick={() => career.details && setSelectedCompany(career.company)}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-text-secondary">
                        {career.start} – {career.end ?? "現在"}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                        {career.period}
                      </span>
                      {career.details && (
                        <span className="ml-auto text-xs text-text-secondary">詳細 →</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{career.company}</h3>
                    <p className="text-accent text-sm mb-2">{career.role}</p>
                    <p className="text-text-secondary text-sm mb-3">{career.description}</p>
                    <ul className="space-y-1">
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

      {/* Modal */}
      {selectedCareer?.details && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCompany(null)}
        >
          <div
            className="bg-card-bg border border-card-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between p-6 border-b border-card-border">
              <div>
                <h2 className="text-2xl font-bold">{selectedCareer.company}</h2>
                <p className="text-accent text-sm mt-1">{selectedCareer.role}</p>
                <p className="text-text-secondary text-xs mt-1">
                  {selectedCareer.start} – {selectedCareer.end ?? "現在"}　{selectedCareer.period}
                </p>
              </div>
              <button
                onClick={() => setSelectedCompany(null)}
                className="text-text-secondary hover:text-text-primary transition-colors ml-4 text-xl leading-none"
                aria-label="閉じる"
              >
                ✕
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6 space-y-6">
              {(
                [
                  { label: "概要・担当領域", key: "overview" },
                  { label: "課題と取り組み", key: "approach" },
                  { label: "主な実績", key: "achievements" },
                ] as const
              ).map(({ label, key }) => (
                <div key={key}>
                  <h3 className="text-sm font-semibold text-accent mb-2">■ {label}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{selectedCareer.details![key]}</p>
                </div>
              ))}

              <div>
                <h3 className="text-sm font-semibold text-accent mb-2">■ 技術スタック</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCareer.details.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
