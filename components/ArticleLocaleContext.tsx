"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LocaleSlugMap = Record<string, string>;

const ArticleLocaleContext = createContext<{
  slugMap: LocaleSlugMap | null;
  setSlugMap: (map: LocaleSlugMap | null) => void;
}>({ slugMap: null, setSlugMap: () => {} });

export function ArticleLocaleProvider({ children }: { children: ReactNode }) {
  const [slugMap, setSlugMap] = useState<LocaleSlugMap | null>(null);
  return (
    <ArticleLocaleContext.Provider value={{ slugMap, setSlugMap }}>
      {children}
    </ArticleLocaleContext.Provider>
  );
}

export function useArticleLocale() {
  return useContext(ArticleLocaleContext);
}
