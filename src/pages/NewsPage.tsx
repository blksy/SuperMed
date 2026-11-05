import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  AlertCircle,
  Info,
  ChevronDown,
} from "lucide-react";

import { announcements } from "../data/announcements";

const PREVIEW_LENGTH = 150;

function getPreview(message: string): string {
  const normalized = message.replace(/\s+/g, " ").trim();

  if (normalized.length <= PREVIEW_LENGTH) {
    return normalized;
  }

  const truncated = normalized.slice(0, PREVIEW_LENGTH);
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : PREVIEW_LENGTH)}…`;
}

function NewsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sortedAnnouncements = [...announcements]
    .filter((item) => item.isActive)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

  const toggleAnnouncement = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section className="min-h-[70vh] bg-[#F5FAFC] py-14 sm:py-20">
      <div className="mx-auto max-w-300 px-5 sm:px-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          <ArrowLeft size={17} />
          Strona główna
        </Link>

        <div className="mb-12 max-w-180">
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent uppercase">
            SuperMED
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Aktualności i komunikaty
          </h1>

          <p className="mt-5 text-base leading-8 text-text-muted">
            Najnowsze informacje dotyczące pracy poradni, harmonogramów lekarzy
            oraz ważne ogłoszenia dla pacjentów.
          </p>
        </div>

        <div className="space-y-5">
          {sortedAnnouncements.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-text-muted">
              Obecnie nie ma opublikowanych aktualności.
            </div>
          ) : (
            sortedAnnouncements.map((item) => {
              const isUrgent = item.type === "urgent";
              const isExpanded = expandedId === item.id;
              const normalizedMessage = item.message
                .replace(/\s+/g, " ")
                .trim();

              const canExpand = normalizedMessage.length > PREVIEW_LENGTH;

              return (
                <article
                  key={item.id}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                    isExpanded
                      ? "border-accent/40 shadow-md"
                      : "border-slate-200 hover:border-accent/30"
                  }`}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
                          isUrgent
                            ? "bg-red-50 text-red-600"
                            : "bg-[#E1F3F3] text-accent"
                        }`}
                      >
                        {isUrgent ? (
                          <AlertCircle size={22} />
                        ) : (
                          <Info size={22} />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-2 text-xs text-text-muted">
                            <CalendarDays size={14} />
                            {new Intl.DateTimeFormat("pl-PL", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(item.publishedAt))}
                          </span>

                          {isUrgent && (
                            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                              Ważny komunikat
                            </span>
                          )}
                        </div>

                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          {item.title}
                        </h2>

                        <p
                          id={`announcement-${item.id}`}
                          className="mt-4 whitespace-pre-line text-sm leading-7 text-text-muted sm:text-base"
                        >
                          {canExpand && !isExpanded
                            ? getPreview(item.message)
                            : item.message}
                        </p>

                        {canExpand && (
                          <button
                            type="button"
                            onClick={() => toggleAnnouncement(item.id)}
                            aria-expanded={isExpanded}
                            aria-controls={`announcement-${item.id}`}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
                          >
                            {isExpanded ? "Zwiń wiadomość" : "Czytaj więcej"}

                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsPage;
