import Image from "next/image";
import SectionHeading from "./SectionHeading";

const businesses = [
  {
    name: "かこの箱庭",
    url: "https://kakoniwa.com/",
    description: "アプリを開発する事業",
    imageSrc: "/kakoniwa.png",
  },
  {
    name: "KAKONIWA COFFEE",
    url: "https://kakoniwa-coffee.stores.jp/",
    description: "コーヒー豆の焙煎と販売",
    imageSrc: "/kakoniwa-coffee.png",
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Image src={biz.imageSrc} alt={biz.name} width={64} height={64} className="object-cover w-full h-full" />
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
