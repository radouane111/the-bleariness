"use client";

import { useEffect } from "react";
import { useArticleLocale } from "./ArticleLocaleContext";

export default function ArticleTranslationSetter({
  translations,
}: {
  translations: Record<string, string> | undefined;
}) {
  const { setSlugMap } = useArticleLocale();

  useEffect(() => {
    setSlugMap(translations ?? null);
    return () => setSlugMap(null);
  }, [translations, setSlugMap]);

  return null;
}
