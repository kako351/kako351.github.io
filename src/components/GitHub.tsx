"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  fork: boolean;
  updated_at: string;
}

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload?: Record<string, unknown>;
}

const languageColors: Record<string, string> = {
  Kotlin: "#A97BFF",
  TypeScript: "#3178C6",
  Swift: "#F05138",
  Dart: "#00B4AB",
  JavaScript: "#F7DF1E",
  Java: "#B07219",
  Ruby: "#CC342D",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Shell: "#89e051",
};

const skillColors: Record<string, string> = {
  // Mobile
  Kotlin: "#A97BFF",
  Java: "#B07219",
  Flutter: "#54C5F8",
  Dart: "#00B4AB",
  "React Native": "#087EA4",
  "Jetpack Compose": "#4285F4",
  // Web
  TypeScript: "#3178C6",
  React: "#087EA4",
  HTML: "#E34F26",
  CSS: "#1572B6",
  // Backend / Infra
  Firebase: "#FFCA28",
  "GitHub Actions": "#2088FF",
  CircleCI: "#888888",
  Supabase: "#3ECF8E",
  GCP: "#4285F4",
  BigQuery: "#669DF6",
  // Tools
  Git: "#F05032",
  Figma: "#F24E1E",
  "Android Studio": "#3DDC84",
  Github: "#8B949E",
  "VS Code": "#007ACC",
  // AI
  "Claude Code": "#D97757",
  Codex: "#74AA9C",
  "Gemini CLI": "#4285F4",
  "OpenAI API": "#74AA9C",
  "Atlassian Rovo": "#0052CC",
};

const skillCategories = [
  {
    name: "Mobile",
    skills: ["Kotlin", "Java", "Flutter", "Dart", "React Native", "Jetpack Compose"],
  },
  {
    name: "Web",
    skills: ["TypeScript", "React", "HTML", "CSS"],
  },
  {
    name: "Backend / Infra",
    skills: ["Firebase", "GitHub Actions", "CircleCI", "Supabase", "GCP", "BigQuery"],
  },
  {
    name: "Tools",
    skills: ["Git", "Figma", "Android Studio", "Github", "VS Code"],
  },
  {
    name: "AI",
    skills: ["Claude Code", "Codex", "Gemini CLI", "OpenAI API", "Atlassian Rovo"],
  },
];

export default function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://api.github.com/users/kako351/repos?sort=updated&per_page=6")
        .then((r) => r.json())
        .catch(() => []),
      fetch("https://api.github.com/users/kako351/events/public?per_page=10")
        .then((r) => r.json())
        .catch(() => []),
    ]).then(([repoData, eventData]) => {
      if (Array.isArray(repoData)) {
        setRepos(repoData.filter((r: Repo) => !r.fork).slice(0, 6));
      }
      if (Array.isArray(eventData)) {
        setEvents(eventData.slice(0, 5));
      }
      setLoading(false);
    });
  }, []);

  const formatEventType = (type: string) => {
    const map: Record<string, string> = {
      PushEvent: "Pushed to",
      CreateEvent: "Created",
      PullRequestEvent: "PR on",
      IssuesEvent: "Issue on",
      WatchEvent: "Starred",
      ForkEvent: "Forked",
      DeleteEvent: "Deleted in",
      ReleaseEvent: "Released",
    };
    return map[type] || type.replace("Event", "");
  };

  return (
    <section id="github" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="GitHub" subtitle="オープンソース活動" />

        {/* Skill Map */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">Skill Map</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {skillCategories.map((category) => (
              <div key={category.name} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h4 className="text-sm font-semibold text-accent mb-3">{category.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const color = skillColors[skill];
                    return (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={
                          color
                            ? { backgroundColor: `${color}22`, color, border: `1px solid ${color}55` }
                            : { backgroundColor: "var(--surface-light)", color: "var(--text-secondary)" }
                        }
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Repositories */}
        <h3 className="text-xl font-bold text-center mb-8">Recent Repositories</h3>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-6 animate-pulse">
                <div className="h-5 bg-surface-light rounded w-3/4 mb-3" />
                <div className="h-4 bg-surface-light rounded w-full mb-2" />
                <div className="h-4 bg-surface-light rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-bg border border-card-border rounded-xl p-6 card-hover block"
              >
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-4 h-4 mt-1 text-text-secondary shrink-0" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8.5V1.5zm-8.75 12a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" />
                  </svg>
                  <h4 className="font-semibold text-sm truncate">{repo.name}</h4>
                </div>
                <p className="text-text-secondary text-xs mb-3 line-clamp-2">
                  {repo.description || "No description"}
                </p>
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-xs text-text-secondary">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: languageColors[repo.language] || "#6e7681" }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 text-xs text-text-secondary">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Recent Activity */}
        {events.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-8">Recent Activity</h3>
            <div className="max-w-2xl mx-auto space-y-3">
              {events.map((event, index) => (
                <div
                  key={`${event.type}-${event.created_at}-${index}`}
                  className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg px-4 py-3 text-sm"
                >
                  <span className="text-accent text-xs font-medium whitespace-nowrap">
                    {formatEventType(event.type)}
                  </span>
                  <span className="text-text-secondary truncate">{event.repo.name}</span>
                  <span className="text-text-secondary/50 text-xs ml-auto whitespace-nowrap">
                    {new Date(event.created_at).toLocaleDateString("ja-JP")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://github.com/kako351"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View GitHub Profile
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
