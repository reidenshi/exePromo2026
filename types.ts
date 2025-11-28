export interface PromoTask {
  id: string;
  title: string;
  description: string;
  points: number;
  icon: 'instagram' | 'tiktok' | 'invite' | 'quiz' | 'review' | 'default';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface CalendarDay {
  day: number;
  isLocked: boolean;
  content?: {
    title: string;
    description: string;
    type: 'bonus' | 'challenge' | 'merch';
    promoCode?: string;
  };
}

export interface UserStats {
  id: number;
  name: string;
  handle: string;
  points: number;
  rank: number;
  avatarColor: string;
}

export interface TimelineEvent {
  period: string;
  title: string;
  description: string;
  isActive: boolean;
}