import { useEffect, useState } from "react";
import { AlertCircle, ArrowRight, Info, X } from "lucide-react";
import { Link } from "react-router-dom";

import { announcements } from "../../data/announcements";
import type { Announcement } from "../../types/announcement";

type AnnouncementsProps = {
  items?: Announcement[];
};

function Announcements({ items = announcements }: AnnouncementsProps) {
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setNow(Date.now());
    };

    const timeoutId = window.setTimeout(updateTime, 0);
    const intervalId = window.setInterval(updateTime, 60_000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  const visibleAnnouncements = items
    .filter((announcement) => {
      if (!announcement.isActive) return false;
      if (dismissedIds.includes(announcement.id)) return false;
      if (now === null) return false;

      const publishedAt = Date.parse(announcement.publishedAt);

      if (!Number.isFinite(publishedAt) || publishedAt > now) {
        return false;
      }

      if (announcement.expiresAt) {
        const expiresAt = Date.parse(announcement.expiresAt);

        if (!Number.isFinite(expiresAt) || expiresAt <= now) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === "urgent" ? -1 : 1;
      }

      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    });

  const displayedAnnouncements = visibleAnnouncements.slice(0, 3);

  const dismissAnnouncement = (id: string) => {
    setDismissedIds((current) =>
      current.includes(id) ? current : [...current, id],
    );
  };

  if (displayedAnnouncements.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Aktualne komunikaty poradni"
      className="bg-white py-6 sm:py-8"
    >
      <div className="mx-auto max-w-360 space-y-3 px-5 sm:px-8 lg:px-10">
        {displayedAnnouncements.map((announcement, index) => {
          const isUrgent = announcement.type === "urgent";

          return (
            <article
              key={announcement.id}
              className={`relative h-36 overflow-hidden rounded-xl border px-4 py-4 sm:h-34 sm:px-6 sm:py-5 ${
                index > 0 ? "hidden sm:block" : ""
              } ${
                isUrgent
                  ? "border-red-200 bg-red-50"
                  : "border-sky-200 bg-sky-50"
              }`}
            >
              <div className="flex h-full items-start gap-3 sm:gap-4">
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-lg sm:size-10 ${
                    isUrgent
                      ? "bg-red-100 text-red-700"
                      : "bg-sky-100 text-sky-700"
                  }`}
                >
                  {isUrgent ? <AlertCircle size={20} /> : <Info size={20} />}
                </div>

                <div className="flex h-full min-w-0 flex-1 flex-col pr-6">
                  <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                    <h2
                      className={`line-clamp-1 text-sm font-bold sm:text-base ${
                        isUrgent ? "text-red-900" : "text-primary"
                      }`}
                    >
                      {announcement.title}
                    </h2>

                    {isUrgent && (
                      <span className="shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-700 uppercase">
                        Ważne
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-1 line-clamp-2 text-xs leading-5 sm:line-clamp-1 sm:text-sm sm:leading-6 ${
                      isUrgent ? "text-red-800" : "text-text-muted"
                    }`}
                  >
                    {announcement.message}
                  </p>

                  <Link
                    to="/aktualnosci"
                    className={`mt-auto inline-flex self-start items-center gap-2 pt-2 text-xs font-semibold transition-colors sm:text-sm ${
                      isUrgent
                        ? "text-red-700 hover:text-red-900"
                        : "text-accent hover:text-primary"
                    }`}
                  >
                    Zobacz aktualności
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={() => dismissAnnouncement(announcement.id)}
                  aria-label={`Zamknij komunikat: ${announcement.title}`}
                  className={`absolute top-3 right-3 flex size-8 items-center justify-center rounded-lg transition-colors sm:top-4 sm:right-4 ${
                    isUrgent
                      ? "text-red-600 hover:bg-red-100"
                      : "text-sky-700 hover:bg-sky-100"
                  }`}
                >
                  <X size={18} />
                </button>
              </div>
            </article>
          );
        })}

        <div className="flex justify-center pt-2 sm:hidden">
          <Link
            to="/aktualnosci"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
          >
            Zobacz wszystkie aktualności
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Announcements;
