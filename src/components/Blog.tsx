"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

interface BlogPost {
  title: string;
  url: string;
  date: string;
  ogImage?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to fetch RSS via a CORS proxy or fallback to static data
    const fetchBlog = async () => {
      try {
        // Use an RSS-to-JSON API
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://kako351.dev/index.xml"
        );
        const data = await res.json();
        if (data.status === "ok" && data.items) {
          const blogPosts: BlogPost[] = data.items.slice(0, 6).map(
            (item: { title: string; link: string; pubDate: string; thumbnail?: string; enclosure?: { link?: string } }) => ({
              title: item.title,
              url: item.link,
              date: item.pubDate,
              ogImage: item.thumbnail || item.enclosure?.link,
            })
          );
          setPosts(blogPosts);
        }
      } catch {
        // Fallback: empty
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  return (
    <section id="blog" className="py-20 px-4 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Blog" subtitle="技術ブログ" />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl overflow-hidden animate-pulse">
                <div className="h-40 bg-surface-light" />
                <div className="p-5">
                  <div className="h-5 bg-surface-light rounded w-3/4 mb-2" />
                  <div className="h-4 bg-surface-light rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-bg border border-card-border rounded-xl overflow-hidden card-hover block"
              >
                <div className="h-40 bg-surface-light flex items-center justify-center overflow-hidden">
                  {post.ogImage ? (
                    <img
                      src={post.ogImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-4xl text-text-secondary/20">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-text-secondary text-xs">
                    {new Date(post.date).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center text-text-secondary">
            <p>ブログ記事を読み込み中...</p>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://kako351.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-card-border rounded-full text-sm text-text-secondary hover:text-accent hover:border-accent transition-all"
          >
            すべての記事を見る
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
