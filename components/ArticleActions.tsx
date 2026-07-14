"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  articleSlug: string;
  articleTitle: string;
}

export default function ArticleActions({ articleSlug, articleTitle }: Props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState<"like" | "dislike" | null>(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(`votes-${articleSlug}`);
    if (stored) {
      const d = JSON.parse(stored);
      setLikes(d.likes);
      setDislikes(d.dislikes);
      setUserVote(d.userVote);
    } else {
      const initL = Math.floor(Math.random() * 80) + 20;
      const initD = Math.floor(Math.random() * 15) + 2;
      setLikes(initL);
      setDislikes(initD);
      localStorage.setItem(`votes-${articleSlug}`, JSON.stringify({ likes: initL, dislikes: initD, userVote: null }));
    }
  }, [articleSlug]);

  const save = (l: number, d: number, v: "like" | "dislike" | null) => {
    localStorage.setItem(`votes-${articleSlug}`, JSON.stringify({ likes: l, dislikes: d, userVote: v }));
  };

  const handleLike = () => {
    let l = likes, d = dislikes, v: "like" | "dislike" | null;
    if (userVote === "like") { l -= 1; v = null; }
    else { l += 1; if (userVote === "dislike") d -= 1; v = "like"; }
    setLikes(l); setDislikes(d); setUserVote(v); save(l, d, v);
  };

  const handleDislike = () => {
    let l = likes, d = dislikes, v: "like" | "dislike" | null;
    if (userVote === "dislike") { d -= 1; v = null; }
    else { d += 1; if (userVote === "like") l -= 1; v = "dislike"; }
    setLikes(l); setDislikes(d); setUserVote(v); save(l, d, v);
  };

  const getUrl = () => typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({ title: articleTitle, url: getUrl() });
    }
  };

  /* Close share dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const totalVotes = likes + dislikes;
  const likePercent = totalVotes > 0 ? Math.round((likes / totalVotes) * 100) : 50;

  const shareLinks = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(articleTitle + " " + getUrl())}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      ),
      color: "hover:text-green-600",
    },
    {
      label: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(getUrl())}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      ),
      color: "hover:text-charcoal",
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      ),
      color: "hover:text-blue-700",
    },
    {
      label: "E-Mail",
      href: `mailto:?subject=${encodeURIComponent(articleTitle)}&body=${encodeURIComponent(getUrl())}`,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
      ),
      color: "hover:text-gold",
    },
  ];

  return (
    <div className="my-10 pt-8 border-t border-border">

      {/* ── LIKE / DISLIKE ── */}
      <div className="mb-6">
        <p className="text-xs font-sans uppercase tracking-widest text-muted mb-4">
          War dieser Artikel hilfreich?
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          {/* Like */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-5 py-2.5 border text-sm font-sans transition-all ${
              userVote === "like"
                ? "bg-accent border-accent text-white"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            <svg className="w-4 h-4" fill={userVote === "like" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.25M6.633 10.5H5.25a1.125 1.125 0 00-1.125 1.125v6.75C4.125 19.496 4.629 20 5.25 20h1.383c.621 0 1.125-.504 1.125-1.125V11.625c0-.621-.504-1.125-1.125-1.125z" />
            </svg>
            <span>{likes.toLocaleString()}</span>
          </button>

          {/* Dislike */}
          <button
            onClick={handleDislike}
            className={`flex items-center gap-2 px-5 py-2.5 border text-sm font-sans transition-all ${
              userVote === "dislike"
                ? "bg-charcoal border-charcoal text-white"
                : "border-border text-muted hover:border-charcoal hover:text-charcoal"
            }`}
          >
            <svg className="w-4 h-4" fill={userVote === "dislike" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.367 13.5c-.806 0-1.533.446-2.031 1.08a9.041 9.041 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H4.372c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 012.25 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H10.52c.483 0 .964.078 1.423.23l3.114 1.04a4.501 4.501 0 001.423.23h1.383c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125H17.367z" />
            </svg>
            <span>{dislikes.toLocaleString()}</span>
          </button>

          {/* Rating bar */}
          {totalVotes > 0 && (
            <div className="flex-1 min-w-[120px] max-w-xs">
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${likePercent}%` }}
                />
              </div>
              <p className="text-xs text-subtle font-sans mt-1">{likePercent}% positiv</p>
            </div>
          )}
        </div>
      </div>

      {/* ── SHARE ── */}
      <div className="flex items-center gap-4 flex-wrap">
        <p className="text-xs font-sans uppercase tracking-widest text-muted">
          Artikel teilen:
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {shareLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className={`text-muted transition-colors ${s.color}`}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copy link */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 text-xs font-sans border px-3 py-1.5 transition-all ${
            copied ? "border-green-500 text-green-600" : "border-border text-muted hover:border-charcoal hover:text-charcoal"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Link kopiert!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              Link kopieren
            </>
          )}
        </button>

        {/* Native share (mobile) */}
        {typeof navigator !== "undefined" && "share" in navigator && (
          <button
            onClick={handleNativeShare}
            className="flex items-center gap-1.5 text-xs font-sans border border-border text-muted px-3 py-1.5 hover:border-accent hover:text-accent transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            Teilen
          </button>
        )}
      </div>

    </div>
  );
}
