import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="About" subtitle="自己紹介" />

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            エンジニアとして<span className="text-text-primary font-semibold">12年のキャリア</span>を持ちます。
          </p>
          <p>
            受託開発（4年）→ ヘルスケア/レシピサービス「おいしい健康」（5年）→ ファッションEC「ZOZO」（現在）と、
            多様な業界・スケールのプロダクト開発を経験してきました。
          </p>
          <p>
            主な専門は<span className="text-text-primary font-semibold">Kotlin / Jetpack Compose を使ったAndroidアプリ開発</span>です。
            チームでの機能開発から設計・コードレビューまで、実務の幅広い工程を担当してきました。
          </p>
          <p>
            個人開発では「ひつだん」（2万DL超）をはじめ複数のアプリをリリース。
            企画・設計・実装・運営まで一人で完結させる経験が、プロダクト全体を俯瞰する視点につながっています。
          </p>
          <p>
            趣味のコーヒー豆焙煎を販売する「KAKONIWA COFFEE」を運営しており、そのためのコーヒーアプリを自ら作るなど、
            好きなことをプロダクトに変えることを楽しんでいます。
          </p>
          <p className="text-accent font-medium">
            <span className="text-text-primary font-semibold">「テクノロジーの力で、人の生活を豊かにする」</span>プロダクトを作ることをミッションとしています。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "実務経験", value: "12年" },
            { label: "個人アプリDL数", value: "2万+" },
            { label: "リリースアプリ数", value: "5本+" },
            { label: "得意プラットフォーム", value: "Android" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card-bg border border-card-border rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-xs text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
