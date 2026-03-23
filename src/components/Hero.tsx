import React from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        } as React.CSSProperties}
      />
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-text-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-text-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="w-28 h-28 mx-auto mb-8 rounded-full border border-card-border p-0.5 shadow-lg">
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

        <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-6xl font-bold mb-6">
          <span style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as React.CSSProperties}>人の生活を豊かに</span>
        </h1>

        <div className="animate-fade-in-up animate-delay-200 flex items-center justify-center gap-3 mb-6">
          <span className="px-3 py-1 text-sm rounded-full border border-card-border text-text-secondary bg-card-bg">
            Android Engineer
          </span>
          <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
          <span className="px-3 py-1 text-sm rounded-full border border-card-border text-text-secondary bg-card-bg">
            Coffee Roaster
          </span>
          <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
          <span className="px-3 py-1 text-sm rounded-full border border-card-border text-text-secondary bg-card-bg">
            個人開発
          </span>
        </div>

        <p className="animate-fade-in-up animate-delay-200 text-base text-text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
          Kotlin / Jetpack Compose を得意とするAndroidエンジニアです。<br/>
          趣味で自家焙煎したコーヒー豆の販売もしています。
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
