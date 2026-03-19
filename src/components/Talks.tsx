"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

interface Talk {
  title: string;
  url: string;
  thumbnail?: string;
  date?: string;
}

export default function Talks() {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        // Fetch SpeakerDeck RSS
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://speakerdeck.com/kako351.rss"
        );
        const data = await res.json();
        if (data.status === "ok" && data.items) {
          const talkList: Talk[] = data.items.slice(0, 6).map(
            (item: { title: string; link: string; pubDate: string; thumbnail?: string; description?: string }) => {
              // Try to extract image from description
              let thumbnail = item.thumbnail;
              if (!thumbnail && item.description) {
                const match = item.description.match(/src="([^"]+)"/);
                if (match) thumbnail = match[1];
              }
              return {
                title: item.title,
                url: item.link,
                date: item.pubDate,
                thumbnail,
              };
            }
          );
          setTalks(talkList);
        }
      } catch {
        // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchTalks();
  }, []);

  return (
    <section id="talks" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Talks" subtitle="登壇資料" />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl overflow-hidden animate-pulse">
                <div className="aspect-video bg-surface-light" />
                <div className="p-5">
                  <div className="h-5 bg-surface-light rounded w-3/4 mb-2" />
                  <div className="h-4 bg-surface-light rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : talks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {talks.map((talk) => (
              <a
                key={talk.url}
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-bg border border-card-border rounded-xl overflow-hidden card-hover block"
              >
                <div className="aspect-video bg-surface-light flex items-center justify-center overflow-hidden">
                  {talk.thumbnail ? (
                    <img
                      src={talk.thumbnail}
                      alt={talk.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <svg className="w-12 h-12 text-text-secondary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{talk.title}</h3>
                  {talk.date && (
                    <p className="text-text-secondary text-xs">
                      {new Date(talk.date).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-text-secondary mb-4">登壇資料はSpeakerDeckで公開しています</p>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://speakerdeck.com/kako351"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-card-border rounded-full text-sm text-text-secondary hover:text-accent hover:border-accent transition-all"
          >
            すべての登壇資料を見る
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
