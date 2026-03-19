import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent to-accent-light p-0.5">
            <div className="w-full h-full rounded-full bg-primary overflow-hidden">
              <Image
                src="/kako351-icon.png"
                alt="kako351"
                width={112}
                height={112}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-6xl font-bold mb-4">
          <span className="gradient-text">日常を少し豊かに</span>
        </h1>

        <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl text-text-secondary mb-4">
          アプリエンジニア、時々コーヒー焙煎士
        </p>

        <p className="animate-fade-in-up animate-delay-200 text-base text-text-secondary mb-8">
          個人開発プロジェクト{" "}
          <a
            href="https://kakoniwa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light transition-colors underline underline-offset-4"
          >
            かこの箱庭
          </a>
        </p>

        <div className="animate-fade-in-up animate-delay-300">
          <SocialLinks />
        </div>

        <div className="animate-fade-in-up animate-delay-300 mt-12">
          <a
            href="#about"
            className="inline-block text-text-secondary hover:text-accent transition-colors"
            aria-label="下にスクロール"
          >
            <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
