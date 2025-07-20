// Centralized type definitions
export interface Post {
  id: string;
  businessName: string;
  businessAvatar: string;
  content: string;
  media: MediaItem[];
  likes: number;
  comments: number;
  timeAgo: string;
  height: number;
}

export interface MediaItem {
  url: string;
  type: 'image' | 'video';
}

export interface User {
  name: string;
  image: string;
}

export interface Story extends User {}

export interface Suggestion extends User {}

export interface Recommendation {
  name: string;
  color: string;
  icon: string;
}

export interface MenuItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  badge?: string;
}