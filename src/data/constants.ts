import { Calendar, Home, MessageCircle, Users, Image, Settings } from "lucide-react";
import type { MenuItem, Story, Suggestion, Recommendation } from '@/types';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: "News Feed",
    icon: Home,
    path: "/posts"
  },
  {
    title: "Messages",
    icon: MessageCircle,
    badge: "6",
    path: "/messages"
  },
  {
    title: "Forums",
    icon: Calendar,
    path: "#"
  },
  {
    title: "Friends",
    icon: Users,
    badge: "3",
    path: "#"
  },
  {
    title: "Media",
    icon: Image,
    path: "#"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "#"
  }
];

export const STORIES: Story[] = [
  {
    name: "Anatoly Pr...",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Lolita Earns",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b820?w=80&h=80&fit=crop&crop=face"
  }
];

export const SUGGESTIONS: Suggestion[] = [
  {
    name: "Nick Shelburne",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  },
  {
    name: "Brittni Lando",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
  },
  {
    name: "Ivan Shevchenko",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    name: "Music",
    color: "bg-gradient-primary",
    icon: "🎵"
  },
  {
    name: "UI/UX",
    color: "bg-secondary",
    icon: "✏️"
  },
  {
    name: "Cooking",
    color: "bg-accent",
    icon: "🍳"
  },
  {
    name: "Hiking",
    color: "bg-primary",
    icon: "⛰️"
  }
];

export const PROFILE_DATA = {
  name: "Bogdan Nikitin",
  username: "nikitinteam",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
};