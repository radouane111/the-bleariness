export default function PullQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <blockquote className="my-10 py-8 px-8 md:px-12 border-l-4 border-gold bg-cream">
      <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <footer className="mt-4 text-muted text-sm font-sans uppercase tracking-wider">
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}
