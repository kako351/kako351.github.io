import SectionHeading from "./SectionHeading";

interface Product {
  name: string;
  platform: string;
  description: string;
  tech?: string;
  achievement?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  iconUrl?: string;
  isArchived?: boolean;
}

const activeProducts: Product[] = [
  {
    name: "ひつだん",
    platform: "Android",
    description: "筆談アプリ",
    achievement: "2万DL以上 / アプリ内課金でマネタイズ",
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.birth.h3",
    iconUrl: "https://play-lh.googleusercontent.com/sZq-_wGDY_TxFddzrSMs9s3qTmZ9ZWkNgbCNbsQSUaaqw6lZPTi_njI46YimrvdZszY=w128-h128",
  },
  {
    name: "コーヒーコンパス",
    platform: "iOS / Android",
    description: "SNSライクなコーヒー手帳",
    tech: "Flutter",
    achievement: "個人では自身初のリリースしたiOSアプリ",
    appStoreUrl: "https://apps.apple.com/jp/app/%E5%8C%BF%E5%90%8D%E5%9E%8B%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E6%89%8B%E5%B8%B3-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%82%B3%E3%83%B3%E3%83%91%E3%82%B9/id6741160294",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kako351.coffee_compass.android",
    iconUrl: "https://play-lh.googleusercontent.com/g-2B07D_hqSwBpjuAddTVFKFguu7fGSxiuOmGZiBz46IOeSkJtnn8HOOiq16okeLjLE=w128-h128",
  },
  {
    name: "無音カメラ: 静かにトレルンです",
    platform: "Android",
    description: "無音で最高画質のカメラアプリ",
    achievement: "1,000DL以上",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kako351.torerundesu",
    iconUrl: "https://play-lh.googleusercontent.com/Sp1FCOICTZuZSY2twX1QZh6ORC28P89OxmxvW8VQxa-zWlv9hllM6V1BnGTs5SSKG9IS=w128-h128",
  },
  {
    name: "トイピアノ",
    platform: "WearOS",
    description: "WearOS向けトイピアノアプリ",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kako351.toypiano.wear",
    iconUrl: "https://play-lh.googleusercontent.com/cwmPNf0LA49Io0sLSlXyj8H4-KddTY_eZP-j0dtp6Du8yHO-mMXi95V_6IBamp0OUdYsrcX7ZKraQK5uIJhM_Xg=w128-h128",
  },
];

const archivedProducts: Product[] = [
  {
    name: "コーヒー好きのためのコーヒー手帳",
    platform: "Android",
    description: "コーヒーの記録・管理アプリ",
    tech: "React Native",
    achievement: "2,000DL以上 / NTTドコモ「Tabmo」で紹介",
    isArchived: true,
  },
];

function ProductCard({ product }: { product: Product }) {
  const platformColors: Record<string, string> = {
    Android: "bg-green-200 dark:bg-green-500/10 text-green-700 dark:text-green-400",
    "iOS / Android": "bg-blue-200 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400",
    WearOS: "bg-purple-200 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400",
  };

  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-6 card-hover h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${platformColors[product.platform] || "bg-gray-500/10 text-gray-400"}`}>
          {product.platform}
        </span>
        {product.isArchived && (
          <span className="text-xs text-text-secondary bg-surface-light px-2 py-1 rounded-full">
            Archive
          </span>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="text-lg font-bold">{product.name}</h3>
        {product.iconUrl && (
          <img
            src={product.iconUrl}
            alt={`${product.name} icon`}
            className="w-14 h-14 rounded-2xl flex-shrink-0"
          />
        )}
      </div>
      <p className="text-text-secondary text-sm mb-3 flex-1">{product.description}</p>

      {product.tech && (
        <p className="text-xs text-accent mb-2">Tech: {product.tech}</p>
      )}

      {product.achievement && (
        <p className="text-xs text-text-secondary mb-3">{product.achievement}</p>
      )}

      <div className="flex flex-col gap-1.5">
        {product.appStoreUrl && (
          <a
            href={product.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
        )}
        {product.playStoreUrl && (
          <a
            href={product.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </a>
        )}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-20 px-4 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Products" subtitle="個人プロダクト" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activeProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-text-secondary mb-4 text-center">過去のプロダクト</h3>
          <div className="max-w-md mx-auto">
            {archivedProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://play.google.com/store/apps/dev?id=4958996780173076629&hl=ja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-card-border rounded-full text-sm text-text-secondary hover:text-accent hover:border-accent transition-all"
          >
            Google Play デベロッパーページ
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
