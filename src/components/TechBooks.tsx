import SectionHeading from "./SectionHeading";

interface Book {
  title: string;
  url: string;
  coverImage: string;
}

const BOOKS: Book[] = [
  {
    title: "おいしい健康 Android Tech Book",
    url: "https://techbookfest.org/product/fzCKu1Z8K8bmpeLvWVADac?productVariantID=qiPCjzVRcFzRvxQVVij8rf",
    coverImage: "https://techbookfest.org/api/product/ogp/image/fzCKu1Z8K8bmpeLvWVADac",
  },
  {
    title: "Composeで作るWear OSアプリ開発",
    url: "https://techbookfest.org/product/cGiwAgnfVFhYKWt11HPHhr?productVariantID=nCfunqzCManD0fg3ytS1cN",
    coverImage: "https://techbookfest.org/api/product/ogp/image/cGiwAgnfVFhYKWt11HPHhr",
  },
  {
    title: "Canvas of Compose",
    url: "https://techbookfest.org/product/p6t8rxQ97BJ9rxzJVaG7Ra?productVariantID=cKpKL32xLkC0wuS9sWWxCU",
    coverImage: "https://techbookfest.org/api/product/ogp/image/p6t8rxQ97BJ9rxzJVaG7Ra",
  },
];

export default function TechBooks() {
  return (
    <section id="books" className="py-20 px-4 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Tech Books" subtitle="技術書典" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOOKS.map((book) => (
            <a
              key={book.url}
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card-bg border border-card-border rounded-xl overflow-hidden card-hover block"
            >
              <div className="aspect-[1200/630] bg-surface-light overflow-hidden">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-sm">{book.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://techbookfest.org/organization/bLtp2JQ1YiNNnykJ0rGQga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
          >
            技術書典で見る
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
