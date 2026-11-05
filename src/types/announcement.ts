export type AnnouncementType = "urgent" | "info";

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: AnnouncementType;
  publishedAt: string;
  expiresAt?: string;
  isActive: boolean;
}
