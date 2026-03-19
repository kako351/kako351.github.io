import SectionHeading from "./SectionHeading";

const businesses = [
  {
    name: "かこの箱庭",
    url: "https://kakoniwa.com/",
    description: "アプリを開発する事業",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "KAKONIWA COFFEE",
    url: "https://kakoniwa-coffee.stores.jp/",
    description: "コーヒー豆の焙煎と販売",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Business() {
  return (
    <section id="business" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Business" subtitle="個人事業" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {businesses.map((biz) => (
            <a
              key={biz.name}
              href={biz.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card-bg border border-card-border rounded-xl p-8 card-hover block text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                {biz.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{biz.name}</h3>
              <p className="text-text-secondary text-sm">{biz.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
