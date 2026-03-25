import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="About" subtitle="自己紹介" />

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            Androidを専門に、エンジニアを<span className="text-text-primary font-semibold">12年</span>。
          </p>
          <p>
            受託開発を4年、その後はヘルスケア・レシピサービス「おいしい健康」で5年、現在は「ZOZO」でAndroidアプリ開発に従事。<span className="text-text-primary font-semibold">Kotlin / Jetpack Compose を使ったAndroidアプリ開発</span>を中心に、機能開発、設計、コードレビューまで幅広く担当。
          </p>
          <p>
            個人開発では複数のアプリをリリースし、企画・設計・実装・運営まで一人で回している。最近はクロスプラットフォーム開発を触っている。
          </p>
          <p>
            趣味でコーヒー豆を焙煎していて、「KAKONIWA COFFEE」という形で販売。
            その流れでコーヒー用のアプリも自分で作るなど、好きなことをそのままプロダクトにしていくのが好き。
          </p>
          <p className="text-accent font-medium">
            <span className="text-text-primary font-semibold">「テクノロジーの力で、人の生活を少し豊かにする」</span>が、自分のテーマ。
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
