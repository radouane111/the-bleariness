"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { supabase } from "@/lib/supabase";

interface Props {
  articleSlug: string;
}

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

function getVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem("visitor_id");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("visitor_id", id);
  }
  return id;
}

export default function ArticleInteractions({ articleSlug }: Props) {
  const t = useTranslations();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState<"like" | "dislike" | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    const visitorId = getVisitorId();

    async function load() {
      const { data: votes } = await supabase!
        .from("votes")
        .select("vote")
        .eq("article_slug", articleSlug);

      if (votes) {
        setLikes(votes.filter((v) => v.vote === "like").length);
        setDislikes(votes.filter((v) => v.vote === "dislike").length);
      }

      const { data: myVote } = await supabase!
        .from("votes")
        .select("vote")
        .eq("article_slug", articleSlug)
        .eq("visitor_id", visitorId)
        .single();

      if (myVote) setUserVote(myVote.vote as "like" | "dislike");

      const { data: cmts } = await supabase!
        .from("comments")
        .select("*")
        .eq("article_slug", articleSlug)
        .order("created_at", { ascending: false });

      if (cmts) setComments(cmts);
    }

    load();
  }, [articleSlug]);

  const handleVote = async (vote: "like" | "dislike") => {
    if (!supabase) return;
    const visitorId = getVisitorId();

    if (userVote === vote) {
      await supabase
        .from("votes")
        .delete()
        .eq("article_slug", articleSlug)
        .eq("visitor_id", visitorId);
      setUserVote(null);
      vote === "like" ? setLikes((l) => l - 1) : setDislikes((d) => d - 1);
    } else {
      await supabase.from("votes").upsert({
        article_slug: articleSlug,
        visitor_id: visitorId,
        vote,
      }, { onConflict: "article_slug,visitor_id" });

      if (userVote === "like") setLikes((l) => l - 1);
      if (userVote === "dislike") setDislikes((d) => d - 1);
      vote === "like" ? setLikes((l) => l + 1) : setDislikes((d) => d + 1);
      setUserVote(vote);
    }
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase || !name.trim() || !text.trim()) return;
    setSubmitting(true);

    const { data } = await supabase
      .from("comments")
      .insert({ article_slug: articleSlug, author_name: name.trim(), content: text.trim() })
      .select()
      .single();

    if (data) {
      setComments((prev) => [data, ...prev]);
      setName("");
      setText("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
    setSubmitting(false);
  };

  const total = likes + dislikes;
  const likePercent = total > 0 ? Math.round((likes / total) * 100) : 0;

  return (
    <div className="mt-12 border-t border-border pt-10 space-y-12">

      {/* ── VOTES ── */}
      <div>
        <p className="text-xs font-sans uppercase tracking-widest text-muted mb-4">
          {t("article.helpful")}
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() => handleVote("like")}
            className={`flex items-center gap-2 px-5 py-2.5 border text-sm font-sans transition-all ${
              userVote === "like"
                ? "bg-gold border-gold text-white"
                : "border-border text-muted hover:border-gold hover:text-gold"
            }`}
          >
            <svg className="w-4 h-4" fill={userVote === "like" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.25M6.633 10.5H5.25a1.125 1.125 0 00-1.125 1.125v6.75C4.125 19.496 4.629 20 5.25 20h1.383c.621 0 1.125-.504 1.125-1.125V11.625c0-.621-.504-1.125-1.125-1.125z" />
            </svg>
            <span>{likes}</span>
          </button>

          <button
            onClick={() => handleVote("dislike")}
            className={`flex items-center gap-2 px-5 py-2.5 border text-sm font-sans transition-all ${
              userVote === "dislike"
                ? "bg-charcoal border-charcoal text-white"
                : "border-border text-muted hover:border-charcoal hover:text-charcoal"
            }`}
          >
            <svg className="w-4 h-4" fill={userVote === "dislike" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.367 13.5c-.806 0-1.533.446-2.031 1.08a9.041 9.041 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H4.372c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 012.25 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H10.52c.483 0 .964.078 1.423.23l3.114 1.04a4.501 4.501 0 001.423.23h1.383c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125H17.367z" />
            </svg>
            <span>{dislikes}</span>
          </button>

          {total > 0 && (
            <div className="flex-1 min-w-[120px] max-w-xs">
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-gold transition-all duration-500" style={{ width: `${likePercent}%` }} />
              </div>
              <p className="text-xs text-muted font-sans mt-1">{likePercent}% {t("article.positive")}</p>
            </div>
          )}
        </div>
      </div>

      {/* ── KOMMENTARE ── */}
      <div>
        <h3 className="font-serif text-xl font-bold text-charcoal mb-6">
          {t("article.comments")} {comments.length > 0 && <span className="text-muted font-sans text-sm font-normal">({comments.length})</span>}
        </h3>

        {/* Formular */}
        <form onSubmit={handleComment} className="mb-8 space-y-3">
          <input
            type="text"
            placeholder={t("article.commentName")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-border px-4 py-3 text-sm font-sans text-charcoal placeholder-muted focus:outline-none focus:border-charcoal transition-colors"
          />
          <textarea
            placeholder={t("article.commentText")}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            rows={4}
            className="w-full border border-border px-4 py-3 text-sm font-sans text-charcoal placeholder-muted focus:outline-none focus:border-charcoal transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2.5 bg-charcoal text-white text-xs font-sans uppercase tracking-widest hover:bg-gold transition-colors disabled:opacity-50"
          >
            {submitting ? "..." : t("article.commentSubmit")}
          </button>
          {submitted && <p className="text-gold text-sm font-sans">{t("article.commentSuccess")}</p>}
        </form>

        {/* Kommentarliste */}
        {comments.length === 0 ? (
          <p className="text-muted text-sm font-sans">{t("article.noComments")}</p>
        ) : (
          <div className="space-y-6">
            {comments.map((c) => (
              <div key={c.id} className="border-l-2 border-gold pl-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-serif font-bold text-charcoal text-sm">{c.author_name}</span>
                  <span className="text-muted text-xs font-sans">
                    {new Date(c.created_at).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                </div>
                <p className="text-charcoal text-sm font-sans leading-relaxed">{c.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
