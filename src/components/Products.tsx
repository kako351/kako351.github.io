import SectionHeading from "./SectionHeading";

interface Product {
  name: string;
  platform: string;
  description: string;
  tech?: string;
  achievement?: string;
  playStoreUrl?: string;
  isArchived?: boolean;
}

const activeProducts: Product[] = [
  {
    name: "ひつだん",
    platform: "Android",
    description: "筆談アプリ",
    achievement: "2万DL以上 / アプリ内課金でマネタイズ",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kako351.hitudan",
  },
  {
    name: "コーヒーコンパス",
    platform: "iOS / Android",
    description: "SNSライクなコーヒー手帳",
    tech: "Flutter",
    achievement: "個人では自身初のリリースしたiOSアプリ",
  },
  {
    name: "無音カメラ: 静かにトレルンです",
    platform: "Android",
    description: "無音で最高画質のカメラアプリ",
    achievement: "1,000DL以上",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kako351.silentcamera",
  },
  {
    name: "トイピアノ",
    platform: "WearOS",
    description: "WearOS向けトイピアノアプリ",
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

      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-text-secondary text-sm mb-3 flex-1">{product.description}</p>

      {product.tech && (
        <p className="text-xs text-accent mb-2">Tech: {product.tech}</p>
      )}

      {product.achievement && (
        <p className="text-xs text-text-secondary mb-3">{product.achievement}</p>
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
