"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

interface Book {
  title: string;
  url: string;
  coverImage?: string;
  description?: string;
}

export default function TechBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Try fetching the techbookfest page via a proxy
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://techbookfest.org/organization/bLtp2JQ1YiNNnykJ0rGQga"
        );
        const data = await res.json();
        if (data.status === "ok" && data.items) {
          setBooks(
            data.items.map((item: { title: string; link: string; thumbnail?: string; description?: string }) => ({
              title: item.title,
              url: item.link,
              coverImage: item.thumbnail,
              description: item.description,
            }))
          );
        }
      } catch {
        // Page is not RSS, so we'll just show the link
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section id="books" className="py-20 px-4 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Tech Books" subtitle="技術書典" />

        {loading ? (
          <div className="flex justify-center">
            <div className="bg-card-bg border border-card-border rounded-xl p-8 animate-pulse w-full max-w-md">
              <div className="h-48 bg-surface-light rounded mb-4" />
              <div className="h-5 bg-surface-light rounded w-3/4" />
            </div>
          </div>
        ) : books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <a
                key={book.url}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-bg border border-card-border rounded-xl overflow-hidden card-hover block"
              >
                {book.coverImage && (
                  <div className="aspect-[3/4] bg-surface-light overflow-hidden">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-sm">{book.title}</h3>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-card-bg border border-card-border rounded-xl p-8 max-w-md mx-auto card-hover">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                技術書典で技術同人誌を頒布しています
              </p>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://techbookfest.org/organization/bLtp2JQ1YiNNnykJ0rGQga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-card-border rounded-full text-sm text-text-secondary hover:text-accent hover:border-accent transition-all"
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
